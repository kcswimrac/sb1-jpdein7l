import React from 'react';
import { TrendingUp, Clock, Zap, Leaf } from 'lucide-react';

const MetricsSection = () => {
  const metrics = [
    {
      icon: <Zap className="h-8 w-8" />,
      number: "500+",
      label: "Units in Operation",
      description: "Deployed across critical infrastructure"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "99.99%",
      label: "Uptime Delivered",
      description: "Proven reliability in the field"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: "50MW",
      label: "Power Delivered",
      description: "Cumulative capacity installed"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      number: "10K+",
      label: "Tons CO₂ Saved",
      description: "Through efficient energy storage"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-midnight-black to-steel-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-industrial-white mb-6">
            PROVEN PERFORMANCE
          </h2>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world results from installations across America's most critical infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="group text-center bg-gradient-to-br from-steel-blue/30 to-midnight-black/50 border border-energy-green/20 rounded-2xl p-8 hover:border-energy-green hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-energy-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-energy-green group-hover:scale-110 transition-all duration-300">
                <div className="text-energy-green group-hover:text-midnight-black transition-colors duration-300">
                  {metric.icon}
                </div>
              </div>
              
              <div className="font-montserrat font-bold text-4xl md:text-5xl text-energy-green mb-2">
                {metric.number}
              </div>
              
              <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                {metric.label}
              </h3>
              
              <p className="font-open-sans text-gray-300 text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-energy-green/20 to-steel-blue/20 border border-energy-green/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-montserrat font-bold text-2xl text-industrial-white mb-4">
              Future-Proof Technology
            </h3>
            <p className="font-open-sans text-gray-300 leading-relaxed">
              These numbers represent just the beginning. As we scale production and expand 
              deployments, our impact grows exponentially. Every installation is designed 
              for 20+ years of service, meaning today's deployments will be delivering 
              value well into the 2040s and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;