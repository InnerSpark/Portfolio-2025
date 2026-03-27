import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 lg:px-12 bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">
            © {currentYear} Mike Binder{' · '}
            <Link to="/accessibility" className="text-neutral-500 hover:text-neutral-900 transition-colors underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded">
              Accessibility
            </Link>
            {' · '}
            <Link to="/privacy" className="text-neutral-500 hover:text-neutral-900 transition-colors underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded">
              Privacy
            </Link>
          </p>
          <p className="text-sm text-neutral-500">
            Built with accessibility in mind — semantic HTML, WCAG 2.1 AA contrast, keyboard navigation, and screen reader support throughout.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
