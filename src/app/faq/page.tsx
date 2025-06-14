"use client"

import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react"
import { BackgroundElements } from "@/components/background-elements"
import { useState } from "react"

const faqCategories = [
  {
    title: "Pricing & Plans",
    faqs: [
      {
        question: "Can I change my plan at any time?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle. If you upgrade mid-cycle, you'll be charged a prorated amount for the remainder of the current billing period."
      },
      {
        question: "What happens if I exceed my API limits?",
        answer: "If you exceed your monthly API limits, your agents will be temporarily paused until the next billing cycle or you can upgrade your plan. We'll send you notifications when you reach 80% and 95% of your limit to help you manage usage."
      },
      {
        question: "Do you offer refunds?",
        answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team and we'll process your refund within 5-7 business days."
      },
      {
        question: "Is there a free trial for paid plans?",
        answer: "Yes, we offer a 14-day free trial for the Professional plan. No credit card required to start. You'll have access to all Professional features during the trial period."
      },
      {
        question: "Do you offer discounts for annual billing?",
        answer: "Yes, we offer a 20% discount when you choose annual billing for Professional and Enterprise plans. The discount is applied automatically at checkout."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise customers. All payments are processed securely through Stripe."
      }
    ]
  },
  {
    title: "Platform & Features",
    faqs: [
      {
        question: "Can I use my own infrastructure?",
        answer: "Yes, with our Local Runner product, you can deploy agents on your own infrastructure while using our platform for management. This gives you full control over your data and compliance requirements."
      },
      {
        question: "What integrations are available?",
        answer: "We support over 100+ integrations including popular tools like Slack, Discord, Zapier, Google Workspace, Microsoft 365, Salesforce, HubSpot, and many more. Custom integrations are available for Professional and Enterprise plans."
      },
      {
        question: "How do I create my first AI agent?",
        answer: "Creating your first agent is simple! Sign up for a free account, choose from our pre-built templates, customize the agent's behavior and responses, connect your desired integrations, and deploy. Our getting started guide walks you through each step."
      },
      {
        question: "Can multiple team members collaborate on agents?",
        answer: "Yes, team collaboration is available on Professional and Enterprise plans. You can invite team members, set permissions, track changes with version control, and work together on agent development."
      },
      {
        question: "What programming languages are supported?",
        answer: "Our platform supports Python, JavaScript/TypeScript, and provides REST APIs for any language. We also offer SDKs for popular frameworks and no-code options for non-technical users."
      },
      {
        question: "How do I monitor agent performance?",
        answer: "Our analytics dashboard provides real-time insights into agent performance, including response times, success rates, user interactions, and error logs. You can set up alerts and export data for further analysis."
      }
    ]
  },
  {
    title: "Security & Compliance",
    faqs: [
      {
        question: "How secure is my data?",
        answer: "We take security seriously. All data is encrypted in transit and at rest using AES-256 encryption. We're SOC 2 Type II compliant and undergo regular security audits. Your data is never used to train our models without explicit consent."
      },
      {
        question: "Are you GDPR compliant?",
        answer: "Yes, we are fully GDPR compliant. We provide data processing agreements, support data portability requests, and have implemented privacy by design principles throughout our platform."
      },
      {
        question: "Where is my data stored?",
        answer: "Data is stored in secure data centers in the US and EU. Enterprise customers can choose their preferred data residency location. We use industry-leading cloud providers with 99.9% uptime guarantees."
      },
      {
        question: "Do you have an SLA?",
        answer: "Yes, Enterprise customers receive a 99.9% uptime SLA with financial penalties if we don't meet our commitments. Professional plans have a 99.5% uptime target without financial guarantees."
      },
      {
        question: "Can I get a security audit report?",
        answer: "Enterprise customers can request our SOC 2 Type II report and security documentation. We also support customer security questionnaires and can arrange security calls with our team."
      }
    ]
  },
  {
    title: "Support & Training",
    faqs: [
      {
        question: "What support options are available?",
        answer: "Free users get community support through our forums. Professional users get priority email support with 24-hour response times. Enterprise customers get dedicated support managers and phone support."
      },
      {
        question: "Do you offer training or onboarding?",
        answer: "Yes! We provide comprehensive documentation, video tutorials, and webinars for all users. Enterprise customers get personalized onboarding sessions and custom training for their teams."
      },
      {
        question: "How do I report a bug or request a feature?",
        answer: "You can report bugs or request features through our support portal, community forums, or by emailing support@arrowai.com. We track all requests and provide updates on our public roadmap."
      },
      {
        question: "Is there a community or forum?",
        answer: "Yes, we have an active community forum where users share templates, ask questions, and collaborate. We also have a Discord server for real-time discussions and a monthly community call."
      }
    ]
  }
]

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <BackgroundElements variant="hero" />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="h-12 w-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Frequently Asked
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> Questions</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about ArrowAI's platform, pricing, and features.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="pb-20 relative">
        <BackgroundElements variant="features" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length === 0 ? (
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">No FAQs found matching your search.</p>
            </motion.div>
          ) : (
            <div className="space-y-12">
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                    {category.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const faqId = `${category.title}-${faqIndex}`
                      return (
                        <motion.div
                          key={faqId}
                          initial={{ opacity: 1, y: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (faqIndex * 0.05) }}
                          className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          <button
                            onClick={() => toggleFaq(faqId)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                            {openFaq === faqId ? (
                              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            )}
                          </button>
                          <motion.div
                            initial={false}
                            animate={{
                              height: openFaq === faqId ? "auto" : 0,
                              opacity: openFaq === faqId ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <BackgroundElements variant="cta" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Join Community
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 