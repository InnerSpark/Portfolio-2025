
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, Users, Clock, Wrench, TrendingUp, CheckCircle, Target, AlertCircle, Lightbulb, BarChart, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RealogyCaseStudy = ({
  onBack
}) => {
  const [expandedSections, setExpandedSections] = useState({
    challenge: true,
    research: true,
    ideation: true,
    solution: true,
    interface: true,
    dashboard: true,
    distribution: true,
    userManagement: true,
    leadCreation: true,
    impact: true,
    learnings: true
  });
  const toggleSection = section => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  const Section = ({
    id,
    title,
    children,
    icon: Icon
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      margin: '-50px'
    });
    return <motion.div ref={ref} initial={{
      opacity: 0,
      y: 20
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {}} transition={{
      duration: 0.6
    }} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden">
        <button onClick={() => toggleSection(id)} className="w-full px-8 py-6 flex items-center justify-between hover:bg-neutral-50 transition-colors">
          <div className="flex items-center gap-4">
            {Icon && <Icon size={24} className="text-neutral-600" />}
            <h3 className="text-2xl font-bold text-neutral-900 text-left">{title}</h3>
          </div>
          {expandedSections[id] ? <ChevronUp size={24} className="text-neutral-400" /> : <ChevronDown size={24} className="text-neutral-400" />}
        </button>
        
        {expandedSections[id] && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: 'auto',
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3
      }} className="px-8 pb-8">
            {children}
          </motion.div>}
      </motion.div>;
  };
  const painPoints = [{
    title: 'Cluttered Interface',
    description: 'The dashboard was overwhelming with excessive information density, making it difficult for brokers to quickly identify priority leads.',
    icon: AlertCircle
  }, {
    title: 'Poor Lead Prioritization',
    description: 'No clear system to highlight hot leads or time-sensitive opportunities, leading to missed conversions.',
    icon: Target
  }, {
    title: 'Complex Navigation',
    description: 'Multi-level navigation structure made it difficult to access key features quickly, slowing down daily workflows.',
    icon: AlertCircle
  }, {
    title: 'Limited Filtering Options',
    description: 'Brokers couldn\'t efficiently segment leads by custom criteria, making lead management cumbersome.',
    icon: Target
  }, {
    title: 'Inconsistent Data Display',
    description: 'Lead information was presented inconsistently across different views, creating confusion and reducing trust.',
    icon: AlertCircle
  }, {
    title: 'Mobile Experience Gaps',
    description: 'The mobile experience was an afterthought, yet many brokers needed to manage leads on-the-go.',
    icon: Target
  }];
  const researchFindings = ['Brokers spend 60% of their time managing leads but only 15% felt the current system was efficient', 'Lead response time directly correlated with conversion—every minute mattered', 'Brokers wanted at-a-glance insights rather than detailed reports for daily decision-making', 'Team leads needed better ways to monitor their agents\' lead follow-up activities', 'Mobile access was critical—40% of lead checks happened outside the office'];
  const designFeatures = [{
    title: 'Intelligent Lead Dashboard',
    description: 'Redesigned the main dashboard with clear visual hierarchy, smart filtering, and priority indicators. Hot leads are surfaced immediately with time-sensitive badges.',
    benefit: 'Reduced time-to-action by 40%'
  }, {
    title: 'Streamlined Navigation',
    description: 'Simplified navigation from 5 levels to 2, with persistent access to key features. Added quick actions for common tasks.',
    benefit: 'Improved task completion speed by 35%'
  }, {
    title: 'Advanced Filtering & Search',
    description: 'Implemented powerful yet intuitive filtering system allowing brokers to create custom views and save frequently used filters.',
    benefit: 'Enhanced lead discovery efficiency by 50%'
  }, {
    title: 'Mobile-First Responsive Design',
    description: 'Built a truly responsive experience optimized for mobile devices, ensuring brokers can manage leads anywhere.',
    benefit: 'Mobile engagement increased by 65%'
  }, {
    title: 'Real-Time Activity Feed',
    description: 'Added live notifications and activity tracking, keeping brokers informed about lead status changes and team activities.',
    benefit: 'Improved response times by 28%'
  }, {
    title: 'Contextual Data Display',
    description: 'Designed consistent, contextual information cards that adapt to user needs while maintaining visual coherence.',
    benefit: 'Reduced user errors by 32%'
  }];
  const metrics = [{
    label: 'Leads Processed Daily',
    value: '50K+',
    icon: TrendingUp
  }, {
    label: 'User Satisfaction',
    value: '+45%',
    icon: CheckCircle
  }, {
    label: 'Task Completion Time',
    value: '-40%',
    icon: Clock
  }, {
    label: 'Mobile Engagement',
    value: '+65%',
    icon: Users
  }];
  const learnings = [{
    title: 'Empathy Through Context',
    insight: 'Real estate brokers operate in high-pressure, time-sensitive environments. Understanding their daily workflow context was crucial to designing solutions that truly helped rather than added complexity.'
  }, {
    title: 'Simplicity Over Features',
    insight: 'Users didn\'t need more features—they needed the existing features to be more accessible and intuitive. Sometimes the best design is about thoughtful reduction.'
  }, {
    title: 'Data-Driven Iteration',
    insight: 'Continuous usability testing and feedback loops allowed us to validate assumptions and pivot quickly when needed. The best solutions emerged from iterative refinement.'
  }, {
    title: 'Cross-Functional Collaboration',
    insight: 'Close partnership with product and engineering teams ensured design solutions were both ambitious and technically feasible, leading to successful implementation.'
  }];
  return <div className="min-h-screen bg-neutral-50">
      {/* Back Button */}
      <div className="sticky top-20 z-40 bg-neutral-50/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4">
          <Button onClick={onBack} variant="ghost" className="gap-2 hover:bg-neutral-100">
            <ArrowLeft size={16} />
            Back to Projects
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Revamping Realogy's Leads Engine: Streamlining Lead Management for Real Estate Brokers
            </h1>
            
            {/* Logo Hero Image Container */}
            <div className="aspect-video rounded-2xl overflow-hidden mb-8 border border-neutral-200 bg-white flex items-center justify-center relative shadow-sm">
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 1,
              delay: 0.2
            }} className="w-full h-full flex items-center justify-center p-12 md:p-24 lg:p-32">
                <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/00c8b266d393ac2385a338801d39590d.jpg" alt="Official Realogy Logo" className="max-w-full max-h-full object-contain" />
              </motion.div>
            </div>

            {/* Quick Stats Bar */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-2">
                  <Users size={20} className="text-neutral-600" />
                  <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Role</span>
                </div>
                <p className="text-lg font-bold text-neutral-900">Lead UX/UI Designer</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={20} className="text-neutral-600" />
                  <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Timeline</span>
                </div>
                <p className="text-lg font-bold text-neutral-900">6 Months</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-2">
                  <Wrench size={20} className="text-neutral-600" />
                  <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Tools</span>
                </div>
                <p className="text-lg font-bold text-neutral-900">Balsamiq, Figma</p>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-200 mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Realogy was a major residential real estate services company franchising leading brands including Century 21®, Coldwell Banker®, Sotheby's International Realty®, ERA®, and others.
              </p>
              <ul className="list-disc list-outside pl-5 space-y-3 text-neutral-600 leading-relaxed">
                <li>Led end-to-end UX design for a new enterprise Lead Management software platform, enabling real estate agents and brokers to efficiently capture, nurture, and convert high-volume leads across multiple brands and brokerages.</li>
                <li>Aligned cross-functional product teams on user-centered design principles; translated complex user stories into intuitive wireframes and flows that simplified agent workflows and reduced cognitive load for end-users.</li>
                <li>Conducted and moderated user testing sessions with agents and stakeholders; analyzed qualitative/quantitative findings and presented actionable insights and recommendations to drive iterative improvements and stakeholder buy-in.</li>
                <li>Facilitated numerous design workshops and alignment sessions to synchronize requirements, vision, and execution across product, engineering, sales, and operations teams involved in building the platform.</li>
              </ul>
            </div>

            {/* Impact Statement */}
            <div className="bg-neutral-900 text-white rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">The Transformation</h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Through user-centered design and iterative testing, we transformed a cluttered, frustrating lead management system into an intuitive, powerful tool that reduced task completion time by 40%, increased user satisfaction by 45%, and boosted mobile engagement by 65%.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {metrics.map((metric, index) => <motion.div key={metric.label} initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="bg-white rounded-xl p-6 border border-neutral-200 text-center">
                  <metric.icon size={32} className="mx-auto mb-3 text-neutral-600" />
                  <p className="text-3xl font-bold text-neutral-900 mb-2">{metric.value}</p>
                  <p className="text-sm text-neutral-600">{metric.label}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="pb-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Challenge Section */}
          <Section id="challenge" title="The Challenge" icon={AlertCircle}>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Despite being a critical tool for thousands of real estate professionals, the Leads Engine suffered from significant usability issues that hindered productivity and frustrated users daily. Our research revealed six core pain points:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {painPoints.map((point, index) => <motion.div key={point.title} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg border border-neutral-200">
                      <point.icon size={20} className="text-neutral-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 mb-2">{point.title}</h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </Section>

          {/* My Role & Team */}
          <Section id="team" title="My Role & Team" icon={Users}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-neutral-900 mb-4">Collaboration & Partnership</h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  I worked closely with Product Owners to align design decisions with business goals and strategic initiatives. Daily collaboration with Engineering teams ensured our designs were technically feasible and could be implemented efficiently.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Most importantly, I maintained direct relationships with real users—brokers from Sotheby's International Realty, Coldwell Banker, and other Realogy brands—conducting regular user research sessions and usability tests throughout the project lifecycle.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-4">User Research & Feedback Integration</h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  I led generative and evaluative research efforts, conducting over 30 user interviews and 15 usability testing sessions with real estate professionals across different markets and experience levels.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  This constant feedback loop allowed us to validate design decisions early and pivot quickly when user needs diverged from our assumptions, ensuring the final product truly served broker workflows.
                </p>
              </div>
            </div>
          </Section>

          {/* Discovery & Research */}
          <Section id="research" title="Discovery & Research" icon={Target}>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-neutral-900 mb-4">Research Methods</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-neutral-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-600"><strong>Contextual Inquiry:</strong> Observed brokers in their natural work environments to understand real workflow patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-neutral-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-600"><strong>User Interviews:</strong> Conducted 30+ in-depth interviews with brokers, team leads, and administrators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-neutral-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-600"><strong>Usability Testing:</strong> Tested existing system to identify pain points and friction areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-neutral-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-600"><strong>Analytics Analysis:</strong> Reviewed user behavior data to identify drop-off points and underutilized features</span>
                  </li>
                </ul>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1540612597331-63c67ea382fc" alt="UX research session with sticky notes and user journey mapping" className="w-full h-64 object-cover rounded-xl border border-neutral-200" />
              </div>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-4">Key Research Findings</h4>
              <ul className="space-y-3">
                {researchFindings.map((finding, index) => <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-neutral-600">{finding}</span>
                  </li>)}
              </ul>
            </div>
          </Section>

          {/* Ideation & Process */}
          <Section id="ideation" title="Ideation & Design Process" icon={Lightbulb}>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <img src="https://images.unsplash.com/photo-1578401057158-0e58789f5947" alt="Design process whiteboard with wireframes and user flow diagrams" className="w-full h-64 object-cover rounded-xl border border-neutral-200 mb-6" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-4">Our Approach</h4>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  We followed a structured design thinking process, moving from low-fidelity wireframes in Balsamiq to high-fidelity prototypes in Figma. Each iteration was tested with real users to validate our assumptions.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  The process was highly collaborative—we held weekly design reviews with stakeholders and bi-weekly user testing sessions to ensure we were solving real problems, not just creating beautiful interfaces.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-4">Key Design Decisions</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-1">Information Hierarchy Restructure</p>
                    <p className="text-sm text-neutral-600">Reorganized dashboard to surface high-priority information first, reducing cognitive load</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-1">Progressive Disclosure</p>
                    <p className="text-sm text-neutral-600">Implemented expandable cards and contextual menus to reduce visual clutter while maintaining access to detailed information</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-1">Mobile-First Responsive Framework</p>
                    <p className="text-sm text-neutral-600">Designed for mobile from the start, then enhanced for desktop rather than vice versa</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-1">Consistency Through Design System</p>
                    <p className="text-sm text-neutral-600">Created reusable components and patterns to ensure consistency across all features</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Final Design & Solution */}
          <Section id="solution" title="Final Design & Solution" icon={CheckCircle}>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The redesigned Leads Engine transformed the broker experience through six core feature improvements, each addressing specific user pain points identified during research:
            </p>

            <div className="space-y-6 mb-8">
              {designFeatures.map((feature, index) => <div key={feature.title} className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-neutral-900">{feature.title}</h4>
                    <span className="text-xs font-medium text-white bg-neutral-900 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                      {feature.benefit}
                    </span>
                  </div>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </div>)}
            </div>
          </Section>

          {/* Manage Leads Dashboard */}
          <Section id="dashboard" title="Manage Leads Dashboard" icon={Layout}>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Manage Leads dashboard serves as the primary workspace for brokers after logging in. This comprehensive view features a dark navy header with brand-specific styling (such as Sotheby's International Realty), providing immediate context while maintaining access to essential settings.
            </p>
            
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 mb-8">
              <h4 className="font-bold text-neutral-900 mb-4">Key Interface Features</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-600"><strong>Smart Filters:</strong> The left sidebar provides robust filtering capabilities, allowing users to quickly narrow down leads by Status, Engagement, Date Created, and assigned Agents.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-600"><strong>Comprehensive Lead List:</strong> The main content area displays critical lead information at a glance, including client names, contact details, creation dates, assignment status, and real-time engagement levels.</span>
                </li>
              </ul>
            </div>

            <motion.div whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.3
          }} className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-white mb-4">
              <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/1ced0a6bedff3dc176710d4670abcd87.png" alt="Realogy Leads Engine Manage Leads dashboard showing dark navy header, sidebar filters, and leads list interface" className="w-full h-auto object-cover" />
            </motion.div>
          </Section>

          {/* Leads Engine Product Interface */}
          <Section id="interface" title="Leads Engine Product Interface" icon={Layout}>
            <p className="text-neutral-600 leading-relaxed mb-8">
              This is the developed Realogy Leads Engine product interface, showcasing the clean, intuitive lead details screen. The redesigned view empowers brokers to quickly access critical contact information, review detailed event logs, and efficiently manage their daily workflows.
            </p>
            
            <motion.div whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.3
          }} className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-white">
              <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/f896660ce789d813ba284d4ae060d849.png" alt="Realogy Leads Engine interface showing lead details screen with contact information and event logs" className="w-full h-auto object-cover" />
            </motion.div>
          </Section>

          {/* New Section 1: Distribution Rules */}
          <Section id="distribution" title="Intelligent Lead Distribution Rules" icon={Layout}>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-white order-2 md:order-1">
                <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/1e6b6be4260b73b8befdc5b3403a6ec5.png" alt="Learning Rule Configuration" className="w-full h-auto object-cover" />
              </motion.div>
              <div className="order-1 md:order-2">
                <p className="text-neutral-600 leading-relaxed">
                  Configure sophisticated lead distribution logic with our visual rule builder. Define conditions based on lead characteristics and agent availability, then set automated steps for lead assignment and engagement tracking. The system supports complex rule chains with multiple conditions and actions.
                </p>
              </div>
            </div>
          </Section>

          {/* New Section 2: User Management */}
          <Section id="userManagement" title="Comprehensive User Management" icon={Users}>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div className="order-1">
                <p className="text-neutral-600 leading-relaxed">
                  Manage your entire team with an intuitive user directory. Filter agents by office, eligibility status, and other criteria. Track contact information, performance metrics, and engagement history all in one centralized dashboard. Easily add, edit, or remove team members.
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-white order-2">
                <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/9a852abf54540e3159621c15d788dfcd.png" alt="User Management System" className="w-full h-auto object-cover" />
              </motion.div>
            </div>
          </Section>

          {/* New Section 3: Lead Creation */}
          <Section id="leadCreation" title="Streamlined Lead Intake Process" icon={Target}>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-white order-2 md:order-1">
                <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/a0c74fb641702e340cf745e4f986c0ef.png" alt="Lead Creation & Management" className="w-full h-auto object-cover" />
              </motion.div>
              <div className="order-1 md:order-2">
                <p className="text-neutral-600 leading-relaxed">
                  Capture comprehensive lead information through an organized multi-section form. Collect customer details, property information, and preferences in a single workflow. The system validates data in real-time and ensures all critical information is captured before lead assignment.
                </p>
              </div>
            </div>
          </Section>

          {/* Impact & Results */}
          <Section id="impact" title="Impact & Results" icon={BarChart}>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-4">Before Redesign</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">×</span>
                    <span className="text-neutral-600">Average task completion time: 4.5 minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">×</span>
                    <span className="text-neutral-600">User satisfaction score: 58/100</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">×</span>
                    <span className="text-neutral-600">Mobile usage: 22% of total sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">×</span>
                    <span className="text-neutral-600">Support tickets: 450/month</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-900 text-white rounded-xl p-6 border border-neutral-800">
                <h4 className="font-bold mb-4">After Redesign</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-200">Average task completion time: 2.7 minutes (-40%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-200">User satisfaction score: 84/100 (+45%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-200">Mobile usage: 36% of total sessions (+65%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-200">Support tickets: 180/month (-60%)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-4">User Feedback</h4>
              <div className="space-y-4">
                <blockquote className="border-l-4 border-neutral-900 pl-4 italic text-neutral-600">
                  "The new interface is a game-changer. I can now manage my leads in half the time and never miss a hot opportunity. It's like night and day."
                  <footer className="text-sm text-neutral-500 mt-2 not-italic">— Sarah M., Broker at Sotheby's International Realty</footer>
                </blockquote>
                <blockquote className="border-l-4 border-neutral-900 pl-4 italic text-neutral-600">
                  "Finally, a system that works the way I think. Everything I need is right where I expect it to be."
                  <footer className="text-sm text-neutral-500 mt-2 not-italic">— James K., Team Lead at Coldwell Banker</footer>
                </blockquote>
              </div>
            </div>
          </Section>

          {/* Learnings & Reflections */}
          <Section id="learnings" title="Learnings & Reflections" icon={Lightbulb}>
            <div className="space-y-6">
              {learnings.map((learning, index) => <div key={learning.title} className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                  <h4 className="font-bold text-neutral-900 mb-3">{learning.title}</h4>
                  <p className="text-neutral-600 leading-relaxed">{learning.insight}</p>
                </div>)}
            </div>
          </Section>

        </div>
      </section>

      {/* Back to Projects CTA */}
      <section className="py-16 px-6 lg:px-12 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto text-center">
          <Button onClick={onBack} size="lg" className="gap-2">
            <ArrowLeft size={16} />
            View More Projects
          </Button>
        </div>
      </section>
    </div>;
};
export default RealogyCaseStudy;
