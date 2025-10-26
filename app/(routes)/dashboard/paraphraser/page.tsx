"use client";
import Animation from "@/app/_Components/ui/Animation";
import React, { useEffect, useRef, useState } from "react";
import { CopyText, Language, Tone } from "@/lib/utils";
import DashboardNav from "../_Components/Dashboard-Nav";
import NavHeaders from "../_Components/Nav-Headers";
import { FaRegStar } from "react-icons/fa";
import DropDown from "@/app/_Components/ui/DropDown";
import { Copy, Eraser, RefreshCcw, WandSparkles } from "lucide-react";
import toast from "react-hot-toast";
import { Paraphrase } from "@/lib/api";

function Paraphraser() {
  const [Loading, setLoading] = useState(false);
  const [language, setlanguage] = useState("English (Us)");
  const [tone, setTone] = useState("Formal");
  const [content, setContent] = useState("");
  const [result, setResult] = useState("");

  const containerRef = useRef<HTMLDivElement | null>(null);

  // 👇 Automatically scroll to bottom whenever text updates
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [result]);

  const rewrite = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();

    const payLoad = {
      language: language,
      tone: tone,
      text: content,
    };

    const res = await Paraphrase(payLoad);
    if (res) {
      let index = 0;
      let output = "";
      const animate = () => {
        if (index < res.length) {
          output += res.charAt(index);
          setResult(output);
          index++;
          setTimeout(animate, 12);
        }
      };
      setTimeout(animate, 50);
      toast.success("text has generated!");
      setLoading(false);
    } else {
      toast.error("Internal error");
      setContent("");
    }
  };

  const erase = () => {
    setResult("");
    setContent("");
  };
  return (
    <main className="w-screen p-2">
      <div className=" w-full fixed top-0 left-0 right-0 z-50 shadow-[8px] backdrop-blur-[10px] ">
        <DashboardNav />
        <NavHeaders />
      </div>
      <Animation />
      <div className=" realtive w-full p-4 mt-28 flex justify-center">
        <div className="w-80 h-10 rounded-3xl font-bold bg-violet-500 text-center pt-2 pb-2 ">
          <p className="flex gap-2 text-white justify-center">
            <FaRegStar className="w-5 h-5 font-extrabold text-yellow-300" />
            Make your text clean and formal
          </p>
        </div>
      </div>

      <div className="relative inline-block text-left top-6  left-1 w-52 mb-6">
        {/* Dropdown Button */}
        <DropDown
          label="Select Language"
          options={Language}
          defaultValue="English (Us)"
          onSelect={(language) => setlanguage(language)}
        />
      </div>

      <div className="relative inline-block text-left top-6 sm:left-4 left-0 w-52 mb-4 ml-4">
        {/* Dropdown Button */}
        <DropDown
          label="Select Tone"
          options={Tone}
          defaultValue="Casual"
          onSelect={(tone) => setTone(tone)}
        />
      </div>

      <div className="w-full relative bg-gray-200 rounded-md flex lg:flex-row md:flex-col flex-col justify-between items-center md:gap-2 gap-2 md:p-2 p-2 md:mt-2 mt-10">
        <textarea
          id="email"
          name="email"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-90 p-4 rounded-md bg-white outline-none resize-none"
          placeholder={`To rewrite, Enter the text and click on Paraphrase button`}
        />
        <div
          ref={containerRef}
          className="relative w-full h-90 p-4 rounded-md bg-white overflow-y-auto font-mono text-gray-800 shadow-sm"
        >
          {Loading ? (
            <span className="loader-div relative left-72 top-28"></span>
          ) : (
            <div className="whitespace-pre-line typing-cursor">
              {!result ? (
                <p className="text-gray-400 font-medium font-[ubuntu] text-[16px]">
                  Text will appear here ...
                </p>
              ) : (
                <p>{result}</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className=" relative w-full flex md:flex-row flex-col justify-between p-4">
        <div className="max-w-3xl flex justify-center items-center mt-2">
          <button
            onClick={rewrite}
            disabled={!content || content.trim().length >= 500}
            className=" md:w-60 w-52 px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-medium font-[ubuntu] cursor-pointer transition-all"
          >
            {Loading ? (
              <div className=" flex items-center gap-4 justify-center">
                <span>Loading</span> <span className="loader "></span>
              </div>
            ) : (
              <div className=" flex items-center gap-4 justify-center">
                <span>Paraphrase with AI</span>{" "}
                <WandSparkles className="w-5 h-5" />
              </div>
            )}
          </button>
          <p
            className={`md:text-md text-sm font-medium text-gray-400 ml-10 ${
              content.trim().length >= 500 ? "text-rose-500" : ""
            }`}
          >
            Total Words : {content.trim().length} / 500
          </p>
        </div>

        <div className="flex items-center">
          <button
            onClick={erase}
            className="w-30 mt-4 ml-4 flex gap-2 justify-center items-center px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-medium font-[ubuntu] cursor-pointer transition-all"
          >
            <Eraser className="w-5 h-5" /> Erase
          </button>
          {result ? (
            <div className="w-full flex justify-center mt-4 items-center p-2">
              <button
                onClick={() => CopyText(result)}
                className="w-30 flex gap-2 justify-center items-center py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-medium font-[ubuntu] cursor-pointer transition-all"
              >
                <Copy className="w-5 h-5" />
                Copy
              </button>
              <button
                onClick={rewrite}
                className="w-40 flex gap-2 justify-center items-center ml-2 px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-medium font-[ubuntu] cursor-pointer transition-all"
              >
                <RefreshCcw className="w-5 h-5" /> Rephrase
              </button>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </main>
  );
}

export default Paraphraser;
