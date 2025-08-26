import React from 'react';
import { Server, Factory, Zap, Shield } from 'lucide-react';

const ApplicationsSection = () => {
  const applications = [
    {
      icon: <Server className="h-16 w-16" />,
      title: "Data Centers",
      description: "Uninterruptible power for mission-critical computing infrastructure with instant response and decades of reliability.",
      benefits: ["Zero downtime tolerance", "Instant failover", "Cooling system backup", "Network infrastructure protection"]
    },
    {
      icon: <Factory className="h-16 w-16" />,
      title: "Industrial Shops",
      description: "Manufacturing continuity with power quality enhancement for sensitive equipment and production processes.",
      benefits: ["Production line protection", "Equipment damage prevention", "Quality assurance", "Reduced maintenance costs"]
    },
    {
      icon: <Zap className="h-16 w-16" />,
      title: "Utilities & Microgrids",
      description: "Grid stabilization, frequency regulation, and renewable energy integration for reliable power delivery.",
      benefits: ["Grid forming capability", "Frequency regulation", "Renewable integration", "Peak demand management"]
    },
    {
      icon: <Shield className="h-16 w-16" />,
      title: "Defense & Hospitals",
      description: "Mission-critical backup power for life-safety systems and national security applications.",
      benefits: ["Life-safety compliance", "Security clearance ready", "Emergency preparedness", "Regulatory compliance"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-steel-blue to-midnight-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-industrial-white mb-6">
            CRITICAL APPLICATIONS
          </h2>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto">
            Where reliability isn't optional, On The Fly Energy delivers the power 
            that keeps America's most critical infrastructure running.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-midnight-black/50 to-steel-blue/30 border border-energy-green/20 rounded-2xl p-8 hover:border-energy-green/60 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="bg-energy-green/20 p-4 rounded-xl text-energy-green group-hover:bg-energy-green group-hover:text-midnight-black group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  {app.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="font-montserrat font-bold text-2xl text-industrial-white mb-4">
                    {app.title}
                  </h3>
                  <p className="font-open-sans text-gray-300 mb-6 leading-relaxed">
                    {app.description}
                  </p>
                  <div>
                    <h4 className="font-montserrat font-semibold text-energy-green mb-3">
                      Key Benefits
                    </h4>
                    <ul className="space-y-2">
                      {app.benefits.map((benefit, idx) => (
                        <li key={idx} className="font-open-sans text-gray-300 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-energy-green rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;