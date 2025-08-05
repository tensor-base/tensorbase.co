"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Users from "@/components/home/Users";
import { TestimonialsGrid } from "@/components/home/TestimonialsGrid";
import FaqSection from "@/components/home/FaqSection";
import Actions from "@/components/home/Actions";
import WhatsNew from "@/components/home/WhatsNew";
import Features from "@/components/home/Features";
import BackgroundEffects from "@/components/home/BackgroundEffects";
import LoginPage from "@/components/auth/login";

const HomePage = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <div className="flex flex-col items-center justify-center px-6 py-12 max-w-6xl mx-auto relative z-10 text-center mt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"></h1>
        <WhatsNew />
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Unobtrusive AI/ML development and deployment
        </h1>
        <Actions />
        <p className="text-xl md:text-1xl text-gray-400 mb-12 leading-relaxed max-w-3xl">
          A next-gen platform for deploying your AI/ML applications. Develop and
          ship at the speed of thought.
        </p>
        <div className="w-full max-w-md relative group mb-8">
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-500/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-blue-500/90 me-2 mb-2"
          >
            Get Started
            <ArrowRight className="ml-2" />
          </button>
          <button className="bg-black text-white px-4 py-2 mx-2 rounded-md border border-white/40 hover:bg-white/5 transition-colors duration-300">
            Read the docs
          </button>
        </div>
        <Users />
        <Features />
        {/* <TestimonialsGrid /> */}
        {/* <FaqSection /> */}
      </div>
      <BackgroundEffects />
    </div>
  );
};

export default HomePage;
