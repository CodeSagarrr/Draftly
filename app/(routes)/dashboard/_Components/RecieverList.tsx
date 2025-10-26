import { Clock, Mail } from "lucide-react";
import moment from "moment";
import { useSession } from "next-auth/react";
import React from "react";

interface SentEmail {
  to: string;
  subject: string;
  createdAt: string;
}

interface RecieverListProps {
  data: SentEmail[] | undefined;
  loading: boolean;
}

function RecieverList({ data ,loading }: RecieverListProps) {
  const { data : session } = useSession();
  return (
    <main className="w-full p-2">
      <div className=" bg-linear-to-b from-gray-50 via-white to-gray-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="flex items-center gap-3 text-3xl font-semibold text-gray-800">
                <Mail className="w-7 h-7 text-violet-500" />
                Sent Emails
              </h1>
              <p className="text-gray-600 mt-1">
                View all emails you’ve sent using your account : {session?.user?.name} ({session?.user?.email})
              </p>
            </div>
          </div>

          {/* Table for large screens */}
          <div className="hidden md:block bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Receiver
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Subject
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                    Sent Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      Loading...
                    </td>
                  </tr>
                ) : data && data.length > 0 ? (
                  data.map((email, idx) => (
                    <tr
                      key={idx}
                      className={`${
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      } hover:bg-emerald-50 transition`}
                    >
                      <td className="px-6 py-4 text-gray-800 font-medium flex gap-2 items-center">
                        {
                          email?.to ?  <p className=" w-9 h-9 bg-teal-600 hover:bg-teal-700 text-center flex items-center justify-center cursor-pointer font-medium rounded-full text-white">
                          {email?.to?.charAt(0).toUpperCase()}
                        </p> : ""
                        }
                   
                        {email.to}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {email.subject}
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        {moment(email.createdAt).format("llll")}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No sent emails found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Card layout for small screens */}
          <div className="md:hidden space-y-4">
            {data && data.map((email , idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-800">{email.to}</h3>
                  <span className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1 text-gray-400" />
                    {moment(email.createdAt).format("llll")}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{email.subject}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default RecieverList;
