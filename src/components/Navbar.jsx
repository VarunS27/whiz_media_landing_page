import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"

// Animation Variants
const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const menuItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const navItems = [
  { name: "about", label: "About" },
  { name: "services", label: "Services" },
  { name: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMobileMenuOpen(false);
    }
  }, []);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <>
      {/* Header */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-gray-800 shadow-2xl"
            : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <div className="h-10 w-32 rounded-sm flex items-center justify-center ">
            <span className="text-black font-black text-sm tracking-tight"><img src={logo} alt=""/></span>
          </div>
        </motion.div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 text-white text-lg font-medium">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative bg-transparent border-none outline-none transition-all duration-300 ${
                active === item.name
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
              {active === item.name && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMobileMenu}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 z-60"
          aria-label="Toggle mobile menu"
          type="button"
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black border-l border-gray-800 z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <div
                    className="h-8 w-24 bg-white rounded-sm flex items-center justify-center cursor-pointer"
                    onClick={() => scrollToSection("hero")}
                  >
                    <span className="text-black font-black text-sm tracking-tight">WHIZMEDIA</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    type="button"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Nav Items */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-6">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.name}
                        onClick={() => scrollToSection(item.name)}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={menuItemVariants}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className={`block text-left w-full text-2xl font-medium transition-all duration-300 ${
                          active === item.name
                            ? "text-white pl-4 border-l-2 border-white"
                            : "text-gray-400 hover:text-white hover:pl-2"
                        }`}
                        type="button"
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </nav>

                {/* Footer Button */}
                <div className="p-6 border-t border-gray-800">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-black py-3 px-6 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors duration-200"
                    type="button"
                    onClick={() => scrollToSection("contact")}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;