// components/HeroSection.jsx

import React from "react";

// For a better experience, I recommend using an icon library like 'lucide-react'
// npm install lucide-react
import { ArrowRight, PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -z-10 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto flex flex-col items-center px-4 text-center">
        {/* Main Heading with Gradient Text */}
        <h1
          className="text-5xl font-bold tracking-tight md:text-7xl 
                       bg-gradient-to-b from-neutral-50 to-neutral-400 
                       bg-clip-text text-transparent"
        >
          Create with the AI Cloud
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
          Leverage our powerful infrastructure and developer-first tools to
          build, deploy, and scale the next generation of web applications.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold
                       text-white shadow-sm transition-transform duration-300 ease-in-out
                       hover:bg-indigo-500 hover:scale-105 focus-visible:outline 
                       focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Start Building
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            className="flex items-center gap-2 text-sm font-semibold leading-6 text-neutral-200
                       transition-colors duration-300 hover:text-white"
          >
            <PlayCircle className="h-4 w-4" />
            Watch Demo
          </button>
        </div>
      </div>

      {/* Bottom decorative grid/fade */}
      <div
        className="absolute bottom-0 left-0 h-1/3 w-full 
                     bg-[linear-gradient(to_top,rgba(0,0,0,0.9),transparent)]
                     [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"
      ></div>
    </section>
  );
};

export default HeroSection;
