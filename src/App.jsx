
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import PasswordProtectedRoute from '@/components/PasswordProtectedRoute';
import PasswordPrompt from '@/components/PasswordPrompt';
import DBHooversCaseStudy from '@/components/DBHooversCaseStudy';

const MainLayout = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <>
      <Helmet>
        <title>Mike Binder | Senior UX Leader – Enterprise Data Systems, Accessibility & AI UX | Austin TX</title>
        <meta name="description" content="Mike Binder – Senior UX Leader with 25 years designing enterprise B2B software. Specializing in accessibility (WCAG), AI UX, and information architecture. Case studies from Dun & Bradstreet, iBASEt, Realogy. Austin, TX." />

        <meta property="og:title" content="Mike Binder – UX Designer Portfolio | Inner Spark Media" />
        <meta property="og:description" content="Specializing in WCAG accessibility, information architecture, enterprise UX, and AI-driven design. Case studies from D&B Hoovers, Realogy, iBASEt." />
        <meta property="og:url" content="https://innerspark.studio/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mike Binder UX Portfolio" />
        <meta name="twitter:description" content="..." />
        <meta name="twitter:image" content="https://innerspark.studio/img/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <BrowserRouter>
        <div className="min-h-screen bg-neutral-50 text-neutral-900">
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/password-prompt" element={<PasswordPrompt />} />
            <Route path="/db-hoovers-case-study" element={<DBHooversCaseStudy />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
