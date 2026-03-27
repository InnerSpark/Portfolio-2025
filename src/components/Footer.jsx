import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 lg:px-12 bg-white border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">
            © {currentYear} Mike Binder. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500">
            Designed with passion and attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;