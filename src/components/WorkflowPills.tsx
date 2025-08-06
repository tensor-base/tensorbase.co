"use client";

import React, { useState } from "react";
import { Monitor, Link, Rocket } from "lucide-react";

const tabs = [
    { name: "Develop", icon: <Monitor className="w-4 h-4 md:w-5 md:h-5" /> },
    { name: "Review", icon: <Link className="w-4 h-4 md:w-5 md:h-5" /> },
    { name: "Deploy", icon: <Rocket className="w-4 h-4 md:w-5 md:h-5" /> },
];

const WorkflowPills = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Calculate the offset for the sliding highlight
    const highlightStyle = {
        transform: `translateX(${activeTab * 100}%)`,
    };

    return (
        <div className="relative flex items-center w-full max-w-md md:max-w-none md:w-auto bg-gray-900/50 border border-gray-700 rounded-xl p-1.5 backdrop-blur-sm">
            {/* Sliding Highlight Element */}
            <div
                className="absolute top-1.5 left-1.5 h-10 md:h-12 w-1/3 bg-blue-600 rounded-lg transition-all duration-300 ease-in-out"
                style={highlightStyle}
            ></div>

            {/* Buttons */}
            {tabs.map((tab, index) => (
                <button
                    key={tab.name}
                    onClick={() => setActiveTab(index)}
                    className={`pill-button relative z-10 flex flex-1 items-center justify-center h-10 md:h-12 px-2 md:px-6 text-sm md:text-lg font-semibold transition-colors duration-300 ${
                        activeTab === index ? "text-white" : "text-gray-400"
                    }`}
                >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.name}
                </button>
            ))}
        </div>
    );
};

export default WorkflowPills;
