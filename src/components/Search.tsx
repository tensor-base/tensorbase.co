"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";


const searchResults = [
    { title: "Getting Started", description: "Welcome to the Tensor Base documentation!", href: "#" },
    { title: "Cookbook", description: "An open-source collection of recipes and guides.", href: "#" },
    { title: "Reference", description: "View the full reference of our APIs and functions.", href: "#" },
    { title: "Providers", description: "Learn how to use providers to query your language model.", href: "#" },
    { title: "Troubleshooting", description: "Having issues? Check out the troubleshooting guide.", href: "#" },
];

const SearchCommand = () => {
    const [isSearchModalOpen, setSearchModalOpen] = useState(false);

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
            // Close modal with Escape key
            if (event.key === 'Escape') {
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
            {/* The Search Button */}
            <button
                onClick={openSearchModal}
                className="flex items-center justify-between w-48 text-sm text-gray-400 bg-gray-800/50 border border-white/10 px-3 py-2 rounded-md hover:border-white/20 transition-colors"
            >
                <span>Search...</span>
                <span className="text-xs border border-gray-600 rounded-sm px-1.5 py-0.5">⌘K</span>
            </button>

            {/* The Search Modal */}
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

export default SearchCommand;
