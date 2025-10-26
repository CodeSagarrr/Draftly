import React from "react";

export const Process = () => {
  return (
    <div id="process" className="max-w-screen scroll-mt-10 h-auto p-8 flex flex-col justify-center items-center mt-20 ">
      <div className="max-w-60 px-4 py-2 bg-gray-200 text-violet-500 font-mediums rounded-3xl ">
        How it's work
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-8 p-4 mt-8">
        <h1 className="max-w-4xl text-center lg:text-5xl px-2 sm:text-4xl text-3xl font-semibold">
          Customizable to Your Needs
        </h1>
        <p className="max-w-4xl text-center text-gray-600 font-normal px-2">
          Simplify your daily workflow with tools built to automate repetitive
          tasks, streamline collaboration, and free up your time for the work
          that really matters.
        </p>
      </div>

      <section className="w-full flex sm:flex-row flex-col items-center gap-6 lg:px-20 px-4 py-4 my-10">
        <div className=" md:w-4xl sm:w-4xl w-90 sm:h-86 h-90 sm:p-8 p-6 flex flex-col items-center justify-center gap-4  shadow-2xl shadow-gray-300 hover:shadow-gray-400 transition-all rounded-3xl">
          <h1 className="w-20 h-20 pt-5 rounded-full bg-gray-200 text-4xl text-center font-bold text-violet-400">
            01
          </h1>
          <h1 className="text-3xl font-semibold text-center">
            Start with Your Draft
          </h1>
          <p className="text-[16px] font-medium text-gray-600 text-center">
            Paste your rough email idea, bullet points, or even just a
            one-liner. No need to worry about grammar, flow, or structure.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <div className="lg:w-xl w-96 px-8 pt-4 lg:h-41 h-64 shadow-2xl shadow-gray-300 hover:shadow-gray-400 transition-all rounded-2xl">
            <h1 className="lg:w-10 w-20 lg:h-10 h-20 lg:ml-0 ml-30  lg:pt-2 pt-5 rounded-full bg-gray-200 lg:text-[14px] text-4xl text-center font-bold text-violet-400">
              02
            </h1>
            <h1 className="lg:text-xl text-3xl font-semibold text-center mt-2">
              Pick the Right Tone
            </h1>
            <p className="lg:text-[12px] text-[14px]  font-medium text-gray-600 text-center mt-2">
              Choose how you want to sound: formal, casual, friendly, or
              persuasive. The AI adjusts wording, style, and structure to fit
              your choice.
            </p>
          </div>
          <div className="lg:w-xl w-96 lg:h-41 h-64 px-8 pt-4  shadow-2xl shadow-gray-300 hover:shadow-gray-400 transition-all rounded-2xl">
            <h1 className="lg:w-10 w-20 lg:h-10 h-20 lg:ml-0 ml-30  lg:pt-2 pt-5 rounded-full bg-gray-200 lg:text-[14px] text-4xl text-center font-bold text-violet-400">
              03
            </h1>
            <h1 className="lg:text-xl text-3xl font-semibold text-center mt-2">
              Get a Polished Email
            </h1>
            <p className="lg:text-[12px] text-[14px]  font-medium text-gray-600 text-center mt-2">
              In seconds, receive a ready-to-send email that’s clear,
              professional, and tailored to your intent. Edit, copy, or send
              directly from the app.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
