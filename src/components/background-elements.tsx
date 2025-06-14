"use client"

import React from 'react'

interface BackgroundElementsProps {
  variant?: 'hero' | 'features' | 'testimonials' | 'cta'
  className?: string
}

export function BackgroundElements({ variant = 'hero', className = '' }: BackgroundElementsProps) {
  switch (variant) {
    case 'hero':
      return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          {/* Floating Particles */}
          <div className="floating-particles">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="particle"></div>
            ))}
          </div>

          {/* Gradient Orbs */}
          <div className="gradient-orb gradient-orb-1"></div>
          <div className="gradient-orb gradient-orb-2"></div>
          <div className="gradient-orb gradient-orb-3"></div>

          {/* Geometric Shapes */}
          <div className="geometric-shapes">
            <div className="shape shape-triangle"></div>
            <div className="shape shape-square"></div>
            <div className="shape shape-circle"></div>
            <div className="shape shape-diamond"></div>
          </div>

          {/* Morphing Blobs */}
          <div className="morphing-blob w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 top-1/4 right-1/4" style={{animationDelay: '0s'}}></div>
          <div className="morphing-blob w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 bottom-1/3 left-1/3" style={{animationDelay: '4s'}}></div>

          {/* Sparkles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="sparkle"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      )

    case 'features':
      return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
          {/* Animated Background Lines */}
          <div className="bg-lines">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-line"></div>
            ))}
          </div>

          {/* Subtle Geometric Shapes */}
          <div className="absolute top-10 right-10 w-20 h-20 border border-blue-100 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg opacity-20 transform rotate-45"></div>
          <div className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-cyan-200 opacity-25 animate-spin" style={{animationDuration: '20s'}}></div>

          {/* Breathing Elements */}
          <div className="absolute top-20 left-1/4 w-8 h-8 bg-blue-200 rounded-full opacity-30 breathe"></div>
          <div className="absolute bottom-32 right-1/3 w-6 h-6 bg-cyan-200 rounded-full opacity-25 breathe" style={{animationDelay: '2s'}}></div>

          {/* Wave Background */}
          <div className="wave-bg"></div>
        </div>
      )

    case 'testimonials':
      return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-cyan-50/30"></div>
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-100 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s', animationDuration: '4s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-100 rounded-full opacity-15 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          </div>

          {/* Morphing Blob */}
          <div className="morphing-blob w-40 h-40 bg-gradient-to-r from-blue-300 to-purple-300 top-1/3 right-1/5" style={{animationDelay: '2s'}}></div>

          {/* Floating Dots with Sparkle Effect */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`testimonial-sparkle-${i}`}
              className="sparkle"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 4) * 15}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            />
          ))}
        </div>
      )

    case 'cta':
      return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
          {/* Background Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-lg animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-20 right-1/4 w-8 h-8 bg-white/10 transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Additional decorative elements */}
          <div className="absolute bottom-1/4 left-10 w-6 h-6 border border-white/15 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/3 right-10 w-4 h-4 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>

          {/* Morphing Blobs for CTA */}
          <div className="morphing-blob w-28 h-28 bg-white/10 top-1/4 left-1/4" style={{animationDelay: '1s'}}></div>
          <div className="morphing-blob w-20 h-20 bg-white/5 bottom-1/4 right-1/4" style={{animationDelay: '3s'}}></div>

          {/* White Sparkles */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`cta-sparkle-${i}`}
              className="absolute w-3 h-3 bg-white/30 rounded-full"
              style={{
                left: `${25 + i * 15}%`,
                top: `${40 + (i % 2) * 20}%`,
                animation: `sparkle ${2 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          ))}
        </div>
      )

    default:
      return null
  }
}

// Additional specialized background components
export function FloatingDots({ count = 6, className = '' }: { count?: number; className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-40 animate-pulse hover-lift"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  )
}

export function AnimatedGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse"></div>
    </div>
  )
}

export function InteractiveBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Gradient Border Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 gradient-border rounded-lg opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-12 h-12 gradient-border rounded-full opacity-15"></div>
      
      {/* Breathing Elements */}
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-20 breathe"></div>
      <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-cyan-300 rounded-full opacity-25 breathe" style={{animationDelay: '2s'}}></div>
    </div>
  )
} 