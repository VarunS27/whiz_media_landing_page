import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroAbout = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Responsive scroll transforms
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.8], [0.1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 0.8]);

  return (
    <div>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="min-h-screen bg-black text-white overflow-hidden relative"
        id="hero"
      >
        {/* Animated grid background */}
        <motion.div
          style={{ opacity: gridOpacity, y: backgroundY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] sm:bg-[size:6rem_6rem] lg:bg-[size:8rem_8rem]" />
        </motion.div>

        {/* Main container */}
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
          
          {/* Main content */}
          <motion.div
            style={{
              y: headerY,
              opacity: headerOpacity,
            }}
            className="text-center space-y-6 sm:space-y-8 lg:space-y-12 max-w-7xl mx-auto"
          >
            
            {/* Primary heading */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.25em] text-white leading-none">
                WHIZMEDIA
              </h1>
              
              {/* Subtle accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut"}}
                className="absolute -bottom-2 sm:-bottom-4 left-[27rem] -translate-x-1/2 w-16 sm:w-24 lg:w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
              className="text-sm sm:text-base lg:text-lg xl:text-xl font-light tracking-[0.3em] sm:tracking-[0.4em] text-white/70 uppercase"
            >
              Digital Architects
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
              className="text-xs sm:text-sm lg:text-base text-white/50 max-w-md sm:max-w-lg lg:max-w-xl mx-auto leading-relaxed"
            >
              Crafting digital experiences that blend innovation with elegance
            </motion.p>

          </motion.div>

          {/* Floating elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* Top left */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear"
              }}
              className="absolute top-8 sm:top-12 lg:top-16 left-8 sm:left-12 lg:left-16 w-2 h-2 sm:w-3 sm:h-3 border border-white/20 rotate-45"
            />
            
            {/* Top right */}
            <motion.div
              animate={{ 
                rotate: [360, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
              className="absolute top-16 sm:top-20 lg:top-24 right-8 sm:right-12 lg:right-16 w-1 h-8 sm:h-12 lg:h-16 bg-white/10"
            />
            
            {/* Bottom left */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
              className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-12 sm:left-16 lg:left-20 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full border border-white/20"
            />
            
            {/* Bottom right */}
            <motion.div
              animate={{ 
                x: [0, 20, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 12, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
              className="absolute bottom-8 sm:bottom-12 lg:bottom-16 right-16 sm:right-20 lg:right-24 w-6 h-1 sm:w-8 sm:h-1 lg:w-12 lg:h-1 bg-white/15"
            />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) 
            }}
            className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
          >
            <span className="text-[10px] sm:text-xs text-white/40 tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-white/40 to-transparent" />
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 bg-white/60 rounded-full"
            />
          </motion.div>

        </div>

        {/* Progressive overlay on scroll */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="fixed inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none"
        />

        {/* Border frame */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
          className="absolute inset-2 sm:inset-4 lg:inset-6 border border-white/5 pointer-events-none"
        />

        {/* Corner accents */}
        {[
          { position: "top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8", border: "border-t border-l" },
          { position: "top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8", border: "border-t border-r" },
          { position: "bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8", border: "border-b border-l" },
          { position: "bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8", border: "border-b border-r" }
        ].map((corner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2 + index * 0.1 }}
            className={`absolute ${corner.position} w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ${corner.border} border-white/15`}
          />
        ))}

      </section>
    </div>
  );
};

export default HeroAbout;