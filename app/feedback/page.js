"use client";
import React, { useState } from "react";
import { RiCloseCircleFill, RiReplyFill } from "react-icons/ri";

const page = () => {

  const handleThanks = () => {
    // Feedback Email Logic
  };

  return (
    <div className=" bg-slate-50 h-screen">
      <h1 className="px-8 py-8 text-black text-2xl font-semibold">
        Feedback
      </h1>

      <div className="mt-2 px-32">
        <table className="w-full ">
          <thead>
            <tr className="bg-blue-200 text-black">
              <th className="py-2 px-1 border-r-2 text-xs">TICKET ID</th>
              <th className="py-2 px-1 border-r-2 text-xs">USERNAME</th>
              <th className="py-2 px-1 border-r-2 text-xs">INQUIRY DATE</th>
              <th className="py-2 px-1 border-r-2 text-xs">SUBJECT</th>
              <th className="py-2 px-1 border-r-2 text-xs">MESSAGE</th>
              <th className="py-2 px-1 border-r-2 text-xs">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-black border-b-2">
              <td className="py-2 text-center">234348943894</td>
              <td className="py-2 text-center">@saitile</td>
              <td className="py-2 text-center">12 JUL 98</td>
              <td className="py-2 text-center">ALERT</td>
              <td className="py-2 text-center">Hi App not working</td>              
              <td className="py-2 text-center">
              <button
                  className=" text-black rounded-lg border-spacing-1 border-2"
                  onClick={handleThanks}
                >
                  Thanks
                </button>
                </td>              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
