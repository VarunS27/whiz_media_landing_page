import React, { useRef, useState, useEffect } from 'react';

const ClientsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredClient, setHoveredClient] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const clients = [
    { 
      id: 1, 
      name: "W Studio", 
      logo: "W", 
      category: "Creative Agency",
      bgColor: "bg-white",
      textColor: "text-black",
      description: "Innovative creative solutions"
    },
    { 
      id: 2, 
      name: "Infinity Design", 
      logo: "∞", 
      category: "Design Studio",
      bgColor: "bg-gray-100",
      textColor: "text-black",
      description: "Limitless design possibilities"
    },
    { 
      id: 3, 
      name: "IZ Studio", 
      logo: "IZ", 
      category: "Silk Sarees",
      bgColor: "bg-white",
      textColor: "text-black",
      border: "border-2 border-gray-300",
      description: "Traditional elegance redefined"
    },
    { 
      id: 4, 
      name: "Naren Gems", 
      logo: "NG", 
      category: "Jewelry",
      bgColor: "bg-gray-200",
      textColor: "text-black",
      description: "Luxury jewelry collections"
    },
    { 
      id: 5, 
      name: "24BUY7", 
      logo: "24", 
      category: "E-commerce",
      bgColor: "bg-gray-300",
      textColor: "text-black",
      description: "Round-the-clock shopping"
    },
    { 
      id: 6, 
      name: "Trendlend", 
      logo: "TL", 
      category: "Fashion",
      bgColor: "bg-white",
      textColor: "text-black",
      border: "border-2 border-gray-300",
      description: "Fashion forward trends"
    },
    { 
      id: 7, 
      name: "Daily Delight", 
      logo: "DD", 
      category: "Food & Beverage",
      bgColor: "bg-gray-100",
      textColor: "text-black",
      description: "Daily culinary experiences"
    },
    { 
      id: 8, 
      name: "Amorefy", 
      logo: "AM", 
      category: "Beauty & Cosmetics",
      bgColor: "bg-gray-200",
      textColor: "text-black",
      description: "Beauty that inspires"
    },
    { 
      id: 9, 
      name: "Personal Brand", 
      logo: "PB", 
      category: "Personal Branding",
      bgColor: "bg-white",
      textColor: "text-black",
      description: "Authentic personal stories"
    },
    { 
      id: 10, 
      name: "iLegalLearn", 
      logo: "iLL", 
      category: "Legal Education",
      bgColor: "bg-gray-100",
      textColor: "text-black",
      border: "border-2 border-gray-300",
      description: "Legal knowledge simplified"
    },
    { 
      id: 11, 
      name: "iLegalAdvice", 
      logo: "iLA", 
      category: "Legal Services",
      bgColor: "bg-gray-200",
      textColor: "text-black",
      description: "Expert legal guidance"
    },
  ];

  // Auto-rotate functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, clients.length]);

  // Mouse tracking for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Get visible clients based on screen size
  const getVisibleClients = () => {
    const visible = [];
    const visibleCount = window.innerWidth < 640 ? 3 : window.innerWidth < 1024 ? 4 : 5;
    for (let i = 0; i < visibleCount; i++) {
      visible.push(clients[(currentIndex + i) % clients.length]);
    }
    return visible;
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative bg-black min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Enhanced Curved Background Elements */}
      <div className="absolute inset-0">
        {/* Large curved shapes */}
        <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] rounded-full bg-white/5 blur-3xl opacity-40 animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-white/3 blur-3xl opacity-30 animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/6 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-white/8 blur-3xl opacity-25 animate-pulse delay-2000" />
        
        {/* Curved decorative lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path 
            d="M0,300 Q250,150 500,300 T1000,300" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
            className="animate-pulse"
          />
          <path 
            d="M0,700 Q250,550 500,700 T1000,700" 
            fill="none" 
            stroke="white" 
            strokeWidth="1.5"
            className="animate-pulse delay-1000"
          />
          <path 
            d="M0,500 Q500,350 1000,500" 
            fill="none" 
            stroke="white" 
            strokeWidth="1"
            className="animate-pulse delay-2000"
          />
        </svg>
      </div>

      {/* Enhanced mouse-following spotlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.15), transparent 60%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-gray-300 via-white to-gray-200 bg-clip-text text-transparent italic">
              Clients
            </span>
          </h2>
          
          {/* Curved decorative element */}
          <div className="relative mx-auto mb-6 sm:mb-8">
            <div className="w-24 sm:w-32 h-2 bg-gradient-to-r from-gray-300 to-white mx-auto rounded-full" />
            <svg className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-8 opacity-30">
              <path 
                d="M0,6 Q20,0 40,6 T80,6" 
                fill="none" 
                stroke="white" 
                strokeWidth="1"
              />
            </svg>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl md:max-w-4xl mx-auto leading-relaxed px-4">
            Trusted by visionary brands that value{" "}
            <span className="text-white font-semibold">strategic creativity</span>
          </p>
        </div>

        {/* Responsive Carousel Container */}
        <div className="relative mb-12 sm:mb-16">
          {/* Curved path for client logos */}
          <div className="relative">
            {/* Clients Carousel with curved arrangement */}
            <div className="flex justify-center items-end gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
              {getVisibleClients().map((client, index) => {
                const totalVisible = getVisibleClients().length;
                const isCenter = index === Math.floor(totalVisible / 2);
                const distance = Math.abs(index - Math.floor(totalVisible / 2));
                
                // Calculate curved positioning
                const curveOffset = distance * distance * 15; // Quadratic curve
                const scaleValue = isCenter ? 1.3 : distance === 1 ? 1.1 : 0.9;
                
                return (
                  <div
                    key={`${client.id}-${currentIndex}`}
                    className={`group relative flex flex-col items-center transition-all duration-700 ease-out transform`}
                    style={{
                      transform: `scale(${scaleValue}) translateY(${curveOffset}px)`,
                      zIndex: isCenter ? 20 : distance === 1 ? 10 : 5,
                      opacity: distance > 2 ? 0.4 : distance === 2 ? 0.6 : distance === 1 ? 0.8 : 1
                    }}
                    onMouseEnter={() => {
                      setHoveredClient(client.id);
                      handlePause();
                    }}
                    onMouseLeave={() => {
                      setHoveredClient(null);
                      handleResume();
                    }}
                  >
                    {/* Logo Circle with enhanced curves */}
                    <div className={`
                      relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 
                      rounded-full ${client.bgColor} ${client.border || ''} 
                      flex items-center justify-center
                      group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-white/20
                      transition-all duration-500 ease-out cursor-pointer
                      ${isCenter ? 'shadow-xl shadow-white/30' : ''}
                    `}>
                      {/* Enhanced glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-gray-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110" />
                      
                      {/* Curved highlight */}
                      <div className="absolute -inset-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Logo text */}
                      <span className={`
                        ${client.textColor} text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-black 
                        relative z-10 group-hover:scale-110 transition-transform duration-300
                      `}>
                        {client.logo}
                      </span>
                    </div>

                    {/* Client Info - Responsive visibility */}
                    <div className={`
                      mt-2 sm:mt-3 md:mt-4 text-center transition-all duration-300 transform
                      ${isCenter || hoveredClient === client.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                    `}>
                      <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-1">
                        {client.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-300 mb-1 sm:mb-2">
                        {client.category}
                      </p>
                      <p className="text-xs text-gray-400 italic max-w-24 sm:max-w-32 hidden sm:block">
                        {client.description}
                      </p>
                    </div>

                    {/* Center highlight with curve */}
                    {isCenter && (
                      <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <svg className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-6 opacity-50">
                          <path 
                            d="M0,6 Q4,0 8,6" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="1"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Curved base line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1">
              <svg className="w-full h-full opacity-20">
                <path 
                  d="M0,0 Q50,4 100,0" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  preserveAspectRatio="none"
                />
              </svg>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 flex-wrap">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-rotate indicator */}
          <div className="text-center text-gray-400 text-xs sm:text-sm px-4">
            {isPaused ? 'Paused - Move away from icons to resume' : 'Auto-rotating - Hover on any icon to pause'}
          </div>
        </div>

        {/* Responsive Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto">
          {[
            { number: "11+", label: "Trusted Clients", style: "bg-white/10 border border-white/20 text-white backdrop-blur-sm" },
            { number: "100%", label: "Success Rate", style: "bg-white text-black" },
            { number: "50+", label: "Projects Delivered", style: "bg-white/10 border border-white/20 text-white backdrop-blur-sm" },
            { number: "5★", label: "Average Rating", style: "bg-white text-black" }
          ].map((stat, index) => (
            <div key={index} className={`text-center p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300 ${stat.style}`}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Responsive Testimonial */}
        <div className="max-w-4xl mx-auto text-center p-6 sm:p-8 md:p-10 rounded-3xl bg-white/10 border border-white/20 shadow-lg backdrop-blur-sm mb-12 sm:mb-16">
          <div className="text-4xl sm:text-5xl md:text-6xl text-white/30 mb-4 sm:mb-6 font-serif">"</div>
          <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light italic leading-relaxed mb-6 sm:mb-8 px-2">
            Working with this team has been transformative for our brand. Their deep understanding of our vision and creative approach exceeded all expectations.
          </blockquote>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xs sm:text-sm">CS</span>
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-sm sm:text-base">Client Success Story</div>
              <div className="text-xs sm:text-sm text-gray-300">Industry Leader</div>
            </div>
          </div>
        </div>

        {/* Responsive Call to Action */}
        <div className="text-center">
          <div 
            className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300 cursor-pointer group"
            onClick={() => scrollToSection("contact")}
          >
            <span className="font-semibold text-sm sm:text-base">Join Our Success Stories</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-xs">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;