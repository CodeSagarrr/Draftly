import React from "react";
import { features } from "@/lib/utils";

export const Features = () => {
  
  return (
    <div>
      <main id="features" className="max-w-screen h-auto scroll-mt-10 bg-gray-100 p-8 flex flex-col justify-center items-center mt-20">
        <div className="max-w-60 px-4 py-2 bg-gray-300 text-violet-500 font-mediums rounded-3xl ">
          Powerfull Features
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8 p-4 mt-8">
          <h1 className="max-w-4xl text-center lg:text-3xl px-2 sm:text-4xl text-3xl font-semibold">
            Templates, Personalization & Insights
          </h1>
          <p className="max-w-4xl text-center text-gray-600 font-normal px-2">
            Whether it’s an internship or a full-time role, Draftly helps you
            write professional emails that get noticed by HR and hiring teams.
          </p>
        </div>

        <section className="w-full flex justify-center items-center lg:p-10 p-2">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="h-50 p-4 flex flex-col justify-center items-center rounded-lg shadow-2xl shadow-gray-400 hover:shadow-gray-500 transition-all cursor-pointer bg-white "
              >
                <div className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-200 text-violet-500 ">
                  {<feature.icon />}
                </div>
                <h1 className="text-2xl text-black font-semibold mt-2">
                  {feature.heading}
                </h1>
                <p className="text-center text-[14px] font-medium text-gray-600 mt-2">
                  {feature.paragraph}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
