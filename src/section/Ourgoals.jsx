import React, { useState, useEffect, useRef } from 'react';

const GoalsSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;

      const scrollTop = -rect.top;
      const progress = Math.max(0, Math.min(1, scrollTop / (sectionHeight - windowHeight)));

      setScrollProgress(progress);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goals = [
    { number: "01", title: "INCREASE THE NUMBER OF FOLLOWERS AND ENGAGEMENT", delay: 0 },
    { number: "02", title: "EXPAND BRAND AWARENESS TO WIDER AUDIENCE", delay: 200 },
    { number: "03", title: "INCREASE TRAFFIC TO SOCIAL MEDIA ACCOUNT", delay: 400 }
  ];

  // Reduce zoom effect on mobile for better performance
  const zoomScale = 1 + scrollProgress * (isMobile ? 2 : 5);
  const contentVisible = scrollProgress < 1;
  const nextSectionVisible = scrollProgress > 0.5;

  return (
    <div ref={sectionRef} className="relative h-[130vh] bg-black overflow-hidden">
      {/* Main Content Container with sticky effect */}
      <div
        className="sticky top-0 h-screen flex items-center justify-center transition-opacity duration-500"
        style={{
          transform: `scale(${zoomScale})`,
          opacity: contentVisible ? 1 : 0,
          pointerEvents: contentVisible ? 'auto' : 'none',
          transformOrigin: isMobile ? 'center center' : '60% center'
        }}
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Left Side */}
            <div className="flex-1 pr-8">
              <h1 className="text-5xl xl:text-7xl font-bold text-white mb-4 tracking-tight">
                OUR GOALS
              </h1>

              <div className="relative w-72 xl:w-80 h-48 xl:h-56 mt-8">
                <svg viewBox="0 0 400 300" className="w-full h-full" style={{ filter: 'drop-shadow(0 20px 40px rgba(255, 0, 255, 0.3))' }}>
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff006e" />
                      <stop offset="25%" stopColor="#8338ec" />
                      <stop offset="50%" stopColor="#3a86ff" />
                      <stop offset="75%" stopColor="#06ffa5" />
                      <stop offset="100%" stopColor="#ffbe0b" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f72585" />
                      <stop offset="33%" stopColor="#4cc9f0" />
                      <stop offset="66%" stopColor="#7209b7" />
                      <stop offset="100%" stopColor="#560bad" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M50,150 Q200,50 350,150 Q200,250 50,150 Z"
                    fill="url(#gradient1)"
                    opacity="0.9"
                    className="animate-pulse"
                    style={{ animation: 'float 6s ease-in-out infinite' }}
                  />
                  <path
                    d="M100,100 Q250,200 300,100 Q150,200 100,100 Z"
                    fill="url(#gradient2)"
                    opacity="0.7"
                    style={{ animation: 'float 4s ease-in-out infinite reverse' }}
                  />
                </svg>
              </div>
            </div>

            {/* Right Side - Goals */}
            <div className="flex-1 max-w-lg">
              <div className="bg-gray-900 rounded-3xl p-6 xl:p-8 border border-gray-800 space-y-6">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    style={{
                      animation: `slideInRight 1s ease-out ${goal.delay}ms both`
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl xl:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 flex-shrink-0">
                        {goal.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg xl:text-xl font-medium text-gray-300 group-hover:text-white transition-colors duration-300 leading-tight">
                          {goal.title}
                        </h3>
                      </div>
                    </div>
                    {index < goals.length - 1 && (
                      <div className="mt-6 h-px bg-gray-700 group-hover:bg-gray-600 transition-colors duration-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:flex lg:hidden flex-col items-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center tracking-tight">
              OUR GOALS
            </h1>

            <div className="relative w-64 h-40">
              <svg viewBox="0 0 400 300" className="w-full h-full" style={{ filter: 'drop-shadow(0 15px 30px rgba(255, 0, 255, 0.3))' }}>
                <defs>
                  <linearGradient id="gradient1-tablet" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff006e" />
                    <stop offset="25%" stopColor="#8338ec" />
                    <stop offset="50%" stopColor="#3a86ff" />
                    <stop offset="75%" stopColor="#06ffa5" />
                    <stop offset="100%" stopColor="#ffbe0b" />
                  </linearGradient>
                  <linearGradient id="gradient2-tablet" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f72585" />
                    <stop offset="33%" stopColor="#4cc9f0" />
                    <stop offset="66%" stopColor="#7209b7" />
                    <stop offset="100%" stopColor="#560bad" />
                  </linearGradient>
                </defs>
                <path
                  d="M50,150 Q200,50 350,150 Q200,250 50,150 Z"
                  fill="url(#gradient1-tablet)"
                  opacity="0.9"
                  style={{ animation: 'float 6s ease-in-out infinite' }}
                />
                <path
                  d="M100,100 Q250,200 300,100 Q150,200 100,100 Z"
                  fill="url(#gradient2-tablet)"
                  opacity="0.7"
                  style={{ animation: 'float 4s ease-in-out infinite reverse' }}
                />
              </svg>
            </div>

            <div className="w-full max-w-2xl">
              <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800 space-y-6">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    style={{
                      animation: `slideInRight 1s ease-out ${goal.delay}ms both`
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 flex-shrink-0">
                        {goal.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300 leading-tight">
                          {goal.title}
                        </h3>
                      </div>
                    </div>
                    {index < goals.length - 1 && (
                      <div className="mt-6 h-px bg-gray-700 group-hover:bg-gray-600 transition-colors duration-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col items-center space-y-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight px-2">
              OUR GOALS
            </h1>

            <div className="relative w-48 sm:w-56 h-32 sm:h-36">
              <svg viewBox="0 0 400 300" className="w-full h-full" style={{ filter: 'drop-shadow(0 10px 20px rgba(255, 0, 255, 0.3))' }}>
                <defs>
                  <linearGradient id="gradient1-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff006e" />
                    <stop offset="25%" stopColor="#8338ec" />
                    <stop offset="50%" stopColor="#3a86ff" />
                    <stop offset="75%" stopColor="#06ffa5" />
                    <stop offset="100%" stopColor="#ffbe0b" />
                  </linearGradient>
                  <linearGradient id="gradient2-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f72585" />
                    <stop offset="33%" stopColor="#4cc9f0" />
                    <stop offset="66%" stopColor="#7209b7" />
                    <stop offset="100%" stopColor="#560bad" />
                  </linearGradient>
                </defs>
                <path
                  d="M50,150 Q200,50 350,150 Q200,250 50,150 Z"
                  fill="url(#gradient1-mobile)"
                  opacity="0.9"
                  style={{ animation: 'float 6s ease-in-out infinite' }}
                />
                <path
                  d="M100,100 Q250,200 300,100 Q150,200 100,100 Z"
                  fill="url(#gradient2-mobile)"
                  opacity="0.7"
                  style={{ animation: 'float 4s ease-in-out infinite reverse' }}
                />
              </svg>
            </div>

            <div className="w-full max-w-sm">
              <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-800 space-y-4 sm:space-y-6">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    style={{
                      animation: `slideInUp 1s ease-out ${goal.delay}ms both`
                    }}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4 text-left">
                      <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 flex-shrink-0">
                        {goal.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300 leading-tight">
                          {goal.title}
                        </h3>
                      </div>
                    </div>
                    {index < goals.length - 1 && (
                      <div className="mt-4 sm:mt-6 h-px bg-gray-700 group-hover:bg-gray-600 transition-colors duration-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Section */}
      <div
        className="sticky top-0 h-screen flex items-center justify-center bg-black transition-opacity duration-500"
        style={{
          opacity: nextSectionVisible ? 1 : 0,
          pointerEvents: nextSectionVisible ? 'auto' : 'none',
          transform: `scale(${Math.max(0.9, 1 - (scrollProgress - 0.5) * 0.3)})`,
        }}
      >
       
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(2deg); }
          }
        }
      `}</style>
    </div>
  );
};

export default GoalsSection;