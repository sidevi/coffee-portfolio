'use server';

import nodemailer from 'nodemailer';

export interface ContactFormState {
  success: boolean;
  message: string;
}

export async function sendContactMessage(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, message: 'All fields are required.' };
  }

  // -------------------------------------------------------------
  // 1. Dispatch Email Notification (Nodemailer)
  // -------------------------------------------------------------
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;

  if (!smtpUser || !smtpPass || !recipientEmail) {
    console.error('Nodemailer Error: Missing SMTP environment variables.');
    return { success: false, message: 'Server configuration error (Email).' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // SSL
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `[Portfolio] Coffee Chat Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1A1412;">
          <h2>New Coffee Chat Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 12px; border-left: 4px solid #8C4A27;">
            ${message.replace(/\n/g, '<br/>')}
          </blockquote>
        </div>
      `,
    });
  } catch (emailError: any) {
    console.error('=== NODEMAILER SEND ERROR ===');
    console.error(emailError?.message || emailError);
    return { success: false, message: 'Failed to send email. Check SMTP credentials.' };
  }

  // -------------------------------------------------------------
  // 2. Dispatch WhatsApp Notification (Twilio)
  // -------------------------------------------------------------
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromWhatsApp = process.env.TWILIO_WHATSAPP_NUMBER;
  const toWhatsApp = process.env.MY_WHATSAPP_NUMBER;
  const contentSid = process.env.TWILIO_CONTENT_SID;

  if (accountSid && authToken && fromWhatsApp && toWhatsApp && contentSid) {
    try {
      const basicAuth = Buffer.from(`${accountSid}:${authToken}`).toString('base64');
      const body = new URLSearchParams({
        From: fromWhatsApp,
        To: toWhatsApp,
        ContentSid: contentSid,
        ContentVariables: JSON.stringify({ '1': name, '2': email, '3': message }),
      });

      const response = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        {
          method: 'POST',
          headers: {
            Authorization: `Basic ${basicAuth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: body.toString(),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('=== TWILIO API ERROR ===', errorData);
      }
    } catch (twilioError: any) {
      console.error('=== TWILIO FETCH ERROR ===', twilioError?.message || twilioError);
    }
  } else {
    console.warn('Twilio WhatsApp skipped: Missing required environment variables.');
  }

  return { success: true, message: "Message sent! I'll get back to you soon." };
}