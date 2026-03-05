import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import RealogyCaseStudy from '@/components/RealogyCaseStudy';
import IBASEtCaseStudy from '@/components/iBASEtCaseStudy';
import IBASEtMESCaseStudy from '@/components/IBASEtMESCaseStudy';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    if (projectId === 'db-hoovers') {
      navigate('/db-hoovers-case-study');
      return;
    }

    if (projectId === 'realogy' || projectId === 'ibaset' || projectId === 'ibaset-mes') {
      setSelectedProject(projectId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      toast({
        title: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀',
      });
    }
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const projects = [
    {
      id: 'db-hoovers',
      title: 'D&B Hoovers Redesign',
      category: 'UX/UI Design • AI Integration',
      description: 'Envisioning an AI-Driven, Accessible Future for Business Intelligence. Redesigning the search experience to improve time-to-insight by up to 65%.',
      tags: ['AI Search', 'Accessibility', 'Figma', 'Enterprise SaaS'],
      image: '/img/dnb_hero_home.png',
    },
    {
      id: 'realogy',
      title: 'Realogy Leads Engine Redesign',
      category: 'UX/UI Design • Enterprise SaaS',
      description: 'Complete redesign of a lead management platform serving 50K+ daily leads for real estate brokers across major brands. Reduced task completion time by 40% and increased user satisfaction by 45%.',
      tags: ['Enterprise UX', 'Information Architecture', 'Mobile Design', 'Usability Testing'],
      image: '/img/realogy_hero_home.png',
    },
    {
      id: 'ibaset-mes',
      title: "Revamping iBASEt's MES System",
      category: 'UX/UI Design • Enterprise Software',
      description: "Transforming a '90s-era Windows client into a streamlined, user-centric web platform for aerospace and defense manufacturing.",
      tags: ['UX Design', 'Enterprise Software', 'Usability', 'Axure RP'],
      image: '/img/ibaset_hero_home.png',
    },
    {
      id: 'ibaset',
      title: 'iBASEt Unit Info App: Mobile Workflow for Shop Floor Technicians',
      category: 'UX/UI Design • Mobile App',
      description: 'Mobile solution for shop floor technicians in aerospace/defense manufacturing, enabling barcode scanning and on-the-spot part actions.',
      tags: ['UX Design', 'Mobile', 'Enterprise Software', 'Manufacturing'],
      image: '/img/ibaset_unit_info_hero_home.png'
    }
  ];

  if (selectedProject === 'realogy') {
    return <RealogyCaseStudy onBack={handleBackToProjects} />;
  }
  
  if (selectedProject === 'ibaset') {
    return <IBASEtCaseStudy onBack={handleBackToProjects} />;
  }

  if (selectedProject === 'ibaset-mes') {
    return <IBASEtMESCaseStudy onBack={handleBackToProjects} />;
  }

  return (
    <section id="projects" className="py-32 px-6 lg:px-12 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-2">
                Featured Work
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Case Studies
              </h3>
            </div>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="w-full text-left group block focus:outline-none"
                aria-label={`View full case study for ${project.title}`}
              >
                <div className="bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:border-neutral-300 group-focus-visible:ring-4 group-focus-visible:ring-neutral-200 group-focus-visible:outline-none relative">
                  {project.id === 'db-hoovers' && (
                    <div className="absolute top-4 right-4 z-20 bg-neutral-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                      Protected
                    </div>
                  )}
                  <div className="grid lg:grid-cols-5 h-full">
                    
                    {/* Image Section */}
                    <div className="lg:col-span-2 h-64 lg:h-auto overflow-hidden relative bg-neutral-900">
                      <div className="absolute inset-0 bg-neutral-900/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                      <img 
                        src={project.image} 
                        alt={`${project.title} preview`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col h-full bg-white">
                      <div className="flex items-start justify-between mb-6 gap-4">
                        <span className="inline-flex items-center px-3 py-1 bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider rounded-full">
                          {project.category}
                        </span>
                        <div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center border border-neutral-100 group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-colors duration-300 flex-shrink-0">
                          <ArrowUpRight 
                            size={24} 
                            className="text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" 
                          />
                        </div>
                      </div>
                      
                      <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                        {project.title}
                      </h4>
                      
                      <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                      
                      <div className="mt-auto pt-8 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-4 py-2 bg-neutral-50 border border-neutral-100 text-neutral-600 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;