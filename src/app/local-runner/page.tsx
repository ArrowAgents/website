"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Download, 
  Shield, 
  Server, 
  Monitor, 
  CheckCircle,
  Terminal,
  Lock,
  Zap,
  HardDrive,
  Settings
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Complete Data Privacy",
    description: "Your data never leaves your infrastructure. Run AI agents entirely on your own servers with full control over your information."
  },
  {
    icon: Server,
    title: "On-Premise Deployment",
    description: "Deploy agents directly on your servers, cloud instances, or edge devices. No external dependencies required."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Built-in security features including encryption, access controls, and audit logging for enterprise compliance."
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for local execution with minimal resource usage. Scale from single agents to complex orchestrations."
  },
  {
    icon: HardDrive,
    title: "Offline Capable",
    description: "Run agents without internet connectivity. Perfect for air-gapped environments and edge computing scenarios."
  },
  {
    icon: Settings,
    title: "Easy Configuration",
    description: "Simple setup with configuration files. Integrate with your existing infrastructure and monitoring tools."
  }
]

const systemRequirements = [
  {
    os: "Windows",
    version: "Windows 10/11 (64-bit)",
    ram: "4GB RAM minimum, 8GB recommended",
    storage: "2GB available space",
    downloadUrl: "/downloads/arrowai-runner-windows.exe"
  },
  {
    os: "macOS",
    version: "macOS 10.15 or later",
    ram: "4GB RAM minimum, 8GB recommended", 
    storage: "2GB available space",
    downloadUrl: "/downloads/arrowai-runner-macos.dmg"
  },
  {
    os: "Linux",
    version: "Ubuntu 18.04+ / CentOS 7+",
    ram: "2GB RAM minimum, 4GB recommended",
    storage: "1GB available space",
    downloadUrl: "/downloads/arrowai-runner-linux.tar.gz"
  }
]

const useCases = [
  {
    title: "Financial Services",
    description: "Meet strict compliance requirements while automating sensitive financial processes.",
    icon: Lock,
    benefits: ["Regulatory Compliance", "Data Sovereignty", "Audit Trails", "Zero Trust Security"]
  },
  {
    title: "Healthcare",
    description: "Process patient data locally while maintaining HIPAA compliance and privacy standards.",
    icon: Shield,
    benefits: ["HIPAA Compliant", "Patient Privacy", "Local Processing", "Secure Storage"]
  },
  {
    title: "Manufacturing",
    description: "Deploy agents on factory floors and edge devices for real-time process automation.",
    icon: Settings,
    benefits: ["Edge Computing", "Real-time Processing", "Offline Operation", "Industrial IoT"]
  },
  {
    title: "Government",
    description: "Run classified workloads in air-gapped environments with complete data control.",
    icon: Server,
    benefits: ["Air-gapped Deployment", "Classification Levels", "Data Sovereignty", "Custom Security"]
  }
]

export default function LocalRunnerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Run AI Agents{" "}
                <span className="gradient-text">On Your Infrastructure</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                Deploy ArrowAI agents locally with complete data privacy and control. 
                Perfect for enterprises with strict security and compliance requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                href="#download"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group text-lg font-semibold"
              >
                <Download className="h-5 w-5" />
                <span>Download Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs/local-runner"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <Terminal className="h-5 w-5" />
                <span>View Documentation</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Free & Open Source</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No Internet Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Enterprise Ready</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Local Deployment?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maintain complete control over your AI agents and data with our local runner solution.
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
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Download ArrowAI Local Runner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your platform and get started with local AI agent deployment in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {systemRequirements.map((system, index) => (
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
                    <Monitor className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {system.os}
                    </h3>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Version:</span>
                      <p className="text-sm text-gray-600">{system.version}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Memory:</span>
                      <p className="text-sm text-gray-600">{system.ram}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Storage:</span>
                      <p className="text-sm text-gray-600">{system.storage}</p>
                    </div>
                  </div>

                  <Link
                    href={system.downloadUrl}
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-medium"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download for {system.os}</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need help with installation? Check out our comprehensive setup guide.
            </p>
            <Link
              href="/docs/local-runner/installation"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>Installation Guide</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Regulated Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the strictest compliance and security requirements with local deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {useCase.description}
                    </p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
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

      {/* Getting Started */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy your first local AI agent in minutes with our streamlined setup process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Download & Install</h3>
              <p className="text-gray-600">
                Download the local runner for your platform and follow the simple installation wizard.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Configure Settings</h3>
              <p className="text-gray-600">
                Set up your environment variables and configure security settings for your deployment.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deploy Agents</h3>
              <p className="text-gray-600">
                Import your agents from the cloud platform or build new ones directly on your local runner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Deploy Locally?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take control of your AI agents with local deployment. Download now and start building 
              secure, private automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#download"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-semibold text-lg"
              >
                <Download className="h-5 w-5" />
                <span>Download Local Runner</span>
              </Link>
              <Link
                href="/docs/local-runner"
                className="border border-gray-400 text-gray-300 px-8 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 font-semibold text-lg"
              >
                <Terminal className="h-5 w-5" />
                <span>View Documentation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 