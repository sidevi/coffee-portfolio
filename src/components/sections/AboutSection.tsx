import React from 'react';
import { CoffeeCup } from '../CoffeeCup';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-[#8C4A27] font-bold">
          Get to Know Me
        </span>
        <h2 className="text-3xl font-serif font-bold text-[#1A1412] mt-1">About Okosun Promise</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center bg-[#E8E2D8] p-8 rounded-2xl border border-[#D9D0C3]">
          <CoffeeCup className="w-36 h-36" />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-serif font-bold text-[#1A1412]">
            Passionate Web & Mobile Developer
          </h3>
          <p className="text-[#3D291F] leading-relaxed">
            I craft responsive, resilient web and mobile applications. Driven by structured backend architecture in NestJS and seamless modern UIs in Next.js.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="bg-[#F6F3EE] p-4 rounded-xl border border-[#E8E2D8] text-center">
              <span className="text-2xl font-bold text-[#8C4A27]">4+</span>
              <p className="text-xs text-[#3D291F] mt-1">Years Exp.</p>
            </div>
            <div className="bg-[#F6F3EE] p-4 rounded-xl border border-[#E8E2D8] text-center">
              <span className="text-2xl font-bold text-[#8C4A27]">15+</span>
              <p className="text-xs text-[#3D291F] mt-1">Projects Built</p>
            </div>
            <div className="bg-[#F6F3EE] p-4 rounded-xl border border-[#E8E2D8] text-center">
              <span className="text-2xl font-bold text-[#8C4A27]">100%</span>
              <p className="text-xs text-[#3D291F] mt-1">Code Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
