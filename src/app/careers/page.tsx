"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import HackerText from "@/components/HackerText";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center p-6">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="max-w-3xl w-full text-center space-y-12 relative z-10">
        {/* Header Section */}
        <div className="space-y-8">
          {/* <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-gray-300">Hiring Soon</span>
          </div> */}
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            We&apos;ll be hiring! 🎉
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-xl mx-auto leading-relaxed">
            You&apos;d have to wait a lil bit tho.
          </p>
        </div>

        {/* Interactive/Code Section */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
            Meanwhile
          </p>

          <div className="inline-block p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
            <div className="text-green-400 font-mono text-lg md:text-xl">
              <span className="mr-2 text-gray-600">$</span>
              <HackerText />
            </div>
          </div>
        </div>

        {/* Navigation */}
        {/* <div className="pt-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
