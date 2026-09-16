import React from 'react';

interface CoffeeCupProps {
  className?: string;
}

export const CoffeeCup: React.FC<CoffeeCupProps> = ({ className = 'w-12 h-12' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="steamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#D97706" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F6F3EE" stopOpacity="0" />
          </linearGradient>
          <style>{`
            @keyframes steamRise {
              0% { transform: translateY(0) scaleX(1); opacity: 0.2; }
              50% { transform: translateY(-15px) scaleX(1.15); opacity: 0.7; }
              100% { transform: translateY(-32px) scaleX(0.85); opacity: 0; }
            }
            .steam-1 { animation: steamRise 3.4s ease-in-out infinite; }
            .steam-2 { animation: steamRise 3.9s ease-in-out infinite 0.9s; }
            .steam-3 { animation: steamRise 3.2s ease-in-out infinite 1.7s; }
          `}</style>
        </defs>

        <path d="M28 48 C28 66 38 72 50 72 C62 72 72 66 72 48 Z" fill="#2C1D16" stroke="#4A3428" strokeWidth="2" />
        <ellipse cx="50" cy="48" rx="22" ry="5" fill="#3D291F" stroke="#4A3428" strokeWidth="1.5" />
        <ellipse cx="50" cy="48" rx="19" ry="3.5" fill="#D97706" />
        <ellipse cx="48" cy="48" rx="14" ry="2" fill="#E6953B" opacity="0.6" />
        <path d="M71 52 C79 52 82 62 70 65" fill="none" stroke="#2C1D16" strokeWidth="3.5" strokeLinecap="round" />
        <ellipse cx="50" cy="74" rx="30" ry="4" fill="#E5DFD5" stroke="#D1C7BA" strokeWidth="1.5" />

        <path className="steam-1" d="M42 42 Q39 30 45 20 Q48 12 43 4" fill="none" stroke="url(#steamGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <path className="steam-2" d="M50 40 Q54 28 48 18 Q45 10 52 2" fill="none" stroke="url(#steamGrad)" strokeWidth="3" strokeLinecap="round" />
        <path className="steam-3" d="M58 42 Q63 32 57 22 Q53 14 59 6" fill="none" stroke="url(#steamGrad)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
};
