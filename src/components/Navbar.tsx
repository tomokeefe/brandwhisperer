import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
    { name: "Clients", path: "/clients" },
  ];

  const resourcesItems = [
    {
      title: "Brand Assessment",
      href: "/assessment",
      description: "Free interactive brand evaluation tool",
    },
    {
      title: "Newsletter",
      href: "/newsletter",
      description: "Weekly brand insights + premium tiers available",
    },
    {
      title: "Blog",
      href: "https://blog.brandwhisperer.io",
      description: "Startup branding insights and case studies",
    },
    // Temporarily disabled - uncomment to re-enable Free Resources page
    // {
    //   title: "Free Resources",
    //   href: "/resources",
    //   description: "Download frameworks, assessments, and tools",
    // },
    {
      title: "ROI Calculator",
      href: "/calculator",
      description: "Calculate detailed returns on brand investment",
    },
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
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 lg:space-x-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F089332b31dc440f5ab4990fd938ca08d?format=webp&width=800"
                  alt="The Brand Whisperer Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg opacity-20 group-hover:opacity-30 blur transition-opacity duration-200"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg lg:text-xl font-bold text-white">
                The Brand Whisperer
              </div>
              <div className="text-xs text-gray-400 -mt-1">
                Building brands that scale
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <Link to={item.path}>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-dark-800",
                          isActiveRoute(item.path)
                            ? "text-secondary-400"
                            : "text-gray-300 hover:text-white",
                        )}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent hover:bg-dark-800 text-gray-300 hover:text-white",
                      (location.pathname.startsWith("/blog") ||
                        location.pathname.startsWith("/resources") ||
                        location.pathname.startsWith("/calculator")) &&
                        "text-secondary-400",
                    )}
                  >
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-dark-900 border border-dark-700 rounded-lg">
                      {resourcesItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            {item.href.startsWith("http") ? (
                              <a
                                href={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-dark-800 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none text-white">
                                  {item.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                  {item.description}
                                </p>
                              </a>
                            ) : (
                              <Link
                                to={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-dark-800 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none text-white">
                                  {item.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                  {item.description}
                                </p>
                              </Link>
                            )}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-dark-800",
                        isActiveRoute("/contact")
                          ? "text-secondary-400"
                          : "text-gray-300 hover:text-white",
                      )}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold px-4 lg:px-6 py-2.5 rounded transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-secondary-500/25 text-sm lg:text-base"
            >
              <Link to="/contact">Start Your Brand</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-12 h-12 rounded bg-dark-800 border border-dark-700 flex items-center justify-center text-gray-300 hover:text-white hover:bg-dark-700 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 bg-dark-900/95 backdrop-blur-lg",
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4 space-y-1 border-t border-dark-800">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-4 text-base font-medium rounded-lg transition-colors duration-200 min-h-[48px] flex items-center",
                  isActiveRoute(item.path)
                    ? "text-secondary-400 bg-dark-800"
                    : "text-gray-300 hover:text-white hover:bg-dark-800",
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Resources Submenu */}
            <div className="px-4 py-3">
              <div className="text-gray-400 text-sm font-medium mb-3">
                Resources
              </div>
              <div className="space-y-1 ml-2">
                {resourcesItems.map((item) =>
                  item.href.startsWith("http") ? (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 min-h-[44px] flex items-center rounded-md hover:bg-dark-800"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 min-h-[44px] flex items-center rounded-md hover:bg-dark-800"
                    >
                      {item.title}
                    </Link>
                  ),
                )}
              </div>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-4 text-base font-medium rounded-lg transition-colors duration-200 min-h-[48px] flex items-center",
                isActiveRoute("/contact")
                  ? "text-secondary-400 bg-dark-800"
                  : "text-gray-300 hover:text-white hover:bg-dark-800",
              )}
            >
              Contact
            </Link>

            <div className="pt-3 px-4">
              <Button
                asChild
                className="w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-semibold min-h-[48px] text-base"
                size="lg"
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
