import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀',
    });
  };

  const experience = [
    {
      title: 'Sr. UX Designer',
      company: 'Dun & Bradstreet',
      location: 'Austin, Texas, United States · Remote',
      period: 'Jul 2022 - March 2026',
      description: null,
      duties: [
        'Led user research and multiple high-impact design initiatives for D&B Hoovers (B2B sales intelligence platform), driving enhanced user experience, streamlined workflows, and improved prospecting capabilities for sales teams.',
        'Established organization-wide accessibility guidelines and chaired a dedicated accessibility working group, promoting inclusive design practices and ensuring compliance across digital products.',
        'Served as a key member of the Design System Governance Board; maintained and evolved the enterprise design system to remain current, scalability, effective, and inherently accessible/inclusive.',
        'Mentored designers and cross-functional teams on WCAG accessibility standards and inclusive UX principles, cultivating a company-wide culture of accessibility and empathy-driven design.',
        'Co-led enterprise-wide AI initiatives; contributed to the integration and development of AI-powered features in D&B Hoovers, including AI-driven prospect scoring, smart search, intent data enhancements, and generative AI tools to accelerate sales prospecting and revenue growth.'
      ],
      employmentType: 'Full-time'
    },
    {
      title: 'Lead Product Designer',
      company: 'Ozmo',
      location: 'Austin, TX',
      period: 'Oct 2021 - Jun 2022 · 9 mos',
      description: null,
      duties: [
        'Led and mentored a team of designers across multiple products, fostering high-performance collaboration and skill development.',
        'Developed and executed strategies to increase product utilization; partnered closely with product management to prioritize, implement, and measure improvements that enhanced user adoption and efficiency.',
        'Cultivated cross-departmental relationships throughout the organization, improving communication, alignment, and collaboration between design, product, engineering, and other teams.',
        'Directed comprehensive user research initiatives, including persona development, competitive analysis, usability testing, and A/B experiments to inform data-driven design decisions.',
        'Facilitated design workshops and process improvement sessions to streamline workflows, enhance team efficiency, and elevate overall design quality.',
        'Maintained and evolved the Figma-based design system; led discussions and initiatives to scale and adapt it in response to evolving organizational technology and product needs.'
      ],
      employmentType: 'Full-time'
    },
    {
      title: 'Lead User Experience Architect',
      company: 'Realogy (now Anywhere Real Estate)',
      location: 'Madison, NJ',
      period: 'Sep 2020 - Oct 2021',
      description: 'Led UX design for enterprise real estate platforms serving brands like Coldwell Banker and Century 21.',
      duties: [
        'Designed end-to-end user experiences for agent-facing productivity tools and CRM systems.',
        'Facilitated stakeholder workshops to gather requirements and define product vision.',
        'Conducted usability testing and heuristic evaluations to optimize existing legacy applications.'
      ]
    },
    {
      title: 'Head of User Experience',
      company: 'iBASEt',
      location: 'Foothill Ranch, CA',
      period: 'April 2015 – June 2020',
      description: null,
      employmentType: 'Full-time',
      duties: [
        'Owned the complete user experience for Solumina iNEXT (later iSeries), the flagship Manufacturing Execution System (MES) for complex discrete manufacturing in Aerospace, Defense, and high-precision industries; led redesign from concept to post-launch, delivering a modern, intuitive, responsive interface that customers immediately requested for shop-floor deployment.',
        'Created and maintained a comprehensive design system to ensure consistency, scalability, and efficiency across all Solumina projects and modules.',
        'Built and managed a high-performing UX design team; fostered collaboration with customers, product owners, developers, implementation specialists, and end-users to deliver tailored, high-impact solutions that met stringent industry requirements.',
        'Drove responsive, multi-device UX strategy enabling seamless use across desktops, tablets, touch screens, mobile devices, gloved hands, cleanroom environments, and emerging inputs like augmented reality (AR), significantly boosting shop-floor productivity and user adoption.',
        'Partnered closely with stakeholders to translate manufacturing workflows into user-centered designs, reducing complexity, minimizing errors, and accelerating task completion in demanding production settings.'
      ],
      showLinkedIn: true
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Interactive Media Design',
      school: 'Art Institute of Southern California Orange County',
      year: '2006'
    }
  ];

  const skillCategories = [
    {
      category: 'Design',
      skills: ['User Experience (UX)', 'Interaction Design', 'User Interface (UI)', 'Information Architecture', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      category: 'Development',
      skills: ['HTML/CSS', 'JavaScript (Basic)', 'Webflow', 'React (Familiarity)', 'Git/Version Control']
    },
    {
      category: 'Tools',
      skills: ['Figma', 'Sketch', 'Adobe Creative Suite', 'InVision', 'Jira/Confluence', 'Miro']
    },
    {
      category: 'Mobile Design',
      skills: ['iOS Human Interface Guidelines', 'Material Design', 'Responsive Web Design', 'Mobile-First Strategy']
    }
  ];

  const recommendations = [
    {
      name: 'Marco Zuniga',
      date: 'February 26, 2026',
      relationship: 'worked with Mike on the same team',
      text: "Mike is an exceptional designer and a dedicated colleague. Over the past three years, I've had the pleasure of working with him across various products, and he has never hesitated to provide support, guidance, and leadership. His expertise in accessibility is both deep and well-founded, making him an invaluable asset to any team. I highly recommend Mike to any company looking for a talented leader and designer."
    },
    {
      name: 'Paula Jimenez',
      date: 'June 28, 2020',
      relationship: 'worked with Mike but on different teams',
      text: "Mike is an exceptional UX designer. He always does an amazing job getting the right balance between big picture thinking and attention to detail. He has the ability to design solutions that bring long-term value."
    },
    {
      name: 'Bob Joyce',
      date: 'June 27, 2019',
      relationship: "was senior to Mike but didn't manage Mike directly",
      text: "Mike is passionate about creating aesthetically-pleasing and highly-functional user interfaces. He built up a small UI/UX team at iBASEt and led the team from project initiation through initial release and beyond. Mike's successful leadership of his team helped establish UI/UX as an important part of iBASEt culture. Mike puts a lot of thought into design decisions. He listens carefully to feedback from others and uses their inputs to refine his designs appropriately. Mike collaborates well with software developers, product managers, and other UI/UX designers. I highly recommend Mike for UI/UX work."
    },
    {
      name: 'Tiquet Wan',
      date: 'November 14, 2012',
      relationship: 'worked with Mike but on different teams',
      text: "It is without hesitation that I write this recommendation. Mike is a true gentlemen and a professional of his trait. He is a creative and driven individual who simply refuse to miss a deadline or produce inferior product. His style in precision and fine tuning the design is to be admired, the way he sees and tackles each piece displays his knack for identifying the smallest details while delivering breath-taking visuals each and every time. That combination of values and skills sets has led to a very successful body of work and it would be my pleasure to work with him again at some point in the future."
    },
    {
      name: 'Don Hansen',
      date: 'January 27, 2012',
      relationship: 'worked with Mike on the same team',
      text: "I've worked with Mike for a little over two years now. He helped elevate the web application I was building to the next level. The site took on a truly proffesional look and our clients took notice right from the start. Mike was easy to work with and took a high level of ownership of the site. He truly feels the look of the site reflects on him, and in turn ensures the site is perfect. Any site I build from now on I know I am requesting Mike to be the designer assigned to the project."
    },
    {
      name: 'Chris Hsiung',
      date: 'January 27, 2012',
      relationship: 'worked with Mike on the same team',
      text: "Mike is a quick learner and was able to pick up WPF xaml quickly despite having no prior experience. He is a perfectionist at heart and will strive to give you exactly what you're looking for, even if you don't know what it is!"
    },
    {
      name: 'David Spolarich',
      date: 'February 17, 2011',
      relationship: "was senior to Mike but didn't manage Mike directly",
      text: "Mike was able to join our team and quickly get up to speed on what we were trying to accomplish. Not only did Mike create images and design page layouts, but he also assisted in bringing new CSS concepts to us to help optimize our product/website. Mike's overall knowledge and design concepts have proven to be very useful turning our code into usable functionality on the web."
    }
  ];

  return (
    <section id="resume" className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">
                Resume
              </h2>
              <p className="text-3xl font-bold text-neutral-900">Mike Binder</p>
            </div>
            <Button
              onClick={handleDownload}
              variant="outline"
              className="gap-2 hover:bg-neutral-50 transition-colors"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Download CV</span>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left Column: Experience */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 border-b border-neutral-200 pb-4 mb-8">
                  Professional Experience
                </h3>
                <div className="space-y-10">
                  {experience.map((job, index) => (
                    <motion.div
                      key={`${job.title}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h4 className="text-lg font-bold text-neutral-900">
                          {job.title}
                        </h4>
                        <span className="text-sm font-medium text-neutral-500 whitespace-nowrap">
                          {job.period}
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                        <span className="text-base font-semibold text-neutral-700">
                          {job.company} {job.employmentType && <span className="text-neutral-400 font-normal ml-1">· {job.employmentType}</span>}
                        </span>
                        <span className="text-xs text-neutral-400">
                          {job.location}
                        </span>
                      </div>

                      {job.description && (
                        <p className="text-neutral-600 leading-relaxed mb-4">
                          {job.description}
                        </p>
                      )}
                      
                      {job.duties && (
                        <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-neutral-600">
                          {job.duties.map((duty, i) => (
                            <li key={i}>{duty}</li>
                          ))}
                        </ul>
                      )}

                      {job.showLinkedIn && (
                        <div className="mt-6 pt-4 border-t border-neutral-100">
                          <a 
                            href="https://www.linkedin.com/in/innerspark/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-all group"
                          >
                            <span>View full profile on LinkedIn</span>
                            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="pt-12">
                <h3 className="text-xl font-bold text-neutral-900 border-b border-neutral-200 pb-4 mb-8">
                  Recommendations
                </h3>
                <div className="grid md:grid-cols-1 gap-6">
                  {recommendations.map((rec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ y: -4 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                      className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                          <p className="text-base font-bold text-neutral-900">{rec.name}</p>
                          <p className="text-sm text-neutral-500">{rec.date}</p>
                        </div>
                        <p className="text-xs text-neutral-400 italic">
                          {rec.relationship}
                        </p>
                      </div>
                      <p className="text-neutral-600 text-sm leading-relaxed relative">
                        <span className="text-3xl text-neutral-200 absolute -top-4 -left-2 leading-none">"</span>
                        <span className="relative z-10">{rec.text}</span>
                        <span className="text-3xl text-neutral-200 absolute -bottom-4 leading-none ml-1">"</span>
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Skills & Education */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 border-b border-neutral-200 pb-4 mb-8">
                  Skills
                </h3>
                <div className="space-y-8">
                  {skillCategories.map((cat, index) => (
                    <div key={cat.category}>
                      <h4 className="text-sm font-bold text-neutral-700 uppercase tracking-wide mb-3">
                        {cat.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900 border-b border-neutral-200 pb-4 mb-8">
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <p className="text-xs font-medium text-neutral-500 mb-1">
                        {edu.year}
                      </p>
                      <h4 className="text-base font-bold text-neutral-900 leading-snug mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {edu.school}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;