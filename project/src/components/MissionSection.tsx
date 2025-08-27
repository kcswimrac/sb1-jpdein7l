import React from 'react';
import { Target, Zap, Clock, Recycle } from 'lucide-react';

const MissionSection = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Instant Response",
      description: "Sub-50ms UPS-grade response time for critical power applications",
      metric: "<50ms"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "No Cycle Fade",
      description: "Decades of resilience with no performance degradation over time",
      metric: "20+ Years"
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "100% Recyclable",
      description: "Sustainable manufacturing with domestic American supply chain",
      metric: "Made in USA"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Grid Support",
      description: "Advanced grid-forming capability and inertia support",
      metric: "Grid Ready"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-energy-green/10 text-energy-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            OUR MISSION
          </span>
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Delivering Robust Energy Storage
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
            High-speed flywheel technology providing instantly dispatchable, 
            long-life energy storage for America's critical infrastructure.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="bg-energy-green/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-energy-green group-hover:scale-110 transition-all duration-300">
                <div className="text-energy-green group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              
              <div className="font-montserrat font-bold text-2xl text-energy-green mb-2">
                {feature.metric}
              </div>
              
              <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="font-open-sans text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;