'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Car, Lock, Mail, User, ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '../../components/ThemeProvider';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isDark, mounted } = useTheme();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      {/* Hero Section Background - Matching Home Page */}
      <div className="absolute inset-0 overflow-hidden">
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
            x: [-100, typeof window !== 'undefined' ? window.innerWidth + 100 : 1200],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-20 ${isDark ? 'opacity-20' : 'opacity-10'}`}
        >
          <Car className="w-32 h-32 text-red-500 transform rotate-45" />
        </motion.div>
        
        <motion.div
          animate={{ 
            x: [typeof window !== 'undefined' ? window.innerWidth + 100 : 1200, -100],
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
              x: [-50, typeof window !== 'undefined' ? window.innerWidth + 50 : 1200],
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

        {/* Floating sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className={`absolute ${isDark ? 'text-red-400/60' : 'text-red-500/40'}`}
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <div className="absolute top-8 left-8 z-10">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex items-center gap-x-2 px-4 py-2 rounded-xl border transition-all duration-200 ${
                isDark 
                  ? 'border-gray-700/50 bg-gray-900/50 hover:bg-gray-800/80 text-gray-300 hover:text-white backdrop-blur-lg' 
                  : 'border-gray-200/50 bg-white/50 hover:bg-gray-50/80 text-gray-700 hover:text-gray-900 backdrop-blur-lg'
              }
            `}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </motion.button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`
            w-full max-w-md p-8 rounded-3xl border shadow-2xl backdrop-blur-xl ${
              isDark 
                ? 'bg-black/30 border-white/10 shadow-black/50' 
                : 'bg-white/60 border-white/30 shadow-black/10'
            }
          `}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`
                w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  isDark ? 'bg-red-600/20' : 'bg-red-500/10'
                }
              `}
            >
              <Car className={`w-8 h-8 ${
                isDark ? 'text-red-400' : 'text-red-600'
              }`} />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`
                text-3xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                } drop-shadow-sm
              `}
            >
              {isLogin ? 'Welcome Back' : 'Join Us Today'}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`
                text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                } drop-shadow-sm
              `}
            >
              {isLogin 
                ? 'Sign in to book your dream car' 
                : 'Create an account to start booking luxury cars'
              }
            </motion.p>
          </div>

          {/* Toggle Buttons */}
          <div className={`
            flex rounded-xl p-1 mb-6 ${
              isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'
            }
          `}>
            <button
              onClick={() => setIsLogin(true)}
              className={`
                flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isLogin
                    ? (isDark ? 'bg-red-600 text-white' : 'bg-red-500 text-white')
                    : (isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900')
                }
              `}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`
                flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  !isLogin
                    ? (isDark ? 'bg-red-600 text-white' : 'bg-red-500 text-white')
                    : (isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900')
                }
              `}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {/* First Name */}
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`
                        w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 text-sm ${
                          isDark 
                            ? 'bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-red-500/50 focus:bg-gray-800/80' 
                            : 'bg-white/50 border-gray-200/50 text-gray-900 placeholder-gray-500 focus:border-red-500/50 focus:bg-white/80'
                        } backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500/20
                      `}
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`
                        w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 text-sm ${
                          isDark 
                            ? 'bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-red-500/50 focus:bg-gray-800/80' 
                            : 'bg-white/50 border-gray-200/50 text-gray-900 placeholder-gray-500 focus:border-red-500/50 focus:bg-white/80'
                        } backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500/20
                      `}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email */}
            <div className="relative">
              <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className={`
                  w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-200 text-sm ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-red-500/50 focus:bg-gray-800/80' 
                      : 'bg-white/50 border-gray-200/50 text-gray-900 placeholder-gray-500 focus:border-red-500/50 focus:bg-white/80'
                  } backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500/20
                `}
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className={`
                  w-full pl-10 pr-12 py-3 rounded-xl border transition-all duration-200 text-sm ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-red-500/50 focus:bg-gray-800/80' 
                      : 'bg-white/50 border-gray-200/50 text-gray-900 placeholder-gray-500 focus:border-red-500/50 focus:bg-white/80'
                  } backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500/20
                `}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                } transition-colors duration-200`}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Confirm Password */}
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`
                      w-full pl-10 pr-12 py-3 rounded-xl border transition-all duration-200 text-sm ${
                        isDark 
                          ? 'bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-red-500/50 focus:bg-gray-800/80' 
                          : 'bg-white/50 border-gray-200/50 text-gray-900 placeholder-gray-500 focus:border-red-500/50 focus:bg-white/80'
                      } backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500/20
                    `}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                      isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
                    } transition-colors duration-200`}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  isDark 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-red-500 hover:bg-red-600 text-white'
                } shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
              `}
            >
              {isLogin ? 'Sign In & Book Now' : 'Create Account & Start Booking'}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className={`flex-1 h-px ${
              isDark ? 'bg-gray-700' : 'bg-gray-300'
            }`} />
            <span className={`px-4 text-xs font-medium ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              or continue with
            </span>
            <div className={`flex-1 h-px ${
              isDark ? 'bg-gray-700' : 'bg-gray-300'
            }`} />
          </div>

          {/* Google Login Button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              // Handle Google login here
              console.log('Google login clicked');
            }}
            className={`
              w-full py-3 px-4 rounded-xl border font-medium text-sm transition-all duration-200 flex items-center justify-center gap-x-3 ${
                isDark 
                  ? 'bg-white/10 border-gray-600/50 text-white hover:bg-white/20 hover:border-gray-500' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
              } shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 backdrop-blur-sm
            `}
          >
            {/* Google Icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            
            <span>
              {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
            </span>
          </motion.button>

          {/* Footer */}
          {isLogin && (
            <div className="mt-6 text-center">
              <Link
                href="#"
                className={`text-sm ${
                  isDark ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-700'
                } transition-colors duration-200`}
              >
                Forgot your password?
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
