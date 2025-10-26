"use client";
import React from "react";
import moment from "moment";
import { CircleAlertIcon } from "lucide-react";

function Table({ data, loading }: any) {
  return (
    <div>
  
        <div>
          {loading ? (
            <div className="realtive w-full h-80 flex justify-center items-center">
              <span className="loader-div "></span>
            </div>
          ) : (
            <table className="relative min-w-full divide-y-2 divide-gray-200 dark:divide-gray-800">
              <thead className="ltr:text-left rtl:text-right">
                <tr className="*:font-semibold font-[ubuntu]  *:text-gray-900 dark:*:text-black">
                  <th className="px-3 py-2 whitespace-nowrap">Name</th>
                  <th className="px-3 py-2 whitespace-nowrap">Tone</th>
                  <th className="px-3 py-2 whitespace-nowrap">Topic</th>
                  <th className="px-3 py-2 whitespace-nowrap">Language</th>
                  <th className="px-3 py-2 whitespace-nowrap">CreatedAt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 *:even:bg-gray-200 dark:divide-gray-100 dark:*:even:bg-gray-100">
                { data && data?.email?.length > 0 ? data?.email?.map((item: any, index: number) => (
                  <tr key={index} className=" *:first:font-medium ">
                    <td className="px-3 py-6 md:w-full w-80 flex gap-2 items-center text-black font-semibold">
                      {data.picture ? (
                        <img
                          src={data?.picture}
                          alt={data?.name?.charAt(0) || "U"}
                          className="lg:w-10 md:w-9 w-8 lg:h-10 md:h-9 h-8  rounded-full ml-4"
                        />
                      ) : (
                        <p className=" w-9 h-9 bg-lime-600 hover:bg-lime-700 flex items-center justify-center text-[18px] cursor-pointer font-medium rounded-full text-white">
                          {data?.name?.charAt(0)}
                        </p>
                      )}
                      {data?.name}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-gray-700">
                      {item?.tone}
                    </td>
                    <td className="md:max-w-80 text-black max-w-full px-3 py-2 md:whitespace-normal whitespace-nowrap">
                      {item?.content || "No Content Provided"}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-gray-700">
                      {item?.language}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-gray-700">
                      {moment(item.createdAt).format("llll")}
                    </td>
                  </tr>
                )): (
                  <tr>
                  <td
                    colSpan={6}
                    className="py-8 text-gray-900 font-semibold text-lg flex gap-2 items-center"
                  >
                    <CircleAlertIcon className="md:w-6 w-60 h-6"/>
                    Not Found , Go on email write and generate one template.
                  </td>
                </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
    </div>
  );
}

export default Table;
