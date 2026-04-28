
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section aria-labelledby="hero-heading" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: 'easeOut' }} 
            className="flex-[1.2] text-center md:text-left order-1 w-full"
          >
            <motion.p
              className="text-base md:text-lg font-medium text-neutral-500 mb-4 tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              SENIOR UX LEADER
            </motion.p>

            <motion.h1
              id="hero-heading"
              className="text-[clamp(2rem,6vw,4.5rem)] font-extrabold tracking-tight text-neutral-900 mb-6 leading-[1.1] whitespace-nowrap" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm Mike Binder.
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              25 years designing enterprise B2B software where complexity is the norm. Accessibility, AI UX, and information architecture that actually moves the needle.
            </motion.p>

            <motion.button
              type="button"
              onClick={scrollToAbout}
              aria-label="Explore my work — scroll to case studies"
              className="inline-flex items-center gap-3 text-neutral-900 hover:text-neutral-600 transition-colors group font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: 2 }}
            >
              <span className="text-sm md:text-base uppercase tracking-wider">Explore Work</span>
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform group-hover:text-white" aria-hidden="true" />
              </div>
            </motion.button>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} 
            className="flex-1 flex justify-center md:justify-end order-2 w-full"
          >
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl flex justify-center md:justify-end">
              <div className="w-full">
                <img 
                  src="/img/hero-profile.jpg" 
                  alt="Mike Binder - Professional Headshot" 
                  className="w-full h-auto object-contain select-none pointer-events-none" 
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
