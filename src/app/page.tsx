"use client"

import { useState } from 'react'
import { Globe, MessageCircle, Calendar, BarChart3, Users, Zap, CheckCircle, Star, ArrowRight, Play, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Home() {
  const [activeDemo, setActiveDemo] = useState(false)
  const [demoMessages, setDemoMessages] = useState([
    { type: 'ai', text: 'Hello! I\'m ACM\'s AI assistant. How can I help you today?' },
    { type: 'user', text: 'I need help with lead generation for my business' },
    { type: 'ai', text: 'Perfect! I can help you convert leads 60% faster. What type of business do you run?' }
  ])

  const startDemo = () => {
    setActiveDemo(true)
    setTimeout(() => {
      setDemoMessages(prev => [...prev, 
        { type: 'user', text: 'I run a digital marketing agency' },
        { type: 'ai', text: 'Excellent! I can integrate with your CRM and automate lead qualification. Would you like to schedule a demo?' }
      ])
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#00A88F] to-[#004F8A] rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-geist-sans font-bold text-[#1A1A1A]">ACM Global Solutions</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-[#1A1A1A] hover:text-[#00A88F] transition-colors">How It Works</a>
              <a href="#integrations" className="text-[#1A1A1A] hover:text-[#00A88F] transition-colors">Integrations</a>
              <a href="#testimonials" className="text-[#1A1A1A] hover:text-[#00A88F] transition-colors">Success Stories</a>
              <a href="#contact" className="text-[#1A1A1A] hover:text-[#00A88F] transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-[#00A88F] to-[#004F8A] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-geist-sans font-bold text-[#1A1A1A] leading-tight mb-6">
                AI Solutions.
                <span className="bg-gradient-to-r from-[#00A88F] to-[#004F8A] bg-clip-text text-transparent"> Powered by Innovation.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-inter">
                Empower your service business to respond, qualify, and convert leads within 60 seconds using our premium AI-automation platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-[#00A88F] to-[#004F8A] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book a Demo</span>
                </button>
                <button 
                  onClick={startDemo}
                  className="border-2 border-[#2EC4B6] text-[#2EC4B6] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#2EC4B6] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Try the AI Now</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-r from-[#00A88F] to-[#004F8A] rounded-full flex items-center justify-center animate-pulse">
                  <Globe className="w-32 h-32 text-white animate-spin" style={{ animationDuration: '20s' }} />
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-[#2EC4B6] opacity-30 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-geist-sans font-bold text-[#1A1A1A] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Three simple steps to transform your lead conversion
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00A88F] to-[#004F8A] rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-geist-sans font-bold text-[#1A1A1A] mb-4">1. Engage</h3>
              <p className="text-gray-600 font-inter">
                AI instantly engages new leads via chat, SMS, and voice in English, Portuguese, and Spanish within seconds of contact.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00A88F] to-[#004F8A] rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-geist-sans font-bold text-[#1A1A1A] mb-4">2. Qualify</h3>
              <p className="text-gray-600 font-inter">
                Smart qualification process answers FAQs, assesses lead quality, and determines the best next action automatically.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-[#00A88F] to-[#004F8A] rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-geist-sans font-bold text-[#1A1A1A] mb-4">3. Convert</h3>
              <p className="text-gray-600 font-inter">
                Books meetings, escalates to human reps, or nurtures leads through automated workflows - all within 60 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-geist-sans font-bold text-[#1A1A1A] mb-4">
              See Our AI in Action
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Experience real-time lead engagement and qualification
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-[#00A88F] to-[#004F8A] p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full opacity-75"></div>
                  <div className="w-3 h-3 bg-white rounded-full opacity-75"></div>
                  <div className="w-3 h-3 bg-white rounded-full opacity-75"></div>
                  <span className="text-white font-inter ml-4">ACM AI Assistant</span>
                </div>
              </div>
              <div className="p-6 h-80 overflow-y-auto">
                {demoMessages.map((message, index) => (
                  <div key={index} className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.type === 'user' 
                        ? 'bg-[#2EC4B6] text-white' 
                        : 'bg-gray-100 text-[#1A1A1A]'
                    }`}>
                      <p className="font-inter">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#2EC4B6]"
                  />
                  <button className="bg-gradient-to-r from-[#00A88F] to-[#004F8A] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-geist-sans font-bold text-[#1A1A1A] mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Connect with 6,000+ apps and tools your business already uses
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Salesforce', 'HubSpot', 'WhatsApp', 'Meta Ads', 'Google Calendar', 'Outlook',
              'Zapier', 'Slack', 'Zoom', 'Mailchimp', 'Stripe', 'Shopify'
            ].map((integration, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00A88F] to-[#004F8A] rounded-lg flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-inter font-semibold text-[#1A1A1A] text-center">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-geist-sans font-bold text-[#1A1A1A] mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Real results from businesses like yours
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 font-inter mb-6">
                "ACM's AI increased our lead response rate by 300% and conversion by 85%. The 60-second response time is game-changing."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00A88F] to-[#004F8A] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <p className="font-geist-sans font-semibold text-[#1A1A1A]">Maria Johnson</p>
                  <p className="text-sm text-gray-500">CEO, Digital Marketing Pro</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 font-inter mb-6">
                "The multilingual support helped us expand to Latin America. ROI increased 250% in just 3 months."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00A88F] to-[#004F8A] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">CS</span>
                </div>
                <div>
                  <p className="font-geist-sans font-semibold text-[#1A1A1A]">Carlos Silva</p>
                  <p className="text-sm text-gray-500">Founder, TechSolutions Inc</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 font-inter mb-6">
                "White-glove onboarding made implementation seamless. Our team was up and running in 24 hours."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00A88F] to-[#004F8A] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AR</span>
                </div>
                <div>
                  <p className="font-geist-sans font-semibold text-[#1A1A1A]">Anna Rodriguez</p>
                  <p className="text-sm text-gray-500">VP Sales, Global Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-geist-sans font-bold text-[#1A1A1A] mb-4">
              Real-Time Analytics
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Track performance and ROI with comprehensive dashboards
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <BarChart3 className="w-8 h-8 text-[#00A88F]" />
                <span className="text-2xl font-bold text-green-500">+85%</span>
              </div>
              <h3 className="font-geist-sans font-semibold text-[#1A1A1A] mb-2">Conversion Rate</h3>
              <p className="text-sm text-gray-600">Average improvement</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <MessageCircle className="w-8 h-8 text-[#00A88F]" />
                <span className="text-2xl font-bold text-blue-500">60s</span>
              </div>
              <h3 className="font-geist-sans font-semibold text-[#1A1A1A] mb-2">Response Time</h3>
              <p className="text-sm text-gray-600">Average lead engagement</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-[#00A88F]" />
                <span className="text-2xl font-bold text-purple-500">300%</span>
              </div>
              <h3 className="font-geist-sans font-semibold text-[#1A1A1A] mb-2">Lead Quality</h3>
              <p className="text-sm text-gray-600">Qualification accuracy</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <CheckCircle className="w-8 h-8 text-[#00A88F]" />
                <span className="text-2xl font-bold text-orange-500">250%</span>
              </div>
              <h3 className="font-geist-sans font-semibold text-[#1A1A1A] mb-2">ROI Increase</h3>
              <p className="text-sm text-gray-600">Average client results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-geist-sans font-bold text-[#1A1A1A] mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              Get started with a personalized demo and see results in 60 seconds
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-geist-sans font-bold text-[#1A1A1A] mb-6">Get in Touch</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2EC4B6]"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2EC4B6]"
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2EC4B6]"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2EC4B6]"
                  />
                  <textarea 
                    placeholder="Tell us about your business needs..." 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2EC4B6]"
                  ></textarea>
                  <button className="w-full bg-gradient-to-r from-[#00A88F] to-[#004F8A] text-white py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Your Demo</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00A88F] to-[#004F8A] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-geist-sans font-semibold text-[#1A1A1A] mb-2">Phone</h4>
                  <p className="text-gray-600 font-inter">+1 (689) 295-0777</p>
                  <p className="text-gray-600 font-inter">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00A88F] to-[#004F8A] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-geist-sans font-semibold text-[#1A1A1A] mb-2">Email</h4>
                  <p className="text-gray-600 font-inter lasy-highlight">info@acmglobalsolutions.com</p>
                  <p className="text-gray-600 font-inter">Response within 1 hour</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00A88F] to-[#004F8A] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="lasy-highlight">
                  <h4 className="font-geist-sans font-semibold text-[#1A1A1A] mb-2">Global Office</h4>
                  <p className="text-gray-600 font-inter">Tampa, Florida USA</p>
                  <p className="text-gray-600 font-inter">Serving clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00A88F] to-[#004F8A] rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-geist-sans font-bold">ACM Global Solutions</span>
              </div>
              <p className="text-gray-400 font-inter mb-6">
                Empowering businesses worldwide with AI-driven lead conversion and automation solutions.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-[#2EC4B6] cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-[#2EC4B6] cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-[#2EC4B6] cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-[#2EC4B6] cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="font-geist-sans font-semibold mb-6">Solutions</h4>
              <ul className="space-y-3 text-gray-400 font-inter">
                <li><a href="#" className="hover:text-[#2EC4B6] transition-colors">AI Lead Engagement</a></li>
                <li><a href="#" className="hover:text-[#2EC4B6] transition-colors">Smart Scheduling</a></li>
                <li><a href="#" className="hover:text-[#2EC4B6] transition-colors">Workflow Automation</a></li>
                <li><a href="#" className="hover:text-[#2EC4B6] transition-colors">Analytics Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-geist-sans font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400 font-inter">
                <li><a href="#" className="hover:text-[#2EC4B6] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#2EC4B6] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#2EC4B6] transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-[#2EC4B6] transition-colors">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-geist-sans font-semibold mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400 font-inter">
                <li><a href="#" className="hover:text-[#2EC4B6] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#2EC4B6] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[#2EC4B6] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#2EC4B6] transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 font-inter">
                © 2024 ACM Global Solutions. All rights reserved.
              </p>
              <p className="text-gray-400 font-inter mt-4 md:mt-0">
                GDPR & CCPA Compliant • Enterprise Security
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}