import React from 'react';
import { Cpu, Factory, Zap } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      name: "Rotor-Seed™",
      power: "5kW Modular",
      icon: <Cpu className="h-12 w-12" />,
      description: "Compact, scalable units perfect for small-scale applications and distributed installations.",
      features: ["Plug-and-play design", "Stackable architecture", "Remote monitoring", "20+ year lifespan"],
      applications: ["Small data centers", "Retail locations", "Remote facilities", "Backup power"]
    },
    {
      name: "RotorVault™",
      power: "50–100kW Industrial",
      icon: <Factory className="h-12 w-12" />,
      description: "Heavy-duty industrial systems designed for demanding commercial and industrial applications.",
      features: ["Industrial-grade housing", "Advanced control systems", "Grid-forming capability", "Maintenance-free operation"],
      applications: ["Manufacturing facilities", "Large data centers", "Hospitals", "Critical infrastructure"]
    },
    {
      name: "MW Systems",
      power: "Scalable to MW",
      icon: <Zap className="h-12 w-12" />,
      description: "Utility-scale deployments for grid stabilization and large-scale energy storage projects.",
      features: ["Modular scaling", "Grid integration", "Advanced analytics", "Utility-grade reliability"],
      applications: ["Utility grid support", "Renewable integration", "Frequency regulation", "Peak shaving"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-midnight-black to-steel-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-industrial-white mb-6">
            PRODUCT LINEUP
          </h2>
          <p className="font-open-sans text-xl text-gray-300 max-w-3xl mx-auto">
            From modular units to utility-scale installations, our flywheel systems 
            deliver unmatched reliability and performance across all applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-steel-blue/30 to-midnight-black/70 border border-energy-green/30 rounded-2xl p-8 hover:border-energy-green hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Product Header */}
              <div className="text-center mb-8">
                <div className="bg-energy-green/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-energy-green group-hover:scale-110 transition-all duration-300">
                  <div className="text-energy-green group-hover:text-midnight-black transition-colors duration-300">
                    {product.icon}
                  </div>
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-industrial-white mb-2">
                  {product.name}
                </h3>
                <p className="font-roboto-mono text-energy-green font-medium text-lg">
                  {product.power}
                </p>
              </div>

              {/* Description */}
              <p className="font-open-sans text-gray-300 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-montserrat font-semibold text-industrial-white mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="font-open-sans text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-energy-green rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div>
                <h4 className="font-montserrat font-semibold text-industrial-white mb-3">
                  Applications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, idx) => (
                    <span 
                      key={idx}
                      className="bg-energy-green/20 text-energy-green px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;