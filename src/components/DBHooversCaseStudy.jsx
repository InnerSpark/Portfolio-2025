
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DBHooversCaseStudy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-neutral-50 py-20 px-6 lg:px-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-12 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </button>

        {/* Logo Hero Section */}

        <div className="aspect-video rounded-2xl overflow-hidden mb-8 border border-neutral-200 bg-white flex items-center justify-center relative shadow-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.2 }} 
            className="w-full h-full flex items-center justify-center p-12 md:p-24 lg:p-32 bg-white"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/afac7b0c-73d0-4329-ae95-e7196d35c98d/46e8caff7078f4a57fb52353392ba38a.png" 
              alt="Dun & Bradstreet logo" 
              className="max-w-full max-h-full object-contain" 
            />
          </motion.div>
        </div>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-neutral-200 text-neutral-800 text-sm font-semibold mb-6 uppercase tracking-wider">
            Case Study
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-8 leading-tight">
            Redesigning D&B Hoovers: Envisioning an AI-Driven, Accessible Future for Business Intelligence
          </h1>
        </motion.div>

        {/* Overview & Key Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900 border-b pb-2">Overview</h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              D&B Hoovers is a premier business intelligence tool used by sales and marketing professionals globally. The legacy platform, while powerful, suffered from overwhelming complexity, deep navigation hierarchies, and significant accessibility gaps.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-100 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Role & Timeline</h3>
              <p className="text-neutral-900 font-medium">Lead UX Designer</p>
              <p className="text-neutral-600 text-sm">6 months (Sept 2025–Mar 2026)</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">Tools & Team</h3>
              <ul className="text-sm space-y-2 text-neutral-600">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-neutral-900" /> Figma</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-neutral-900" /> UserTesting</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-neutral-900" /> D&B Design System</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-neutral-900" /> 5 Product Managers</li>
              </ul>
            </div>
            <div className="bg-neutral-900 rounded-lg p-4 text-white">
              <h3 className="text-xs font-bold uppercase tracking-wider mb-2 text-neutral-400">Key Impact</h3>
              <p className="font-semibold text-lg">50-65% faster time-to-insight</p>
            </div>
          </div>
        </div>

        {/* The Challenge Section */}
        <section className="mb-24 py-16 px-8 md:px-12 bg-white rounded-3xl shadow-lg border border-neutral-100 hover:shadow-2xl transition-shadow duration-500">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">The Challenge</h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              The existing platform architecture was fundamentally misaligned with modern user expectations. It required users to navigate deeply nested menus to access core functionality.
            </p>
            <ul className="list-disc pl-6 space-y-4 font-medium text-neutral-800">
              <li><strong>300+ Search Fields:</strong> The advanced search builder was daunting, leading to decision paralysis.</li>
              <li><strong>Filter Fatigue:</strong> Users spent significant time clicking through basic filters instead of analyzing data.</li>
              <li><strong>Accessibility Gaps:</strong> The interface lacked proper keyboard navigation and screen reader support, violating core WCAG 2.1 AA standards.</li>
            </ul>
          </div>
        </section>

        {/* My Role & Team */}
        <section className="mb-24 py-16 px-8 md:px-12 bg-neutral-100 rounded-3xl shadow-inner">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">My Role & Team</h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              As Lead UX Designer, I owned the UX vision for this transformation. I collaborated closely with five product managers to distill complex business requirements into elegant user flows. A major part of my role involved advocating for WCAG compliance, ensuring accessibility was integrated from the ground up rather than treated as an afterthought.
            </p>
          </div>
        </section>

        {/* Discovery & Research */}
        <section className="mb-24 py-16 px-8 md:px-12 bg-white rounded-3xl shadow-lg border border-neutral-100 hover:shadow-2xl transition-shadow duration-500">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">Discovery & Research</h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              We conducted extensive generative research via UserTesting, focusing on how different segments (Sales Reps vs. Market Researchers) built their company lists.
            </p>
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 mt-8">
              <h3 className="font-bold text-neutral-900 mb-4">Key Findings:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 flex-shrink-0 text-neutral-900" size={20} />
                  <span><strong>80%+ of users</strong> expressed a desire for natural language search (e.g., "Find SaaS companies in London with over $50M revenue").</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 flex-shrink-0 text-neutral-900" size={20} />
                  <span>Users created complex workarounds to bypass the nested navigation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 flex-shrink-0 text-neutral-900" size={20} />
                  <span>We developed specific personas highlighting users with accessibility needs to guide our design decisions.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ideation & Process */}
        <section className="mb-24 py-16 px-8 md:px-12 bg-white rounded-3xl shadow-lg border border-neutral-100 hover:shadow-2xl transition-shadow duration-500">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">Ideation & Process</h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              The design process was highly iterative, centered around rapid prototyping in Figma. I facilitated cross-functional workshops to map out the new information architecture.
            </p>
            <p>
              We conducted <strong>3 distinct rounds of usability testing</strong>, refining the interaction models for the new AI search and validating the updated global navigation structure.
            </p>
          </div>
        </section>

        {/* Final Design & Solution */}
        <section className="mb-24 py-16 px-8 md:px-12 bg-white rounded-3xl shadow-lg border border-neutral-100 hover:shadow-2xl transition-shadow duration-500">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">Final Design & Solution</h2>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900">Conversational AI Search</h3>
              <p className="text-neutral-700 leading-relaxed">
                Replaced the daunting 300+ field form with a prominent, centralized AI-driven search bar. Users can now type natural language queries, and the system dynamically builds the complex query underneath, educating the user on how the platform interprets their intent.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900">Smart Navigation</h3>
              <p className="text-neutral-700 leading-relaxed">
                Flattened the hierarchy from four levels deep to two. Introduced persistent, context-aware sidebars that surface the most relevant tools based on the user's current workflow.
              </p>
            </div>
            <div className="space-y-4 md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-900">Accessibility Features</h3>
              <p className="text-neutral-700 leading-relaxed">
                Implemented comprehensive keyboard focus management, ARIA labels for dynamic content, and ensured high contrast ratios across all components, fully aligning the product with WCAG 2.1 AA standards.
              </p>
            </div>
          </div>
        </section>

        {/* Impact & Results */}
        <section className="mb-24 py-16 px-8 md:px-12 bg-neutral-900 text-white rounded-3xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">Impact & Results</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-black text-neutral-300 mb-4">65%</div>
              <p className="text-lg text-neutral-400 font-medium">Reduction in time-to-insight for complex list building.</p>
            </div>
            <div className="p-6 border-y md:border-y-0 md:border-x border-neutral-800">
              <div className="text-5xl font-black text-neutral-300 mb-4">8/10</div>
              <p className="text-lg text-neutral-400 font-medium">Usability score improvement (up from 4/10).</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-black text-neutral-300 mb-4">~75</div>
              <p className="text-lg text-neutral-400 font-medium">Projected NPS based on final prototype testing.</p>
            </div>
          </div>
        </section>

        {/* Reflections */}
        <section className="mb-24 py-16 px-8 md:px-12 bg-white rounded-3xl shadow-lg border border-neutral-100 hover:shadow-2xl transition-shadow duration-500">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">Reflections</h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              This redesign demonstrated the immense value of shifting from a feature-first mindset to an intent-first mindset. By embedding AI directly into the primary workflow and fiercely advocating for accessibility, we transformed a legacy tool into a modern, inclusive, and highly efficient platform.
            </p>
          </div>
        </section>

        <div className="text-center pb-20">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl font-bold text-lg focus:outline-none focus:ring-4 focus:ring-neutral-200"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>
        </div>
      </div>
    </article>
  );
};

export default DBHooversCaseStudy;
