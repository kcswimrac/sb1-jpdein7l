import React from 'react';
import { Server, Factory, Zap, Shield } from 'lucide-react';

const ApplicationsSection = () => {
  const applications = [
    {
      icon: <Server className="h-12 w-12" />,
      title: "Data Centers",
      description: "Uninterruptible power for mission-critical computing infrastructure with instant response and decades of reliability.",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      benefits: ["Zero downtime tolerance", "Instant failover", "Cooling system backup"]
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Industrial Manufacturing",
      description: "Manufacturing continuity with power quality enhancement for sensitive equipment and production processes.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      benefits: ["Production line protection", "Equipment damage prevention", "Quality assurance"]
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Utilities & Microgrids",
      description: "Grid stabilization, frequency regulation, and renewable energy integration for reliable power delivery.",
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      benefits: ["Grid forming capability", "Frequency regulation", "Renewable integration"]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Defense & Healthcare",
      description: "Mission-critical backup power for life-safety systems and national security applications.",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      benefits: ["Life-safety compliance", "Security clearance ready", "Emergency preparedness"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-energy-green/10 text-energy-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            CRITICAL APPLICATIONS
          </span>
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Where Reliability Matters
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
            On The Fly Energy delivers the power that keeps America's most 
            critical infrastructure running when reliability isn't optional.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-energy-green">
                    {app.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-4">
                  {app.title}
                </h3>
                <p className="font-open-sans text-gray-600 mb-6 leading-relaxed">
                  {app.description}
                </p>
                
                <div>
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-3">
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, idx) => (
                      <li key={idx} className="font-open-sans text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-energy-green rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
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