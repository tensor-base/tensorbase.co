"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Users from "@/components/Users";
import { TestimonialsGrid } from "@/components/TestimonialsGrid";
import FaqSection from "@/components/FaqSection";
import WorkflowPills from "@/components/WorkflowPills";

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 py-12 max-w-6xl mx-auto relative z-10 text-center mt-10">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          </h1>
        <Link
          href="/changelog"
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-full px-3 py-1 mb-8 backdrop-blur-sm"
        >
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-sm text-purple-300 font-medium">
            Learn what&apos;s new
          </span>
          <ArrowRight className="ml-2" size={16} />
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Unobtrusive AI/ML development and deployment
        </h1>
        <WorkflowPills/>
        {/* Action Words */}
        {/* Description */}
        <p className="mt-8 text-xl md:text-1xl text-gray-400 mb-12 leading-relaxed max-w-3xl">
          A next-gen platform for deploying your AI/ML applications. Develop and
          ship at the speed of thought.
        </p>
        <div className="w-full max-w-md relative group mb-8">
          {/* <button className="bg-white text-black text-extrabold px-4 py-2 mx-2 rounded-md hover:bg-gray-100 transition-colors duration-300">
            Get Started
          </button> */}
          {/* <button
            type="button"
            className="px-5 py-3 text-base font-medium text-center text-white bg-[#050708] rounded-lg hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-[#050708] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Large
          </button> */}

          <button
            type="button"
            className="text-black bg-[#ffffff] hover:bg-[#ffffff]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#ffffff]/85 me-2 mb-2"
          >
            Get Started
            <ArrowRight className="ml-2" />
          </button>
          <button className="bg-black text-white px-4 py-2 mx-2 rounded-md border border-white/40 hover:bg-white/5 transition-colors duration-300">
            Read the docs
          </button>
        </div>
        {/* <Users /> */}
        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl mb-10">
          <div className="bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4  mx-auto">
              <span className="text-2xl">🛠️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Development</h3>
            <p className="text-gray-400 text-sm">
              AI-powered tools that understand your code and help you build
              faster.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-orange-500/30 transition-colors">
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4  mx-auto">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Seamless Workflow</h3>
            <p className="text-gray-400 text-sm">
              From development to deployment in one unified platform.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-green-500/30 transition-colors">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4  mx-auto">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Global Scale</h3>
            <p className="text-gray-400 text-sm">
              Deploy anywhere, scale everywhere with our global infrastructure.
            </p>
          </div>
        </div>
        {/* <div className="p-2 py-6 text-2xl font-bold tracking-tight sm:text-3xl md:p-8">
          What people say about Tensor Base
        </div> */}
        {/* <TestimonialsGrid /> */}
        {/* <FaqSection /> */}
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
