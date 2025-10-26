"use client";
import Table from "@/app/(routes)/dashboard/_Components/Table";
import { getUserEmails } from "@/lib/api";
import React, { useEffect, useState } from "react";
import { FaHistory } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DashboardNav from "../_Components/Dashboard-Nav";
import NavHeaders from "../_Components/Nav-Headers";
import Animation from "@/app/_Components/ui/Animation";

function CreatedEmails() {
  const [loading, setLoading] = useState(true);
  const [userEmails, setUsersEmails] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const nextPage = () => {
    !hasNextPage ? setPage(1) : setPage((prev) => prev + 1);
    setLoading(!loading);
  };

  const previousPage = () => {
    setPage((prev) => prev - 1);
    setLoading(!loading);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await getUserEmails(page);
      if (res) {
        setUsersEmails(res);
        setLoading(!loading);
        setHasNextPage(res?.hasNextPage);
      }
    };
    getData();
  }, [page]);

  return (
    <main className=" relative max-w-screen h-auto">
      <div className=" w-full fixed top-0 left-0 right-0 z-50 shadow-[8px] backdrop-blur-[10px] ">
        <DashboardNav />
        <NavHeaders />
      </div>
      <Animation />
      <div className=" relative w-full mt-28 flex justify-center items-center p-2">
        <div className="w-60 flex justify-center  items-center gap-2 py-2 mt-8 rounded-3xl text-white bg-violet-500">
          <FaHistory className="w-5 h-5" />{" "}
          <h1 className="font-bold ">Your Polished Draft</h1>
        </div>
      </div>

      <div className=" relative w-full inset-2 inset-shadow-2xs md:p-8 p-4 mt-8 overflow-x-auto">
        <Table data={userEmails} loading={loading} />
      </div>

      {userEmails?.email?.length === 0 || loading ? (
        ""
      ) : (
        <div className="relative w-full flex justify-center gap-4 items-center p-4">
          <button
            disabled={page === 1}
            onClick={previousPage}
            className="max-w-30 bg-violet-500 hover:bg-violet-600 px-4 text-center text-[14px] pt-1 pb-2 cursor-pointer font-medium rounded-3xl text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <p className="text-2xl font-[ubuntu] font-semibold">{page}</p>
          <button
            disabled={!hasNextPage}
            onClick={nextPage}
            className="max-w-30  bg-violet-500 hover:bg-violet-600 px-4 text-center text-[14px] pt-1 pb-2 cursor-pointer font-medium rounded-3xl text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </main>
  );
}

export default CreatedEmails;
