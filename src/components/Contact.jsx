import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const handleSendMessage = (e) => {
    e.preventDefault();
    toast({
      title: '🚧 This feature isn\'t implemented yet—but don\'t worry! You can request it in your next prompt! 🚀',
    });
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Let's create something meaningful together.
            </h3>
            <p className="text-neutral-400 text-lg mb-12 max-w-md">
              Whether you have a project in mind or just want to chat about UX design, accessibility, or information architecture, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:mike@innersparkmedia.com" 
                className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg">mike@innersparkmedia.com</span>
              </a>
              
              <a 
                href="tel:7602080433" 
                className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="text-lg">760.208.0433</span>
              </a>

              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span className="text-lg">Austin, TX</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700">
            <form onSubmit={handleSendMessage} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-300">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:border-white text-white transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:border-white text-white transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-neutral-300">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:border-white text-white transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-300">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:border-white text-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-white text-neutral-900 hover:bg-neutral-200">
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;