import React from 'react';

const PROJECTS = [
  {
    title: 'Tech4Africa Platform',
    category: 'Web Application',
    description: 'Community platform built for Tech4Africa to empower tech talents across the continent.',
    liveUrl: 'https://tech4africa-git-main-okpanachipromise124gmailcoms-projects.vercel.app/',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'AI Powered Financial App',
    category: 'Mobile & Web',
    description: 'Full-stack financial tracking suite with receipt processing and budget analytics.',
    stack: ['React Native', 'NestJS', 'PostgreSQL', 'Tailwind']
  },
  {
    title: 'Expedition Travel Platform',
    category: 'Full Stack',
    description: 'Travel itinerary manager featuring offline routing sync and Google Maps integration.',
    stack: ['Flutter', 'NestJS', 'Redis', 'Docker']
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-widest text-[#8C4A27] font-bold">
          Selected Works
        </span>
        <h2 className="text-3xl font-serif font-bold text-[#1A1412] mt-1">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.title} className="p-8 bg-white rounded-2xl border border-[#E8E2D8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold text-[#8C4A27] uppercase">{project.category}</span>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#8C4A27] hover:underline"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
              <h3 className="text-2xl font-bold text-[#1A1412] mt-2 mb-3">{project.title}</h3>
              <p className="text-[#3D291F] text-sm mb-6">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="text-xs bg-[#F6F3EE] text-[#3D291F] px-3 py-1 rounded-full border border-[#E8E2D8]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
