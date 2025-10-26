"use client";
import React, { useEffect, useState } from "react";
import DashboardNav from "../_Components/Dashboard-Nav";
import NavHeaders from "../_Components/Nav-Headers";
import { LucideLayoutTemplate, Star } from "lucide-react";
import { EmailTemplates, CopyText } from "@/lib/utils";
import Animation from "@/app/_Components/ui/Animation";

interface emailTeamplateProps {
  id: number;
  topic: string;
  category: string;
  rating: number;
  bgColor: string;
}
function Templates() {
  const [loading, setLoading] = useState(true);
  const [emailTemplates, setEmailTemplates] = useState<
    emailTeamplateProps[] | []
  >([]);

  useEffect(() => {
    const getData = async () => {
      if (EmailTemplates) {
        setEmailTemplates(EmailTemplates);
        setLoading(!loading);
      }
    };
    getData();
  }, [EmailTemplates]);

  return (
    <main className=" relative w-full  md:p-4 p-2">
      <div className=" w-full fixed top-0 left-0 right-0 z-50 shadow-[8px] backdrop-blur-[10px] ">
        <DashboardNav />
        <NavHeaders />
      </div>

      <Animation />

      <section className="w-full relative mt-24 md:px-4 px-1">
        <div className="w-full md:p-4 p-2  flex justify-center">
          <h1 className="w-xl px-4 py-2 flex items-center gap-2 justify-center rounded-4xl bg-violet-500 text-white font-medium md:text-[16px] text-[12px] font-[rubik]">
            <LucideLayoutTemplate className="w-5 h-5" />
            Explore Ready-to-Use Email Templates for Every Situation
          </h1>
        </div>

        {loading ? (
          <div className=" relative flex items-center gap-4 justify-center">
            <span className="font-semibold font-[rubik]">Loading ...</span>{" "}
            <span className="loader"></span>
          </div>
        ) : (
          <div className="relative mt-8">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {emailTemplates.map((item) => (
                <div
                  key={item.id}
                  className="h-64 p-2 rounded-lg shadow-2xl shadow-gray-300 hover:shadow-gray-400 transition-all cursor-pointer bg-white "
                >
                  <div className="flex justify-between mx-4">
                    <span className="w-8 h-8 flex rounded-full justify-center items-center bg-gray-200 text-violet-500 text-center font-semibold">
                      {item.id}
                    </span>
                    <div className=" flex gap-2 justify-center items-center text-zinc-700  font-semibold">
                      <Star className="w-4 h-4 text-yellow-400" /> {item.rating}
                    </div>
                    {/* ${item.bgColor.replace("" , '')} */}
                  </div>
                  <div className="w-full mt-4 p-2">
                    <div className="flex flex-col justify-center items-center ">
                      <h1
                        className={`text-[16px] font-semibold font-[ubuntu] w-48 text-center py-2 bg-gray-100 text-violet-600 rounded-3xl`}
                      >
                        {item.category}
                      </h1>
                      <p className="mt-3 text-center text-zinc-800 font-[rubik] font-medium text-[18px]">
                        "{item.topic}"
                      </p>
                    </div>
                  </div>

                  <div className="w-full relative flex justify-end items-center p-4">
                    <button
                      onClick={() => CopyText(item.topic)}
                      className="w-36 h-9  bg-violet-500 hover:bg-violet-600 transition-all cursor-pointer text-gray-100 rounded-4xl text-[16px] font-medium font-[rubik]"
                    >
                      Copy prompt
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Templates;
