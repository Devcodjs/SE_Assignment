"use client";

import React, { useState } from "react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Aavartan 2026?",
      answer: "A National-Level Coding Competition organized by NIT Silchar, focusing on AI, ML, and emerging technologies. Students compete through three rounds to solve real-world problems and win prizes up to ₹50,000."
    },
    {
      question: "Who can participate and what is the team size?",
      answer: "UG, PG, and PhD students can participate. Teams must have 1-3 members. Registration fee is ₹2,000 per team."
    },
    {
      question: "What is the registration deadline?",
      answer: "Registration closes on 30th December 2025. Register through the official link on our website."
    },
    {
      question: "What are the competition rounds and dates?",
      answer: "Round 1 (Online): Second week of January 2026 - MCQs and basic coding. Round 2 (Online): First week of February 2026 - Advanced coding and AI/ML challenges. Round 3 (Offline): Last week of February 2026 at NIT Silchar - Final hackathon."
    },
    {
      question: "What are the qualification criteria?",
      answer: "Round 2: Score ≥50% or rank in top 75% in Round 1. Round 3: Top performers from Round 2 will be shortlisted for the final."
    },
    {
      question: "What prizes and certificates are offered?",
      answer: "1st Prize: ₹50,000 | 2nd Prize: ₹40,000 | 3rd Prize: ₹30,000. All participants receive certificates: Participation (all), Appreciation (top 75%), Outstanding Performance (top 10% with ≥80% marks)."
    },
    {
      question: "Will accommodation be provided for the final round?",
      answer: "Yes, free accommodation will be provided at NIT Silchar campus for all finalists during the offline round. Participants arrange their own travel."
    },
    {
      question: "How can I contact the organizers?",
      answer: "Email us at hackathon@nits.ac.in or contact the coordinators through details provided on the website."
    }
  ];

  const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
      className={`w-4 h-4 transition-transform duration-600 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600">
            Quick answers to common questions about Aavartan 2026
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors duration-350"
                >
                  <span className="text-sm font-semibold text-gray-900 flex-1 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-blue-600 flex-shrink-0">
                    <ChevronIcon isOpen={isOpen} />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-600 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4 text-sm text-gray-700 leading-relaxed bg-gray-50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default FAQ;