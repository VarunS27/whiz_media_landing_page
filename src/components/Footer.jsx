import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight
} from "lucide-react";
import logo from "../assets/logo.png";
const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/whizmedia.in?igsh=djRtZmRob210b3Jv&utm_source=qr", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/whiz-mediaa", label: "LinkedIn" }
  ];

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMobileMenuOpen(false);
    }
  };

  const services = [
    "Content Writing",
    "Campaign Strategy", 
    "Video Editing",
    "Digital Design",
    "Influencer Marketing",
    "Performance Marketing"
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-white rounded-full transform translate-x-28 translate-y-28"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center h-12 px-4 rounded-lg mb-4">
                  <span className="text-black font-black text-xl tracking-tight" 
                  onClick={() => scrollToSection("hero")}><img src={logo} alt="logo" className="w-52 cursor-pointer"/></span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                  Transforming brands through innovative digital solutions. We create experiences that captivate, engage, and convert your audience into loyal customers.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group">
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-lg group-hover:bg-white group-hover:text-black transition-all duration-200">
                    <Mail size={14} />
                  </div>
                  <span className="text-sm">whizmedia06@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group">
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-lg group-hover:bg-white group-hover:text-black transition-all duration-200">
                    <MapPin size={14} />
                  </div>
                  <span className="text-sm">Mumbai, Maharashtra, IN</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4 relative">
                <span className="relative z-10">OUR SERVICES</span>
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-white rounded-full"></div>
              </h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300 hover:text-white transition-all duration-200 cursor-pointer group flex items-center gap-2 text-sm">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & CTA */}
            <div>
              <h4 className="text-lg font-bold mb-4">CONNECT WITH US</h4>
              <p className="text-gray-400 mb-4 text-sm">Follow us on social media for the latest updates</p>
              
              {/* Social Links */}
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer" 
                    aria-label={social.label}
                    className="group relative w-10 h-10 bg-gray-800 hover:bg-white flex items-center justify-center rounded-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <social.icon size={16} className="text-white group-hover:text-black transition-colors duration-300" />
                  </a>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800 bg-gray-900">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Whiz Media. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200 relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200 relative group">
                Terms of Service  
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200 relative group">
                Cookie Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;