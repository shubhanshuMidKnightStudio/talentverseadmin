"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [existingPassword, setExistingPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleChangePassword = () => {
    // Handle change password logic here
    // Check if newPassword matches confirmPassword and perform the necessary action
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
        // Sidebar
        <div className=" flex-col flex w-50">
          <button className="bg-white text-blue-900 text-base font-normal text-left hover:bg-white active:bg-white border-2 px-3 py-3 rounded-md">
            Dashboard
          </button>
          <button className="text-left text-black text-base font-normal hover:text-blue-900 hover:bg-white active:bg-white px-3 py-3 rounded-md">
            User Analytics
          </button>
          <button className="text-left text-black text-base font-normal hover:text-blue-900 hover:bg-white active:bg-white px-3 py-3 rounded-md">
            User Engagement
          </button>
          <button className="text-left text-black text-base font-normal hover:text-blue-900 hover:bg-white active:bg-white px-3 py-3 rounded-md">
            Performance
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
            onClick={() => setPopupVisible(true)}
          >
            Change Password
          </button>
          {/* Popup for change password */}
          {isPopupVisible && (
            <div className="popup">
              <div className="absolute flex flex-col">
                <input
                  type="password"
                  className="text-base font-normal border-black border-2 mb-1 pl-2 rounded text-black"
                  placeholder="Existing Password"
                  value={existingPassword}
                  onChange={(e) => setExistingPassword(e.target.value)}
                />
                <input
                  type="password"
                  className="text-base font-normal border-black border-2 mb-1 pl-2 rounded text-black"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                  type="password"
                  className="text-base font-normal border-black border-2 mb-1 pl-2 rounded text-black"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="flex flex-row">
                  <button
                    className=" bg-black text-left text-white text-sm font-normal  px-2 py-3 ml-6 rounded-md"
                    onClick={() => setPopupVisible(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className=" bg-black text-left text-white text-sm font-normal px-2 py-3 ml-3 rounded-md"
                    onClick={handleChangePassword}
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          )}
          <button
            className=" bg-black text-left text-white text-base font-normal px-10 py-3 mt-40 rounded-md"
            onClick={handleSignout}
          >
            Sign Out!
          </button>
        </div>
        // Dashboard
        <div className="flex flex-row ml-2">
          <div className="flex flex-row border-blue border-2 rounded-md h-20 bg-white">
            <div className="px-4 py-4 flex flex-col">
              <h1 className="text-black font-medium">Number of installs</h1>
              <h3 className="text-blue-900 text-xl font-bold text-center">
                13335
              </h3>
            </div>
            <div className="px-4 py-4 flex flex-col">
              <h1 className="text-black font-medium">Number of uninstalls</h1>
              <h3 className="text-blue-900 text-xl font-bold text-center">
                2690
              </h3>
            </div>
            <div className="px-4 py-4 flex flex-col">
              <h1 className="text-black font-medium">
                Duration based on active user
              </h1>
              <h3 className="text-blue-900 text-xl font-bold text-center">
                12: 200: 228 : 00
              </h3>
            </div>
            <div className="px-4 py-4 flex flex-col">
              <h1 className="text-black font-medium">Number of posts</h1>
              <h3 className="text-blue-900 text-lg font-bold text-center">
                3000
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
