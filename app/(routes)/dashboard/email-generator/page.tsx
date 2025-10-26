"use client";
import React, { useEffect, useRef, useState } from "react";
import { Language, Tone, Length, CopyText } from "@/lib/utils";
import DropDown from "@/app/_Components/ui/DropDown";
import { createConciseEmail } from "@/lib/api";
import toast from "react-hot-toast";
import { Copy, Eraser, RefreshCcw, WandSparkles } from "lucide-react";
import { FaRegStar } from "react-icons/fa";
import DashboardNav from "../_Components/Dashboard-Nav";
import NavHeaders from "../_Components/Nav-Headers";
import Animation from "@/app/_Components/ui/Animation";

function EmailGenerator() {
  const [Loading, setLoading] = useState(false);
  const [language, setlanguage] = useState("English (Us)");
  const [tone, setTone] = useState("Casual");
  const [length, setLength] = useState("Short");
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

  const createEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();

    const payLoad = {
      language: language,
      tone: tone,
      length: length,
      topic: content,
    };

    const res = await createConciseEmail(payLoad);
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
      toast.success("Email has created for you!");
      setLoading(false);
    } else {
      toast.error(res);
      return console.log(res);
    }
  };

  const erase = () => {
    setResult("");
    setContent("");
  };
  return (
    <>
      <main className="w-screen p-2">
        <div className=" w-full fixed top-0 left-0 right-0 z-50 shadow-[8px] backdrop-blur-[10px] ">
          <DashboardNav />
          <NavHeaders />
        </div>
        <Animation/>
        <div className=" realtive w-full p-4 mt-28 flex justify-center">
          <div className="w-80 h-10 rounded-3xl font-bold bg-violet-500 text-center pt-2 pb-2 ">
            <p className="flex gap-2 text-white justify-center">
              <FaRegStar className="w-5 h-5 font-extrabold text-yellow-300" />
              Write Smarter Emails, Instantly
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

        <div className="relative inline-block text-left top-6 md:left-9 left-1 w-52 ">
          {/* Dropdown Button */}
          <DropDown
            label="Select Length"
            options={Length}
            defaultValue="Short"
            onSelect={(length) => setLength(length)}
          />
        </div>

        <div className="w-full relative bg-gray-200 rounded-md flex lg:flex-row md:flex-col flex-col justify-between items-center md:gap-2 gap-2 md:p-2 p-2 md:mt-2 mt-10">
          <textarea
            id="email"
            name="email"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-90 p-4 rounded-md bg-white outline-none resize-none"
            placeholder={`Tell us what to include in new email.

For eg : Write an email to apply for the Full Stack Developer position at [Company].
          `}
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
                    Email will appear here ...
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
              onClick={createEmail}
              disabled={!content}
              className=" w-60 px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-medium font-[ubuntu] cursor-pointer transition-all"
            >
              {Loading ? (
                <div className=" flex items-center gap-4 justify-center">
                  <span>Loading</span> <span className="loader "></span>
                </div>
              ) : (
                <div className=" flex items-center gap-4 justify-center">
                  <span>Create with AI</span>{" "}
                  <WandSparkles className="w-5 h-5" />
                </div>
              )}
            </button>
          </div>

          <div>
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
                  onClick={createEmail}
                  className="w-40 flex gap-2 justify-center items-center ml-2 px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-medium font-[ubuntu] cursor-pointer transition-all"
                >
                  <RefreshCcw className="w-5 h-5" /> Rephrase
                </button>
                <button
                  onClick={erase}
                  className="w-30 flex gap-2 justify-center items-center ml-2 px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 text-white font-medium font-[ubuntu] cursor-pointer transition-all"
                >
                  <Eraser className="w-5 h-5" /> Erase
                </button>
              </div>
            ) : (
              " "
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default EmailGenerator;
