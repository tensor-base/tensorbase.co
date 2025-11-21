"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="flex flex-col items-center justify-center px-6 max-w-4xl mx-auto min-h-screen">
        <div className="text-center space-y-12">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Unobtrusive AI/ML development and deployment
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A next-gen platform for developing and deploying your AI/ML
              applications. Develop and ship at the speed of thought 🔥
            </p>
          </div>
          <div className="flex flex-col items-center space-y-6 mt-6">
          <div className="inline-flex items-center space-x-2 text-gray-400 mb-6">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Currently in development</span>
          </div>
          <div className="w-full max-w-md mx-auto flex justify-center">
            <Link 
              href="/interest"
              className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              Notify me when available
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
