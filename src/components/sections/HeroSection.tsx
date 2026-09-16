import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-xs uppercase tracking-widest text-[#8C4A27] font-bold">
          Full-Stack & Mobile Engineer
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#1A1412] mt-3 mb-6 leading-tight">
          Brewing Robust Code & Stellar Web Experiences
        </h1>
        <p className="text-[#3D291F] leading-relaxed mb-8 text-base sm:text-lg">
          Building high-performance backends with NestJS and cross-platform frontends with Next.js & React Native.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#apks"
            className="bg-[#8C4A27] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#D97706] transition"
          >
            Download Mobile APKs
          </a>
          <a
            href="#projects"
            className="border border-[#3D291F] text-[#1A1412] px-6 py-3 rounded-xl font-medium hover:bg-[#E8E2D8] transition"
          >
            View Projects
          </a>
        </div>
      </div>

      <div className="bg-[#1A1412] text-[#F6F3EE] p-6 rounded-2xl font-mono text-sm shadow-2xl border border-[#2C1D16]">
        <div className="flex items-center gap-2 mb-4 border-b border-[#2C1D16] pb-3">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs text-[#D9D0C3]/50 ml-2">developer.ts</span>
        </div>
        <pre className="overflow-x-auto text-xs sm:text-sm">
          <code>{`const developer = {
  name: 'okosun promise',
  stack: ['NestJS', 'Next.js', 'React Native'],
  status: 'Ready for New Opportunities',
  brewPreference: 'Dark Roast'
};`}</code>
        </pre>
      </div>
    </section>
  );
};
