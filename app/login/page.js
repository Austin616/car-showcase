'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Car, Lock, Mail, User, ArrowLeft } from 'lucide-react';
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
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Premium Overlay Gradients */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-red-950/20 via-gray-900/60 to-black/80' 
            : 'bg-gradient-to-br from-red-50/80 via-white/40 to-gray-100/60'
        }`} />
        
        {/* Luxury Mesh Pattern */}
        <div className={`absolute inset-0 opacity-30 ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`} 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${
            isDark ? 'rgba(239, 68, 68, 0.15)' : 'rgba(239, 68, 68, 0.1)'
          } 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Floating Elements */}
        <motion.div 
          className={`absolute top-20 left-10 w-32 h-32 rounded-full ${
            isDark ? 'bg-red-500/10' : 'bg-red-500/5'
          } blur-xl`}
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={`absolute bottom-32 right-16 w-24 h-24 rounded-full ${
            isDark ? 'bg-red-400/10' : 'bg-red-400/5'
          } blur-xl`}
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
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
