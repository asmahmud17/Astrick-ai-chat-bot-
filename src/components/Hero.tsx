import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Purple Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 dark:bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Learner Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Student & Creative Learner</span>
            </div>

            {/* Name */}
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-purple-600 dark:text-purple-400 mb-2">
              {personalInfo.name}
            </h2>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15] mb-6">
              Video Editing Learner, <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Graphic Design Learner</span> & Digital Marketing Learner
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 max-w-2xl">
              I am Anas Mahmud, an aspiring video editor and graphic designer from Dhaka, Bangladesh. Currently, I am learning video editing, graphic design, and digital marketing through the SBMC course at As-Sunnah Skill Development Institute.
            </p>

            {/* Key Location & Status Pills */}
            <div className="flex flex-wrap items-center gap-4 mb-10 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <MapPin className="w-4 h-4 text-purple-500" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <GraduationCap className="w-4 h-4 text-purple-500" />
                <span>SBMC Course @ As-Sunnah Skill Dev. Inst.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base shadow-lg shadow-purple-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo('skills')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-base border border-zinc-300 dark:border-zinc-800 transition-all duration-200 hover:border-purple-500/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <span>View Skills</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Purple Glow Outer Backdrop Ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 opacity-80 blur-xl group-hover:opacity-100 transition duration-500 animate-pulse" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/40 dark:border-purple-500/50 bg-zinc-900 shadow-2xl p-1.5">
                <img
                  src={personalInfo.avatarUrl}
                  alt="Anas Mahmud - Video Editing, Graphic Design & Digital Marketing Learner"
                  className="w-full h-full object-cover object-center rounded-full transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Decorative Corner Floating Badge */}
              <div className="absolute -bottom-2 right-4 bg-zinc-900/95 dark:bg-zinc-900/95 text-zinc-100 border border-purple-500/40 px-4 py-2 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-semibold text-purple-300">Learning & Growing</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
