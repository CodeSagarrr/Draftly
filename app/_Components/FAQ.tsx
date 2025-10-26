"use client";
import React, { useState } from "react";
import { faqs } from "@/lib/utils";

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpen(open === id ? null : id);
  };

  return (
    <main id="faq" className="max-w-screen scroll-mt-20 h-auto p-10 flex flex-col justify-center items-center mt-20">
      <div className="max-w-60 px-4 py-2 bg-gray-200 text-violet-500 font-mediums rounded-3xl ">
        Frequently Asked Question's
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-6 p-4 mt-8">
        <h1 className="max-w-4xl text-center lg:text-3xl px-2 sm:text-4xl text-3xl font-semibold">
          Got Questions, We have answerd.
        </h1>
        <p className="max-w-4xl text-center text-gray-600 font-normal px-2">
          Find answers to common questions about our Draftly,
        </p>
      </div>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex justify-between items-center p-4 text-[16px] text-left font-medium text-gray-800 hover:bg-gray-50 transition-all "
              >
                {faq.question}
                <span className="ml-2">{open === faq.id ? "−" : "+"}</span>
              </button>
              <div
                className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  open === faq.id ? "max-h-40 py-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default FAQ;
