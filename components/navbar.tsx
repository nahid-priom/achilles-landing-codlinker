"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BookCallButton } from "@/components/book-call-button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  // Close mobile menu when clicking outside or on route change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm transition-all duration-300 ${
        isScrolled ? "h-[70px] lg:h-24" : "h-20 lg:h-28"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-achilles-blue rounded-md">
            <motion.div
              whileHover={{ scale: 1.05, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="Achilles Virtual Agency"
                width={160}
                height={140}
                className="h-28 w-24 md:h-24 md:w-28 lg:h-40 lg:w-auto object-cover transition-all duration-300"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`text-sm lg:text-base font-medium transition-colors relative group ${
                      isActive
                        ? "text-achilles-blue"
                        : "text-gray-700 hover:text-achilles-blue"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                        isActive
                          ? "w-full bg-achilles-blue"
                          : "w-0 bg-achilles-blue group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </motion.div>
              );
            })}
            <BookCallButton
              variant="achillesPrimary"
              size={isScrolled ? "default" : "lg"}
              showIcon
              className="text-xs sm:text-sm lg:text-base whitespace-nowrap"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-achilles-blue"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.div>
            <span className="text-sm font-medium text-gray-700">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t bg-white md:hidden overflow-hidden"
          >
            <div className="container mx-auto px-3 sm:px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`block text-base font-medium py-2 px-2 rounded-md transition-colors ${
                      pathname === item.href
                        ? "text-achilles-blue bg-achilles-blue-lighter/20"
                        : "text-gray-700 hover:text-achilles-blue hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2"
              >
                <BookCallButton
                  variant="achillesPrimary"
                  showIcon
                  className="w-full"
                  onButtonClick={() => setIsOpen(false)}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

