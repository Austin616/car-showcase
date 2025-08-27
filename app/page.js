'use client';

import { motion } from 'framer-motion';
import { Car, Sparkles } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import Image from 'next/image';

export default function Home() {
  const { isDark, mounted } = useTheme();
  
  // Available luxury cars for dynamic showcase
  const availableCars = [
    {
      src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Lamborghini Huracán",
      model: "Lamborghini Huracán",
      power: "630 HP",
      status: "Available Now"
    },
    {
      src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Ferrari 488 GTB",
      model: "Ferrari 488 GTB", 
      power: "661 HP",
      status: "Available Today"
    },
    {
      src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "McLaren 720S",
      model: "McLaren 720S",
      power: "710 HP",
      status: "Premium Available"
    },
    {
      src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Audi R8",
      model: "Audi R8 V10",
      power: "562 HP",
      status: "Ready to Rent"
    },
    {
      src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Bentley Continental GT",
      model: "Bentley Continental GT",
      power: "626 HP",
      status: "Luxury Available"
    }
  ];


  if (!mounted) {
    return <div className="min-h-screen bg-gray-100 animate-pulse" />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      {/* Hero Section */}
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

        
        {/* Hero content container */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-12 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 w-full items-center max-w-[1400px] mx-auto">
            {/* Left side content - takes 8 columns, more space */}
            <div className="lg:col-span-8 relative lg:pr-8">
              {/* Luxury backdrop panel */}
              <div className={`absolute inset-0 rounded-3xl backdrop-blur-xl border transition-all duration-300 ${
                isDark 
                  ? 'bg-black/30 border-white/10 shadow-2xl shadow-black/50' 
                  : 'bg-white/60 border-white/30 shadow-2xl shadow-black/10'
              }`} />
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10 py-12 px-8 text-left"
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
                Premium Exotic Rentals
                <Sparkles className="w-5 h-5" />
              </span>
            </motion.div>

            {/* Main title with stagger effect */}
            <div className="mb-8">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 font-orbitron"
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
                  CINCO
                </motion.span>
              </motion.h1>
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-michroma"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <span className={`tracking-tighter transition-colors duration-300 drop-shadow-lg ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  EX
                </span>
                <motion.span
                  animate={{
                    color: ['#ef4444', '#dc2626', '#b91c1c', '#ef4444']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="font-extrabold tracking-tighter drop-shadow-lg"
                >
                  O
                </motion.span>
                <span className={`tracking-tighter transition-colors duration-300 drop-shadow-lg ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  TICS
                </span>
              </motion.h1>
            </div>

            {/* Dramatic subtitle */}
            <motion.p 
              className={`text-xl sm:text-2xl lg:text-3xl mb-6 font-light tracking-wide font-exo2 transition-colors duration-300 ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <span className="italic">Unleash the</span>{' '}
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`font-bold font-rajdhani drop-shadow-lg ${
                  isDark ? 'text-red-400' : 'text-red-600'
                }`}
              >
                BEAST
              </motion.span>
              {' '}within
            </motion.p>

            {/* Power statement */}
            <motion.p 
              className={`text-base sm:text-lg mb-10 max-w-3xl mx-auto leading-relaxed font-exo2 transition-colors duration-300 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Command attention. Dominate the streets. Experience automotive perfection with our fleet of 
              <span className={`font-bold font-rajdhani ${
                isDark ? 'text-red-400' : 'text-red-600'
              }`}> Lamborghinis, Ferraris, McLarens & more</span>. 
              From intimate gatherings to grand celebrations, make every moment legendary.
            </motion.p>
            
            {/* CTA Buttons with enhanced effects */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 20px 40px rgba(239, 68, 68, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white font-bold text-base rounded-full shadow-xl shadow-red-500/40 hover:shadow-red-500/60 transition-all duration-500 overflow-hidden border-2 border-red-400/50"
              >
                <span className="relative z-10 flex items-center gap-2 font-rajdhani font-bold uppercase tracking-wider">
                  <Car className="w-5 h-5" />
                  EXPLORE FLEET
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  animate={{
                    background: [
                      'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                      'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#ef4444',
                  color: '#ffffff',
                  borderColor: '#ef4444',
                  boxShadow: '0 12px 24px rgba(239, 68, 68, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-10 py-4 border-3 font-bold text-base rounded-full transition-all duration-300 backdrop-blur-md font-rajdhani uppercase tracking-wider ${
                  isDark 
                    ? 'border-red-400 text-red-300 bg-black/40 shadow-lg shadow-black/30' 
                    : 'border-red-600 text-red-700 bg-white/90 shadow-xl shadow-red-500/20'
                }`}
              >
                GET INSTANT QUOTE
              </motion.button>
            </motion.div>

            {/* Premium Stats Section */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              {[
                { number: '50+', label: 'Exotic Cars' },
                { number: '24/7', label: 'Concierge' },
                { number: '100%', label: 'Insured' },
                { number: '5★', label: 'Rated' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 5
                  }}
                  className={`flex flex-col items-center p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 ${
                    isDark 
                      ? 'bg-black/20 border-white/10 shadow-lg shadow-black/20' 
                      : 'bg-white/40 border-white/40 shadow-lg shadow-red-500/10'
                  }`}
                >
                  <div className={`text-3xl sm:text-4xl font-black font-orbitron transition-colors duration-300 mb-2 ${
                    isDark ? 'text-red-400' : 'text-red-600'
                  }`}>
                    {stat.number}
                  </div>
                  <div className={`text-xs uppercase tracking-widest font-bold font-exo2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
            </div>
            
            {/* Right side car showcase - takes 4 columns, more separation */}
            <div className="lg:col-span-4 relative h-[400px] lg:h-[600px] lg:ml-8">
              {availableCars.map((car, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    opacity: [0, 1, 1, 0],
                    scale: [0.9, 1, 1, 0.9],
                    rotateY: [5, 0, 0, -5]
                  }}
                  transition={{
                    duration: 4,
                    times: [0, 0.2, 0.8, 1],
                    delay: index * 3,
                    repeat: Infinity,
                    repeatDelay: (availableCars.length - 1) * 3,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full max-w-lg">
                    {/* Car image */}
                    <Image
                      src={car.src}
                      alt={`${car.alt} - Available for rent at Cinco Exotics`}
                      width={600}
                      height={360}
                      className="object-contain drop-shadow-2xl w-full h-auto"
                      priority={index === 0}
                    />
                    
                    {/* Car details overlay */}
                    <motion.div
                      animate={{
                        opacity: [0, 1, 1, 0],
                        y: [20, 0, 0, -10]
                      }}
                      transition={{
                        duration: 4,
                        times: [0, 0.3, 0.7, 1],
                        delay: index * 3 + 0.5,
                        repeat: Infinity,
                        repeatDelay: (availableCars.length - 1) * 3,
                        ease: "easeOut"
                      }}
                      className={`absolute bottom-4 left-4 backdrop-blur-md rounded-lg p-3 border transition-colors duration-300 ${
                        isDark 
                          ? 'bg-black/70 border-white/30 text-white shadow-xl shadow-black/50' 
                          : 'bg-white/90 border-gray-300/50 text-gray-900 shadow-xl shadow-red-500/20'
                      }`}
                    >
                      <div className="text-sm font-bold font-rajdhani uppercase tracking-wider">
                        {car.model}
                      </div>
                      <div className={`text-xs font-exo2 ${
                        isDark ? 'text-red-400' : 'text-red-600'
                      }`}>
                        {car.power} • {car.status}
                      </div>
                    </motion.div>
                    
                    {/* Subtle glow effect */}
                    <motion.div
                      animate={{
                        background: isDark ? [
                          'radial-gradient(ellipse at center bottom, rgba(239, 68, 68, 0.15) 0%, transparent 60%)',
                          'radial-gradient(ellipse at center bottom, rgba(239, 68, 68, 0.25) 0%, transparent 60%)',
                          'radial-gradient(ellipse at center bottom, rgba(239, 68, 68, 0.15) 0%, transparent 60%)'
                        ] : [
                          'radial-gradient(ellipse at center bottom, rgba(239, 68, 68, 0.08) 0%, transparent 60%)',
                          'radial-gradient(ellipse at center bottom, rgba(239, 68, 68, 0.15) 0%, transparent 60%)',
                          'radial-gradient(ellipse at center bottom, rgba(239, 68, 68, 0.08) 0%, transparent 60%)'
                        ]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: index * 3 + 1
                      }}
                      className="absolute inset-0 rounded-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
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
