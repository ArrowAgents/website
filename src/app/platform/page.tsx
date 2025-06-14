"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Bot, 
  Workflow, 
  Code2, 
  Shield, 
  Settings,
  BarChart3,
  MessageSquare,
  Database
} from "lucide-react"

const platformFeatures = [
  {
    icon: Bot,
    title: "Visual Agent Builder",
    description: "Create AI agents with our drag-and-drop interface. No coding required - just connect blocks and define behaviors.",
    features: ["Drag & Drop Interface", "Pre-built Templates", "Custom Logic Blocks", "Real-time Preview"]
  },
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    description: "Design complex workflows that coordinate multiple agents working together seamlessly.",
    features: ["Multi-agent Coordination", "Conditional Logic", "Error Handling", "Parallel Processing"]
  },
  {
    icon: Code2,
    title: "Advanced Scripting",
    description: "For power users, write custom scripts and integrate with any API or service.",
    features: ["Python & JavaScript", "API Integrations", "Custom Functions", "Version Control"]
  },
  {
    icon: Database,
    title: "Knowledge Management",
    description: "Give your agents access to your data with built-in knowledge base integration.",
    features: ["Document Upload", "Vector Search", "Real-time Sync", "Access Controls"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Monitoring",
    description: "Track agent performance, monitor workflows, and optimize your automation.",
    features: ["Performance Metrics", "Usage Analytics", "Error Tracking", "Custom Dashboards"]
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built with enterprise-grade security features and compliance standards.",
    features: ["SOC 2 Compliant", "End-to-end Encryption", "Role-based Access", "Audit Logs"]
  }
]

const useCases = [
  {
    title: "Customer Support",
    description: "Automate ticket routing, provide instant responses, and escalate complex issues to human agents.",
    icon: MessageSquare,
    benefits: ["24/7 Availability", "Instant Responses", "Smart Escalation", "Multi-language Support"]
  },
  {
    title: "Data Processing",
    description: "Extract, transform, and analyze data from multiple sources automatically.",
    icon: Database,
    benefits: ["Automated ETL", "Real-time Processing", "Error Detection", "Custom Reports"]
  },
  {
    title: "Content Creation",
    description: "Generate, review, and publish content across multiple channels and formats.",
    icon: Settings,
    benefits: ["Multi-format Output", "Brand Consistency", "SEO Optimization", "Automated Publishing"]
  }
]

export default function PlatformPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                The Most Powerful{" "}
                <span className="gradient-text">AI Agent Platform</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Build, deploy, and manage AI agents with our comprehensive platform. 
                From simple automations to complex multi-agent orchestrations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                href="#get-started"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group text-lg font-semibold"
              >
                <span>Start Building Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <span>View Documentation</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From visual builders to advanced scripting, our platform provides all the tools 
              you need to create sophisticated AI agents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Every Use Case
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you&apos;re automating customer support, processing data, or creating content, 
              our platform adapts to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Integrates with Your Existing Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with popular services and APIs to extend your agents&apos; capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {/* Integration logos would go here */}
            <div className="bg-gray-100 h-16 w-24 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">Slack</span>
            </div>
            <div className="bg-gray-100 h-16 w-24 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">Discord</span>
            </div>
            <div className="bg-gray-100 h-16 w-24 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">Notion</span>
            </div>
            <div className="bg-gray-100 h-16 w-24 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">Zapier</span>
            </div>
            <div className="bg-gray-100 h-16 w-24 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">GitHub</span>
            </div>
            <div className="bg-gray-100 h-16 w-24 rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">+100 more</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Build Your First AI Agent?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Start with our free tier and build up to 5 agents. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 font-semibold text-lg"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/marketplace"
                className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 font-semibold text-lg"
              >
                <span>Browse Marketplace</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 