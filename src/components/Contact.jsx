import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef as useRefAlias } from 'react'; // alias to avoid conflict if needed
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    emailjs
      .sendForm(
        'service_6p35h2p',   // ← REAL Service ID
        'template_3lrjx68', // ← REAL Template ID
        formRef.current,
        '1imYFFp2EsJwejkWQ'       // ← REAL Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus('Message sent successfully! I’ll get back to you soon.');
          setIsLoading(false);
          formRef.current.reset();
          toast({
            title: 'Message Sent',
            description: 'Thank you! Your message has been received.',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('Sorry, there was an error sending your message. Please try again or email me directly.');
          setIsLoading(false);
          toast({
            title: 'Error',
            description: 'Failed to send message. Please try again.',
            variant: 'destructive',
          });
        }
      );
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-32 px-6 lg:px-12 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16"
        >
          <div>
            <h2 id="contact-heading" className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
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
                href="mailto:mike@innerspark.studio"
                className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <span className="text-lg">mike@innerspark.studio</span>
              </a>
              
              <a 
                href="tel:7602080433"
                className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                  <Phone size={20} aria-hidden="true" />
                </div>
                <span className="text-lg">760.208.0433</span>
              </a>

              <div className="flex items-center gap-4 text-neutral-300">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                  <MapPin size={20} aria-hidden="true" />
                </div>
                <span className="text-lg">Austin, TX</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700">
            <form ref={formRef} onSubmit={handleSendMessage} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-300">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-white transition-colors"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="user_email"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-white transition-colors"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-neutral-300">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-white transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-300">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 text-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-white text-neutral-900 hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>

              {status && (
                <p className={`text-center mt-4 text-sm ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;