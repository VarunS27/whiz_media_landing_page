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

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between gap-16">
            {/* Left Side */}
            <div className="flex-1 max-w-2xl">
              <div className="space-y-8">
                <div>
                  <h1 className="text-6xl xl:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
                    OUR GOALS
                  </h1>
                  <div className="w-24 h-1 bg-white"></div>
                </div>

              </div>
            </div>

            {/* Right Side - Goals */}
            <div className="flex-1 max-w-2xl">
              <div className="space-y-8">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer transform transition-all duration-500 hover:translate-x-4"
                    style={{
                      animation: `slideInRight 1s ease-out ${goal.delay}ms both`
                    }}
                  >
                    <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10 hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300">
                      <div className="flex items-start space-x-6">
                        <div className="text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          {goal.number}
                        </div>
                        <div className="flex-1 pt-2">
                          <h3 className="text-xl font-medium text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                            {goal.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:flex lg:hidden flex-col items-center space-y-12 text-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
                OUR GOALS
              </h1>
              <div className="w-16 h-1 bg-white mx-auto"></div>
            </div>

            {/* Abstract Design for Tablet */}
            <div className="relative w-72 h-48">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 border-3 border-white rounded-full opacity-20 animate-spin-slow"></div>
                <div className="absolute w-24 h-24 border-2 border-white rounded-full opacity-40 animate-pulse top-6 left-6"></div>
                <div className="absolute w-16 h-16 border-2 border-white rounded-full opacity-60 animate-bounce-slow bottom-8 right-8"></div>
                <div className="absolute w-3 h-3 bg-white rounded-full top-12 right-16 animate-ping"></div>
                <div className="absolute w-4 h-4 bg-white rounded-full bottom-16 left-16 opacity-80"></div>
              </div>
            </div>

            <div className="w-full max-w-3xl space-y-6">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                  style={{
                    animation: `slideInUp 1s ease-out ${goal.delay}ms both`
                  }}
                >
                  <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300">
                    <div className="flex items-start space-x-5">
                      <div className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {goal.number}
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed text-left">
                          {goal.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none px-2">
                OUR GOALS
              </h1>
              <div className="w-12 h-1 bg-white mx-auto"></div>
            </div>

            {/* Abstract Design for Mobile */}
            <div className="relative w-56 h-36">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-white rounded-full opacity-20 animate-spin-slow"></div>
                <div className="absolute w-20 h-20 border border-white rounded-full opacity-40 animate-pulse top-4 left-4"></div>
                <div className="absolute w-12 h-12 border border-white rounded-full opacity-60 animate-bounce-slow bottom-6 right-6"></div>
                <div className="absolute w-2 h-2 bg-white rounded-full top-8 right-12 animate-ping"></div>
                <div className="absolute w-3 h-3 bg-white rounded-full bottom-12 left-12 opacity-80"></div>
              </div>
            </div>

            <div className="w-full max-w-sm space-y-4">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                  style={{
                    animation: `slideInUp 1s ease-out ${goal.delay}ms both`
                  }}
                >
                  <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-5 border border-white border-opacity-10 hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300">
                    <div className="flex items-start space-x-4 text-left">
                      <div className="text-2xl sm:text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {goal.number}
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                          {goal.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default GoalsSection;