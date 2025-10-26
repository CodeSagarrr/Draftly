"use client";
import { MailIcon } from "lucide-react";
import { IoIosCloseCircle } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { locations } from "@/lib/utils";
import Link from "next/link";

function Header() { 
  const [menu, setMenu] = useState(false);
  const { data: session } = useSession();
 
  return (
    <>
      <section className="max-h-screen flex sm:justify-around justify-between items-center lg:p-4 sm:p-2 p-3 shadow-sm">
        <div>
          <p className="font-[ubuntu] text-xl font-bold flex gap-2 items-center">
            {" "}
            <MailIcon className="w-6 h-6" /> Draftly
          </p>
        </div>

        <div className="lg:max-2-6xl sm:block hidden md:ml-20 sm:ml-15 ml-5">
          <ul className="flex items-center list-none text-[14px] text-medium font-medium">
            {locations.map((location) => {
              return (
                <Link
                key={location.id}
                  href={`${location.path}`}
                  className={`px-4 cursor-pointer text-gray-600 hover:text-violet-600`}
                >
                  {location.label}
                </Link>
              );
            })}
          </ul>
        </div>

        <div>
          <div className="max-w-7xl flex items-center">
          {session?.user ? (
              <Link href={"/dashboard"} className="max-w-36 sm:block hidden bg-violet-500 hover:bg-violet-600 px-4 text-center text-[14px] pt-1 pb-2 cursor-pointer font-medium rounded-3xl text-white transition-all">
              Get Started
            </Link>
            ) : (
              <Link href={"/login"} className="max-w-36 sm:block hidden bg-violet-500 hover:bg-violet-600 px-4 text-center text-[14px] pt-1 pb-2 cursor-pointer font-medium rounded-3xl text-white transition-all">
              Get Started
            </Link>
            )}
            
            <div className="md:block hidden">
              {session?.user?.image ? (
                <img
                  src={session?.user?.image}
                  alt={session?.user?.name?.charAt(0) || "U"}
                  className="w-10 h-10 rounded-full ml-4"
                />
              ) : session ? (
                <div className="w-9 h-9 ml-2 bg-violet-500 hover:bg-violet-600 flex justify-center items-center text-[18px] cursor-pointer font-medium rounded-full text-white">
                  {session?.user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="sm:hidden block">
            {menu ? (
              <IoIosCloseCircle
                className=" cursor-pointer w-6 h-6"
                onClick={() => setMenu(!menu)}
              />
            ) : (
              <IoMdMenu
                className="cursor-pointer w-7 h-7"
                onClick={() => setMenu(!menu)}
              />
            )}
          </div>
        </div>
      </section>

      <section>
        {menu ? (
          <div className="w-full sm:hidden block h-60 absolute bg-zinc-700 p-4 transition-all ease-linear">
            <ul className="flex flex-col text-white text-[14px] font-medium ">
              {locations.map((location) => {
                return (
                  <Link
                    href={`${location.path}`}
                    onClick={() => setMenu(!menu)}
                    className={`py-2 px-2 cursor-pointer text-gray-200 hover:text-violet-600 rounded-xl transition-all`}
                  >
                    {location.label}
                  </Link>
                );
              })}
            </ul>

            <div className="max-w-7xl flex items-center justify-between pr-4">
              {
                session?.user ? (
                  <Link href={"/dashboard"} className="max-w-36 mt-4 bg-violet-500 hover:bg-violet-600 px-4 text-center text-[14px] pt-1 pb-2 cursor-pointer font-medium rounded-3xl text-white transition-all">
                Get Started
              </Link>
                ) : (
                  <Link href={"/login"} className="max-w-36 mt-4 bg-violet-500 hover:bg-violet-600 px-4 text-center text-[14px] pt-1 pb-2 cursor-pointer font-medium rounded-3xl text-white transition-all">
                Get Started
              </Link>
                )
              }
              <p className="text-[14px] font-medium text-white mt-2">
                {session?.user?.image ? (
                  <img
                    src={session?.user?.image}
                    alt={session?.user?.name?.charAt(0) || "U"}
                    className="w-10 h-10 rounded-full ml-4"
                  />
                ) : session ? (
                  <div className="w-10 h-10 ml-4 bg-teal-600 hover:bg-teal-700 text-center pt-2 cursor-pointer font-medium rounded-full text-white">
                    {session?.user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}

export default Header;
