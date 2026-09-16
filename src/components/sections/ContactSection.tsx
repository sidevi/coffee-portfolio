'use client';

import React, { useActionState } from 'react';
import { sendContactMessage, ContactFormState } from '@/app/actions/contact';

const initialState: ContactFormState = {
  success: false,
  message: '',
};

export const ContactSection: React.FC = () => {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E8E2D8] shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-[#1A1412]">Let's Have a Coffee Chat</h2>
        </div>

        <form action={formAction} className="max-w-2xl mx-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-xl border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C4A27] text-[#1A1412]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-xl border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C4A27] text-[#1A1412]"
            />
          </div>
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-xl border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#8C4A27] text-[#1A1412]"
          />
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 bg-[#8C4A27] hover:bg-[#D97706] text-white font-medium rounded-xl transition disabled:opacity-50"
          >
            {isPending ? 'Sending...' : 'Send Message'}
          </button>

          {state.message && (
            <p
              className={`text-center text-sm font-medium mt-2 ${
                state.success ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};