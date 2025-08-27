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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-energy-green/10 text-energy-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            PROVEN PERFORMANCE
          </span>
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Real-World Results
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
            Performance metrics from installations across America's most critical infrastructure.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-energy-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-energy-green">
                  {metric.icon}
                </div>
              </div>
              
              <div className="font-montserrat font-bold text-4xl text-energy-green mb-2">
                {metric.number}
              </div>
              
              <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-3">
                {metric.label}
              </h3>
              
              <p className="font-open-sans text-gray-600 text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Future Proof Statement */}
        <div className="bg-gradient-to-r from-energy-green/5 to-energy-green/10 rounded-2xl p-12 text-center">
          <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-4">
            Future-Proof Technology
          </h3>
          <p className="font-open-sans text-gray-600 leading-relaxed max-w-4xl mx-auto">
            These numbers represent just the beginning. As we scale production and expand 
            deployments, our impact grows exponentially. Every installation is designed 
            for 20+ years of service, meaning today's deployments will be delivering 
            value well into the 2040s and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;