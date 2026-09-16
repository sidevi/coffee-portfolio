import React from 'react';

const SKILL_CATEGORIES = [
  {
    category: 'Core Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Responsive UI', 'Accessibility']
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Expo', 'NativeWind', 'Flutter', 'Dart']
  },
  {
    category: 'Backend & Database',
    skills: ['Node.js', 'NestJS', 'Express.js', 'MongoDB', 'PostgreSQL', 'TypeORM', 'REST APIs', 'Firebase', 'Encore.ts', 'Neo4j', 'Redis & Caching']
  },
  {
    category: 'State & UI Libraries',
    skills: ['Redux', 'Zustand', 'Jotai', 'Framer Motion', 'Chart.js', 'GraphQL']
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Vercel', 'Netlify', 'Hostinger', 'Git / GitHub', 'CI/CD Basics', 'AWS (EC2, S3, Lambda)']
  },
  {
    category: 'Languages & Core Traits',
    skills: ['Java', 'Python', 'Problem-solving', 'Collaboration', 'Adaptability', 'Critical Thinking']
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-[#8C4A27] font-bold">
          Technical Arsenal
        </span>
        <h2 className="text-3xl font-serif font-bold text-[#1A1412] mt-1">
          Brewed Skills & Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="p-6 bg-white rounded-2xl border border-[#E8E2D8] shadow-sm flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-[#1A1412] mb-4 pb-2 border-b border-[#E8E2D8]">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-[#F6F3EE] text-[#3D291F] px-3 py-1.5 rounded-lg border border-[#E8E2D8] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
