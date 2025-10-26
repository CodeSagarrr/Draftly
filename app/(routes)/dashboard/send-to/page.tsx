"use client";
import React, { useEffect, useState } from "react";
import DashboardNav from "../_Components/Dashboard-Nav";
import NavHeaders from "../_Components/Nav-Headers";
import { AiFillDelete } from "react-icons/ai";
import Animation from "@/app/_Components/ui/Animation";
import { ChevronLeft, ChevronRight, MailPlus, Pencil, X } from "lucide-react";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import { GetSentUserEmails, sendUserEmail } from "@/lib/api";
import toast from "react-hot-toast";
import RecieverList from "../_Components/RecieverList";

interface SentEmail {
  to:string,
  subject:string,
  createdAt:string,
}

interface SentEmailsResponse {
  sentEmails: SentEmail[];
  hasNextPage: boolean;
  picture : string,
  currentTotalPage : number,
  totalDocument : number
}

function SendTo() {
  const [loading , setIsLoading] = useState(false);
  const [openCompose, setOpenCompose] = useState(false);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const [ page , setPage ] = useState(1);
  const [sentEmails , setSentEmails] = useState<SentEmailsResponse | null>(null)
  const [hasNextPage , setHasNextPage] = useState(true);
  const [composeData, setComposeData] = useState({
    to: "",
    subject: "",
    text: "",
  });

  const nextPage = () => {
    !hasNextPage ? setPage(1) : setPage((prev) => prev + 1);
    setIsLoading(!loading);
  };

  const previousPage = () => {
    setPage((prev) => prev - 1);
    setIsLoading(!loading);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComposeData({ ...composeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(!loading)
    e.preventDefault();

    const payLoad = {
      to: composeData.to,
      subject: composeData.subject,
      text: composeData.text,
    };

    const response = await sendUserEmail(payLoad);
    if (response) {
      toast.success("Email has sent");
      setIsLoading(!loading);
      setOpenCompose(!openCompose);
    } else {
      toast.error("Internal error");
      setIsLoading(!loading);
      console.error("Error from client", response);
    }
  };

  useEffect(() => {
    const getSentEmails = async() => {
      const res = await GetSentUserEmails(page);
      if(res){
        setSentEmails(res);
        setIsLoading(false);
        setHasNextPage(res?.hasNextPage)
      }
    }
    getSentEmails()
  },[page , openCompose])

  return (
    <main className="w-full">
      <div className=" w-full fixed top-0 left-0 right-0 z-50 shadow-[8px] backdrop-blur-[10px] ">
        <DashboardNav />
        <NavHeaders />
      </div>
      <Animation />

      <div className="relative w-full p-2 mt-30 flex justify-center">
        <h1 className="w-52 px-2 py-2 text-white bg-violet-500 font-medium font-[rubik] flex gap-2 justify-center items-center rounded-3xl">
          {" "}
          <MailPlus className="w-6 h-6" /> Compose Email
        </h1>
      </div>

      <div className="w-full relative px-6 py-2 flex justify-between">
        <button
          onClick={() => setOpenCompose(!openCompose)}
          className="w-36 py-4 flex gap-2 justify-center items-center rounded-3xl shadow-2xl border border-gray-100 transition-all text-violet-500 font-[rubik] font-semibold cursor-pointer"
        >
          <Pencil className="w-4 h-4" />
          Compose
        </button>

        {
          !sentEmails || loading ? "" : (
          <div className="flex gap-4 items-center mr-8">
          <button disabled={page === 0} onClick={previousPage} className="cursor-pointer bg-gray-200 rounded-lg p-1">
          <ChevronLeft className="w-8 h-8"/>
          </button>
          <button disabled={hasNextPage === false} onClick={nextPage} className="cursor-pointer bg-gray-200 rounded-lg p-1">
          <ChevronRight className="w-8 h-8"/>
          </button>
        </div>
          )
        }
      </div>

      {openCompose && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-6 relative">
            <div className="w-full flex justify-between items-center bg-gray-100 px-4 rounded-t-lg py-2 ">
              {
                loading ? <h1 className="font-medium">Loading ...</h1> : <h1 className="font-medium">New Massege</h1>
              }
              <span
                onClick={() => setOpenCompose(!openCompose)}
                className=" transform scale-110 hover:scale-125 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </span>
            </div>

            <div className="w-full">
              <div
                className={`w-full border-b border-gray-200 flex items-center`}
                onClick={() => setFocused(true)}
              >
                {focused && (
                  <span className="text-gray-500 font-medium mr-2 select-none">
                    To
                  </span>
                )}

                <input
                  type="text"
                  id="to"
                  name="to"
                  onChange={handleChange}
                  onFocus={() => setFocused(true)}
                  onBlur={() => !value && setFocused(false)}
                  placeholder={!focused ? "To" : ""}
                  className="w-full px-2 py-2 mx-auto outline-none text-[16px] text-zinc-900 font-[ubuntu] font-medium"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="w-full border-b border-gray-200">
                <input
                  type="text"
                  id="subject"
                  onChange={handleChange}
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-2 py-2 mx-auto outline-none text-[16px] text-zinc-700 font-medium"
                />
              </div>
            </div>

            <div className="w-full">
              <textarea
                name="text"
                id="text"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setComposeData({
                    ...composeData,
                    [e.target.name]: e.target.value,
                  })
                }
                placeholder="Text"
                className="w-full resize-none h-60 px-2 py-4 outline-none text-[16px] text-zinc-700 font-normal"
              />
            </div>

            <div className="w-full px-6 py-3 flex items-center justify-between">
              <button
                onClick={handleSubmit}
                className="w-30 py-2 flex gap-2 justify-center items-center rounded-3xl bg-violet-500 hover:bg-violet-600 transition-all text-white font-semibold cursor-pointer"
              >
                <BsFillSendArrowUpFill className="w-4 h-4" />
                Send To
              </button>

              <button onClick={() => setOpenCompose(!openCompose)}>
                <AiFillDelete className="w-6 h-6 text-rose-500 hover:text-rose-600 transition-all cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="p-2">
        <RecieverList data={sentEmails?.sentEmails} loading={loading}/>
      </div>
    </main>
  );
}

export default SendTo;
