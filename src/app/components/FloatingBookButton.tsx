import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { BookingDialog } from "./BookingDialog";

export function FloatingBookButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide button when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 20,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsDialogOpen(true)}
      className="fixed bottom-6 right-6 z-50 bg-[#8B1A1A] text-white px-6 py-4 rounded-full shadow-lg hover:bg-[#7A1515] transition-colors duration-300 flex items-center gap-3 group"
      style={{
        boxShadow: "0 4px 20px rgba(139, 26, 26, 0.4)",
      }}
      aria-label="Book Now"
    >
      <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
      <span className="font-medium uppercase tracking-wider text-sm hidden sm:inline">
        Book Now
      </span>
      <span className="font-medium uppercase tracking-wider text-sm sm:hidden">
        Book
      </span>
      
      {/* Pulse animation ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#8B1A1A] opacity-50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ zIndex: -1 }}
      />
      <BookingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </motion.button>
  );
}
