
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
        <title>Inner Spark Media - UX Designer Portfolio</title>
        <meta name="description" content="Inner Spark Media: A UX Designer portfolio showcasing user-centered design solutions, research-driven projects, and innovative digital experiences." />
      </Helmet>
      <BrowserRouter>
        <div className="min-h-screen bg-neutral-50 text-neutral-900">
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/password-prompt" element={<PasswordPrompt />} />
            <Route 
              path="/db-hoovers-case-study" 
              element={
                <PasswordProtectedRoute>
                  <DBHooversCaseStudy />
                </PasswordProtectedRoute>
              } 
            />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
