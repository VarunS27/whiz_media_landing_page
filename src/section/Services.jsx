import { useState, useRef, useEffect, useCallback } from 'react';

// Icon Components
const IconComponents = {
  ChefHat: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
      <line x1="6" y1="17" x2="18" y2="17"/>
    </svg>
  ),
  Star: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
    </svg>
  ),
  Sparkles: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      <path d="M5 3v4"/>
      <path d="M19 17v4"/>
      <path d="M3 5h4"/>
      <path d="M17 19h4"/>
    </svg>
  ),
  GraduationCap: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
      <path d="M22 10v6"/>
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
    </svg>
  ),
  Scale: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/>
      <path d="M12 12 4 7.5"/>
      <path d="m12 12 8-4.5"/>
      <path d="M12 12v9"/>
    </svg>
  ),
  TrendingUp: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
    </svg>
  ),
  User: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Camera: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
      <circle cx="12" cy="13" r="3"/>
    </svg>
  )
};

// Niche data configuration
const NICHES_DATA = [
  {
    id: 1,
    title: 'Restaurants & Cafes',
    subtitle: 'Culinary Excellence',
    description: 'Crafting culinary experiences that bring people together through exceptional food and memorable atmospheres.',
    icon: 'ChefHat',
    features: ['Menu Design', 'Brand Identity', 'Digital Presence', 'Customer Experience']
  },
  {
    id: 2,
    title: 'Clothing & Fashion',
    subtitle: 'Style Revolution',
    description: 'Defining style narratives that resonate with fashion-forward consumers and establish lasting connections.',
    icon: 'Star',
    features: ['Fashion Photography', 'Brand Positioning', 'Seasonal Campaigns', 'Trend Analysis']
  },
  {
    id: 3,
    title: 'Skincare & Cosmetics',
    subtitle: 'Beauty Innovation',
    description: 'Building beauty brands that celebrate individuality while delivering transformative solutions.',
    icon: 'Sparkles',
    features: ['Product Launch', 'Influencer Partnerships', 'Educational Content', 'Community Building']
  },
  {
    id: 4,
    title: 'Ed-Tech Industry',
    subtitle: 'Learning Evolution',
    description: 'Revolutionizing education through innovative technology that makes learning accessible and engaging.',
    icon: 'GraduationCap',
    features: ['User Experience', 'Content Strategy', 'Platform Development', 'Student Engagement']
  },
  {
    id: 5,
    title: 'Legal Tech Startups',
    subtitle: 'Justice Technology',
    description: 'Transforming legal services through cutting-edge technology that simplifies complex processes.',
    icon: 'Scale',
    features: ['Compliance Solutions', 'Process Automation', 'Client Portals', 'Document Management']
  },
  {
    id: 6,
    title: 'Product Marketing',
    subtitle: 'Growth Strategy',
    description: 'Strategic marketing approaches that drive product adoption and create meaningful relationships.',
    icon: 'TrendingUp',
    features: ['Go-to-Market Strategy', 'Product Positioning', 'Launch Campaigns', 'Performance Analytics']
  },
  {
    id: 7,
    title: 'Personal Branding',
    subtitle: 'Authentic Identity',
    description: 'Empowering individuals to build authentic personal brands that reflect their unique expertise.',
    icon: 'User',
    features: ['Brand Strategy', 'Content Creation', 'Social Media', 'Thought Leadership']
  },
  {
    id: 8,
    title: 'Modelling Industry',
    subtitle: 'Visual Storytelling',
    description: 'Creating compelling visual narratives that showcase talent and build successful careers.',
    icon: 'Camera',
    features: ['Portfolio Development', 'Agency Relations', 'Brand Partnerships', 'Career Strategy']
  }
];

// Background animation component
const AnimatedBackground = ({ mousePosition }) => (
  <>
    {/* Static animated orbs */}
    <div className="absolute inset-0 " id="services">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl animate-pulse" />
      <div 
        className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl animate-pulse" 
        style={{animationDelay: '1s'}} 
      />
      <div 
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl animate-pulse" 
        style={{animationDelay: '2s'}} 
      />
    </div>

    {/* Mouse-following spotlight */}
    <div
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.03), transparent 40%)`,
      }}
    />
  </>
);

// Header section component
const SectionHeader = () => (
  <div className="text-center mb-20">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-none">
      Our{" "}
      <span className="text-white italic">
        Niches
      </span>
    </h2>
    <div className="w-32 h-2 bg-white mx-auto rounded-full mb-8" />
    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
      Specialized expertise across diverse industries,{" "}
      <span className="text-white font-semibold">delivering exceptional results</span>
    </p>
  </div>
);

// Individual niche card component
const NicheCard = ({ niche, index, isActive, onHover, onLeave }) => {
  const IconComponent = IconComponents[niche.icon];

  return (
    <div
      className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer transform ${
        isActive 
          ? 'border-white bg-gray-900/50 scale-105 shadow-2xl shadow-white/10' 
          : 'border-gray-800 bg-gray-900/30 hover:border-gray-600 hover:bg-gray-900/40 hover:scale-102'
      }`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
    >
      {/* Glow effect for active card */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
      )}

      {/* Icon */}
      <div className={`mb-6 transition-all duration-300 ${
        isActive ? 'text-white transform scale-110' : 'text-gray-400 group-hover:text-gray-200'
      }`}>
        <IconComponent />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
          isActive ? 'text-white' : 'text-gray-200 group-hover:text-white'
        }`}>
          {niche.title}
        </h3>
        
        <p className={`text-sm font-medium mb-4 transition-colors duration-300 ${
          isActive ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'
        }`}>
          {niche.subtitle}
        </p>
        
        <p className={`text-sm leading-relaxed mb-6 transition-all duration-300 ${
          isActive ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'
        }`}>
          {niche.description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          {niche.features.map((feature, idx) => (
            <div 
              key={idx}
              className={`text-xs px-3 py-1 rounded-full border transition-all duration-300 ${
                isActive 
                  ? 'border-gray-600 bg-gray-800/50 text-gray-300' 
                  : 'border-gray-700 bg-gray-800/30 text-gray-500 group-hover:border-gray-600 group-hover:text-gray-400'
              }`}
            >
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Corner accent */}
      <div className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
        isActive ? 'bg-white scale-150' : 'bg-gray-600 group-hover:bg-gray-400'
      }`} />
    </div>
  );
};

// Custom hook for mouse tracking
const useMouseTracking = (containerRef) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    }
  }, [containerRef]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove]);

  return mousePosition;
};

// Main component
const NichesSection = () => {
  const [activeNiche, setActiveNiche] = useState(0);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  
  const mousePosition = useMouseTracking(containerRef);

  const handleNicheHover = useCallback((index) => {
    setActiveNiche(index);
  }, []);

  const handleNicheLeave = useCallback(() => {
    setActiveNiche(0);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <AnimatedBackground mousePosition={mousePosition} />

      <div 
        ref={containerRef}
        className="relative z-10 container mx-auto px-6 py-20"
      >
        {/* Header */}
        <SectionHeader />

        {/* Niches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {NICHES_DATA.map((niche, index) => (
            <NicheCard
              key={niche.id}
              niche={niche}
              index={index}
              isActive={activeNiche === index}
              onHover={handleNicheHover}
              onLeave={handleNicheLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NichesSection;