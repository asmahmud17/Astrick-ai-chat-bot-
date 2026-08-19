import React from 'react';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

interface NotFoundProps {
  onNavigateHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigateHome }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center space-y-8 p-8 rounded-3xl theme-card border border-zinc-200 dark:border-zinc-800 shadow-2xl"
      >
        <div className="w-20 h-20 mx-auto rounded-3xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <div className="space-y-3">
          <span className="text-sm font-semibold tracking-widest text-purple-600 dark:text-purple-400 uppercase">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
            The page or route you are looking for doesn’t exist, has been removed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            onClick={onNavigateHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-lg shadow-purple-600/30 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-sm transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
