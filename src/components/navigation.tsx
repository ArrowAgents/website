"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, Zap, ChevronDown } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Products", 
    href: "#",
    dropdown: [
      { name: "Platform", href: "/platform", description: "Build AI agents with our visual platform" },
      { name: "Local Runner", href: "/local-runner", description: "Deploy agents on your infrastructure" }
    ]
  },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Docs", href: "/docs" },
  { name: "Pricing", href: "/pricing" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-[9999]">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-32 h-16 bg-gradient-to-l from-blue-50/30 to-transparent"></div>
        <div className="absolute top-0 left-0 w-32 h-16 bg-gradient-to-r from-cyan-50/30 to-transparent"></div>
        <div className="absolute top-2 right-20 w-2 h-2 bg-blue-200 rounded-full opacity-40 animate-pulse" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-4 right-40 w-1 h-1 bg-cyan-300 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute top-3 left-40 w-1.5 h-1.5 bg-purple-200 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Zap className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
              <motion.div
                className="absolute inset-0 bg-blue-600/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-xl font-bold text-gray-900">ArrowAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-1 group">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4 group-hover:text-blue-600 transition-colors" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[10000]"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
                            >
                              <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                {dropdownItem.description}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/platform"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative">Get Started</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform relative" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 relative"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 relative overflow-hidden"
          >
            {/* Mobile Menu Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-blue-50/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-20 h-full bg-gradient-to-r from-cyan-50/20 to-transparent"></div>
            </div>
            
            <div className="relative px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <div className="px-3 py-2 text-gray-700 font-medium">{item.name}</div>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-6 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/platform"
                className="block bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 