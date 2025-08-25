import React from 'react';


const FrontHero = () => {
  return (
    <section className="relative bg-white text-black py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 z-10"></div>
      
      <div className="container mx-auto max-w-7xl relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              About Us
              <span className="block text-blue-400" >At Priyonix</span>
            </h1>
            
            <p className="text-xl text-black leading-relaxed max-w-lg">
              We believe in Transforming Ideas into Impactful Solutions. Guided by Innovation, Knowledge, and Strong Governance values, Our Company thrives at the Intersection of Research, Technology, and Policy. <br/> 
              Our Leadership combines Entrepreneurial Vision with Academic Brilliance and Administrative Expertise, making Priyonix a trusted partner for Sustainable Growth and Innovation.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm font-medium">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Global Reach</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Industry-Leading Training</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Innovation-Driven</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/front.jpg"
                alt="Priyonix Professional Team"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-blue-400/30 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontHero;