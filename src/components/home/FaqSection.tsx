"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
    {
        question: "How do I update my billing information?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas. Curabitur euismod purus sed elit faucibus. Vivamus in ante sed libero feugiat fermentum."
    },
    {
        question: "Can I change my plan at any time?",
        answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes will be prorated and applied to your next billing cycle."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, including Visa, Mastercard, and American Express. We also support payments through PayPal for your convenience."
    },
    {
        question: "Is there a free trial available?",
        answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card is required to get started."
    },
    {
        question: "How does your platform ensure data security?",
        answer: "We take data security very seriously. All data is encrypted in transit and at rest, and we adhere to industry-best security practices and compliance standards."
    }
];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full max-w-6xl mx-auto py-16 px-4">
            <div className="grid md:grid-cols-2 gap-16 items-centre">
                {/* Left Column: Title and Description */}
                <div className="text-center md:text-left flex flex-col justify-center ">
                    <h2 className="text-4xl  font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-400">
                        Trusted in more than 100 countries and 4 million customers.
                    </p>
                </div>

                {/* Right Column: Accordion */}
                <div className="w-full bg-gray border border-gray-700 rounded-xl p-4 backdrop-blur-sm">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 last:border-b-0">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center text-left py-5 px-4"
                            >
                                <span className="font-semibold text-white">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-white transition-transform duration-300 opacity-60 ${
                                        activeIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${
                                    activeIndex === index
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-gray-400 pb-5 px-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
