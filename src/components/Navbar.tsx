import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-dark-900/95 backdrop-blur-lg border-b border-dark-800"
          : "bg-transparent",
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg opacity-20 group-hover:opacity-30 blur transition-opacity duration-200"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white">
                The Brand Whisperer
              </div>
              <div className="text-xs text-gray-400 -mt-1">
                Building brands that scale
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                  isActiveRoute(item.path)
                    ? "text-secondary-400"
                    : "text-gray-300 hover:text-white",
                )}
              >
                {item.name}
                {isActiveRoute(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-secondary-500/25"
            >
              <Link to="/contact">Start Your Brand</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-gray-300 hover:text-white hover:bg-dark-700 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4 space-y-2 border-t border-dark-800">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200",
                  isActiveRoute(item.path)
                    ? "text-secondary-400 bg-dark-800"
                    : "text-gray-300 hover:text-white hover:bg-dark-800",
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                asChild
                className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Start Your Brand
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
