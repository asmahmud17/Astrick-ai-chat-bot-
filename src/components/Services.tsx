import React from 'react';
import { motion } from 'motion/react';
import { servicesData, serviceDisclaimer } from '../data/portfolioData';
import { Youtube, Smartphone, FileImage, Sparkles, Layout, Zap, Target, Share2, Info } from 'lucide-react';

export const Services: React.FC = () => {
  const getServiceIcon = (title: string) => {
    switch (title) {
      case 'YouTube Video Editing':
        return <Youtube className="w-6 h-6 text-red-500" />;
      case 'Social Media Video Editing':
        return <Smartphone className="w-6 h-6 text-purple-500" />;
      case 'Poster Design':
        return <FileImage className="w-6 h-6 text-indigo-500" />;
      case 'Thumbnail Design':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'Social Media Post Design':
        return <Layout className="w-6 h-6 text-blue-500" />;
      case 'Motion Graphics':
        return <Zap className="w-6 h-6 text-purple-500" />;
      case 'Basic Digital Marketing Support':
        return <Target className="w-6 h-6 text-emerald-500" />;
      case 'Basic Meta Marketing Support':
        return <Share2 className="w-6 h-6 text-cyan-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-500" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-purple-600 dark:text-purple-400 mb-2 block">
            Learning-Based Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Services & Support
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            Assistance and creative collaboration I can provide while actively building my portfolio and skills.
          </p>
          <div className="w-16 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Disclaimer Banner */}
        <div className="mb-12 p-5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 flex items-start gap-3 shadow-sm">
          <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed">
            <span className="font-bold">Professional Disclaimer: </span>
            {serviceDisclaimer}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="theme-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                  {getServiceIcon(service.title)}
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-purple-600 dark:text-purple-400">
                <span>Beginner Assistance</span>
                <span>Learner Level</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
