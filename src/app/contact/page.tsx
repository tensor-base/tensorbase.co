import React from "react";

export default function ContactPage() {
  return (
    <div className="h-screen bg-black text-white relative overflow-hidden">
      {/* Faded Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="text-[20vw] font-[family-name:var(--font-caveat)] text-white/5 whitespace-nowrap">
          Tensor Base
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 max-w-4xl mx-auto h-full relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-3xl md:text-3xl font-bold tracking-tight">
            Contact
          </h1>
          <p className="text-xl">tensorbase [at] gmail [dot] com</p>
        </div>
      </div>
    </div>
  );
}
