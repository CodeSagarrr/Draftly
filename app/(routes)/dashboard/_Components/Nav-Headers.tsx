"use client";
import React, { useState } from "react";
import { dashboardNav } from "@/lib/utils";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import { usePathname } from "next/navigation";

function NavHeaders() {
  const [menu, setmenu] = useState(false);
  const navigation = usePathname();

  return (
    <main>
      <section className="lg:block md:block hidden shadow-md">
        <div className="max-w-screen bg-transperent h-auto flex justify-center items-center lg:py-1 md:py-1 py-2">
          <div className="w-full p-2 md:flex justify-evenly items-center md:mr-14 mr-4">
            {dashboardNav.map((nav) => (
              <Link
                key={nav.id}
                href={nav.path}
                className={`flex gap-2 items-center text-[15px] font-[ubuntu] font-medium ${navigation === nav.path ? "text-violet-500 hover:text-zinc-800" : "text-zinc-800 hover:text-violet-500" } transition-all`}
              >
                <nav.icons className="w-5 h-5" />
                {nav.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="lg:hidden md:hidden block">
        <div className="w-full flex justify-center items-center bg-gray-200 py-2">
          {menu ? (
            <MdClose
              onClick={() => setmenu(!menu)}
              className="w-6 h-6 cursor-pointer "
            />
          ) : (
            <MdMenu
              onClick={() => setmenu(!menu)}
              className="w-6 h-6 cursor-pointer"
            />
          )}
        </div>
      </div>
      <section>
        {menu ? (
          <div className="w-full relative top-0 lg:hidden md:hidden block">
            <div className="max-w-full pl-6 pb-4 flex flex-col bg-gray-200">
              {dashboardNav.map((nav) => (
                <Link
                  key={nav.id}
                  href={nav.path}
                  onClick={() => setmenu(!menu)}
                  className="flex gap-2 mt-4 mb-2 items-center text-[15px] font-[ubuntu] font-medium text-zinc-800 hover:text-violet-500 transition-all"
                >
                  <nav.icons className="w-5 h-5" />
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          " "
        )}
      </section>
    </main>
  );
}

export default NavHeaders;
