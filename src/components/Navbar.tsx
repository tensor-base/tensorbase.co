"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Code,
  Server,
  Cloud,
  TerminalSquare,
  Rocket,
  Send,
  Database,
  ShieldCheck,
} from "lucide-react";


const productsMenuItems = [
  {
    category: "Build your app",
    items: [
      {
        title: "TB SDK",
        description: "The best tools to build your app",
        href: "#",
        icon: <Code size={20} />,
      },
      {
        title: "TB CLI",
        description: "Build and run your app locally",
        href: "#",
        icon: <TerminalSquare size={20} />,
      },
      {
        title: "TB Go",
        description: "Preview your app on device",
        href: "#",
        icon: <Rocket size={20} />,
      },
      {
        title: "Orbit",
        description: "Launch simulators instantly",
        href: "#",
        icon: <Database size={20} />,
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        title: "Workflows CI/CD",
        description: "Automate your release process",
        href: "#",
        icon: <Server size={20} />,
      },
      {
        title: "Build",
        description: "Create Android and iOS builds",
        href: "#",
        icon: <Cloud size={20} />,
      },
      {
        title: "Submit",
        description: "Submit your app to app stores",
        href: "#",
        icon: <Send size={20} />,
      },
      {
        title: "Update",
        description: "Send over-the-air updates",
        href: "#",
        icon: <ShieldCheck size={20} />,
      },
    ],
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsMenuOpen, setProductsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black/30 backdrop-blur-lg sticky top-0 z-50 border-b border-white/10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15">
          {/* Logo and primary nav */}
          <div className="flex items-center space-x-8">
            <a href="#" className="flex-shrink-0">
              <span className="text-xl font-bold text-white">Tensor Base</span>
            </a>
            <div className="hidden md:flex items-center space-x-6">
              {/* Product Dropdown Link */}
              <div
                className="relative group"
                onMouseEnter={() => setProductsMenuOpen(true)}
                onMouseLeave={() => setProductsMenuOpen(false)}
              >
                <button
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                >
                  <span>Products</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 group-hover:rotate-180" ${
                      isProductsMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Mega Menu Dropdown Panel */}
                {isProductsMenuOpen && (
                  <div className="absolute -left-8 top-full w-screen max-w-md pt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                    <div className="bg-black backdrop-blur-lg rounded-xl shadow-lg ring-1 ring-white/10 overflow-hidden p-4">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        {productsMenuItems.map((section) => (
                          <div key={section.category} className="space-y-2">
                            <h3 className="font-semibold text-white text-sm px-3">
                              {section.category}
                            </h3>
                            <div className="flex flex-col space-y-1">
                              {section.items.map((item) => (
                                <a
                                  key={item.title}
                                  href={item.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                                >
                                  <div className="text-white-400 mt-0.5">{item.icon}</div>
                                  <div>
                                    <p className="font-semibold text-white text-sm">
                                      {item.title}
                                    </p>
                                    <p className="text-gray-400 text-xs">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Docs</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</a>
            </div>
          </div>

          {/* Right side buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Log In</a>
            <a href="#" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors duration-300">
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-white">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-xl border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white">Product</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Pricing</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Docs</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white">Blog</a>
          </div>
          <div className="pt-4 pb-3 border-t border-white/10">
             <div className="flex items-center justify-center space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Log In</a>
                <a href="#" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors duration-300">
                  Sign Up
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
