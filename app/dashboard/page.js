"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdInterests, MdPendingActions, MdCallReceived } from "react-icons/md";
import { VscVmActive } from "react-icons/vsc";
import { AiFillDashboard } from "react-icons/ai";
import { BiDevices, BiSupport } from "react-icons/bi";
import Password from "./password";

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleChangePassword = (existingPassword, newPassword, confirmPassword) => {
    // Handle change password logic here
    // Check if newPassword matches confirmPassword and perform the necessary action
  };

  const handleAnalytics = () => {
    router.push("/uAnalytics");
  };

  const handleEngagement = () => {
    router.push("/uEngagement");
  };

  const handleCustomerSupport = () => {
    router.push("/customersupport");
  };

  const handleNorthstar = () => {
    router.push("/northstar");
  };

  const handleAddUsers = () => {
    router.push("/addUser");
  };

  const handleSignout = () => {
    router.back();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className=" bg-slate-50 h-screen">
      <div className="flex px-8 py-8">
        <h1 className="text-black ml-7 max-h-5 text-2xl font-semibold">
          Talentverse
        </h1>
        <h1 className="text-black ml-20 max-h-5 text-2xl font-semibold">
          Good Morning, Naveen !
        </h1>
      </div>
      <div className="flex-row flex ">
        <div className=" flex-col flex w-44 ml-10">
          <button className="bg-white text-blue-900 text-base font-normal text-left hover:bg-white active:bg-white border-2 px-3 py-3 rounded-md flex flex-row">
            <h1 className="text-black mr-2 text-2xl">
              {" "}
              <AiFillDashboard />{" "}
            </h1>
            Dashboard
          </button>
          <button className="text-left text-black text-base font-normal hover:text-blue-900 hover:bg-white active:bg-white px-3 py-3 rounded-md"
          onClick={handleAnalytics}
          >
            User Analytics
          </button>
          <button className="text-left text-black text-base font-normal hover:text-blue-900 hover:bg-white active:bg-white px-3 py-3 rounded-md"
          onClick={handleEngagement}
          >
            User Engagement
          </button>
          <button className="text-left text-black text-base font-normal hover:text-blue-900 hover:bg-white active:bg-white px-3 py-3 rounded-md"
          onClick={handleCustomerSupport}
          >
            Customer Support
          </button>
          <button
            className="text-left text-black text-base font-normal hover:text-blue-900 hover:bg-white active:bg-white px-3 py-3 rounded-md"
            onClick={handleNorthstar}
          >
            Northstar
          </button>

          <h1 className="text-slate-500 ">---------------------</h1>

          <button
            className="text-left text-black text-base font-normal hover:text-blue-900 hover:bg-white active:bg-white px-3 py-3 rounded-md"
            onClick={handleAddUsers}
          >
            Add Users
          </button>
          <button
            className="text-left text-black text-base font-normal hover:text-blue-900 hover:bg-white active:bg-white px-3 py-3 rounded-md"
            onClick={() => setShowModal(true)}
          >
            Change Password
          </button>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow-lg">
              <Password onSubmit={handleChangePassword} onCancel={closeModal}/>
            </div>
          </div>
          )}
          <button
            className=" bg-black text-left text-white text-base font-normal px-5 py-2 w-32 mt-32 rounded-md flex flex-row justify-between"
            onClick={handleSignout}
          >
            Sign Out!
            <FiLogOut className="mt-1 text-3xl" />
          </button>
        </div>
        <div className="flex flex-col ml-16">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="px-4 py-4 flex flex-row border-blue border-2 rounded-md h-28 bg-white">
              <div className=" flex flex-col border-r border-gray-200 mt-3">
                <h1 className="text-black font-sm mr-4">Number of installs</h1>
                <h3 className="text-blue-900 text-xl font-bold text-center">
                  13335
                </h3>
              </div>
              <div className=" ml-2 flex flex-col border-r border-gray-200 mt-3">
                <h1 className="text-black font-sm mr-4">
                  Number of uninstalls
                </h1>
                <h3 className="text-blue-900 text-xl font-bold text-center">
                  2690
                </h3>
              </div>
              <div className=" ml-2 flex flex-col border-r border-gray-200 mt-3">
                <h1 className="text-black font-sm mr-4">
                  Duration based on active user
                </h1>
                <h3 className="text-blue-900 text-xl font-bold text-center">
                  12: 200: 228 : 00
                </h3>
              </div>
              <div className=" ml-2 flex flex-col mt-3">
                <h1 className="text-black font-sm">Number of posts</h1>
                <h3 className="text-blue-900 text-lg font-bold text-center">
                  3000
                </h3>
              </div>
            </div>
            <div className="flex flex-row">
              <div className=" border-blue border-2 rounded-md h-32 bg-white mt-4 w-2/4">
                <h1 className="text-black font-medium m-4 flex flex-row">
                  <BiDevices className="text-black mt-1 mr-3" />
                  User Breakdown
                </h1>
                <div className="flex flex-row">
                  <div className="px-5 py-2 flex flex-row border-r border-gray-200">
                    <h1 className="text-black mt-1">
                      <FaGooglePlay />{" "}
                    </h1>
                    <h1 className="text-black font-sm ml-1 ">Android : </h1>
                    <h3 className="text-blue-900 text-base font-bold text-center ml-2">
                      13335
                    </h3>
                  </div>
                  <div className="px-5 py-2 flex flex-row">
                    <h1 className="text-black mt-1">
                      {" "}
                      <FaApple />{" "}
                    </h1>
                    <h1 className="text-black font-sm ml-1"> iOS :</h1>
                    <h3 className="text-blue-900 text-base font-bold text-center ml-2">
                      2690
                    </h3>
                  </div>
                </div>
              </div>
              <div className=" border-blue border-2 rounded-md h-36 bg-white mt-4 w-2/4 ml-4">
                <h1 className="text-black font-medium m-4 flex flex-row">
                  <BiSupport className="text-black mt-1 mr-3" />
                  Support Tickets
                </h1>
                <div className="flex flex-row px-10">
                  <div className="px-2 py-2 flex flex-col border-r border-gray-200">
                    <h1 className="text-black font-extralight">
                      Number of tickets
                    </h1>
                    <h3 className="text-blue-900 text-base font-bold text-center">
                      13335
                    </h3>
                  </div>
                  <div className="px-2 py-2 flex flex-col">
                    <h1 className="text-black font-extralight">
                      Solved issues
                    </h1>
                    <h3 className="text-blue-900 text-base font-bold text-center">
                      2690
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-4 mt-5">
            <div className="flex flex-col border-blue border-2 rounded-md h-52 bg-white w-80">
              <h1 className="text-black font-medium m-4">
                Northstar Application
              </h1>
              <div className="px-2 py-2 flex flex-col ">
                <h1 className="text-black font-normal text-sm ml-4 flex flex-row">
                  <MdCallReceived className="text-black mt-1 mr-3"/>
                  Received application
                </h1>
                <h3 className="text-blue-900 text-xl font-bold text-center">
                  13335
                </h3>
              </div>
              <div className="px-2 py-2 flex flex-col">
                <h1 className="text-black font-normal text-sm ml-4  flex flex-row">
                  <MdPendingActions className="text-black mt-1 mr-3"/>
                  Pending For Approval
                </h1>
                <h3 className="text-blue-900 text-xl font-bold text-center">
                  2690
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
              <div className="px-5 py-5 border-blue border-2 rounded-md h-36 bg-white mt-4 w-2/4">
                <h1 className="text-black font-medium flex flex-row">
                <VscVmActive className="text-black mt-1 mr-3" />
                  Active Users</h1>
                <div className="flex px-5 flex-row mt-3">
                  <div className="px-2 py-2 flex flex-col border-r border-gray-200">
                    <h1 className="text-black font-extralight">Daily Average Users</h1>
                    <h3 className="text-blue-900 text-base font-bold text-center">
                      1279
                    </h3>
                  </div>
                  <div className="px-2 py-2 flex flex-col">
                    <h1 className="text-black font-extralight">
                    Monthly Average Users
                    </h1>
                    <h3 className="text-blue-900 text-base font-bold text-center ">
                      12071998
                    </h3>
                  </div>
                </div>
              </div>
              <div className="px-5 py-5 border-blue border-2 rounded-md h-auto bg-white mt-4 w-2/4 ml-5">
                <h1 className="text-black font-medium flex flex-row">
                <MdInterests className="text-black mt-1 mr-3" />
                  Interests</h1>
                <div className="flex px-5 flex-col mt-3">
                    <h1 className="text-black font-medium text-xl">Category</h1>
                    <div className="flex flex-row">
                    <h3 className="text-orange-400 px-2 py-1 text-sm font-bold border-r border-gray-200">
                      Music
                    </h3>
                    <h3 className="text-orange-400 px-2 py-1 text-sm font-bold border-r border-gray-200">
                      Dance
                    </h3>
                    <h3 className="text-orange-400 px-2 py-1 text-sm font-bold border-r border-gray-200">
                      Acting
                    </h3>
                    <h3 className="text-orange-400 px-2 py-1 text-sm font-bold border-r border-gray-200">
                      Music
                    </h3>
                    <h3 className="text-orange-400 px-2 py-1 text-sm font-bold border-r border-gray-200">
                      Dance
                    </h3>
                    <h3 className="text-orange-400 px-2 py-1 text-sm font-bold border-r border-gray-200">
                      Acting
                    </h3>
                  </div>
                  
                </div>
              </div>
              
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
