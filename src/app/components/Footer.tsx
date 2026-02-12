import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#3d3a4a] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand Column */}
          <div>
            <h3 className="text-3xl font-heading font-medium mb-4 tracking-premium">
              <span className="text-[#C4B5D0] font-heading italic">Adenails</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Our priority is to make sure you satisfied and happy with your nails.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/adenails/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#6F4F7B] rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#6F4F7B] rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#6F4F7B] rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm mb-4 text-[#C4B5D0] uppercase tracking-[0.14em] font-medium">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#6F4F7B] transition-colors duration-300">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-[#6F4F7B] transition-colors duration-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-400 hover:text-[#6F4F7B] transition-colors duration-300">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#6F4F7B] transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#6F4F7B] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm mb-4 text-[#C4B5D0] uppercase tracking-[0.14em] font-medium">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6F4F7B] transition-colors duration-300">
                  Essential Manicure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6F4F7B] transition-colors duration-300">
                  Premium Gel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6F4F7B] transition-colors duration-300">
                  Luxury Experience
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6F4F7B] transition-colors duration-300">
                  Custom Nail Art
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#6F4F7B] transition-colors duration-300">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm mb-4 text-[#C4B5D0] uppercase tracking-[0.14em] font-medium">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#6F4F7B] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  6 Kikuyu Road<br />
                  Sunninghill, South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#6F4F7B] flex-shrink-0" />
                <a href="tel:+27613425838" className="text-gray-400 text-sm hover:text-[#6F4F7B] transition-colors duration-300">
                  +27 61 342 5838
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#6F4F7B] flex-shrink-0" />
                <a href="mailto:hello@adenails.com" className="text-gray-400 text-sm hover:text-[#6F4F7B] transition-colors duration-300">
                  hello@adenails.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Adenails. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#6F4F7B] transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6F4F7B] transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6F4F7B] transition-colors duration-300 text-sm">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
