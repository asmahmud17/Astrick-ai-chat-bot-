import React from 'react';
import { motion } from 'motion/react';
import { User, MapPin, BookOpen, GraduationCap, Award, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const cardItems = [
    { label: 'Name', value: personalInfo.infoCard.name, icon: User },
    { label: 'Location', value: personalInfo.infoCard.location, icon: MapPin },
    { label: 'Current Role', value: personalInfo.infoCard.currentRole, icon: Compass },
    { label: 'Course', value: personalInfo.infoCard.course, icon: BookOpen },
    { label: 'Institute', value: personalInfo.infoCard.institute, icon: GraduationCap },
    { label: 'Experience Level', value: personalInfo.infoCard.experienceLevel, icon: Award },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-purple-600 dark:text-purple-400 mb-2 block">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Aspiring Creative & Skill Builder
            </h3>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              I am Anas Mahmud, an aspiring video editor and graphic designer from Dhaka, Bangladesh. I am currently studying the SBMC — Small Business Management Course at As-Sunnah Skill Development Institute, where I am developing my knowledge of video editing, graphic design, and digital marketing.
            </p>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              I am passionate about creating visually engaging content and improving my creative and technical skills. As a beginner, I am continuously learning through practical assignments and creative exercises.
            </p>

            <div className="p-4 rounded-2xl bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500/20 text-purple-900 dark:text-purple-200 text-sm">
              <p className="font-medium">
                💡 <span className="font-semibold">Honest Learning Philosophy:</span> Every project and assignment I work on serves as a stepping stone to refine my editing cuts, visual aesthetics, and digital marketing strategies.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Information Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="theme-card p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-bl-full pointer-events-none" />

              <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                <User className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Information Card</span>
              </h4>

              <div className="space-y-4">
                {cardItems.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3.5">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider block">
                          {item.label}
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-100">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
