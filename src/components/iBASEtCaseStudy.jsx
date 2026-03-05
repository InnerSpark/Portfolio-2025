
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, Users, Clock, Wrench, TrendingUp, CheckCircle, Target, AlertCircle, Lightbulb, BarChart, Layout, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IBASEtCaseStudy = ({
  onBack
}) => {
  const [expandedSections, setExpandedSections] = useState({
    challenge: true,
    research: true,
    ideation: true,
    solution: true,
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
              iBASEt Unit Info App: Mobile Workflow for Shop Floor Technicians
            </h1>
            
            {/* Logo Hero Image Container - Updated Background to bg-white */}
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
            }} className="w-full h-full flex items-center justify-center p-12 md:p-24 lg:p-32 bg-white">
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
                <p className="text-lg font-bold text-neutral-900">4 Months</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-2">
                  <Wrench size={20} className="text-neutral-600" />
                  <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Tools</span>
                </div>
                <p className="text-lg font-bold text-neutral-900">Figma, Miro</p>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-200 mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                iBASEt provides enterprise Manufacturing Execution System (MES) and Maintenance, Repair, and Overhaul (MRO) software primarily for the aerospace and defense industries. Shop floor technicians needed a modern, mobile-friendly solution to access vital unit information on the go.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                As Lead UX Designer, I conceptualized and designed the Unit Info App, a streamlined mobile application that allows technicians to scan barcodes, view part histories, and log discrepancies instantly without having to return to stationary desktop terminals.
              </p>
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
              Shop floor technicians were constrained by stationary computer terminals. When inspecting a part or unit on the expansive manufacturing floor, they had to walk back and forth to a terminal to look up information, log defects, or check maintenance histories.
            </p>
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-4">Key Bottlenecks</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-600"><strong>Wasted Time:</strong> Constant travel between the shop floor and stationary terminals decreased overall productivity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-600"><strong>Data Inaccuracy:</strong> Relying on memory or handwritten notes before reaching a terminal led to transcription errors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-600"><strong>Complex Desktop UI:</strong> The existing desktop interface was overly complex for quick, simple tasks needed on the go.</span>
                </li>
              </ul>
            </div>
          </Section>

          {/* Discovery & Research */}
          <Section id="research" title="Discovery & Research" icon={Target}>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Understanding the physical environment of aerospace manufacturing was critical. We interviewed shop floor managers and shadowed technicians to observe their daily challenges.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-4">Technician Persona Insights</h4>
                <p className="text-neutral-600 mb-4">
                  Technicians often wear protective gear, including gloves, making precise touch interactions difficult. They need high contrast, large tap targets, and direct access to core actions without digging through menus.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-4">Environmental Factors</h4>
                <p className="text-neutral-600 mb-4">
                  The manufacturing floor has variable lighting conditions and requires split-second access to data. A mobile app had to rely heavily on barcode scanning to eliminate manual entry.
                </p>
              </div>
            </div>
          </Section>

          {/* Ideation & Process */}
          <Section id="ideation" title="Ideation & Process" icon={Lightbulb}>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Our approach centered on "Mobile First, Scan First." We wireframed user flows that prioritized the camera scanner as the primary input method. The core loop: Scan, View Details, Take Action.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              We iterated through several prototypes to refine the layout, ensuring that critical data points like "Unit Status" and "Next Action" were immediately visible above the fold on standard mobile devices.
            </p>
          </Section>

          {/* Final Design & Solution */}
          <Section id="solution" title="Final Design & Solution" icon={Smartphone}>
            <p className="text-neutral-600 leading-relaxed mb-12">
              The final mobile app features a dark, high-contrast interface suitable for various lighting conditions, with large, easily tappable buttons designed for users wearing gloves.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Screen 1 */}
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div whileHover={{
                scale: 1.05
              }} className="rounded-[2rem] overflow-hidden border-8 border-neutral-900 shadow-2xl bg-white max-w-[280px]">
                  <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/46ec728cfcd2e1e65dbef0be06a69024.png" alt="Barcode scanning interface" className="w-full h-auto object-cover" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-2">Barcode Scanner</h4>
                  <p className="text-sm text-neutral-600">Quickly identify parts and units using the device camera, eliminating manual data entry.</p>
                </div>
              </div>

              {/* Screen 2 */}
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div whileHover={{
                scale: 1.05
              }} className="rounded-[2rem] overflow-hidden border-8 border-neutral-900 shadow-2xl bg-white max-w-[280px]">
                  <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/64399a14366ccd60a5083aef196ab85e.png" alt="Unit Information search screen" className="w-full h-auto object-cover" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-2">Unit Details Dashboard</h4>
                  <p className="text-sm text-neutral-600">Instantly view history, specifications, and current status of the scanned component.</p>
                </div>
              </div>

              {/* Screen 3 */}
              <div className="flex flex-col items-center text-center gap-4">
                <motion.div whileHover={{
                scale: 1.05
              }} className="rounded-[2rem] overflow-hidden border-8 border-neutral-900 shadow-2xl bg-white max-w-[280px]">
                  <img src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/unit-info-discrepancy-create-9P0A6.png" alt="Discrepancy form interface" className="w-full h-auto object-cover" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-2">Discrepancy Logging</h4>
                  <p className="text-sm text-neutral-600">Log defects and issues directly from the floor with contextual photo attachments.</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Impact & Results */}
          <Section id="impact" title="Impact & Results" icon={BarChart}>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-neutral-900 text-white rounded-xl p-6 border border-neutral-800">
                <h4 className="font-bold mb-4">Key Outcomes</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-200">Significant reduction in manual data entry errors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-200">Saved technicians an estimated 1-2 hours per shift in travel time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-200">Faster resolution of shop floor discrepancies.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-4">Learnings</h4>
                <p className="text-neutral-600 mb-4">
                  Designing for industrial environments requires a strict focus on utility and accessibility. Aesthetic choices must never compromise the clarity of mission-critical information or ease of use in physically demanding conditions.
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
    </div>;
};
export default IBASEtCaseStudy;
