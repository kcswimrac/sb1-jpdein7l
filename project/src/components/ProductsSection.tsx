import React from 'react';
import { Cpu, Factory, Zap, ArrowRight } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      name: "Rotor-Seed™",
      power: "5kW Modular",
      icon: <Cpu className="h-12 w-12" />,
      description: "Compact, scalable units perfect for distributed installations and small-scale applications.",
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Plug-and-play design", "Stackable architecture", "Remote monitoring"],
      applications: ["Small data centers", "Retail locations", "Remote facilities"]
    },
    {
      name: "RotorVault™",
      power: "50–100kW Industrial",
      icon: <Factory className="h-12 w-12" />,
      description: "Heavy-duty industrial systems for demanding commercial and industrial applications.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Industrial-grade housing", "Advanced control systems", "Grid-forming capability"],
      applications: ["Manufacturing facilities", "Large data centers", "Hospitals"]
    },
    {
      name: "MW Systems",
      power: "Scalable to MW",
      icon: <Zap className="h-12 w-12" />,
      description: "Utility-scale deployments for grid stabilization and large-scale energy storage.",
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      features: ["Modular scaling", "Grid integration", "Advanced analytics"],
      applications: ["Utility grid support", "Renewable integration", "Frequency regulation"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-energy-green/10 text-energy-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            PRODUCT LINEUP
          </span>
          <h2 className="font-montserrat font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Scalable Solutions
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
            From modular units to utility-scale installations, our flywheel systems 
            deliver unmatched reliability across all applications.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-energy-green">
                    {product.icon}
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-montserrat font-bold text-2xl text-gray-900">
                    {product.name}
                  </h3>
                  <span className="bg-energy-green/10 text-energy-green px-3 py-1 rounded-full text-sm font-medium">
                    {product.power}
                  </span>
                </div>

                <p className="font-open-sans text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="font-open-sans text-gray-600 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-energy-green rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="mb-6">
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-3">
                    Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="group w-full bg-energy-green hover:bg-green-600 text-white font-montserrat font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;