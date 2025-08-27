'use client';

import { motion } from 'framer-motion';
import { Car, Home, ArrowLeft, Sparkles, Zap } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import GameLuxuryButton from '../components/GameLuxuryButton';
import Link from 'next/link';

export default function NotFound() {
  const { isDark, mounted } = useTheme();

  if (!mounted) {
    return <div className="min-h-screen bg-gray-100 animate-pulse" />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      {/* 404 Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Animated gradient background */}
          <motion.div
            animate={{
              background: isDark ? [
                'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.25) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.25) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.25) 0%, transparent 50%)'
              ] : [
                'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />
          
          {/* Racing stripes effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent transform -skew-x-12 ${
            isDark ? 'via-red-500/10' : 'via-red-500/5'
          }`} />
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent transform skew-x-12 ${
            isDark ? 'via-red-500/8' : 'via-red-500/3'
          }`} />

          {/* Premium overlay for better text contrast */}
          <div className={`absolute inset-0 ${
            isDark 
              ? 'bg-gradient-to-b from-black/20 via-black/40 to-black/60' 
              : 'bg-gradient-to-b from-white/30 via-white/20 to-white/40'
          }`} />
          
          {/* Luxury mesh pattern */}
          <div className={`absolute inset-0 opacity-10 ${
            isDark ? 'bg-gray-900' : 'bg-gray-100'
          }`} 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'white' : 'black'} 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating car silhouettes */}
        <motion.div
          animate={{ 
            x: [-100, window?.innerWidth + 100 || 1200],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-20 ${isDark ? 'opacity-20' : 'opacity-10'}`}
        >
          <Car className="w-32 h-32 text-red-500 transform rotate-45" />
        </motion.div>
        
        <motion.div
          animate={{ 
            x: [window?.innerWidth + 100 || 1200, -100],
            rotate: [0, -5, 0, 5, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 10 }}
          className={`absolute bottom-32 ${isDark ? 'opacity-15' : 'opacity-8'}`}
        >
          <Car className="w-24 h-24 text-red-400 transform -rotate-45" />
        </motion.div>

        {/* Speed lines effect */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [-50, window?.innerWidth + 50 || 1200],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
            className={`absolute w-16 h-0.5 bg-gradient-to-r from-transparent to-transparent ${
              isDark ? 'via-red-500/40' : 'via-red-500/30'
            }`}
            style={{
              top: `${20 + Math.random() * 60}%`,
              transform: `rotate(${-5 + Math.random() * 10}deg)`
            }}
          />
        ))}

        {/* 404 content container */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-12 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto">
            {/* Luxury backdrop panel */}
            <div className={`absolute inset-0 rounded-3xl backdrop-blur-xl border transition-all duration-300 ${
              isDark 
                ? 'bg-black/30 border-white/10 shadow-2xl shadow-black/50' 
                : 'bg-white/60 border-white/30 shadow-2xl shadow-black/10'
            }`} />
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 py-16 px-8"
            >
              {/* Pre-title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-8"
              >
                <span className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest backdrop-blur-sm transition-all duration-300 ${
                  isDark 
                    ? 'bg-red-500/30 border-2 border-red-500/50 text-red-300 shadow-lg shadow-red-500/20' 
                    : 'bg-red-500/20 border-2 border-red-500/40 text-red-700 shadow-lg shadow-red-500/15'
                }`}>
                  <Sparkles className="w-5 h-5" />
                  Route Not Found
                  <Sparkles className="w-5 h-5" />
                </span>
              </motion.div>

              {/* Giant 404 with stagger effect */}
              <div className="mb-8">
                <motion.h1 
                  className="text-8xl sm:text-9xl lg:text-[12rem] xl:text-[16rem] font-black mb-4 font-orbitron leading-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <motion.span
                    animate={{
                      backgroundImage: [
                        'linear-gradient(45deg, #ef4444, #dc2626)',
                        'linear-gradient(45deg, #dc2626, #b91c1c)',
                        'linear-gradient(45deg, #b91c1c, #ef4444)',
                        'linear-gradient(45deg, #ef4444, #dc2626)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="bg-clip-text text-transparent font-extrabold tracking-tighter drop-shadow-2xl"
                  >
                    404
                  </motion.span>
                </motion.h1>
              </div>

              {/* Dramatic subtitle */}
              <motion.h2 
                className={`text-2xl sm:text-3xl lg:text-4xl font-black font-michroma mb-6 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <span className="tracking-tighter drop-shadow-lg">
                  ROAD
                </span>
                <motion.span
                  animate={{
                    color: ['#ef4444', '#dc2626', '#b91c1c', '#ef4444']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="font-extrabold tracking-tighter drop-shadow-lg mx-3"
                >
                  NOT
                </motion.span>
                <span className="tracking-tighter drop-shadow-lg">
                  FOUND
                </span>
              </motion.h2>

              {/* Error message */}
              <motion.p 
                className={`text-lg sm:text-xl lg:text-2xl mb-6 font-light tracking-wide font-exo2 transition-colors duration-300 ${
                  isDark ? 'text-gray-100' : 'text-gray-900'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <span className="italic">Looks like you've taken a</span>{' '}
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`font-bold font-rajdhani drop-shadow-lg ${
                    isDark ? 'text-red-400' : 'text-red-600'
                  }`}
                >
                  WRONG TURN
                </motion.span>
              </motion.p>

              {/* Description */}
              <motion.p 
                className={`text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-exo2 transition-colors duration-300 ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                The page you're looking for has taken a detour. Let's get you back on track to explore our 
                <span className={`font-bold font-rajdhani ${
                  isDark ? 'text-red-400' : 'text-red-600'
                }`}> premium exotic car collection</span>.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <Link href="/">
                  <GameLuxuryButton
                    variant="primary"
                    icon={Home}
                    hoverText="GO HOME"
                  >
                    BACK TO GARAGE
                  </GameLuxuryButton>
                </Link>

                <Link href="/showcase">
                  <GameLuxuryButton
                    variant="ghost"
                    icon={Car}
                    hoverText="SEE CARS"
                    className={isDark 
                      ? 'bg-black/40 shadow-lg shadow-black/30' 
                      : 'bg-white/90 shadow-xl shadow-red-500/20'
                    }
                  >
                    BROWSE COLLECTION
                  </GameLuxuryButton>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced particle effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className={`absolute w-2 h-2 bg-red-500 rounded-full ${isDark ? 'opacity-30' : 'opacity-20'}`}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 50}%`,
            }}
          />
        ))}

        {/* Bottom fade */}
        <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t to-transparent transition-colors duration-300 ${
          isDark ? 'from-black' : 'from-white'
        }`} />
      </section>
    </div>
  );
}