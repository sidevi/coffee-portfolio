import type { Metadata } from 'next';
import './globals.css';

const faviconSvg = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="s" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stop-color="%23D97706" stop-opacity="0.6"/><stop offset="100%" stop-color="%23F6F3EE" stop-opacity="0"/></linearGradient><style>@keyframes r{0%{transform:translateY(0) scaleX(1);opacity:0.2}50%{transform:translateY(-15px) scaleX(1.15);opacity:0.7}100%{transform:translateY(-32px) scaleX(0.85);opacity:0}}.s1{animation:r 3.4s ease-in-out infinite}.s2{animation:r 3.9s ease-in-out infinite 0.9s}.s3{animation:r 3.2s ease-in-out infinite 1.7s}</style></defs><path d="M28 48 C28 66 38 72 50 72 C62 72 72 66 72 48 Z" fill="%232C1D16" stroke="%234A3428" stroke-width="2"/><ellipse cx="50" cy="48" rx="22" ry="5" fill="%233D291F" stroke="%234A3428" stroke-width="1.5"/><ellipse cx="50" cy="48" rx="19" ry="3.5" fill="%23D97706"/><ellipse cx="48" cy="48" rx="14" ry="2" fill="%23E6953B" opacity="0.6"/><path d="M71 52 C79 52 82 62 70 65" fill="none" stroke="%232C1D16" stroke-width="3.5" stroke-linecap="round"/><ellipse cx="50" cy="74" rx="30" ry="4" fill="%23E5DFD5" stroke="%23D1C7BA" stroke-width="1.5"/><path class="s1" d="M42 42 Q39 30 45 20 Q48 12 43 4" fill="none" stroke="url(%23s)" stroke-width="2.5" stroke-linecap="round"/><path class="s2" d="M50 40 Q54 28 48 18 Q45 10 52 2" fill="none" stroke="url(%23s)" stroke-width="3" stroke-linecap="round"/><path class="s3" d="M58 42 Q63 32 57 22 Q53 14 59 6" fill="none" stroke="url(%23s)" stroke-width="2" stroke-linecap="round"/></svg>`;

export const metadata: Metadata = {
  title: 'Okosun promise | Portfolio',
  description: 'Full-Stack & Mobile Engineer Portfolio',
  icons: {
    icon: faviconSvg,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
