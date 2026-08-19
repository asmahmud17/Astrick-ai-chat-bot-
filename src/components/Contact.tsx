import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, CheckCircle2, AlertCircle, MapPin, Sparkles, UserCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.honeypot) {
      // Quietly drop bot submissions
      setStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully.');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    try {
      // Simulate form sending / Firebase connection interface
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus('success');
      setStatusMessage('Thank you for reaching out! Your message has been received.');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      setErrors({});
    } catch {
      setStatus('error');
      setStatusMessage('An error occurred while sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-purple-600 dark:text-purple-400 mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Let’s Create Something Meaningful
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            Have a question, a project idea, or an opportunity to discuss? Feel free to send me a message through the contact form.
          </p>
          <div className="w-16 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="theme-card p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Contact Information</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400 block">
                      Email Address
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200">
                      {personalInfo.emailPlaceholder}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-500 block mt-1">
                      (Configurable placeholder)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400 block">
                      Location
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200">
                      Dhaka, Bangladesh
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400 block">
                      Availability
                    </span>
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                      Learning & Open to Beginner Assignments
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 text-xs text-zinc-500 dark:text-zinc-400">
                🔒 Privacy Assured: Messages sent through this form are private and will not be shared.
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="theme-card p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Honeypot Field for Spam Protection */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Status Message Display */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 flex items-center gap-3 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5">
                    Your Name <span className="text-purple-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border ${
                      errors.name ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-800'
                    } text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5">
                    Your Email <span className="text-purple-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border ${
                      errors.email ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-800'
                    } text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5">
                    Subject <span className="text-purple-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What is this regarding?"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border ${
                      errors.subject ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-800'
                    } text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all`}
                  />
                  {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5">
                    Message <span className="text-purple-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border ${
                      errors.message ? 'border-red-500' : 'border-zinc-300 dark:border-zinc-800'
                    } text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold text-base shadow-lg shadow-purple-600/30 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {status === 'submitting' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
