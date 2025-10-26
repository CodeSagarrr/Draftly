"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { MdMail } from "react-icons/md";

function DashboardNav() {
  const { data: session } = useSession();
  return (
    <main className="max-w-full flex justify-between items-center lg:p-3 md:p-3 p-3 shadow-2xs">
      <Link href={"/"} className="max-w-40 flex items-center gap-2 lg:ml-6 md:ml-4 ml-2">
        <MdMail className="w-7 h-7" />
        <h1 className="text-xl font-semibold font-[ubuntu]">Draftly</h1>
      </Link>
      <div className="flex items-center gap-3 max-w-4xl lg:mr-4 md:mr-3 mr-2">
        <div className="flex justify-center items-center">
          <div>
            {session?.user?.image ? (
              <img
                src={session?.user?.image}
                alt={session?.user?.name?.charAt(0) || "U"}
                className="lg:w-10 md:w-9 w-8 lg:h-10 md:h-9 h-8  rounded-full ml-4"
              />
            ) : session ? (
              <p className="lg:w-10 md:w-9 w-8 lg:h-10 md:h-9 h-8 ml-4 bg-teal-600 hover:bg-teal-700 text-center md:text-[20px] text-[18px] sm:pt-1 pt-0.5 cursor-pointer font-medium rounded-full text-white">
                {session?.user?.name?.charAt(0).toUpperCase() || "U"}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        
        <div>
          <button
            onClick={() => signOut()}
            className="max-w-36 bg-rose-500 hover:bg-rose-600 sm:px-4 px-3 text-center text-[14px] pt-1 sm:pb-2 pb-1 cursor-pointer font-medium rounded-3xl text-white transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}

export default DashboardNav;
