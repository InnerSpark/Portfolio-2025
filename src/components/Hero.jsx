
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
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: 'easeOut' }} 
            className="flex-[1.2] text-center md:text-left order-1 w-full"
          >
            <motion.h2 
              className="text-base md:text-lg font-medium text-neutral-500 mb-4 tracking-widest uppercase" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              UX Designer
            </motion.h2>

            <motion.h1 
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
              Specializing in UX Design, Accessibility, and Information Architecture for engaging and inclusive digital experiences.
            </motion.p>

            <motion.button 
              onClick={scrollToAbout} 
              className="inline-flex items-center gap-3 text-neutral-900 hover:text-neutral-600 transition-colors group font-semibold" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.4 }} 
              whileHover={{ y: 2 }}
            >
              <span className="text-sm md:text-base uppercase tracking-wider">Explore Work</span>
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
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
                  src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/8b18a6f1ec4c7fd9eb678d978d0ed061.png" 
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
