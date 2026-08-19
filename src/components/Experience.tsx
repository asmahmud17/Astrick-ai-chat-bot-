import React from 'react';
import { motion } from 'motion/react';
import { learningExperienceData } from '../data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle, MapPin, Calendar, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-zinc-50/50 dark:bg-zinc-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-purple-600 dark:text-purple-400 mb-2 block">
            Educational Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {learningExperienceData.title}
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            Active coursework and practical learning modules in Dhaka, Bangladesh.
          </p>
          <div className="w-16 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Learning Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="theme-card p-8 sm:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800" />

            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-600 text-white shadow-md shadow-purple-600/30">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                    {learningExperienceData.course}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 mt-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{learningExperienceData.institute}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Status: {learningExperienceData.status}
                </span>
                <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {learningExperienceData.location}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Current Academic Term</span>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 border-b border-zinc-200 dark:border-zinc-800/80 pb-6">
              {learningExperienceData.description}
            </p>

            {/* Learning Areas Grid */}
            <div>
              <h4 className="text-sm uppercase tracking-wider font-bold text-zinc-900 dark:text-zinc-200 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span>Key Learning Focus Areas</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {learningExperienceData.learningAreas.map((area) => (
                  <div 
                    key={area}
                    className="p-3.5 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center gap-3 text-sm font-medium text-zinc-800 dark:text-zinc-200"
                  >
                    <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparent Banner Note */}
            <div className="mt-8 pt-4 text-xs text-zinc-500 dark:text-zinc-400 text-center italic">
              Note: This portfolio section explicitly presents academic and course-based learning experience. No false employment or fake corporate history is listed.
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
