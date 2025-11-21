"use client";

import React, { useState } from "react";
import { Footer } from "@/components/Footer";

const InterestFormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <div className="flex-grow flex flex-col items-center justify-center px-4 pt-32 pb-20">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-3 tracking-tight font-bold text-white">
            Get notified at launch
          </h1>
          <p className="text-center text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            To stay in the loop about Tensor Base, please
            provide your contact information.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-8">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-6 py-4 text-lg text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company (Optional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-6 py-4 text-lg text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-6 py-4 text-lg text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-6 pt-4 text-center">
              <p className="text-zinc-500 text-md">
                We respect your privacy. Your information will only be used to contact you about Tensor Base and will never be shared with third parties.
              </p>
            </div>

            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="bg-white text-black text-lg font-medium py-3 px-12 rounded-full hover:bg-zinc-200 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InterestFormPage;
