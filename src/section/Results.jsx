import React, { useState, useEffect, useRef } from 'react';
import r1 from '../assets/r1.jpg';
import r2 from '../assets/r2.jpg';
import r3 from '../assets/r3.jpg';
import r4 from '../assets/r4.jpg';
import r5 from '../assets/r5.jpg';
import r6 from '../assets/r6.jpg';
import r7 from '../assets/r7.jpg';




const AgencyResultsShowcase = () => {
  const [selectedResult, setSelectedResult] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const resultImages = [
    {
      id: 1,
      title: "Social Media Growth",
      metric: "342%",
      description: "Increased engagement through targeted content strategy",
      imageUrl: r1
    },
    {
      id: 2,
      title: "E-commerce Boost",
      metric: "189%",
      description: "Revenue growth via optimized user experience",
      imageUrl: r2
    },
    {
      id: 3,
      title: "Brand Recognition",
      metric: "2.3M",
      description: "Brand impressions across digital channels",
      imageUrl: r3
    },
    {
      id: 4,
      title: "Story views",
      metric: "156%",
      description: "Qualified leads through strategic campaigns",
      imageUrl: r4
    },
    {
      id: 5,
      title: "Content Performance",
      metric: "67%",
      description: "Conversion rate improvement via content optimization",
      imageUrl: r5
    },
    {
      id: 6,
      title: "Video Marketing",
      metric: "4.2M",
      description: "Video views from viral campaign execution",
      imageUrl: r6
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ResultCard = ({ result, index }) => (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => setSelectedResult(result)}
    >
      <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300">
        <div className="aspect-[3/2] overflow-hidden bg-gray-100">
          <img
            src={result.imageUrl}
            alt={result.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              hoveredIndex === index ? 'scale-105 grayscale-0' : 'grayscale'
            }`}
          />
        </div>
      </div>
    </div>
  );

  const Modal = ({ result, onClose }) => {
    if (!result) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <div 
          className="bg-white max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-medium text-black mb-2">{result.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="aspect-[3/2] overflow-hidden bg-gray-100 mb-6">
              <img
                src={result.imageUrl}
                alt={result.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedResult(null);
      }
    };

    if (selectedResult) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedResult]);

  return (
    <div ref={sectionRef} className="bg-gray-50 py-16" id="results">
      <div className="max-w-6xl mx-auto px-6">
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-4"> <u> Our Results </u></h1>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Measurable outcomes from strategic campaigns across various industries and platforms.
          </p>
        </div>

        {/* Clean Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {resultImages.map((result, index) => (
            <ResultCard key={result.id} result={result} index={index} />
          ))}
        </div>


      </div>

      {/* Modal */}
      <Modal result={selectedResult} onClose={() => setSelectedResult(null)} />
    </div>
  );
};

export default AgencyResultsShowcase;