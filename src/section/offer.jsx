import React, { useState, useEffect } from 'react';


const OfferingsPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const offerings = [
    {
      title: "CONTENT WRITING",
      description: "Compelling narratives that resonate with your audience and drive meaningful engagement across all digital platforms.",
      stats: "500+ Projects",
      pattern: "diagonal-lines"
    },
    {
      title: "CAMPAIGN STRATEGISING",
      description: "Data-driven strategies that transform your marketing goals into measurable, impactful results that scale.",
      stats: "200% ROI Average",
      pattern: "dots"
    },
    {
      title: "VIDEO EDITING",
      description: "Cinematic storytelling through expert post-production that captivates viewers and elevates your brand narrative.",
      stats: "1M+ Views Generated",
      pattern: "waves"
    },
    {
      title: "DIGITAL DESIGNING",
      description: "Cutting-edge visual identities that break through the noise and establish your brand as an industry leader.",
      stats: "99% Client Satisfaction",
      pattern: "geometric"
    },
    {
      title: "INFLUENCER MARKETING",
      description: "Strategic partnerships with authentic voices that amplify your message and build genuine community connections.",
      stats: "50M+ Reach",
      pattern: "hexagon"
    },
    {
      title: "PERFORMANCE MARKETING",
      description: "Precision-targeted campaigns that optimize every touchpoint to maximize conversions and accelerate growth.",
      stats: "3x Conversion Rate",
      pattern: "circuit"
    }
  ];
      const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMobileMenuOpen(false);
    }
  };


  const PatternSVG = ({ pattern, isActive }) => {
    const patterns = {
      'diagonal-lines': (
        <svg className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-30 transition-opacity duration-500">
          <defs>
            <pattern id="diagonal" patternUnits="userSpaceOnUse" width="20" height="20">
              <path d="M0,20 L20,0" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)"/>
        </svg>
      ),
      'dots': (
        <svg className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-30 transition-opacity duration-500">
          <defs>
            <pattern id="dots" patternUnits="userSpaceOnUse" width="30" height="30">
              <circle cx="15" cy="15" r="3" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      ),
      'waves': (
        <svg className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-30 transition-opacity duration-500">
          <path d="M0,50 Q50,20 100,50 T200,50 T300,50 T400,50" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse"/>
        </svg>
      ),
      'geometric': (
        <svg className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-30 transition-opacity duration-500">
          <polygon points="50,10 90,90 10,90" stroke="currentColor" strokeWidth="2" fill="none" transform="scale(0.8)"/>
        </svg>
      ),
      'hexagon': (
        <svg className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-30 transition-opacity duration-500">
          <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      'circuit': (
        <svg className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-30 transition-opacity duration-500">
          <path d="M20,20 L80,20 L80,80 M40,40 L60,40 M20,60 L40,60" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="40" cy="40" r="3" fill="currentColor"/>
        </svg>
      )
    };
    return patterns[pattern] || null;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03) 0%, transparent 50%)`
        }}
      />

      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}/>
      </div>

      <div className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 relative">
              <span className="relative inline-block">
                OUR
              </span>
              <br />
              <span className="relative inline-block bg-white text-black px-6 py-2 skew-x-12 transform">
                OFFERINGS
                <div className="absolute inset-0 bg-black transform skew-x-12 scale-105 -z-10 opacity-20"></div>
              </span>
            </h1>
          </div>
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl font-light leading-relaxed text-gray-300">
              Transform your digital presence with our comprehensive suite of cutting-edge services designed for the modern marketplace
            </p>
          </div>
        </div>
      </div>

      <div className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="relative bg-white text-black p-12 h-80 overflow-hidden transform transition-all duration-700 hover:scale-102 hover:-rotate-1 cursor-pointer">
                  <PatternSVG pattern={offering.pattern} isActive={activeCard === index} />
                  <div className="absolute top-0 right-0 w-20 h-20 bg-black transform rotate-45 translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <div className="text-4xl font-black text-gray-200 group-hover:text-gray-800 transition-colors duration-300">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="text-sm font-bold bg-black text-white px-3 py-1 transform -rotate-3 group-hover:rotate-3 transition-transform duration-300">
                          {offering.stats}
                        </div>
                      </div>
                      <h3 className="text-2xl font-black mb-4 leading-tight tracking-tight group-hover:tracking-wide transition-all duration-300">
                        {offering.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {offering.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-1 bg-black group-hover:w-24 transition-all duration-500"></div>
                      <div className="text-2xl font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                        →
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative py-32 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 border border-white opacity-10 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 border-2 border-white opacity-5 transform rotate-45"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            READY TO
            <br />
            <span className="relative inline-block">
              DOMINATE
              <div className="absolute bottom-0 left-0 w-full h-4 bg-white transform -skew-x-12"></div>
            </span>
            <br />
            YOUR MARKET?
          </h2>
          <p className="text-base text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the brands that are setting new standards. Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-black px-12 py-6 text-lg font-black hover:bg-black hover:text-white border-4 border-white transition-all duration-300 transform hover:scale-105 hover:rotate-1"
            onClick={() => scrollToSection("contact")}
            >
              START YOUR PROJECT
            </button>
            <button className="border-2 border-white text-white px-12 py-6 text-lg font-black hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
            onClick={() => scrollToSection("contact")}
            >
              VIEW OUR WORK
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-40 bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingsPage;