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
    <div className="min-h-screen bg-black text-white relative">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 max-w-4xl mx-auto min-h-screen">
        <div className="text-center space-y-12">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Unobtrusive AI/ML development and deployment
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A next-gen platform for deploying your AI/ML applications. Develop
              and ship at the speed of thought.
            </p>
          </div>
          {/* Email Form */}
          <div className="w-full max-w-md mx-auto">
            <form onSubmit={handleNotifyMe}>
              <div className="flex border border-gray-800 rounded-lg overflow-hidden focus-within:border-gray-700 transition-colors">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-5 py-4 text-white placeholder-gray-600 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-4 text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>

            {isSubscribed && (
              <p className="text-gray-500 text-sm mt-4">
                ✓ Thanks! We&apos;ll notify you when we launch.
              </p>
            )}
          </div>
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Currently in development</span>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
