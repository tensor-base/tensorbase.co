// src/app/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ComingSoonPage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 max-w-4xl mx-auto min-h-screen space-y-12">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 animate-fade-in">
            Unobtrusive AI/ML development and deployment
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A next‑gen platform for building and deploying your AI/ML applications.
            Develop and ship at the speed of thought 🔥
          </p>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-6">
          <div className="inline-flex items-center space-x-2 text-gray-400 mb-6">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Currently in development</span>
          </div>
          <Link
            href="/interest"
            className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg"
          >
            Notify me when available
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;