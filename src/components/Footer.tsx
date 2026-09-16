import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E8E2D8] bg-[#F6F3EE] py-8 text-center text-xs text-[#3D291F]">
      <p>© {new Date().getFullYear()} Okosun promise. Brewed with Next.js, NestJS & Tailwind CSS.</p>
    </footer>
  );
};
