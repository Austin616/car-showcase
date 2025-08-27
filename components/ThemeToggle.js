'use client';

import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Zap } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-20 h-10 rounded-full bg-gray-200 animate-pulse border-2 border-gray-300">
        <div className="w-8 h-8 rounded-full bg-gray-300 m-0.5" />
      </div>
    );
  }

  return (
    <motion.div
      className={`relative w-20 h-10 rounded-full border-2 transition-all duration-500 cursor-pointer backdrop-blur-sm ${
        isDark 
          ? 'bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 border-red-500/50 shadow-lg shadow-red-500/20' 
          : 'bg-gradient-to-r from-white/80 via-gray-50/80 to-white/80 border-red-500/30 shadow-lg shadow-red-500/10'
      }`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Racing stripe effect */}
      <div className={`absolute inset-x-2 top-1/2 h-0.5 rounded-full transition-all duration-500 ${
        isDark ? 'bg-red-500/30' : 'bg-red-500/20'
      }`} />
      
      {/* Speed indicator lights */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex gap-0.5">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-0.5 h-3 rounded-full transition-all duration-300 ${
              isDark 
                ? 'bg-red-500/60' 
                : 'bg-red-500/40'
            }`}
            animate={{
              opacity: isDark ? [0.3, 1, 0.3] : [0.2, 0.8, 0.2],
              scaleY: isDark ? [0.5, 1, 0.5] : [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
      
      {/* Toggle switch - automotive inspired */}
      <motion.div
        className={`absolute top-1 w-8 h-8 rounded-full shadow-xl flex items-center justify-center transition-all duration-500 border-2 ${
          isDark 
            ? 'bg-gradient-to-br from-red-600 via-red-500 to-red-700 border-red-400/50 shadow-red-500/40' 
            : 'bg-gradient-to-br from-red-500 via-red-400 to-red-600 border-red-300/50 shadow-red-500/30'
        }`}
        animate={{ 
          x: isDark ? 44 : 4,
          rotate: isDark ? 360 : 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25,
          duration: 0.6
        }}
      >
        {/* Automotive-style center piece */}
        <div className={`absolute inset-1 rounded-full border transition-all duration-300 ${
          isDark ? 'border-white/20' : 'border-white/30'
        }`} />
        
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <Moon className="w-4 h-4 text-white drop-shadow-sm" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <Sun className="w-4 h-4 text-white drop-shadow-sm" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Engine power indicator */}
        <motion.div
          className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
            isDark ? 'bg-red-400' : 'bg-red-500'
          }`}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Performance indicators on the right */}
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-0.5">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-0.5 rounded-full transition-all duration-300 ${
              isDark 
                ? 'bg-red-500/50' 
                : 'bg-red-500/30'
            }`}
            animate={{
              opacity: isDark ? [0.3, 0.8, 0.3] : [0.2, 0.6, 0.2],
              scaleX: isDark ? [0.7, 1, 0.7] : [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ThemeToggle;