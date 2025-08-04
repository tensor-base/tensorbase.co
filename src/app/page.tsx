"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 relative z-10">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-lg">▲</span>
            </div> */}
            <span className="text-xl font-bold">Tensor Base</span>
          </div>
        </div>
        {/* <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-300">
            <Github size={18} />
            <span className="text-sm">Github</span>
          </div>
        </div> */}
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 py-12 max-w-6xl mx-auto relative z-10 text-center min-h-[80vh]">
        {/* Coming Soon Badge */}

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Unobtrusive AI/ML development and deployment
        </h1>

        {/* Action Words */}

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
          A next-gen platform for deploying your AI/ML applications. Develop and
          ship at the speed of thought.
        </p>

        <div className="w-full max-w-md relative group mb-8">
          <form onSubmit={handleNotifyMe} className="relative">
            <div className="flex items-center border border-white/10 rounded-none bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500 group-hover:bg-white/10">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent px-6 py-5 text-white placeholder-gray-500 focus:outline-none text-base font-light tracking-wide"
                  required
                />
              </div>
              <button
                type="submit"
                className="flex items-center space-x-2 px-6 py-5 text-white hover:text-gray-300 transition-colors duration-300 group"
              >
                <span className="text-sm font-light tracking-wide">Notify</span>
                <ArrowRight
                  size={16}
                  className="transform group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </div>
          </form>

          {isSubscribed && (
            <div className="mt-4 p-4 rounded-lg backdrop-blur-sm">
              <p className="text-green-400 text-sm">
                ✅ Thanks! We&apos;ll notify you when we launch.
              </p>
            </div>
          )}
        </div>

        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Currently in development</span>
          </div>
          <p className="text-sm text-gray-500">
            Join <span className="text-blue-400 font-semibold">100+</span>{" "}
            developers already on the waitlist
          </p>
        </div>

        {/* Features Preview */}
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Footer */}
      {/* <footer className="absolute bottom-0 w-full p-6 text-center text-gray-500 text-sm">
        <p>© 2025 Tensor Base. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default ComingSoonPage;
