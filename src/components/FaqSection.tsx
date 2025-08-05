// components/FaqSection.tsx
"use client"; // Required for client-side interactivity (useState, onClick)

import { useState, useRef } from "react";
import Link from "next/link";

// We can define the FAQ data in an array to easily manage it.
const faqData = [
  {
    question: "Is the AI SDK free to use?",
    answer: (
      <div className="pb-4">Yes, the AI SDK is free and open source.</div>
    ),
  },
  {
    question: "How do I get started?",
    answer: (
      <div className="pb-4">
        Visit our{" "}
        <Link
          href="/getting-started"
          className="dark:text-blue-800 text-blue-700"
        >
          getting started page
        </Link>{" "}
        to learn how to install the AI SDK with your preferred framework.
      </div>
    ),
  },
  {
    question: "How can I contribute to the project?",
    answer: (
      <div className="pb-4">
        We welcome contributions from the community! You can contribute by
        submitting bug reports, feature requests, or pull requests on our{" "}
        <a
          className="dark:text-blue-800 text-blue-700 inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/vercel/ai"
        >
          GitHub repository
          <svg
            className="ml-1"
            data-testid="geist-icon"
            fill="none"
            height="14"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="14"
          >
            <path d="M7 17L17 7"></path>
            <path d="M7 7h10v10"></path>
          </svg>
        </a>
        .
      </div>
    ),
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-black">
      <div className="max-w-screen-lg mx-auto">
        <div className="p-2 py-6 text-2xl font-bold tracking-tight text-center sm:text-3xl md:p-8">
          FAQs
        </div>

        <div className="p-0">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b dark:border-gray-800">
                <h3>
                  <button
                    onClick={() => handleToggle(index)}
                    className="geist-reset flex justify-between items-center w-full py-4 text-left"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-content-${index}`}
                  >
                    <span className="text-lg font-semibold">
                      {faq.question}
                    </span>
                    <span
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        data-testid="geist-icon"
                        height="16"
                        strokeLinejoin="round"
                        viewBox="0 0 16 16"
                        width="16"
                        style={{ color: "currentColor" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight:
                      openIndex === index
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : "0px",
                  }}
                >
                  {/* The content is rendered here */}
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
