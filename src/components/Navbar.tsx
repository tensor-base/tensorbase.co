"use client";

import React, { useState, useEffect } from "react";
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
  Smile,
  Frown,
  Meh,
  Search,
} from "lucide-react";

// --- Data for the dropdown menu ---
const productMenuItems = [
  
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

// --- Data for the search modal ---
const searchResults = [
    { title: "Getting Started", description: "Welcome to the Tensor Base documentation!", href: "#" },
    { title: "Cookbook", description: "An open-source collection of recipes and guides.", href: "#" },
    { title: "Reference", description: "View the full reference of our APIs and functions.", href: "#" },
    { title: "Providers", description: "Learn how to use providers to query your language model.", href: "#" },
    { title: "Troubleshooting", description: "Having issues? Check out the troubleshooting guide.", href: "#" },
];


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false); // New state for search
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);

  // --- Functions for Feedback Modal ---
  const openFeedbackModal = () => setFeedbackModalOpen(true);
  const closeFeedbackModal = () => setFeedbackModalOpen(false);
  const handleReactionClick = (reaction: string) => setSelectedReaction(reaction);
  const handleFeedbackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Feedback submitted!");
    closeFeedbackModal();
  };

  // --- Functions for Search Modal ---
  const openSearchModal = () => setSearchModalOpen(true);
  const closeSearchModal = () => setSearchModalOpen(false);

  // --- Effect for Keyboard Shortcuts ---
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Open search with Cmd+K or Ctrl+K
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        openSearchModal();
      }
      // Close any open modal with Escape key
      if (event.key === 'Escape') {
        closeFeedbackModal();
        closeSearchModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <>
      <nav className="bg-black/30 backdrop-blur-lg sticky top-0 z-40 border-b border-white/10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and primary nav */}
            <div className="flex items-center space-x-8">
              <a href="#" className="flex-shrink-0">
                <span className="text-xl font-bold text-white">Tensor Base</span>
              </a>
              <div className="hidden md:flex items-center space-x-6">
                {/* Product Dropdown (Code is unchanged) */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300">
                    <span>Product</span>
                    <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180"/>
                  </button>
                  <div className="absolute left-0 top-full w-screen max-w-lg pt-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                    <div className="bg-gray-950/90 backdrop-blur-xl rounded-xl shadow-2xl ring-1 ring-gray-800 overflow-hidden p-6">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        {productMenuItems.map((section) => (
                          <div key={section.category} className="space-y-4">
                            <h3 className="font-bold text-white text-sm px-3">
                              {section.category}
                            </h3>
                            <div className="flex flex-col space-y-3">
                              {section.items.map((item) => (
                                <a
                                  key={item.title}
                                  href={item.href}
                                  className="flex items-center space-x-4 p-3 rounded-lg border border-gray-800 bg-gray-900/50 hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-200"
                                >
                                  <div className="text-blue-400 flex-shrink-0">{item.icon}</div>
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
                </div>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Pricing</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Docs</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</a>
              </div>
            </div>

            {/* Right side buttons (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              
              <button
                onClick={openSearchModal}
                className="flex items-center justify-between w-48 text-sm text-gray-400 bg-gray-800/50 border border-white/10 px-3 py-2 rounded-md hover:border-white/20 transition-colors"
              >
                <span>Search...</span>
                <span className="text-xs border border-gray-600 rounded-sm px-1.5 py-0.5">⌘K</span>
              </button>
              <button onClick={openFeedbackModal} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                Feedback
              </button>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">Log In</a>
              <a href="#" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors duration-300">
                Sign Up
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
      </nav>

      {/* --- MODALS --- */}

      
      {isFeedbackModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-gray-900 text-white rounded-xl shadow-2xl w-full max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleFeedbackSubmit}>
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="text-xl font-bold">Leave feedback</h2>
                <button type="button" onClick={closeFeedbackModal} className="text-gray-400 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-300">We’d love to hear what went well or how we can improve the product experience.</p>
                <textarea placeholder="What if..." className="w-full h-28 bg-gray-800 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow" required></textarea>
                <div className="flex items-center space-x-3">
                  {['happy', 'neutral', 'sad'].map((reaction) => (
                    <button key={reaction} type="button" onClick={() => handleReactionClick(reaction)} className={`p-2 rounded-full transition-colors ${selectedReaction === reaction ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400 hover:bg-white/10'}`}>
                      {reaction === 'happy' && <Smile />}
                      {reaction === 'neutral' && <Meh />}
                      {reaction === 'sad' && <Frown />}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-gray-800/50 rounded-b-xl">
                <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* THIS IS THE NEW SEARCH MODAL */}
      {isSearchModalOpen && (
        <div onClick={closeSearchModal} className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center z-50 transition-opacity duration-300 pt-20">
          <div className="bg-gray-900 text-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 h-fit" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-white/10">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                        type="text"
                        placeholder="What are you searching for?"
                        className="w-full bg-transparent pl-10 pr-4 py-2 text-white focus:outline-none"
                        autoFocus
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 border border-gray-600 rounded-sm px-1.5 py-0.5">Esc</div>
                </div>
            </div>
            <div className="p-4 space-y-2">
                {searchResults.map((item) => (
                    <a key={item.title} href={item.href} className="block p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.description}</p>
                    </a>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
