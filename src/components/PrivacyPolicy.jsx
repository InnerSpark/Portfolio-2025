
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-neutral-50 pt-32 pb-20 px-6 lg:px-12">
        <Helmet>
          <title>Privacy Policy | Mike Binder</title>
          <meta name="description" content="Privacy policy for Mike Binder's UX portfolio. Learn about the limited data this site collects." />
        </Helmet>

        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-12 transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8">Privacy Policy</h1>

          <div className="space-y-10 text-neutral-700 leading-relaxed">
            <p className="text-sm text-neutral-500">Last updated: March 2026</p>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
              <p>
                This is a personal portfolio website. I respect your privacy and want to be transparent about the limited data this site collects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">What data is collected</h2>
              <p className="mb-4">
                This site uses Google Analytics 4 (GA4) to understand how visitors interact with the site. GA4 collects:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>Pages visited and time spent on each page</li>
                <li>General geographic location (country/region level only)</li>
                <li>Device type and browser</li>
                <li>How you arrived at the site (search, direct, referral)</li>
              </ul>
              <p className="mt-4">
                IP addresses are anonymized — your full IP address is never stored.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">What data is NOT collected</h2>
              <ul className="list-disc list-outside pl-5 space-y-2">
                <li>No names, email addresses, or contact details are collected without your explicit input</li>
                <li>No data is sold or shared with third parties for marketing purposes</li>
                <li>No advertising cookies or tracking pixels are used</li>
                <li>The contact form collects only what you choose to submit, used solely to respond to your message</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Cookies</h2>
              <p>
                Google Analytics sets cookies to distinguish unique visitors and track sessions. These cookies do not contain personally identifiable information. You can opt out of Google Analytics tracking using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-neutral-900 font-medium underline hover:text-neutral-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded">Google Analytics Opt-out Browser Add-on</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Your contact form submissions</h2>
              <p>
                If you use the contact form, the information you provide (name, email, subject, message) is used only to respond to your inquiry. It is not stored in any database, added to any mailing list, or shared with anyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Third party services</h2>
              <p>
                This site uses Google Analytics, operated by Google LLC. Google's privacy policy is available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-neutral-900 font-medium underline hover:text-neutral-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded">policies.google.com/privacy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Your rights</h2>
              <p>
                You have the right to request information about any data held about you, or to request its deletion. Since this site collects no personally identifiable data beyond what you voluntarily submit via the contact form, there is typically nothing to delete.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Changes to this policy</h2>
              <p>
                If this policy changes materially, the "Last updated" date above will be revised.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact</h2>
              <p>
                Questions about privacy? Email me at <a href="mailto:mike@innerspark.studio" className="text-neutral-900 font-medium underline hover:text-neutral-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded">mike@innerspark.studio</a> and I will respond within 2 business days.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
