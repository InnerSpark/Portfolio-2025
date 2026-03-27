
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
        <title>Mike Binder | Senior UX Leader – Accessibility, AI UX & Enterprise B2B | Austin TX</title>
        <meta name="description" content="Mike Binder – Senior UX Leader with 25 years designing enterprise B2B software. Specializing in accessibility (WCAG), AI UX, and information architecture. Case studies from Dun & Bradstreet, iBASEt, Realogy. Austin, TX." />

        <meta property="og:title" content="Mike Binder – Senior UX Leader | Accessibility & AI UX Portfolio" />
        <meta property="og:description" content="25 years designing enterprise B2B software. Accessibility, AI UX, and information architecture that moves the needle. Case studies from D&B, iBASEt, Realogy." />
        <meta property="og:url" content="https://innerspark.studio/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mike Binder – Senior UX Leader" />
        <meta name="twitter:description" content="Senior UX Leader specializing in accessibility, AI UX, and enterprise B2B design. 25 years of experience. Based in Austin, TX." />
        <meta name="twitter:image" content="https://innerspark.studio/img/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <BrowserRouter>
        <div className="min-h-screen bg-neutral-50 text-neutral-900">
          <Routes>
            <Route path="/" element={<MainLayout />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
