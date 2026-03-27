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
  return <section id="about" aria-labelledby="about-heading" className="py-32 px-6 lg:px-12 bg-white">
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
          <h2 id="about-heading" className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900">Senior UX Leader | Accessibility · AI UX · Enterprise B2B</p>
              
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>I've been doing this for over 25 years and I still genuinely love it. That's not something a lot of people in this industry can say, but UX has never felt like a job to me. It's how I think.</p>
              <p>My background is in enterprise B2B software — the kind where the stakes are real and the complexity is deep. I've designed for aerospace engineers building rockets on a shop floor, sales teams navigating massive datasets, real estate brokers managing high-volume leads. The through line in all of it is the same: take something overwhelming and make it feel effortless for the person actually using it.</p>
              <p>Accessibility has been part of how I design since the beginning of my career, long before most people were paying attention to it. At Dun & Bradstreet I built the company-wide accessibility working group from scratch, established WCAG standards across products, led VPATs for our top-tier offerings, and cut accessibility issues by 40%. I don't treat it as a compliance checkbox. I treat it as the baseline for good design.</p>
              <p>I'm a builder by nature. I've built design teams, built accessibility programs, built the kind of cross-functional relationships that actually get things shipped. People tend to come to me when something is complicated and nobody is quite sure how to move forward. I like that.</p>
              <p>Currently open to UX Lead, Manager, Director, or Senior Product Designer roles at enterprise B2B companies where design is taken seriously. Remote or hybrid, based in Austin, TX.</p>
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