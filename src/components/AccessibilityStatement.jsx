
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AccessibilityStatement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-neutral-50 pt-32 pb-20 px-6 lg:px-12">
        <Helmet>
          <title>Accessibility Statement | Mike Binder</title>
          <meta name="description" content="Accessibility statement for Mike Binder's UX portfolio. This site conforms to WCAG 2.1 Level AA guidelines." />
        </Helmet>

        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-12 transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">Accessibility Statement</h1>

          <div className="space-y-10 text-neutral-700 leading-relaxed">
            <p className="text-lg">
              This site is designed and built by Mike Binder — a UX designer with over 25 years of experience making complex software accessible to everyone.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Commitment</h2>
              <p>
                I am committed to ensuring this portfolio is accessible to people with disabilities. This site is built to conform to WCAG 2.1 Level AA guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">What's in place</h2>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Semantic HTML5 with proper landmark regions (header, nav, main, footer)</li>
                <li>Logical heading hierarchy throughout</li>
                <li>All images have descriptive alt text</li>
                <li>All form fields have associated labels</li>
                <li>Keyboard navigable — all interactive elements are reachable and operable without a mouse</li>
                <li>Visible focus indicators on all interactive elements</li>
                <li>Color contrast meets WCAG AA minimums throughout</li>
                <li>Screen reader friendly — tested with VoiceOver and compatible with major assistive technologies</li>
                <li>Respects prefers-reduced-motion for users who are sensitive to animation</li>
                <li>Skip to main content link for keyboard users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Known limitations</h2>
              <p>
                This is a living site and I continuously improve it. If you encounter any accessibility barrier, I want to know about it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact</h2>
              <p className="mb-4">
                If you experience any difficulty accessing any part of this site, please contact me directly:
              </p>
              <p className="mb-4">
                Email: <a href="mailto:mike@innerspark.studio" className="text-neutral-900 font-medium underline hover:text-neutral-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded">mike@innerspark.studio</a>
              </p>
              <p>I will respond within 2 business days and work to resolve the issue promptly.</p>
            </section>

            <p className="text-sm text-neutral-500 pt-4 border-t border-neutral-200">
              Last reviewed: March 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AccessibilityStatement;
