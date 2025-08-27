import React from 'react';

const ManifestoSection = () => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-energy-green to-transparent transform rotate-45"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="inline-block bg-energy-green/20 text-energy-green px-4 py-2 rounded-full text-sm font-medium mb-8">
          WHY WE EXIST
        </span>
        
        <blockquote className="font-montserrat font-bold text-4xl lg:text-6xl text-white leading-tight mb-8">
          "We are not here to be trendy.
          <br />
          <span className="text-energy-green">We are here to be trusted.</span>"
        </blockquote>
        
        <div className="w-24 h-1 bg-energy-green mx-auto mb-8"></div>
        
        <p className="font-open-sans text-xl text-gray-300 leading-relaxed mb-6">
          In a world of flashy promises and marketing hype, we choose substance over style. 
          Our flywheel technology isn't just another energy storage solution—it's a 
          <span className="text-energy-green font-semibold"> decades-long commitment </span> 
          to the people and organizations that depend on us.
        </p>
        
        <p className="font-open-sans text-xl text-gray-300 leading-relaxed">
          When the lights go out, when the grid fails, when everything else stops working—
          <span className="text-energy-green font-semibold"> we're still spinning. </span>
          That's not a promise. That's physics.
        </p>
      </div>
    </section>
  );
};

export default ManifestoSection;