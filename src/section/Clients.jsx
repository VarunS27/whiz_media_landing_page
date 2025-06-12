import React, { useRef, useState, useEffect } from 'react';
import im1 from '../assets/1.png';
import im2 from '../assets/2.png';
import im3 from '../assets/3.png';
import im4 from '../assets/4.png';
import im5 from '../assets/5.png';
import im6 from '../assets/6.png';
import im7 from '../assets/7.png';
import im8 from '../assets/8.png';  
import im9 from '../assets/9.png';
import im10 from '../assets/10.png';
import im11 from '../assets/11.png';
import im12 from '../assets/12.png';  


const ClientsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredClient, setHoveredClient] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  // Using placeholder images for demonstration - replace with your actual image imports
  const clients = [
    { 
      id: 1, 
      name: "Whiz Media", 
      logo: im1, 
      category: "Social Media Marketing Agency",
      description: "Innovative creative solutions"
    },
    { 
      id: 2, 
      name: "Wild Ivy Wedding and Events Planners", 
      logo: im2, 
      category: "Event Planning",
      description: "Creating unforgettable moments"
    },
    { 
      id: 3, 
      name: "Maw & Paw", 
      logo: im3, 
      category: "Organic pet products",
      description: "Natural care for your pets"
    },
    { 
      id: 4, 
      name: "IZ Studio", 
      logo: im4, 
      category: "Saree manufactures",
      description: "Crafting timeless sarees"
    },
    { 
      id: 5, 
      name: "Naren Gems", 
      logo: im5, 
      category: "Real Diamond Company",
      description: "Authentic diamond excellence"
    },
    { 
      id: 6, 
      name: "24buy7", 
      logo: im6, 
      category: "Vending machine Distributors",
      description: "Convenience at your fingertips"
    },
    { 
      id: 7, 
      name: "Trendlend ", 
      logo: im7, 
      category: "Quick Home grown clothing rental stop",
      description: "Sustainable fashion solutions"
    },
    { 
      id: 8, 
      name: "Daily Delight", 
      logo: im8, 
      category: "Cafe",
      description: "Delicious moments every day"
    },
    { 
      id: 9, 
      name: "Amorefy", 
      logo: im9, 
      category: "Skincare brand",
      description: "Nurturing your skin naturally"
    },
    { 
      id: 10, 
      name: "Practical with Pratik", 
      logo: im10, 
      category: "Finance educator",
      description: "Empowering financial literacy"
    },
    { 
      id: 11, 
      name: "iLegalLearn", 
      logo: im11, 
      category: "Legal ed tech platform",
      description: "Transforming legal education"
    },
    { 
      id: 12, 
      name: "iLegalAdvice", 
      logo: im12, 
      category: "One stop legal solutions",
      description: "Your legal partner for success"
    },
  ];

  // Auto-rotate functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, clients.length]);

  // Mouse tracking for interactive effects
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

  // Get visible clients for curved display
  const getVisibleClients = () => {
    const visible = [];
    const visibleCount = window.innerWidth < 640 ? 3 : window.innerWidth < 1024 ? 5 : 7;
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
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Curved light rays */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-2 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 blur-sm"
            style={{
              transform: `rotate(${mousePosition.x * 20 - 10}deg) translateX(${mousePosition.x * 50}px)`
            }}
          />
          <div 
            className="absolute top-3/4 right-1/4 w-80 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent transform -rotate-12 blur-sm"
            style={{
              transform: `rotate(${mousePosition.y * -15 + 5}deg) translateY(${mousePosition.y * -30}px)`
            }}
          />
        </div>

        {/* Ambient orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-32 w-80 h-80 rounded-full bg-white/3 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Interactive spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.1), transparent 50%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-gray-300 via-white to-gray-100 bg-clip-text text-transparent italic">
              Clients
            </span>
          </h2>
          
          <div className="w-32 sm:w-40 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8" />
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Showcased on the{" "}
            <span className="text-white font-bold">digital stage</span>
            {" "}of success
          </p>
        </div>

        {/* Curved Screens Display */}
        <div className="relative mb-16 sm:mb-20">
          {/* Main curved display container */}
          <div className="relative perspective-1000" style={{ perspective: '1000px' }}>
            {/* Curved screens arrangement */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-12 min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
              {getVisibleClients().map((client, index) => {
                const totalVisible = getVisibleClients().length;
                const centerIndex = Math.floor(totalVisible / 2);
                const isCenter = index === centerIndex;
                const distance = Math.abs(index - centerIndex);
                
                // Calculate 3D positioning for curved effect
                const rotateY = (index - centerIndex) * 15; // Rotation angle
                const translateZ = isCenter ? 50 : distance === 1 ? 0 : -30; // Depth
                const scale = isCenter ? 1.2 : distance === 1 ? 1 : 0.8;
                const opacity = distance > 2 ? 0.3 : distance === 2 ? 0.6 : 1;
                
                return (
                  <div
                    key={`${client.id}-${currentIndex}`}
                    className="group relative transition-all duration-1000 ease-out"
                    style={{
                      transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                      transformStyle: 'preserve-3d',
                      opacity: opacity,
                      zIndex: isCenter ? 30 : distance === 1 ? 20 : 10
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
                    {/* Curved Screen Frame */}
                    <div className={`
                      relative w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-60 lg:w-56 lg:h-72 
                      bg-gradient-to-b from-gray-800 to-gray-900 
                      rounded-3xl p-2 sm:p-3 shadow-2xl
                      border border-gray-600
                      group-hover:border-white/50 group-hover:shadow-white/20 group-hover:shadow-2xl
                      transition-all duration-500 cursor-pointer
                      ${isCenter ? 'border-white/30 shadow-white/10' : ''}
                    `}>
                      
                      {/* Screen Bezel */}
                      <div className="absolute inset-1 rounded-2xl bg-black border border-gray-700" />
                      
                      {/* Screen Content */}
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                        {/* Screen Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 opacity-50" />
                        
                        {/* Client Logo Display */}
                        <div className="absolute inset-2 flex flex-col items-center justify-center p-2 sm:p-3">
                          {/* Logo */}
                          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-2 sm:mb-3 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                            <img 
                              src={client.logo} 
                              alt={`${client.name} logo`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="w-full h-full bg-gradient-to-br from-white to-gray-300 flex items-center justify-center text-black font-bold text-lg lg:text-xl" style={{display: 'none'}}>
                              {client.name.split(' ').map(word => word[0]).join('').substring(0, 2)}
                            </div>
                          </div>
                          
                          {/* Client Info */}
                          <div className="text-center">
                            <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-1 leading-tight">
                              {client.name}
                            </h3>
                            <p className="text-xs text-gray-300 opacity-80 leading-tight">
                              {client.category}
                            </p>
                          </div>
                        </div>
                        
                        {/* Screen Reflection */}
                        <div className="absolute top-0 left-1/4 w-1/4 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 transform -skew-x-12" />
                      </div>
                      
                      {/* Screen Stand */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg border-x border-gray-600" />
                    </div>

                    {/* Hover Info Panel */}
                    <div className={`
                      absolute -bottom-16 left-1/2 transform -translate-x-1/2 
                      bg-white/95 backdrop-blur-sm text-black px-4 py-2 rounded-lg shadow-lg
                      transition-all duration-300 pointer-events-none
                      ${hoveredClient === client.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    `}>
                      <p className="text-sm font-medium text-center whitespace-nowrap">
                        {client.description}
                      </p>
                    </div>

                    {/* Center Indicator */}
                    {isCenter && (
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-lg" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Status Indicator */}
          <div className="text-center text-gray-400 text-sm">
            {isPaused ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                Paused - Move away from screens to resume
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Auto-rotating - Hover on any screen to pause
              </span>
            )}
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 sm:mb-20 max-w-6xl mx-auto">
          {[
            { number: "11+", label: "Trusted Clients", accent: true },
            { number: "100%", label: "Success Rate", accent: false },
            { number: "50+", label: "Projects Delivered", accent: true },
            { number: "5★", label: "Average Rating", accent: false }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`
                text-center p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:scale-105
                ${stat.accent 
                  ? 'bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/15' 
                  : 'bg-white text-black hover:bg-gray-100'
                }
              `}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-3">{stat.number}</div>
              <div className="text-sm sm:text-base opacity-80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="max-w-5xl mx-auto text-center p-8 sm:p-10 md:p-12 rounded-3xl bg-white/10 border border-white/20 shadow-2xl backdrop-blur-sm mb-16 sm:mb-20">
          <div className="text-6xl sm:text-7xl text-white/20 mb-6 font-serif">"</div>
          <blockquote className="text-justify text-lg sm:text-xl md:text-2xl text-gray-200 font-light italic leading-relaxed mb-8 px-4">
            "Partnering with Whiz Media for Entrevate's social media management was one of the best decisions we made. Their team brought incredible energy, creativity, and consistency to the table. From pre-event buzz to live coverage and post-event engagement, they handled everything seamlessly. The content was top-notch, the strategies were on point, and their professionalism stood out. 
            Huge thanks to the <strong>Whiz Media team</strong> for amplifying Entrevate's presence and making it a memorable success!"
          </blockquote>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            className="group inline-flex items-center gap-4 px-8 sm:px-10 py-4 sm:py-5 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-semibold text-lg"
            onClick={() => scrollToSection("contact")}
          >
            <span>Join Our Success Stories</span>
            <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
              <span className="text-sm">→</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;