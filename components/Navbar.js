'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Car, Calendar, Users, Phone, Info, Sun, Moon, Home, Camera, Settings } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import ButtonPopover from './ButtonPopover';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, mounted, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { href: '/showcase', label: 'Showcase', icon: <Car className="w-4 h-4" /> },
    { href: '/gallery', label: 'Gallery', icon: <Camera className="w-4 h-4" /> },
    { href: '/services', label: 'Services', icon: <Settings className="w-4 h-4" /> },
  ];

  if (!mounted) {
    return (
      <div className="fixed left-0 right-0 top-0 z-[999999] mx-auto flex w-full items-center justify-between bg-white/80 backdrop-blur-lg px-4 py-4 sm:px-8">
        <div className="flex items-center gap-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded animate-pulse" />
          <div className="w-32 h-6 bg-gray-300 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className={`
      fixed left-0 right-0 top-0 z-[999999] mx-auto flex w-full items-center justify-between border-b border-transparent py-2 transition-all duration-300 ease-in-out sm:px-8 ${
        scrolled
          ? isDark 
            ? 'border-red-500/20 bg-black/95 px-4 sm:mt-2 sm:w-[70rem] sm:rounded-full sm:bg-black/90 sm:px-8 sm:py-3 sm:shadow-lg sm:shadow-red-500/20'
            : 'border-red-500/20 bg-white/95 px-4 sm:mt-2 sm:w-[70rem] sm:rounded-full sm:bg-white/90 sm:px-8 sm:py-3 sm:shadow-lg sm:shadow-red-500/10'
          : 'px-4 sm:py-4'
      }
    `}>
      {/* Logo */}
      <Link href="/">
        <div className="group flex items-center gap-x-3">
          <motion.div 
            className={`
              flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${
                scrolled 
                  ? 'w-10 h-10 sm:w-12 sm:h-12' 
                  : 'w-12 h-12 sm:w-14 sm:h-14'
              } ${
                isDark 
                  ? 'bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-500/20' 
                  : 'bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-500/20'
              }
            `}
            whileHover={{ rotate: 5 }}
          >
            <Car className={`${scrolled ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-6 h-6 sm:w-7 sm:h-7'} text-white`} />
          </motion.div>
          
          <div className={`
            overflow-hidden transition-all duration-300 ${
              scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
            } font-bold ${isDark ? 'text-white' : 'text-gray-900'} font-orbitron
          `}>
            <span className="">Cinco</span>
            <span className="text-red-500 ml-1">Exotics</span>
          </div>
        </div>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className={`
          transition-all duration-300 ease-in-out sm:hidden p-2 rounded-lg ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          } ${isDark ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}
        `}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        variants={{
          hidden: { width: "100%", left: "100%" },
          visible: { width: "100%", left: 0 }
        }}
        animate={isMenuOpen ? "visible" : "hidden"}
        className={`
          fixed bottom-0 left-0 right-0 top-0 z-[999999] flex h-full w-full flex-col items-center overflow-hidden px-4 sm:hidden ${
            !isMenuOpen ? 'pointer-events-none' : ''
          } ${isDark ? 'bg-black' : 'bg-white'}
        `}
      >
        <button
          onClick={toggleMenu}
          className={`
            absolute right-4 top-2 transition-all duration-300 ease-in-out sm:hidden p-2 rounded-lg ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            } ${isDark ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}
          `}
        >
          <X className="w-6 h-6" />
        </button>

        {navLinks.map((link, index) => (
          <Link
            key={link.href}
            onClick={() => setIsMenuOpen(false)}
            className={`
              group mt-14 first:mt-14 flex w-full items-center justify-between gap-x-3 border-b p-4 text-left text-2xl font-semibold transition-colors ${
                isDark 
                  ? 'border-gray-800 text-white hover:border-red-500 hover:bg-red-500/10 hover:text-red-400'
                  : 'border-gray-200 text-gray-900 hover:border-red-500 hover:bg-red-500/10 hover:text-red-600'
              }
            `}
            href={link.href}
          >
            <div className="flex items-center gap-x-3 font-rajdhani">
              {link.icon}
              {link.label}
            </div>
            <ChevronRight className="relative left-0 h-6 w-6 stroke-[3] opacity-50 transition-all duration-200 ease-in-out group-hover:left-1 group-hover:opacity-100" />
          </Link>
        ))}

        {/* Mobile Theme Switch */}
        <button 
          onClick={() => {
            toggleTheme();
            setIsMenuOpen(false);
          }}
          className={`
            group mt-14 flex w-full items-center justify-between gap-x-3 border-b p-4 text-left text-2xl font-semibold transition-colors ${
              isDark 
                ? 'border-gray-800 text-white hover:border-red-500 hover:bg-red-500/10 hover:text-red-400'
                : 'border-gray-200 text-gray-900 hover:border-red-500 hover:bg-red-500/10 hover:text-red-600'
            }
          `}
        >
          <div className="flex items-center gap-x-3 font-rajdhani">
            <div className="relative overflow-hidden w-8 h-8 flex items-center justify-center rounded-lg">
              <AnimatePresence initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun-mobile"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon-mobile"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </div>
          <ChevronRight className="relative left-0 h-6 w-6 stroke-[3] opacity-50 transition-all duration-200 ease-in-out group-hover:left-1 group-hover:opacity-100" />
        </button>

        {/* Premium Mobile Login Button */}
        <motion.button 
          onClick={() => setIsMenuOpen(false)}
          className={`
            relative mt-8 px-12 py-4 rounded-2xl font-bold text-xl transition-all duration-300 font-rajdhani uppercase tracking-wider overflow-hidden ${
              isDark 
                ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white border-2 border-red-400/40 shadow-2xl shadow-red-500/40'
                : 'bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-white border-2 border-red-300/60 shadow-2xl shadow-red-500/30'
            }
          `}
          whileHover={{ 
            scale: 1.05,
            boxShadow: isDark 
              ? '0 25px 50px rgba(239, 68, 68, 0.5)' 
              : '0 25px 50px rgba(239, 68, 68, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated background waves */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 0% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 100% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 0% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Luxury shine sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
            animate={{
              x: ['-120%', '120%']
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1
            }}
          />
          
          {/* Premium double border */}
          <div className="absolute inset-1 rounded-xl border border-white/20" />
          
          <span className="relative z-10 flex items-center justify-center gap-3">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`w-5 h-5 rounded-full border-2 border-dashed ${
                isDark ? 'border-red-200/70' : 'border-red-100/90'
              }`}
            />
            Login
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`w-5 h-5 rounded-full border-2 border-dashed ${
                isDark ? 'border-red-200/70' : 'border-red-100/90'
              }`}
            />
          </span>
        </motion.button>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden items-center w-full justify-end gap-x-6 sm:flex">
        {/* Nav Links */}
        <div className="flex items-center gap-x-6">
          {navLinks.slice(0, 4).map((link) => (
            <Link key={link.href} href={link.href}>
              <motion.div 
                className={`
                  relative flex items-center gap-x-2 cursor-pointer text-sm font-semibold transition-all duration-300 px-3 py-2 rounded-lg font-rajdhani ${
                    isDark ? 'text-white hover:text-red-400' : 'text-gray-900 hover:text-red-600'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.icon}
                {link.label}
                
                {/* Hover underline */}
                <motion.div
                  className="absolute bottom-0 left-1/2 h-0.5 bg-red-500"
                  initial={{ width: 0, x: '-50%' }}
                  whileHover={{ width: '80%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          ))}
        </div>
        
        {/* Vertical Separator */}
        <div className={`w-px h-6 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`} />
        
        {/* Action Buttons */}
        <div className="flex items-center gap-x-3">
          {/* Contact Button */}
          <ButtonPopover content="Contact">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center"
            >
              <Link
                href="/contact"
                className={`
                  inline-flex items-center justify-center rounded-xl border h-10 w-10 transition-all duration-200 ${
                    isDark 
                      ? 'border-transparent hover:border-red-500/50 hover:bg-red-500/10 text-gray-300 hover:text-red-400' 
                      : 'border-transparent hover:border-red-500/50 hover:bg-red-500/10 text-gray-700 hover:text-red-600'
                  }
                `}
              >
                <Phone className="h-4 w-4" />
              </Link>
            </motion.div>
          </ButtonPopover>
          
          {/* About Button */}
          <ButtonPopover content="About">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center"
            >
              <Link
                href="/about"
                className={`
                  inline-flex items-center justify-center rounded-xl border h-10 w-10 transition-all duration-200 ${
                    isDark 
                      ? 'border-transparent hover:border-red-500/50 hover:bg-red-500/10 text-gray-300 hover:text-red-400' 
                      : 'border-transparent hover:border-red-500/50 hover:bg-red-500/10 text-gray-700 hover:text-red-600'
                  }
                `}
              >
                <Info className="h-4 w-4" />
              </Link>
            </motion.div>
          </ButtonPopover>
          
          {/* Theme Toggle Button */}
          <ButtonPopover content={isDark ? "Light Mode" : "Dark Mode"}>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center"
            >
              <button
                onClick={toggleTheme}
                className={`
                  relative overflow-hidden inline-flex items-center justify-center rounded-xl border h-10 w-10 transition-all duration-200 ${
                    isDark 
                      ? 'border-transparent hover:border-red-500/50 hover:bg-red-500/10 text-gray-300 hover:text-red-400' 
                      : 'border-transparent hover:border-red-500/50 hover:bg-red-500/10 text-gray-700 hover:text-red-600'
                  }
                `}
              >
                <AnimatePresence initial={false}>
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 30, opacity: 0 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Sun className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 30, opacity: 0 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Moon className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </ButtonPopover>
          
          {/* Book Today Button */}
          <ButtonPopover content="Book Your Dream Car">
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  inline-flex items-center justify-center rounded-xl border h-10 px-4 text-sm font-medium transition-all duration-200 ${
                    isDark 
                      ? 'border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700' 
                      : 'border-red-500 bg-red-500 text-white hover:bg-red-600 hover:border-red-600'
                  }
                `}
              >
                Book Today
              </motion.button>
            </Link>
          </ButtonPopover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;