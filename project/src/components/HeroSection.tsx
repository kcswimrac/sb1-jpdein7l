import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Industrial Energy Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-energy-green/20 text-energy-green px-4 py-2 rounded-full text-sm font-medium mb-4">
                FLYWHEEL ENERGY STORAGE
              </span>
            </div>
            
            <h1 className="font-montserrat font-bold text-5xl lg:text-7xl leading-tight mb-6">
              Power That
              <br />
              <span className="text-energy-green">Outlasts</span>
            </h1>
            
            <p className="font-open-sans text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
              Revolutionary flywheel energy storage delivering decades of resilience, 
              instant response, and American-built reliability for critical applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-energy-green hover:bg-green-600 text-white font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group border-2 border-white text-white hover:bg-white hover:text-black font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="font-montserrat font-bold text-3xl text-energy-green mb-2">20+</div>
              <div className="font-open-sans text-white text-sm">Years Lifespan</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="font-montserrat font-bold text-3xl text-energy-green mb-2">&lt;50ms</div>
              <div className="font-open-sans text-white text-sm">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="font-montserrat font-bold text-3xl text-energy-green mb-2">100%</div>
              <div className="font-open-sans text-white text-sm">Recyclable</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="font-montserrat font-bold text-3xl text-energy-green mb-2">99.99%</div>
              <div className="font-open-sans text-white text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;