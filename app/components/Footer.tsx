"use client";

import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaMotorcycle } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-gray-300 w-full mt-20">
      {/* Top Section with Pattern */}
      <div className="relative overflow-hidden border-t border-red-700/30">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre-v2.png')",
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaMotorcycle className="text-red-500 text-3xl" />
                <div>
                  <h2 className="font-oswald text-2xl font-bold text-white">
                    ASRI LUCKYSTRIKE
                  </h2>
                  <p className="text-red-500 text-sm font-semibold">GARAGE</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Preserving motorcycle heritage since 1990. Specialists in rare & vintage Yamaha machines.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  <FaYoutube size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  <SiWhatsapp size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-oswald text-lg font-semibold text-white mb-4 pb-2 border-b border-red-700/50">
                QUICK LINKS
              </h3>
              <ul className="space-y-2">
                {["Home", "About", "Models", "Merchandise", "Events", "Gallery", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-gray-400 hover:text-red-500 hover:pl-2 transition-all duration-300 flex items-center"
                    >
                      <span className="w-1 h-1 bg-red-500 rounded-full mr-2 opacity-0 group-hover:opacity-100"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-oswald text-lg font-semibold text-white mb-4 pb-2 border-b border-red-700/50">
                CONTACT US
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    Selangor, Malaysia
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-red-500 flex-shrink-0" />
                  <span className="text-sm">+60 12-345 6789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-red-500 flex-shrink-0" />
                  <a 
                    href="mailto:asriluckystrikegarage@gmail.com" 
                    className="text-sm hover:text-red-500 transition-colors"
                  >
                    asriluckystrikegarage@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-oswald text-lg font-semibold text-white mb-4 pb-2 border-b border-red-700/50">
                NEWSLETTER
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                Subscribe for updates on new arrivals and events.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 text-sm"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Working Hours */}
          <div className="mt-10 pt-8 border-t border-gray-800">
            <div className="text-center">
              <h4 className="font-oswald text-lg font-semibold text-white mb-2">
                WORKING HOURS
              </h4>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div>
                  <span className="text-red-500 font-semibold">Mon - Fri:</span> 9:00 AM - 7:00 PM
                </div>
                <div>
                  <span className="text-red-500 font-semibold">Saturday:</span> 10:00 AM - 5:00 PM
                </div>
                <div>
                  <span className="text-red-500 font-semibold">Sunday:</span> By Appointment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-xs text-gray-500">
                © {currentYear} Asri Luckystrike Garage. All rights reserved.
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Specializing in Yamaha RD, RZ & YP series (1980s — early 2000s)
              </p>
            </div>
            <div className="text-xs text-gray-500">
              <a href="#" className="hover:text-red-500 transition-colors mx-2">Privacy Policy</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="hover:text-red-500 transition-colors mx-2">Terms of Service</a>
              <span className="text-gray-700">•</span>
              <a href="#" className="hover:text-red-500 transition-colors mx-2">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;