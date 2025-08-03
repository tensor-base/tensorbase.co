import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4">
      <div className="max-w-4xl w-full text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-2xl md:text-4xl font-bold">Tensor Base</span>
        </div>

        {/* <div className="inline-block px-4 py-2 rounded-full text-gray-300 mb-4 text-3xl font-medium">
          ⌛ 
        </div> */}
          <div className="inline-block px-4 py-2 rounded-full text-gray-300 mb-4 text-sm font-medium">
          ⚡ Coming Soon
        </div>hh
        <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">
          Unobtrusive AI/ML development 
        </h1>
        
        <p className="text-gray-400 mb-8 text-base md:text-lg">
          Unobtrusive platform for deploying your AI/ML applications. Ship at the speed of thought.        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-white transition"
          />
          <button className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-300 transition flex items-center gap-2">
            Get Notified
            <span>→</span>
          </button>
        </div>
      </div>
    </main>
  );
}

