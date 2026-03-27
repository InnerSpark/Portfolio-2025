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
      title: 'Sr. UX Designer · Accessibility Lead · Design Governance Board',
      company: 'Dun & Bradstreet',
      location: 'Austin, Texas, United States · Remote',
      period: 'Jul 2022 – Mar 2026',
      description: 'Business Information / Data Analytics',
      duties: [
        'Built and led D&B\'s company-wide accessibility program: established WCAG standards, launched a cross-functional working group, produced VPATs for top-tier products, and reduced accessibility issues by 40%.',
        'Co-led AI integration across our B2B platform — prospect scoring, smart search, intent data, and generative tools — speeding up prospecting by 20–30% and contributing to measurable revenue growth.',
        'Led research and redesign of D&B Hoovers, our B2B sales intelligence platform. Cleaned up workflows so sales reps prospect 28% faster.',
        'Sat on the Design System Governance Board while mentoring designers and cross-functional teams on WCAG, raising accessibility knowledge across the org.'
      ],
      employmentType: 'Full-time'
    },
    {
      title: 'Lead Product Designer',
      company: 'Ozmo',
      location: 'Austin, TX',
      period: 'Oct 2021 - Jun 2022 · 9 mos',
      description: 'Tech Support / Customer Experience Software',
      duties: [
        'Mentored designers across multiple products and partnered with product to boost platform adoption 20% and measurably improve user efficiency.',
        'Conducted user research — personas, competitive analysis, usability tests, A/B — and turned findings into decisions that bumped satisfaction scores 20%.',
        'Facilitated design workshops that fixed processes and smoothed team workflows.'
      ],
      employmentType: 'Full-time'
    },
    {
      title: 'Lead User Experience Architect',
      company: 'Realogy (now Anywhere Real Estate)',
      location: 'Madison, NJ',
      period: 'Sep 2020 - Oct 2021',
      description: 'Residential Real Estate Services',
      duties: [
        'Led the UX design for a new enterprise Lead Management platform that empowered real estate agents and brokers to capture, nurture, and convert high-volume leads efficiently across major brands (Century 21, Coldwell Banker, Sotheby\'s International Realty, ERA, etc.), increasing lead conversion rates by 20%.',
        'Aligned cross-functional teams on user-centered principles. Turned complex needs into simple wireframes, flows, interfaces that cut task time 30% by reducing mental overload.',
        'Conducted and moderated user testing with agents and stakeholders. I synthesized feedback into fixes and iterations and was able to get 90%+ alignment on launches.',
        'Facilitated design workshops and alignment sessions to synchronizing requirements, vision, and execution among product, engineering, sales, and operations teams for a successful product delivery.'
      ]
    },
    {
      title: 'Head of User Experience',
      company: 'iBASEt',
      location: 'Foothill Ranch, CA',
      period: 'April 2015 – June 2020',
      description: 'Manufacturing Execution Systems',
      employmentType: 'Full-time',
      intro: 'Joined as iBASEt\'s first ever UX hire and built the entire practice from scratch — no team, no design system, no process. Over 5 years I hired and mentored 2 designers, defined our standards, and owned UX end-to-end for Solumina iNEXT/iSeries, the company\'s flagship MES for aerospace, defense, and precision manufacturing, achieving 80% shop-floor adoption in Q1 of launch.',
      duties: [
        'Built and maintained a scalable design system. Kept UI/UX consistent which cut bugs 40% and sped up dev.',
        'Audited the existing product for accessibility gaps on day one and made inclusive design a core part of every decision. Pushed for WCAG compliance in a company that had never prioritized it.',
        'Built and led a solid UX design team where we cultivated collaboration with customers, product owners, developers, implementation teams, and end-users to deliver solutions aligned with rigorous industry standards.',
        'Defined and drove responsive, multi-device UX strategy supporting desktops, tablets, touchscreens, mobile, gloved/cleanroom operations, and emerging inputs (e.g., augmented reality), dramatically improving shop-floor productivity by 40%.',
        'Collaborated to rethink complex manufacturing flows into simpler, error-resistant designs. Dropped errors 20%, sped up critical tasks in high-stakes settings.'
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
      skills: [
        'Ideation',
        'Concept Development',
        'Information Architecture',
        'Design Systems',
        'Wireframing',
        'Low fidelity Prototyping',
        'High Fidelity Prototyping',
        'Figma',
        'Sketch',
        'Adobe XD',
        'Typography',
        'Color Theory',
        'Visual Hierarchy',
        'Layout Design',
        'Mobile-First Design',
        'Responsive Design',
        'Branding',
        'Style Guides',
        'Accessibility (ADA/WCAG Standards)'
      ]
    },
    {
      category: 'Technical',
      skills: [
        'HTML',
        'CSS (Responsive Design)',
        'JavaScript',
        'PHP',
        'Ruby on Rails',
        'XML',
        'Node.js)',
        'Figma Prototyping',
        'Axure prototyping',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe InDesign',
        'Adobe Dreamweaver',
        'Component Libraries',
        'Design Tokens',
        'GitHub',
        'Storybook'
      ]
    },
    {
      category: 'Research & Strategy',
      skills: [
        'Quantitative Research',
        'Qualitative Research',
        'User Interviews',
        'Usability Testing',
        'Heuristic Evaluation',
        'Persona Creation',
        'Journey Mapping',
        'User Flows',
        'Task Analysis',
        'Data & Content Review',
        'User Stories',
        'Requirements Gathering',
        'A/B Testing',
        'Feedback Analysis',
        'Competitive Analysis'
      ]
    }
  ];

  const recommendations = [
    {
      name: 'Edward Garaña',
      date: 'March 5, 2026',
      relationship: 'Edward managed Mike directly',
      text: "I've had the good fortune of working with Mike for four years. During this time, he has demonstrated his ability to take on new challenges, work outside his comfort zone, and proven to be an innovative UX Designer. Time and time again, Mike has shown he is someone that is willing to take charge and lead initiatives - with minimal direction needed. This was especially true as he helped lead the effort to overhaul our accessibility compliance process across multiple business units.\n\nMike is also always willing to take time to provide counsel and guidance to anyone who needs it, he is a great partner to have in a brainstorming meeting, and his wide ranging knowledge of innovations in the tech space were great to have as we looked to develop future facing capabilities within our products.\n\nMike is a savvy UX Designer that would be a good addition to any team, especially those looking to up their game in innovation, accessibility, and designing forward thinking products."
    },
    {
      name: "Becky Kelderman",
      title: "Creating operational efficiency and increasing margins one customer at a time.",
      date: "March 4, 2026",
      relationship: "Worked with Mike but on different teams",
      text: "I was on the sales team and Mike was leading the charge of our new UX. Mike was open and collaborative to understand our prospects and client needs, ensuring he knew end user specific needs and designing a solution that was both aesthetically pleasing and technically functional. Mike led the group to design, test and implement. He was great to work with, innovative, and focus on results. I recommend Mike to lead similar teams or can excel as an individual contributor",
      source: "LinkedIn"
    },
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
              variant="outline"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Mike Binder Resume.pdf';                // exact path from public/
                link.download = 'Mike-Binder-Resume.pdf';             // clean filename on save
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="gap-2 hover:bg-neutral-50 transition-colors"
              aria-label="Download Mike Binder's resume as PDF"
            >
              <Download size={16} aria-hidden="true" />
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
                          {job.company} {job.description && <span className="text-brand-blue font-normal ml-1">· {job.description}</span>}
                        </span>
                        {/* <span className="text-xs text-neutral-400">
                          {job.location}
                        </span> */}
                      </div>

                      {/* {job.description && (
                        <p className="text-neutral-600 leading-relaxed mb-4">
                          {job.description}
                        </p>
                      )} */}
                      
                      {job.intro && (
                        <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                          {job.intro}
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
                            aria-label="View Mike Binder's full LinkedIn profile"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-all group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded"
                          >
                            <span>View full profile on LinkedIn</span>
                            <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
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
                        <p className="text-xs text-brand-blue italic">
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