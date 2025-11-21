"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 max-w-2xl mx-auto min-h-screen space-y-12 text-center">
        {/* <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="text-sm font-medium text-gray-300">Get in touch</span>
        </div> */}

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          Contact
        </h1>

        <p className="text-xl md:text-2xl text-gray-400">
          <a href="mailto:contact@tensorbase.co" className="underline hover:text-gray-200 transition-colors">
            contact@tensorbase.co
          </a>
        </p>

        {/* <Link
          href="/"
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link> */}
      </div>
    </div>
  );
}
