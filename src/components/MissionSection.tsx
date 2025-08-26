import React from 'react';
import { Target, Zap, Clock, Recycle } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "No cycle fade — decades of resilience",
      description: "Built to last 20+ years without performance degradation"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Instant response (<50ms UPS-grade)",
      description: "Millisecond-level response for critical power applications"
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "100% recyclable, built in America",
      description: "Sustainable manufacturing with domestic supply chain"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Grid-forming & inertia support",
      description: "Advanced grid stabilization and power quality enhancement"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-steel-blue to-midnight-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-industrial-white mb-8">
            OUR MISSION
          </h2>
          <p className="font-open-sans text-2xl md:text-3xl text-energy-green max-w-4xl mx-auto leading-relaxed">
            Delivering robust, instantly dispatchable, and long-life energy storage 
            using high-speed flywheels.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-steel-blue/50 to-midnight-black/50 border border-energy-green/20 rounded-xl p-8 hover:border-energy-green/60 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-energy-green/20 p-3 rounded-lg text-energy-green group-hover:bg-energy-green group-hover:text-midnight-black transition-all duration-300">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-3">
                    {value.title}
                  </h3>
                  <p className="font-open-sans text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;