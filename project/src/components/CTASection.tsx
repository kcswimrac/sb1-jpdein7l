import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-midnight-black via-patriot-red/5 to-steel-blue">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-6xl text-industrial-white mb-6">
            JOIN THE MISSION
          </h2>
          <p className="font-montserrat font-semibold text-2xl md:text-3xl text-energy-green mb-8">
            Power that outlasts.
          </p>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of the next generation of American energy infrastructure. 
            Whether you're an engineer, investor, or customer, we want to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-steel-blue/30 to-midnight-black/50 border border-energy-green/30 rounded-2xl p-8">
            <h3 className="font-montserrat font-bold text-2xl text-industrial-white mb-6">
              Get Connected
            </h3>
            
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-energy-green mx-auto mb-4" />
                <h4 className="font-montserrat font-semibold text-xl text-energy-green mb-2">
                  Thank You!
                </h4>
                <p className="font-open-sans text-gray-300">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-montserrat font-medium text-industrial-white mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-midnight-black/50 border border-energy-green/30 rounded-lg px-4 py-3 text-industrial-white placeholder-gray-400 focus:border-energy-green focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="font-montserrat font-medium text-industrial-white mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-midnight-black/50 border border-energy-green/30 rounded-lg px-4 py-3 text-industrial-white placeholder-gray-400 focus:border-energy-green focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="font-montserrat font-medium text-industrial-white mb-2 block">
                    Company
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-midnight-black/50 border border-energy-green/30 rounded-lg px-4 py-3 text-industrial-white placeholder-gray-400 focus:border-energy-green focus:outline-none transition-colors duration-300"
                    placeholder="Your organization"
                  />
                </div>
                
                <button
                  type="submit"
                  className="group w-full bg-energy-green hover:bg-green-500 text-midnight-black font-montserrat font-semibold text-lg px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
                >
                  CONNECT WITH US
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            )}
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-energy-green/10 to-steel-blue/20 border border-energy-green/30 rounded-2xl p-8">
              <Mail className="h-12 w-12 text-energy-green mb-6" />
              <h3 className="font-montserrat font-bold text-2xl text-industrial-white mb-4">
                Stay Informed
              </h3>
              <p className="font-open-sans text-gray-300 mb-6">
                Get monthly updates on our technology breakthroughs, new installations, 
                and industry insights.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-midnight-black/50 border border-energy-green/30 rounded-lg px-4 py-3 text-industrial-white placeholder-gray-400 focus:border-energy-green focus:outline-none transition-colors duration-300"
                />
                <button className="bg-energy-green hover:bg-green-500 text-midnight-black font-montserrat font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h4 className="font-montserrat font-semibold text-industrial-white mb-2">
                  Engineering Partnerships
                </h4>
                <p className="font-open-sans text-gray-300 text-sm">
                  partners@ontheflyenergy.com
                </p>
              </div>
              <div>
                <h4 className="font-montserrat font-semibold text-industrial-white mb-2">
                  Investment Inquiries
                </h4>
                <p className="font-open-sans text-gray-300 text-sm">
                  investors@ontheflyenergy.com
                </p>
              </div>
              <div>
                <h4 className="font-montserrat font-semibold text-industrial-white mb-2">
                  General Information
                </h4>
                <p className="font-open-sans text-gray-300 text-sm">
                  info@ontheflyenergy.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;