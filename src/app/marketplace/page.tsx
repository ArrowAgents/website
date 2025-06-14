"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Bot, 
  Star, 
  Download, 
  Users, 
  MessageSquare,
  BarChart3,
  ShoppingCart,
  Calendar,
  Mail,
  FileText,
  Search,
  Filter,
  Zap
} from "lucide-react"

const categories = [
  { name: "All", count: 500, active: true },
  { name: "Customer Support", count: 120, active: false },
  { name: "Data Analysis", count: 85, active: false },
  { name: "Content Creation", count: 95, active: false },
  { name: "Sales & Marketing", count: 75, active: false },
  { name: "Productivity", count: 125, active: false },
]

const featuredAgents = [
  {
    id: 1,
    name: "Customer Support Pro",
    description: "Advanced customer support agent with multi-language support and smart escalation.",
    category: "Customer Support",
    rating: 4.9,
    downloads: 12500,
    price: "Free",
    icon: MessageSquare,
    features: ["24/7 Support", "Multi-language", "Smart Routing", "Analytics"],
    author: "ArrowAI Team",
    verified: true
  },
  {
    id: 2,
    name: "Data Insights Agent",
    description: "Analyze your data and generate actionable insights with automated reporting.",
    category: "Data Analysis",
    rating: 4.8,
    downloads: 8900,
    price: "$29/month",
    icon: BarChart3,
    features: ["Auto Reports", "Data Visualization", "Trend Analysis", "Alerts"],
    author: "DataCorp",
    verified: true
  },
  {
    id: 3,
    name: "Content Creator",
    description: "Generate high-quality content for blogs, social media, and marketing campaigns.",
    category: "Content Creation",
    rating: 4.7,
    downloads: 15200,
    price: "$19/month",
    icon: FileText,
    features: ["SEO Optimized", "Multi-format", "Brand Voice", "Scheduling"],
    author: "ContentAI",
    verified: false
  },
  {
    id: 4,
    name: "Sales Assistant",
    description: "Automate lead qualification, follow-ups, and sales pipeline management.",
    category: "Sales & Marketing",
    rating: 4.6,
    downloads: 6700,
    price: "$39/month",
    icon: ShoppingCart,
    features: ["Lead Scoring", "Auto Follow-up", "CRM Integration", "Analytics"],
    author: "SalesForce Pro",
    verified: true
  },
  {
    id: 5,
    name: "Meeting Scheduler",
    description: "Smart calendar management with automatic scheduling and conflict resolution.",
    category: "Productivity",
    rating: 4.8,
    downloads: 9800,
    price: "Free",
    icon: Calendar,
    features: ["Smart Scheduling", "Conflict Resolution", "Time Zones", "Reminders"],
    author: "ProductivityHub",
    verified: true
  },
  {
    id: 6,
    name: "Email Assistant",
    description: "Intelligent email management with auto-responses and priority sorting.",
    category: "Productivity",
    rating: 4.5,
    downloads: 11200,
    price: "$15/month",
    icon: Mail,
    features: ["Auto Response", "Priority Sorting", "Templates", "Analytics"],
    author: "EmailPro",
    verified: false
  }
]

const stats = [
  { label: "Total Agents", value: "500+" },
  { label: "Active Users", value: "50K+" },
  { label: "Downloads", value: "1M+" },
  { label: "Avg Rating", value: "4.7★" }
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Discover Amazing{" "}
                <span className="gradient-text">AI Agents</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Browse our marketplace of pre-built AI agents. Find the perfect solution 
                for your needs or get inspired to build your own.
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
                  placeholder="Search agents..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured AI Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hand-picked agents that deliver exceptional results for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <agent.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{agent.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {agent.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {agent.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {agent.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {agent.features.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{agent.features.length - 2} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">
                          {agent.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">{agent.author}</span>
                      {agent.verified && (
                        <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">✓</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Download className="h-4 w-4" />
                      <span className="text-sm">{agent.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{agent.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 text-sm">
                      <span>Install</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/marketplace/browse"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>View All Agents</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Become a Marketplace Developer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Share your AI agents with the community and earn revenue from your creations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Build</h3>
              <p className="text-gray-600">
                Create amazing AI agents using our platform and tools.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share</h3>
              <p className="text-gray-600">
                Publish your agents to our marketplace for others to discover.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn</h3>
              <p className="text-gray-600">
                Generate revenue from downloads and subscriptions.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/developer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2 font-semibold text-lg"
            >
              <span>Start Developing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Supercharge Your Workflow?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Browse our marketplace and find the perfect AI agents for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/platform"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 font-semibold text-lg"
              >
                <span>Start Building</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/marketplace/browse"
                className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 font-semibold text-lg"
              >
                <span>Browse All Agents</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 