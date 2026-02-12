import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { BookingDialog } from "./BookingDialog";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  const navLinks = [
    { name: "SERVICES", href: "#services" },
    { name: "PORTFOLIO", href: "#portfolio" },
    { name: "CARE", href: "#care" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-[38px] left-0 right-0 z-50 bg-[#F8F7F5]/98 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 group">
            <span className="text-[#8B1A1A] font-serif text-3xl font-normal tracking-tight">
              Adenails
            </span>
            <span className="w-1.5 h-1.5 bg-[#8B1A1A] rounded-full mt-1"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#2a2a2a] hover:text-[#8B1A1A] transition-colors duration-300 uppercase tracking-wider text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <motion.button
              onClick={() => setIsBookingDialogOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-[#8B1A1A] text-white rounded-lg hover:bg-[#7A1515] transition-all duration-300 uppercase tracking-wider text-sm font-medium"
            >
              BOOK NOW
            </motion.button>
            <div className="flex flex-col items-center gap-1 ml-2">
              <ShoppingBag className="w-5 h-5 text-[#2a2a2a] hover:text-[#8B1A1A] transition-colors cursor-pointer" />
              <Search className="w-5 h-5 text-[#2a2a2a] hover:text-[#8B1A1A] transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#2a2a2a] hover:text-[#8B1A1A] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-[#2a2a2a] hover:text-[#8B1A1A] uppercase tracking-wider text-sm py-2"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsBookingDialogOpen(true);
                  }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="block w-full px-6 py-3 bg-[#8B1A1A] text-white rounded-lg text-center uppercase tracking-wider text-sm font-medium"
                >
                  BOOK NOW
                </motion.button>
                <div className="flex items-center gap-4 pt-2">
                  <ShoppingBag className="w-5 h-5 text-[#2a2a2a]" />
                  <Search className="w-5 h-5 text-[#2a2a2a]" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <BookingDialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen} />
    </motion.nav>
  );
}
