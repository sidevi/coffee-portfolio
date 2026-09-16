import React from 'react';
import { CoffeeCup } from './CoffeeCup';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#F6F3EE]/90 backdrop-blur-md border-b border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <CoffeeCup className="w-10 h-10" />
          <span className="font-serif font-bold text-xl text-[#1A1412]">okosun promise</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3D291F]">
          <a href="#about" className="hover:text-[#8C4A27] transition">About</a>
          <a href="#skills" className="hover:text-[#8C4A27] transition">Skills</a>
          <a href="#projects" className="hover:text-[#8C4A27] transition">Projects</a>
          <a href="#experience" className="hover:text-[#8C4A27] transition">Experience</a>
        </nav>

        <a
          href="#contact"
          className="bg-[#8C4A27] hover:bg-[#D97706] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition"
        >
          Have a Coffee Chat
        </a>
      </div>
    </header>
  );
};
