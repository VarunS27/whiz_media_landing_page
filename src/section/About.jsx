import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const aboutRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <section
      ref={aboutRef}
      className="relative min-h-screen bg-white text-black py-24 overflow-hidden"
      id="about"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-black/10"></div>
        <div className="absolute top-1/3 right-1/3 w-px h-24 bg-black/10"></div>
        <div className="absolute bottom-1/4 left-1/2 w-px h-16 bg-black/10"></div>
        <div className="absolute top-1/2 left-1/6 w-16 h-px bg-black/10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-px bg-black/10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          style={{ y, opacity }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
              About US
            </h2>
            <div className="w-12 h-px bg-black mx-auto"></div>
          </motion.div>

          {/* Main content grid */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-light leading-relaxed">
                  Crafting digital experiences that resonate
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  WhizMedia represents a new approach to digital storytelling. We believe in the power of 
                  authentic connections and meaningful conversations that drive real impact.
                </p>
              </div>

              <div className="border-l-2 border-black/20 pl-6 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Our philosophy centers on understanding your unique voice and amplifying it through 
                  strategic digital presence. We don't just create content—we build communities.
                </p>
              </div>
            </motion.div>

            {/* Right column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Services grid */}
              <div className="space-y-6">
                <h4 className="text-xl font-light mb-6">Our Focus Areas</h4>
                
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: "Strategic Consulting", desc: "Tailored growth strategies for emerging brands" },
                    { title: "Content Creation", desc: "Authentic storytelling that connects and converts" },
                    { title: "Community Building", desc: "Fostering genuine relationships with your audience" },
                    { title: "Brand Development", desc: "Defining your unique voice in the digital landscape" }
                  ].map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="group p-4 border border-black/10 hover:border-black/20 transition-colors duration-300"
                    >
                      <h5 className="font-medium text-lg mb-2 group-hover:text-black/80 transition-colors">
                        {service.title}
                      </h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center pt-16 border-t border-black/10"
          >
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                We partner with startups, creators, and communities who are ready to make their mark. 
                Our approach combines strategic thinking with creative execution to deliver results that matter.
              </p>
              <div className="flex justify-center items-center space-x-4 pt-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-sm font-light tracking-widest uppercase text-gray-500">
                  Established 2024
                </span>
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;