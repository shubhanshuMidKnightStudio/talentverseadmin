"use client";
import React, { useState } from "react";

const page = () => {
    const [approvedUsers, setApprovedUsers] = useState([]);
  const [deniedUsers, setDeniedUsers] = useState([]);

  const handleApprove = (userId) => {
    const approvedUser = userData.find(user => user.id === userId);
    setApprovedUsers(prevApprovedUsers => [...prevApprovedUsers, approvedUser]);
  };

  const handleDeny = (userId) => {
    const deniedUser = userData.find(user => user.id === userId);
    setDeniedUsers(prevDeniedUsers => [...prevDeniedUsers, deniedUser]);
  };

    const userData = [
        {
          name: "Sai Tile",
          username: "sai_tile",
          dob: "12JUL98",
          phoneStatus: "Verified",
          emailStatus: "Verified",
          expertCategories: ["Dance", "Music", "Others"],
          identityCardLink: "Document_Link",
        },
        // Add more user data objects as needed
      ];
      
  return (
    <div className=" bg-slate-50 h-screen">
      <h1 className="px-8 py-8 text-black text-2xl font-semibold">
      Northstar Tools for Approval
      </h1>
      <div className="px-5 py-5 justify-center ">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <div className="border-blue border-2 rounded-md h-32 bg-white w-1/3">
            <h2 className=" text-black text-xl font-semibold text-center mt-3">Northstar Application Received</h2>
            <div className="flex flex-row pl-5">
            <div className="px-4 py-4 flex flex-col">
              <h1 className="text-black font-medium">Received application</h1>
              <h3 className="text-blue-900 text-xl font-bold text-center">
                13335
              </h3>
            </div>
            <div className="px-4 py-4 flex flex-col">
              <h1 className="text-green-700 font-medium">Pending For Approval</h1>
              <h3 className="text-blue-900 text-xl font-bold text-center">
                2690
              </h3>
            </div>
          </div>
          </div>
        </div>

        <h2 className=" text-black text-2xl font-semibold text-center mb-5">Northstar Application Form Details</h2>
        {userData.map((user, index) => (
        <div key={index} className="flex flex-row border-blue border-2 rounded-md bg-white pl-5">
          <div className="px-4 py-4 flex flex-col">
            <h1 className="text-black font-medium mb-5">Name</h1>
            <h3 className="text-blue-900 text-base font-bold text-center">
              {user.name}
            </h3>
          </div>
          <div className="px-4 py-4 flex flex-col">
            <h1 className="text-black font-medium mb-5">Username</h1>
            <h3 className="text-blue-900 text-base font-bold text-center">
              {user.username}
            </h3>
          </div>
          <div className="px-4 py-4 flex flex-col">
            <h1 className="text-black font-medium mb-5">
              D.O.B
            </h1>
            <h3 className="text-blue-900 text-base font-bold text-center">
              {user.dob}
            </h3>
          </div>
          <div className="px-4 py-4 flex flex-col">
            <h1 className="text-black font-medium mb-5">Phone</h1>
            <h3 className="text-green-700 text-base font-bold text-center">
              {user.phoneStatus}
            </h3>
          </div>
          <div className="px-4 py-4 flex flex-col">
            <h1 className="text-black font-medium mb-5">Email</h1>
            <h3 className="text-green-700 text-base font-bold text-center">
              {user.emailStatus}
            </h3>
          </div>
          <div className="px-4 py-4 flex flex-col">
            <h1 className="text-black font-medium mb-5">
            Expert Category
            </h1>
            <div className="flex flex-row">
            {user.expertCategories.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <h3 className="text-blue-900 text-base font-bold text-center">
                      {category}
                    </h3>
                    {categoryIndex < user.expertCategories.length - 1 && <span className="mx-2">,</span>}
                  </React.Fragment>
                ))}
            </div>
          </div>
          <div className="px-4 py-4 flex flex-col">
            <h1 className="text-black font-medium mb-5">Identity Card</h1>
            <h3 className="text-green-700 text-base font-bold text-center">
              {user.identityCardLink}
            </h3>
          </div>
          {/* Buttons */}
          <div className="px-4 py-4 flex flex-row mt-7 justify-end">
              <button onClick={() => handleApprove(user.id)} className="bg-green-800 text-white px-2 py-1 text-base font-normal rounded m-2">Approve</button>
              <button onClick={() => handleDeny(user.id)} className="bg-red-600 text-white px-2 py-1 text-base font-normal rounded m-2">Deny</button>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default page;
