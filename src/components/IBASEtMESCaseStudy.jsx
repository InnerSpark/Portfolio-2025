
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, Users, Clock, Wrench, CheckCircle, Target, AlertCircle, Lightbulb, BarChart, Layout, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IBASEtMESCaseStudy = ({ onBack }) => {
  const [expandedSections, setExpandedSections] = useState({
    challenge: true,
    team: true,
    research: true,
    ideation: true,
    solution: true,
    impact: true,
    learnings: true
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const Section = ({ id, title, children, icon: Icon }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    
    return (
      <motion.div 
        ref={ref} 
        initial={{ opacity: 0, y: 20 }} 
        animate={isInView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.6 }} 
        className="bg-white rounded-2xl border border-neutral-200 overflow-hidden"
      >
        <button 
          onClick={() => toggleSection(id)} 
          className="w-full px-8 py-6 flex items-center justify-between hover:bg-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-200"
        >
          <div className="flex items-center gap-4">
            {Icon && <Icon size={24} className="text-neutral-600" />}
            <h3 className="text-2xl font-bold text-neutral-900 text-left">{title}</h3>
          </div>
          {expandedSections[id] ? <ChevronUp size={24} className="text-neutral-400" /> : <ChevronDown size={24} className="text-neutral-400" />}
        </button>
        
        {expandedSections[id] && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            transition={{ duration: 0.3 }} 
            className="px-8 pb-8"
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50">
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 leading-tight">
              Revamping iBASEt's MES System: Prioritizing Usability in Legacy Manufacturing Software
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl">
              Transforming a '90s-era Windows client into a streamlined, user-centric web platform for aerospace and defense manufacturing.
            </p>
            
            {/* Logo Hero Image Container */}
            <div className="aspect-video rounded-2xl overflow-hidden mb-8 border border-neutral-200 bg-white flex items-center justify-center relative shadow-sm">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="w-full h-full flex items-center justify-center p-12 md:p-24 lg:p-32 bg-white">
                <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/ibase_t_logo-9BL7c.jpg" alt="iBASEt Logo" className="max-w-full max-h-full object-contain" />
              </motion.div>
            </div>

            {/* Quick Stats Bar */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-2">
                  <Users size={20} className="text-neutral-600" />
                  <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Role</span>
                </div>
                <p className="text-lg font-bold text-neutral-900">Lead UX Designer</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={20} className="text-neutral-600" />
                  <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Timeline</span>
                </div>
                <p className="text-md font-bold text-neutral-900 leading-tight">Started in 2016, with init release in 2018</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-2">
                  <Wrench size={20} className="text-neutral-600" />
                  <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Tools</span>
                </div>
                <p className="text-md font-bold text-neutral-900 leading-tight">Axure RP for wireframing and prototyping</p>
              </div>
            </div>

            {/* Key Metrics / Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-neutral-900 text-white rounded-xl p-6 shadow-md">
                <div className="flex flex-col h-full justify-between gap-4">
                  <Layout className="text-neutral-400" size={28} />
                  <p className="text-lg font-semibold">50+ elements per screen reduced to 15-20</p>
                </div>
              </div>
              <div className="bg-neutral-900 text-white rounded-xl p-6 shadow-md">
                <div className="flex flex-col h-full justify-between gap-4">
                  <Target className="text-neutral-400" size={28} />
                  <p className="text-lg font-semibold">Improved task focus reported</p>
                </div>
              </div>
              <div className="bg-neutral-900 text-white rounded-xl p-6 shadow-md">
                <div className="flex flex-col h-full justify-between gap-4">
                  <BarChart className="text-neutral-400" size={28} />
                  <p className="text-lg font-semibold">Targeting NPS uplift and faster adoption</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="pb-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Challenge Section */}
          <Section id="challenge" title="The Challenge & Problem" icon={AlertCircle}>
            <p className="text-neutral-600 leading-relaxed mb-6">
              iBASEt provides enterprise Manufacturing Execution System (MES) software for highly complex, regulated industries. Their client list includes industry giants like NASA, Rolls-Royce, Cirrus Aircraft, Lockheed Martin, and Northrop Grumman.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Despite its powerful backend capabilities, the legacy Windows-based client was a product of the '90s—feature-heavy, cluttered, and inherently difficult to navigate. Technicians and shop floor managers faced cognitive overload when trying to complete routine tasks due to interfaces packed with more than 50 disparate elements, deeply nested menus, and a lack of visual hierarchy.
            </p>
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-4">Core Usability Issues</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-600"><strong>Cognitive Overload:</strong> Screens were dense with data tables and buttons that lacked contextual relevance to the immediate task.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-600"><strong>Steep Learning Curve:</strong> New employees required extensive training just to understand basic navigation and data entry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-600"><strong>Modernization Needs:</strong> The market demanded a modern, web-based platform that could be accessed across various devices without compromising the software's robust capabilities.</span>
                </li>
              </ul>
            </div>
          </Section>

          {/* Role & Team */}
          <Section id="team" title="My Role & Team" icon={Users}>
            <p className="text-neutral-600 leading-relaxed mb-6">
              As the Lead UX Designer for this major modernization initiative, I was responsible for rethinking the entire interaction model and visual architecture of the MES.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h5 className="font-bold text-neutral-900 mb-2">Product Manager</h5>
                <p className="text-sm text-neutral-600">Collaborated closely to align UX strategy with business objectives and phased release timelines.</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h5 className="font-bold text-neutral-900 mb-2">Business Analyst</h5>
                <p className="text-sm text-neutral-600">Partnered to decode complex manufacturing workflows and ensure no critical functionality was lost in translation.</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h5 className="font-bold text-neutral-900 mb-2">Development Team</h5>
                <p className="text-sm text-neutral-600">Worked with engineers to ensure designs were technically feasible within the new web architecture framework.</p>
              </div>
            </div>
          </Section>

          {/* Discovery & Research */}
          <Section id="research" title="Discovery & Research" icon={Target}>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-xl text-neutral-900 mb-3">Interviews and Shadowing</h4>
                <p className="text-neutral-600 leading-relaxed">
                  We conducted deep-dive interviews with end-users and shadowed technicians to understand their daily physical and digital workflows. We found that users rarely needed all the data presented to them at once; they needed contextual, task-specific information.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-xl text-neutral-900 mb-3">Usability Audits</h4>
                <p className="text-neutral-600 leading-relaxed">
                  A thorough heuristic evaluation of the legacy Windows client highlighted critical failures in navigation consistency, error prevention, and visual hierarchy.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xl text-neutral-900 mb-3">Competitive Analysis</h4>
                <p className="text-neutral-600 leading-relaxed">
                  Evaluated modern enterprise software platforms to identify standard design patterns that users now expect, ensuring our new system felt familiar and intuitive.
                </p>
              </div>
            </div>
          </Section>

          {/* Ideation & Process */}
          <Section id="ideation" title="Ideation & Process" icon={Lightbulb}>
            <div className="space-y-8">
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-3">User Flows and Sketches</h4>
                <p className="text-neutral-600 leading-relaxed">
                  Began by mapping out simplified user journeys. The primary goal was to group related tasks logically and implement progressive disclosure—showing advanced options only when necessary.
                </p>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-3">Wireframing in Axure RP</h4>
                <p className="text-neutral-600 leading-relaxed">
                  Utilized Axure RP to build interactive, high-fidelity prototypes. This allowed us to simulate complex interactions, data filtering, and dynamic content loading without writing a single line of production code. Stakeholders could "click through" realistic scenarios to provide accurate feedback.
                </p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-3">Iterations and Decisions</h4>
                <p className="text-neutral-600 leading-relaxed">
                  Through numerous iterations based on internal reviews, we refined the layout to favor a card-based modular design. We established a global navigation header and contextual sidebars to replace the maze of legacy dropdowns.
                </p>
              </div>
            </div>
          </Section>

          {/* Final Design & Solution */}
          <Section id="solution" title="Final Design & Solution" icon={Monitor}>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The redesigned MES platform focuses on clarity, context, and efficiency. Below are key highlights of the transformed interface:
            </p>

            {/* Feature 1: Dashboard */}
            <div className="mb-12">
              <h4 className="font-bold text-xl text-neutral-900 mb-4">Modular Dashboards & Card-Based Layout</h4>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Replaced dense data tables with scannable, prioritized widgets. Users can now see real-time statuses and essential metrics at a glance.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-white">
                <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/db91f14220f5de71fe1f3bf5afe24e4a.png" alt="Dashboard view with card-based layout" className="w-full h-auto object-cover" />
              </motion.div>
            </div>

            {/* Feature 2: Work Order Interface */}
            <div className="mb-12">
              <h4 className="font-bold text-xl text-neutral-900 mb-4">Simplified Navigation & Contextual Actions</h4>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Implemented a persistent global navigation bar and utilized right-side panels for contextual actions, drastically reducing on-screen clutter. Elements per screen dropped from over 50 to a focused 15-20.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg bg-white">
                  <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/f4c103ddbf49534063828742b7bc66de.png" alt="Work order interface for production monitoring" className="w-full h-auto object-cover" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg bg-white">
                  <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/ecd7328a8a93ec486e4f01633eb0d2e2.png" alt="Work order with action buttons and right-side panel" className="w-full h-auto object-cover" />
                </motion.div>
              </div>
            </div>

            {/* Feature 3: Detailed Data Views */}
            <div className="mb-12">
              <h4 className="font-bold text-xl text-neutral-900 mb-4">Comprehensive Detail Screens</h4>
              <p className="text-neutral-600 leading-relaxed mb-6">
                When deep data inspection is required, information is structured logically with clear typography, whitespace, and collapsible sections to maintain readability.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg bg-white">
                  <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/bedcafa7d15ca03c089c0c41b62bb4dc.png" alt="Detailed work order screen" className="w-full h-auto object-cover" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg bg-white">
                  <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/1e7fe10de18acf06e63a1885e4f58063.png" alt="Work order detail screen with comprehensive information" className="w-full h-auto object-cover" />
                </motion.div>
              </div>
            </div>

            {/* Feature 4: Collaboration & Messaging */}
            <div>
              <h4 className="font-bold text-xl text-neutral-900 mb-4">Integrated Communication</h4>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Introduced embedded messaging interfaces directly within context views, allowing operators to communicate about specific units without leaving their workflow.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-white max-w-3xl mx-auto">
                <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/861df1ea2c0001139e754cecc68c5663.png" alt="Messaging interface within the platform" className="w-full h-auto object-cover" />
              </motion.div>
            </div>
          </Section>

          {/* Impact & Results */}
          <Section id="impact" title="Impact & Results" icon={BarChart}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-900 text-white rounded-xl p-6 border border-neutral-800">
                <h4 className="font-bold mb-4">Anticipated Outcomes</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-200"><strong>Reduced Clutter:</strong> Decreased screen element density significantly, minimizing cognitive load.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-200"><strong>Faster Task Completion:</strong> Initial usability tests indicate a notable reduction in time spent navigating to core functions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-200"><strong>Modernization Foundation:</strong> Established a scalable, accessible web framework ready for future feature integrations.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-4">Looking Forward</h4>
                <p className="text-neutral-600 mb-4">
                  As the project moves toward its initial release, we are actively preparing mechanisms for gathering public feedback. The modernized UX is projected to strongly positively impact Net Promoter Scores (NPS) and significantly reduce onboarding time for new enterprise clients.
                </p>
              </div>
            </div>
          </Section>

          {/* Reflections/Lessons */}
          <Section id="learnings" title="Reflections & Lessons" icon={Lightbulb}>
            <div className="space-y-6">
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-3">Respecting the Legacy Power</h4>
                <p className="text-neutral-600 leading-relaxed">
                  Modernizing complex enterprise software is a delicate balancing act. You cannot simply remove features in the name of "clean design"; those features exist because complex industries require them. The key is structural organization—hiding complexity until it is actively needed.
                </p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-3">Prototyping is Essential</h4>
                <p className="text-neutral-600 leading-relaxed">
                  Using robust tools like Axure RP to build functional prototypes was invaluable. It bridged the communication gap between design, business analysis, and engineering, preventing costly misunderstandings before development began.
                </p>
              </div>
            </div>
          </Section>

        </div>
      </section>

      {/* Back CTA */}
      <section className="py-16 px-6 lg:px-12 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto text-center">
          <Button onClick={onBack} size="lg" className="gap-2">
            <ArrowLeft size={16} />
            View More Projects
          </Button>
        </div>
      </section>
    </div>
  );
};

export default IBASEtMESCaseStudy;
