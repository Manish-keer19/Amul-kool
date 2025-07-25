import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/product-details", label: "Products Details" },
    { to: "/about-us", label: "About" },
  ];

  const linkMotionProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" },
    whileHover: { scale: 1.1, y: -2 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-4 flex items-center justify-between">
      <motion.img
        src="./images/Nav-logo.png"
        alt="Amul Kool Logo"
        className="w-20 md:w-24"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <motion.div key={link.to} {...linkMotionProps}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `font-paragraph text-base md:text-xl px-3 py-1 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-[#fdd7c2]"
                    : "bg-[#F9EADE] hover:bg-[#fdd7c2]"
                }`
              }
            >
              {link.label}
            </NavLink>
          </motion.div>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full bg-[#fff2e7]/90 backdrop-blur-lg flex flex-col items-center gap-4 py-6 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <motion.div key={link.to} whileHover={{ scale: 1.05 }}>
              <NavLink
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-paragraph text-base px-4 py-2 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#fdd7c2]"
                      : "bg-[#F9EADE] hover:bg-[#fdd7c2]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
