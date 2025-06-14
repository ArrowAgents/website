"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Book, 
  Code, 
  Video, 
  FileText, 
  Users, 
  MessageCircle,
  ExternalLink,
  Search,
  BookOpen,
  Lightbulb,
  Zap
} from "lucide-react"

const quickStart = [
  {
    title: "Getting Started",
    description: "Learn the basics of ArrowAI and create your first agent in minutes.",
    icon: Zap,
    time: "5 min read",
    href: "/docs/getting-started"
  },
  {
    title: "Agent Builder Guide",
    description: "Master our visual agent builder with step-by-step tutorials.",
    icon: Code,
    time: "15 min read",
    href: "/docs/agent-builder"
  },
  {
    title: "Multi-Agent Orchestration",
    description: "Learn how to coordinate multiple agents working together.",
    icon: Users,
    time: "20 min read",
    href: "/docs/orchestration"
  },
  {
    title: "API Reference",
    description: "Complete reference for ArrowAI APIs and integrations.",
    icon: Book,
    time: "Reference",
    href: "/docs/api"
  }
]

const categories = [
  {
    title: "Getting Started",
    description: "New to ArrowAI? Start here to learn the fundamentals.",
    icon: BookOpen,
    articles: [
      { title: "What is ArrowAI?", href: "/docs/intro" },
      { title: "Creating Your First Agent", href: "/docs/first-agent" },
      { title: "Understanding Workflows", href: "/docs/workflows" },
      { title: "Platform Overview", href: "/docs/platform" }
    ]
  },
  {
    title: "Agent Development",
    description: "Deep dive into building sophisticated AI agents.",
    icon: Code,
    articles: [
      { title: "Agent Architecture", href: "/docs/architecture" },
      { title: "Custom Logic Blocks", href: "/docs/logic-blocks" },
      { title: "Data Integration", href: "/docs/data-integration" },
      { title: "Testing & Debugging", href: "/docs/testing" }
    ]
  },
  {
    title: "Multi-Agent Systems",
    description: "Learn to orchestrate multiple agents working together.",
    icon: Users,
    articles: [
      { title: "Orchestration Patterns", href: "/docs/patterns" },
      { title: "Agent Communication", href: "/docs/communication" },
      { title: "Workflow Coordination", href: "/docs/coordination" },
      { title: "Error Handling", href: "/docs/error-handling" }
    ]
  },
  {
    title: "Integrations",
    description: "Connect your agents with external services and APIs.",
    icon: ExternalLink,
    articles: [
      { title: "API Integrations", href: "/docs/api-integrations" },
      { title: "Webhooks", href: "/docs/webhooks" },
      { title: "Database Connections", href: "/docs/databases" },
      { title: "Third-party Services", href: "/docs/services" }
    ]
  },
  {
    title: "Deployment",
    description: "Deploy your agents to production environments.",
    icon: Zap,
    articles: [
      { title: "Cloud Deployment", href: "/docs/cloud-deployment" },
      { title: "Local Runner Setup", href: "/docs/local-runner" },
      { title: "Environment Variables", href: "/docs/environment" },
      { title: "Monitoring & Logs", href: "/docs/monitoring" }
    ]
  },
  {
    title: "Best Practices",
    description: "Tips and best practices for building effective agents.",
    icon: Lightbulb,
    articles: [
      { title: "Agent Design Patterns", href: "/docs/design-patterns" },
      { title: "Performance Optimization", href: "/docs/performance" },
      { title: "Security Guidelines", href: "/docs/security" },
      { title: "Troubleshooting", href: "/docs/troubleshooting" }
    ]
  }
]

const resources = [
  {
    title: "Video Tutorials",
    description: "Watch step-by-step video guides for building agents.",
    icon: Video,
    href: "/docs/videos",
    count: "25+ videos"
  },
  {
    title: "Community Forum",
    description: "Get help from the ArrowAI community and share your knowledge.",
    icon: MessageCircle,
    href: "/community",
    count: "5K+ members"
  },
  {
    title: "Example Projects",
    description: "Explore real-world examples and templates to get started quickly.",
    icon: FileText,
    href: "/docs/examples",
    count: "50+ examples"
  }
]

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Learn to Build{" "}
                <span className="gradient-text">AI Agents</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Comprehensive guides, tutorials, and resources to help you master 
                AI agent development with ArrowAI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <div className="relative max-w-md mx-auto sm:mx-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Link
                href="/docs/getting-started"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running with ArrowAI in just a few steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStart.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={item.href}
                  className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{item.time}</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive documentation organized by topic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                      <category.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.articles.map((article, idx) => (
                      <li key={idx}>
                        <Link
                          href={article.href}
                          className="text-sm text-blue-600 hover:text-blue-700 hover:underline flex items-center"
                        >
                          <span>{article.title}</span>
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More ways to learn and get help with ArrowAI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={resource.href}
                  className="block bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <resource.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-blue-600 group-hover:text-blue-700">
                    <span className="text-sm font-medium">{resource.count}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Put your knowledge into practice and create your first AI agent today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/platform"
                className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 font-semibold text-lg"
              >
                <span>Start Building</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/community"
                className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 font-semibold text-lg"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Join Community</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 