"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Bot, 
  Users, 
  Shield, 
  Globe, 
  Code, 
  Sparkles,
  Play,
  Download
} from "lucide-react"
import { BackgroundElements } from "@/components/background-elements"

const features = [
  {
    icon: Bot,
    title: "AI Agent Creation Platform",
    description: "Build sophisticated AI agents with our intuitive visual interface. No coding required to create powerful automation workflows."
  },
  {
    icon: Users,
    title: "Multi-Agent Orchestration",
    description: "Coordinate multiple AI agents to work together as a team. Create complex workflows with seamless agent collaboration."
  },
  {
    icon: Globe,
    title: "Agent Marketplace",
    description: "Discover and deploy pre-built AI agents from our community marketplace. Find solutions for every use case."
  },
  {
    icon: Code,
    title: "Local Agent Runner",
    description: "Run your AI agents on your own infrastructure with our local deployment tools. Keep your data secure and private."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built with enterprise-grade security features. SOC 2 compliant with end-to-end encryption."
  },
  {
    icon: Sparkles,
    title: "Advanced AI Models",
    description: "Access the latest AI models and technologies. Stay ahead with cutting-edge artificial intelligence capabilities."
  }
]

const stats = [
  { label: "Active Agents", value: "10K+" },
  { label: "Happy Users", value: "5K+" },
  { label: "Marketplace Apps", value: "500+" },
  { label: "Uptime", value: "99.9%" }
]

const testimonials = [
  {
    quote: "ArrowAI transformed how our team works. Our AI agents handle routine tasks while we focus on strategy.",
    author: "Sarah Chen",
    role: "CTO, TechCorp",
    avatar: "SC"
  },
  {
    quote: "The multi-agent orchestration is incredible. We've automated our entire customer support workflow.",
    author: "Mike Johnson",
    role: "Operations Director, StartupXYZ",
    avatar: "MJ"
  },
  {
    quote: "Local deployment gives us the security we need while maintaining the power of AI automation.",
    author: "Dr. Emily Rodriguez",
    role: "Head of AI, MedTech Solutions",
    avatar: "ER"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16 pb-20">
        <BackgroundElements variant="hero" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Build AI Agents That Work as Your{" "}
                <span className="gradient-text">Teammates</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Create, deploy, and orchestrate intelligent AI agents that automate your workflows, 
                collaborate seamlessly, and scale with your business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                href="/platform"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group text-lg font-semibold pulse-glow"
              >
                <span>Start Building</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer hover-lift">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 group-hover:text-blue-700 group-hover:scale-110 transform transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <BackgroundElements variant="features" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Build AI Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From creation to deployment, ArrowAI provides all the tools you need to build, 
              manage, and scale your AI agent workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group relative overflow-hidden hover-lift"
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors group-hover:scale-110 transform duration-300">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <BackgroundElements variant="testimonials" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See how organizations are transforming their workflows with ArrowAI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden group hover:shadow-md transition-shadow hover-lift"
              >
                {/* Card Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <p className="text-gray-700 mb-4 italic group-hover:text-gray-800 transition-colors">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mr-3 group-hover:bg-blue-700 group-hover:scale-110 transform transition-all duration-300">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{testimonial.author}</div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 overflow-hidden">
        <BackgroundElements variant="cta" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Build Your AI Agent Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using ArrowAI to automate their workflows 
              and boost productivity with intelligent AI agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/platform"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 font-semibold text-lg pulse-glow"
              >
                <span>Get Started Free</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/local-runner"
                className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 font-semibold text-lg"
              >
                <Download className="h-5 w-5" />
                <span>Download Local Runner</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
