
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, Users, Clock, Wrench, CheckCircle, Target, AlertCircle, Lightbulb, BarChart, Monitor, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DBHooversCaseStudy = ({ onBack }) => {
  const h1Ref = useRef(null);

  useEffect(() => {
    const h1 = document.querySelectorAll('h1')[1];
    if (h1) {
      const absoluteTop = h1.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: absoluteTop - 180, behavior: 'instant' });
    }
    h1Ref.current?.focus();
  }, []);

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
          aria-expanded={expandedSections[id]}
          aria-controls={`panel-${id}`}
          className="w-full px-8 py-6 flex items-center justify-between hover:bg-neutral-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <div className="flex items-center gap-4">
            {Icon && <Icon size={24} className="text-neutral-600" aria-hidden="true" />}
            <h3 className="text-2xl font-bold text-neutral-900 text-left">{title}</h3>
          </div>
          {expandedSections[id] ? <ChevronUp size={24} className="text-neutral-400" aria-hidden="true" /> : <ChevronDown size={24} className="text-neutral-400" aria-hidden="true" />}
        </button>

        {expandedSections[id] && (
          <motion.div
            id={`panel-${id}`}
            role="region"
            aria-labelledby={`section-${id}`}
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
            <h1 ref={h1Ref} tabIndex={-1} className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 leading-tight outline-none">
              Redesigning D&B Hoovers: Envisioning an AI-Driven, Accessible Future for Business Intelligence
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl">
              Transforming a legacy B2B sales intelligence platform into a modern, AI-powered experience that makes prospecting faster and more accessible for everyone.
            </p>

            {/* Hero Image */}
            <div className="aspect-video rounded-2xl overflow-hidden mb-8 border border-neutral-200 relative shadow-sm">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="w-full h-full">
                <img src="/img/stock-wireframe-review.jpg" alt="UX designer reviewing wireframes and user flows on a whiteboard" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Quick Stats Bar */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-2">
                  <Users size={20} className="text-neutral-600" aria-hidden="true" />
                  <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Role</span>
                </div>
                <p className="text-lg font-bold text-neutral-900">Lead UX Designer · Accessibility Lead · Design Governance Board</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={20} className="text-neutral-600" aria-hidden="true" />
                  <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Timeline</span>
                </div>
                <p className="text-md font-bold text-neutral-900 leading-tight">4 years (Jul 2022 – Mar 2026) · Hoovers redesign: Sept 2024 – Mar 2026</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center gap-3 mb-2">
                  <Wrench size={20} className="text-neutral-600" aria-hidden="true" />
                  <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Tools</span>
                </div>
                <p className="text-md font-bold text-neutral-900 leading-tight">Figma, UserTesting, D&B Design System</p>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white rounded-xl p-8 border border-neutral-200 mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                D&B Hoovers is a premier business intelligence tool used by sales and marketing professionals globally. The legacy platform, while powerful, suffered from overwhelming complexity, deep navigation hierarchies, and significant accessibility gaps.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed italic">
                Note on scope: This case study documents a forward-looking design initiative. Due to NDA restrictions I can't share screens of the final designs, but this write-up covers the full process — research, information architecture decisions, accessibility approach, and validated prototype outcomes.
              </p>
            </div>

            {/* Key Metrics / Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-neutral-900 text-white rounded-xl p-6 shadow-md">
                <div className="flex flex-col h-full justify-between gap-4">
                  <Search className="text-neutral-400" size={28} aria-hidden="true" />
                  <p className="text-lg font-semibold">50–65% faster time-to-insight</p>
                </div>
              </div>
              <div className="bg-neutral-900 text-white rounded-xl p-6 shadow-md">
                <div className="flex flex-col h-full justify-between gap-4">
                  <Target className="text-neutral-400" size={28} aria-hidden="true" />
                  <p className="text-lg font-semibold">Usability score: 4/10 → 8/10</p>
                </div>
              </div>
              <div className="bg-neutral-900 text-white rounded-xl p-6 shadow-md">
                <div className="flex flex-col h-full justify-between gap-4">
                  <BarChart className="text-neutral-400" size={28} aria-hidden="true" />
                  <p className="text-lg font-semibold">9/10 participants preferred this over current platform</p>
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
          <Section id="challenge" title="The Challenge" icon={AlertCircle}>
            <p className="text-neutral-600 leading-relaxed mb-6">
              The existing platform architecture was fundamentally misaligned with modern user expectations. It required users to navigate deeply nested menus to access core functionality.
            </p>
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <h4 className="font-bold text-neutral-900 mb-4">Core Pain Points</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-600"><strong>300+ Search Fields:</strong> The advanced search builder was daunting, leading to decision paralysis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-600"><strong>Filter Fatigue:</strong> Users spent significant time clicking through basic filters instead of analyzing data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neutral-900 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-neutral-600"><strong>Accessibility Gaps:</strong> The interface lacked proper keyboard navigation and screen reader support, violating core WCAG 2.1 AA standards.</span>
                </li>
              </ul>
            </div>
          </Section>

          {/* Role & Team */}
          <Section id="team" title="My Role & Team" icon={Users}>
            <p className="text-neutral-600 leading-relaxed mb-6">
              As Lead UX Designer, I owned the UX vision for this transformation. I collaborated closely with five product managers to distill complex business requirements into elegant user flows. A major part of my role involved advocating for WCAG compliance, ensuring accessibility was integrated from the ground up rather than treated as an afterthought.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h5 className="font-bold text-neutral-900 mb-2">Cross-Functional Team</h5>
                <p className="text-sm text-neutral-600">Cross-functional team including product managers, customer success stakeholders, and research observers. Research led by Mike Binder with collaboration from Ed Garana (Senior Director of UX) and the Hoovers product team.</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h5 className="font-bold text-neutral-900 mb-2">D&B Design System</h5>
                <p className="text-sm text-neutral-600">Leveraged and evolved the enterprise design system to ensure consistency and accessibility across all touchpoints.</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h5 className="font-bold text-neutral-900 mb-2">UserTesting</h5>
                <p className="text-sm text-neutral-600">Ran generative and evaluative research sessions to validate design decisions with real users.</p>
              </div>
            </div>
          </Section>

          {/* Discovery & Research */}
          <Section id="research" title="Discovery & Research" icon={Target}>
            <div className="space-y-8">
              <p className="text-neutral-600 leading-relaxed">
                Over four years at D&B I led multiple rounds of research across the Hoovers platform. This included usability studies on Build-a-List search behavior, next-gen BAL prototype testing with Figma-based task scenarios, validation of a new actionable dashboard and followed companies feature, Visitor Intelligence integration research, and Company Profile 2.0 design validation. Each study recruited external Hoovers users, with sessions moderated via MS Teams and recorded for analysis. I wrote all research plans, recruited participants, moderated sessions, analyzed data, and delivered findings to product and stakeholders.
              </p>

              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-4">Key Findings</h4>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    Early BAL research revealed that most users relied on only a handful of filters in their daily workflow. The full 300+ field interface was creating decision paralysis rather than enabling power users. This became the foundation for the AI-driven search concept — reduce cognitive burden at the entry point while preserving full filter access for advanced users.
                  </p>
                  <p>
                    <strong>80%+ of users</strong> expressed a desire for natural language search. This became the central design hypothesis: that reducing cognitive load at the search stage would have more impact than optimizing any individual filter.
                  </p>
                  <p>
                    Users had created complex workarounds to bypass the nested navigation. This confirmed the architecture was fundamentally broken, not just visually cluttered — a surface redesign would not be enough.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-4">Parallel Research Initiatives</h4>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    Parallel to the search redesign, I led research for a new Hoovers landing dashboard — moving from a user-pinned widget model to an AI-driven actionable feed based on followed companies and intent signals. This required internal card sorting with the Inside Sales and Customer Success teams, followed by external prototype validation with Hoovers customers.
                  </p>
                  <p>
                    I also led research for the Visitor Intelligence feature — surfacing web visit data within search results and company records — conducting sessions with external Hoovers users to validate information hierarchy and notification design.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Ideation & Process */}
          <Section id="ideation" title="Ideation & Process" icon={Lightbulb}>
            <div className="space-y-8">
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-3">Rapid Prototyping</h4>
                <p className="text-neutral-600 leading-relaxed">
                  The design process was highly iterative, centered around rapid prototyping in Figma. I facilitated cross-functional workshops to map out the new information architecture.
                </p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-3">Usability Testing</h4>
                <p className="text-neutral-600 leading-relaxed">
                  We conducted <strong>3 distinct rounds of usability testing</strong>, refining the interaction models for the new AI search and validating the updated global navigation structure.
                </p>
              </div>
            </div>
          </Section>

          {/* Final Design & Solution */}
          <Section id="solution" title="Final Design & Solution" icon={Monitor}>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The redesigned platform focuses on reducing friction, surfacing intelligence, and ensuring every interaction is accessible.
            </p>

            <div className="mb-12">
              <h4 className="font-bold text-xl text-neutral-900 mb-4">Conversational AI Search</h4>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Replaced the daunting 300+ field form with a prominent, centralized AI-driven search bar. Users can now type natural language queries, and the system dynamically builds the complex query underneath, educating the user on how the platform interprets their intent.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                We tested three interaction models: inline suggestions, a modal overlay, and a persistent top-of-page bar. The persistent bar won on every usability metric because it kept users oriented within the platform while searching, rather than breaking their flow.
              </p>
            </div>

            <div className="mb-12">
              <h4 className="font-bold text-xl text-neutral-900 mb-4">Smart Navigation</h4>
              <p className="text-neutral-600 leading-relaxed">
                Flattened the hierarchy from four levels deep to two. Introduced persistent, context-aware sidebars that surface the most relevant tools based on the user's current workflow.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xl text-neutral-900 mb-4">Accessibility Features</h4>
              <p className="text-neutral-600 leading-relaxed">
                Implemented comprehensive keyboard focus management, ARIA labels for dynamic content, and ensured high contrast ratios across all components, fully aligning the product with WCAG 2.1 AA standards.
              </p>
            </div>
          </Section>

          {/* Impact & Results */}
          <Section id="impact" title="Impact & Results" icon={BarChart}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-900 text-white rounded-xl p-6 border border-neutral-800">
                <h4 className="font-bold mb-4">Validated Outcomes</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-neutral-200"><strong>65% reduction</strong> in time-to-insight for complex list building.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-neutral-200"><strong>Usability score: 8/10</strong> across task-based testing (up from 4/10 on the legacy platform), validated across multiple research rounds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-neutral-200"><strong>9/10 participants</strong> in final prototype testing said they would prefer this interface over the current platform.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-4">Looking Forward</h4>
                <p className="text-neutral-600">
                  The redesign demonstrated the value of shifting from a feature-first mindset to an intent-first mindset. By embedding AI directly into the primary workflow and fiercely advocating for accessibility, we laid the foundation for a modern, inclusive, and highly efficient platform.
                </p>
              </div>
            </div>
          </Section>

          {/* Reflections */}
          <Section id="learnings" title="Reflections & Lessons" icon={Lightbulb}>
            <div className="space-y-6">
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-3">Intent Over Features</h4>
                <p className="text-neutral-600 leading-relaxed">
                  This redesign demonstrated the immense value of shifting from a feature-first mindset to an intent-first mindset. By embedding AI directly into the primary workflow, we transformed how users interact with complex business data.
                </p>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-3">Accessibility as Foundation</h4>
                <p className="text-neutral-600 leading-relaxed">
                  Fiercely advocating for accessibility from the start — rather than retrofitting it — resulted in a better experience for all users, not just those with specific needs. It shaped our navigation decisions and interaction patterns in ways that benefited everyone.
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

export default DBHooversCaseStudy;
