import React from 'react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-serif font-bold text-[#1A1412] mb-6">Professional Experience</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-[#8C4A27] pl-4">
              <h3 className="font-bold text-[#1A1412]">Frontend Engineer</h3>
              <a 
                href="https://www.info.japahub.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#8C4A27] hover:underline block"
              >
                JapaHub
              </a>
              <p className="text-sm text-[#3D291F] mt-2">
                Building accessible, high-performance web interfaces and modern user experiences.
              </p>
            </div>

            <div className="border-l-2 border-[#8C4A27] pl-4">
              <h3 className="font-bold text-[#1A1412]">Software Engineer</h3>
              <p className="text-xs text-[#8C4A27]">2024 - Present</p>
              <p className="text-sm text-[#3D291F] mt-2">Developing production backends in NestJS and scalable React architectures.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-bold text-[#1A1412] mb-6">Education & Studies</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-[#8C4A27] pl-4">
              <h3 className="font-bold text-[#1A1412]">HND in Mechatronics Engineering</h3>
              <p className="text-xs text-[#8C4A27]">Yaba College of Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
