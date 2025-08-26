import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-midnight-black via-steel-blue to-midnight-black">
      {/* Industrial background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-20" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>
      
      {/* American flag subtle accent */}
      <div className="absolute top-10 right-10 w-16 h-10 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-patriot-red via-industrial-white to-steel-blue rounded"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center items-center">
          <div className="bg-energy-green p-4 rounded-full shadow-2xl">
            <Zap className="h-16 w-16 text-midnight-black" />
          </div>
          <div className="ml-4">
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-industrial-white">
              ON THE FLY
            </h1>
            <p className="font-montserrat font-medium text-xl md:text-2xl text-energy-green">
              ENERGY
            </p>
          </div>
        </div>

        {/* Tagline */}
        <h2 className="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl text-industrial-white mb-6 leading-tight">
          <span className="text-energy-green">⚡</span> POWER THAT
          <br />
          <span className="text-energy-green">OUTLASTS</span>
        </h2>

        {/* Subtitle */}
        <p className="font-open-sans text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Revolutionary flywheel energy storage delivering decades of resilience, 
          instant response, and American-built reliability for critical applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-energy-green hover:bg-green-500 text-midnight-black font-montserrat font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center">
            LEARN MORE
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="group border-2 border-energy-green text-energy-green hover:bg-energy-green hover:text-midnight-black font-montserrat font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            REQUEST INFO
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-energy-green rounded-full flex justify-center">
            <div className="w-1 h-3 bg-energy-green rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;