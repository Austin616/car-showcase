'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const GameLuxuryButton = ({ 
  children, 
  hoverText, 
  variant = 'primary', 
  size = 'default',
  className = '', 
  onClick, 
  icon: Icon,
  disableTextOverlay = false,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isDark } = useTheme();

  const variants = {
    primary: {
      base: 'bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white border-red-400/50',
      hover: 'shadow-red-500/60',
      glow: 'rgba(239, 68, 68, 0.4)',
      accent: '#ef4444',
      textColor: 'text-white'
    },
    secondary: {
      base: 'bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white border-gray-600/50',
      hover: 'shadow-gray-500/40',
      glow: 'rgba(156, 163, 175, 0.3)',
      accent: '#9ca3af',
      textColor: 'text-white'
    },
    ghost: {
      base: 'bg-transparent border-red-400 text-red-700',
      hover: 'shadow-red-500/30 bg-red-500/10',
      glow: 'rgba(239, 68, 68, 0.2)',
      accent: '#ef4444',
      textColor: 'text-red-700'
    }
  };

  const currentVariant = variants[variant];

  const sizeStyles = {
    default: 'px-8 py-4 text-base',
    compact: 'px-4 py-2 text-sm',
    large: 'px-12 py-6 text-lg'
  };

  const iconSizes = {
    default: 'w-5 h-5',
    compact: 'w-4 h-4',
    large: 'w-6 h-6'
  };

  return (
    <motion.button
      className={`
        group relative font-bold rounded-xl
        border-2 transition-all duration-500 overflow-hidden
        backdrop-blur-md font-rajdhani uppercase tracking-wider
        ${sizeStyles[size]} ${currentVariant.base} ${className}
      `}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 20px 40px ${currentVariant.glow}`
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      {/* Gaming-style scan lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-0.5 bg-white"
            style={{ top: `${(i + 1) * 12.5}%` }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleX: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Racing stripe effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
        animate={{
          x: isHovered ? ['-100%', '200%'] : ['-100%', '-100%']
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      />

      {/* Hexagonal pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '12px 12px'
        }}
      />

      {/* Glitch effect on hover */}
      <motion.div
        className="absolute inset-0"
        animate={isHovered ? {
          background: [
            'linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.1) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(0,255,0,0.1) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(0,0,255,0.1) 50%, transparent 100%)',
            'linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.1) 50%, transparent 100%)'
          ]
        } : {}}
        transition={{ duration: 0.3, repeat: isHovered ? 3 : 0 }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-3">
        {Icon && (
          <div className="relative flex items-center">
            <motion.div
              animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className={iconSizes[size]} />
            </motion.div>
            
            {/* Smoke effect */}
            <div className="relative ml-1">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    scale: 0, 
                    opacity: 0 
                  }}
                  animate={isHovered ? {
                    x: [0, 8 + i * 2, 12 + i * 3],
                    y: [0, -2 - i, -4 - i * 2],
                    scale: [0, 0.5 + i * 0.2, 0],
                    opacity: [0, 0.8 - i * 0.15, 0]
                  } : {
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 0
                  }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.1,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeOut"
                  }}
                  style={{
                    filter: `blur(${i * 0.5}px)`
                  }}
                />
              ))}
              
              {/* Additional smoke particles for more density */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`smoke-${i}`}
                  className={`absolute w-0.5 h-0.5 rounded-full ${
                    variant === 'primary' ? 'bg-red-300/40' : 'bg-red-500/40'
                  }`}
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    scale: 0, 
                    opacity: 0 
                  }}
                  animate={isHovered ? {
                    x: [0, 6 + i * 1.5, 10 + i * 2],
                    y: [0, -1 - i * 0.5, -3 - i * 1.5],
                    scale: [0, 1 + i * 0.3, 0],
                    opacity: [0, 0.6 - i * 0.1, 0]
                  } : {
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 0
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.2 + i * 0.15,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeOut"
                  }}
                  style={{
                    filter: `blur(${i * 0.3}px)`
                  }}
                />
              ))}
            </div>
          </div>
        )}
        
        {disableTextOverlay ? (
          /* Simple text without overlay effect */
          <span className="block">
            {children}
          </span>
        ) : (
          <div className="relative overflow-hidden">
            {/* Original text */}
            <motion.span
              className="block"
              animate={{
                y: isHovered && hoverText ? [0, -20, -40] : [-40, -20, 0],
                opacity: isHovered && hoverText ? [1, 0.5, 0] : [0, 0.5, 1],
                rotateX: isHovered && hoverText ? [0, 45, 90] : [90, 45, 0],
                scale: isHovered && hoverText ? [1, 0.9, 0.8] : [0.8, 0.9, 1]
              }}
              transition={{
                duration: 0.5,
                ease: "backOut",
                times: [0, 0.4, 1]
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {children}
            </motion.span>
            
            {/* Hover text with cool entrance/exit animation */}
            {hoverText && (
              <motion.span
                className={`absolute inset-0 block ${currentVariant.textColor} font-bold`}
                initial={{
                  y: 40,
                  opacity: 0,
                  rotateX: -90,
                  scale: 0.8
                }}
                animate={{
                  y: isHovered ? [40, 20, 0] : [0, 20, 40],
                  opacity: isHovered ? [0, 0.5, 1] : [1, 0.5, 0],
                  rotateX: isHovered ? [-90, -45, 0] : [0, -45, -90],
                  scale: isHovered ? [0.8, 0.9, 1] : [1, 0.9, 0.8],
                  textShadow: isHovered ? [
                    '0 0 0px currentColor',
                    '0 0 4px currentColor', 
                    `0 0 8px ${currentVariant.accent}`,
                    `0 0 12px ${currentVariant.accent}`
                  ] : [
                    `0 0 12px ${currentVariant.accent}`,
                    '0 0 4px currentColor',
                    '0 0 0px currentColor'
                  ]
                }}
                transition={{
                  duration: 0.5,
                  ease: "backOut",
                  times: [0, 0.4, 1]
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  fontWeight: '900',
                  letterSpacing: '0.1em'
                }}
              >
                {hoverText}
              </motion.span>
            )}
          </div>
        )}

        {/* Arrow with gaming animation */}
        <motion.span
          className="text-xl"
          animate={isHovered ? {
            x: [0, 8, 0],
            textShadow: [
              '0 0 0px currentColor',
              `0 0 8px ${currentVariant.accent}`,
              '0 0 0px currentColor'
            ]
          } : { x: 0 }}
          transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
        >
          ▶
        </motion.span>
      </div>

      {/* Power-up charging effect */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 ${
          variant === 'primary' 
            ? 'bg-gradient-to-r from-white/60 via-white to-white/60' 
            : isDark 
              ? 'bg-gradient-to-r from-red-400/60 via-red-500 to-red-400/60'
              : 'bg-gradient-to-r from-red-500/60 via-red-600 to-red-500/60'
        }`}
        animate={{
          width: isHovered ? '100%' : '0%',
          opacity: isHovered ? [0.5, 1, 0.5] : 0
        }}
        transition={{
          width: { duration: 0.4 },
          opacity: { duration: 1, repeat: isHovered ? Infinity : 0 }
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-white/40" />
      <div className="absolute top-1 right-1 w-3 h-3 border-r-2 border-t-2 border-white/40" />
      <div className="absolute bottom-1 left-1 w-3 h-3 border-l-2 border-b-2 border-white/40" />
      <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-white/40" />

      {/* Particle burst on hover */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: '50%', 
                y: '50%', 
                scale: 0,
                opacity: 1 
              }}
              animate={{ 
                x: `${50 + (Math.cos(i * 60 * Math.PI / 180) * 100)}%`,
                y: `${50 + (Math.sin(i * 60 * Math.PI / 180) * 100)}%`,
                scale: [0, 1, 0],
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  );
};

export default GameLuxuryButton;
