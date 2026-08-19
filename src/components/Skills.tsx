import React, { useState } from 'react';
import { motion } from 'motion/react';
import { skillsData } from '../data/portfolioData';
import { SkillLevel } from '../types';
import { Video, Palette, TrendingUp, Sparkles, Code, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Video Editing', 'Graphic Design', 'Digital Marketing'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  const getLevelBadge = (level: SkillLevel) => {
    switch (level) {
      case 'Beginner':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Beginner
          </span>
        );
      case 'Learning':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            Learning
          </span>
        );
      case 'Developing':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Developing
          </span>
        );
      default:
        return null;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Video Editing':
        return <Video className="w-5 h-5 text-purple-500" />;
      case 'Graphic Design':
        return <Palette className="w-5 h-5 text-indigo-500" />;
      case 'Digital Marketing':
        return <TrendingUp className="w-5 h-5 text-emerald-500" />;
      default:
        return <Code className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-zinc-50/50 dark:bg-zinc-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-purple-600 dark:text-purple-400 mb-2 block">
            Current Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Skills & Software
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            Honest representations of the tools and creative disciplines I am currently learning and developing.
          </p>
          <div className="w-16 h-1 bg-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="theme-card p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-purple-500/10 dark:bg-purple-500/20">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  {getLevelBadge(skill.level)}
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500">
                <span>Category: {skill.category}</span>
                <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Active Learning
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend Box */}
        <div className="mt-12 p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4 max-w-3xl mx-auto text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
          <span className="font-semibold text-zinc-900 dark:text-zinc-200 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-500" />
            Skill Status Key:
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500" /> Beginner (Basic tools)</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-500" /> Learning (In progress)</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Developing (Regular practice)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
