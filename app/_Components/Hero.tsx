"use client";
import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import Header from "./Header";
import { useSession } from "next-auth/react";
import Link from "next/link";

function Hero() {
  const { data: session } = useSession();
  return (
    <>
      <main id="home" className="mx-auto scroll-mt-20">
        
        <section className="w-full fixed top-0 left-0 right-0 z-50 shadow-[8px] backdrop-blur-[10px] ">
          <Header />
        </section>
        <section className="flex justify-center flex-col items-center w-screen  mt-20 p-4">
          <div className="w-80 h-10 rounded-3xl font-bold bg-gray-200 text-center pt-2 pb-2 ">
            <p className="flex gap-2 text-black justify-center">
              <FaRegStar className="w-5 h-5 font-extrabold text-yellow-300" />
              Build Smarter Emails, Faster
            </p>
          </div>

          <div className="w-full text-center mx-auto max-h-full pt-6 px-2 ">
            <h1 className="lg:text-6xl sm:text-5xl text-3xl font-semibold font-[rubik] text-gray-800">
              Boost
              <span className="lg:text-6xl sm:text-5xl text-3xl sm:pt-0 pt-6 font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                <span> </span> Productivity One Email <span> </span>
              </span>
              at a Time
            </h1>

            <p className="max-w-2xl mx-auto mt-6 px-2 lg:text-[18px] sm:text-[16px] text-[12px] font-medium text-gray-600">
              Never worry about phrasing again. Draftly crafts professional,
              ready to send emails tailored to your needs, in just a few clicks.
            </p>
          </div>

          <div className="w-full flex sm:flex-row flex-col justify-center items-center sm:gap-8 gap-6 mt-8">
            {session?.user ? (
              <Link href={"/dashboard"} className="max-4xl cursor-pointer flex items-center gap-2 bg-violet-600 hover:bg-violet-700 transition-all text-white font-semibold sm:px-6 px-8 sm:py-3 py-2 rounded-3xl">
                Write Tailored Email <MdArrowRightAlt className="w-7 h-7 " />
              </Link>
            ) : (
              <Link href={"/login"} className="max-4xl cursor-pointer flex items-center gap-2 bg-violet-600 hover:bg-violet-700 transition-all text-white font-semibold sm:px-6 px-8 sm:py-3 py-2 rounded-3xl">
                Create Tailored Email <MdArrowRightAlt className="w-7 h-7 " />
              </Link>
            )}
            <Link href={"https://github.com/CodeSagarrr/EmailAssitant-new"} className="max-4xl flex items-center gap-2 cursor-pointer bg-violet-600 hover:bg-violet-700 transition-all text-white font-semibold sm:px-8 px-8 sm:py-3   py-2 rounded-3xl">
              <FaRegStar className="sm:w-5 sm:h-5 w-4 h-4" /> Star On Github
            </Link>
          </div>

          <div className="flex justify-between items-center mt-10">
            <Image
              src="/hero-image.png"
              alt="hero"
              width={1100}
              height={400}
              className="rounded-xl shadow-2xl shadow-gray-600"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Hero;
