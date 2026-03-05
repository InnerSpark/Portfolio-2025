import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const skills = ['User Research', 'Information Architecture', 'Accessibility Design (WCAG)', 'Usability Testing', 'Wireframing & Prototyping', 'Interaction Design', 'Content Strategy', 'Design Systems'];
  return <section id="about" className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }}>
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900">UX Designer & Strategist | Founder, Inner Spark Media</p>
              
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>I started building websites in the mid-90s with MS Paint and Notepad, freelancing for local businesses in high school and launching my own agency as a teen. After a degree in Interactive Media Design, I evolved into a full-stack hybrid before committing to UX Design in 2009.</p>
              <p>Today, I champion intuitive, inclusive experiences—obsessed with information architecture that makes complexity feel simple and web accessibility that includes everyone. At iBASEt, I built and led a small UI/UX team from zero, embedding real UX culture and transforming manufacturing workflows for faster, frictionless daily operations in aerospace & defense.</p>
              <p>I've driven similar impact at Dun & Bradstreet, Realogy, and more—speeding enterprise tasks and proving UX's ROI. Through Inner Spark Media, I consult strategically, guiding small businesses on direction, IA, accessibility, and AI integration (agent flows that go way beyond chat to automate decisions and augment work).</p>
              <p>I turn complex problems into clear, efficient solutions users love. Let's talk if you need a seasoned UX leader who delivers results.</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-6">
                Core Specializations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => <motion.div key={skill} initial={{
                opacity: 0,
                x: -20
              }} animate={isInView ? {
                opacity: 1,
                x: 0
              } : {}} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="bg-neutral-50 px-4 py-3 rounded-lg border border-neutral-200 text-sm font-medium text-neutral-700 hover:border-neutral-300 transition-colors">
                    {skill}
                  </motion.div>)}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default About;