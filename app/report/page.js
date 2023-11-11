"use client";
import React, { useState } from "react";
import { FaComment, FaImage, FaUserTie, FaVideoSlash } from "react-icons/fa";
import Profile from "./profileView";
import ProfileDelete from "./profileDelete";

const Page = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowDeleteModal(false);
  };

  const handleIgnore = () => {};

  const handleWarning = () => {};

  const handleDelete = () => {};

  const renderTable = () => {
    switch (activeTab) {
      case "Profile":
        return (
          <table className="w-auto h-auto">
            <thead className="">
              <tr className="bg-blue-200 text-black">
                <th className="py-2 px-10 border-r-2 text-xs">REPORTED BY</th>
                <th className="py-2 px-10 border-r-2 text-xs">
                  REPORTED PROFILE ID
                </th>
                <th className="py-2 px-10 border-r-2 text-xs">
                  REPORTED PROFILE USERNAME
                </th>
                <th className="py-2 px-10 border-r-2 text-xs">REPORTED DATE</th>
                <th className="py-2 px-10 border-r-2 text-xs">CONTENT</th>
                <th className="py-2 px-10 border-r-2 text-xs">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-black border-b-2">
                <td className="py-2 text-center">@shubahnshubb</td>
                <td className="py-2 text-center">389928320320</td>
                <td className="py-2 text-center">@saitile</td>
                <td className="py-2 text-center">12 JUL 98</td>
                <td className="py-2 text-center">
                  <button
                    className="border-2 rounded-xl p-1"
                    onClick={() => setShowModal(true)}
                  >
                    VIEW
                  </button>
                  {/* Modal */}
                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="bg-white p-4 rounded shadow-lg">
                        <Profile onCancel={closeModal} />
                      </div>
                    </div>
                  )}
                </td>
                <td className="py-2 text-center flex flex-row">
                  <button
                    onClick={() => handleIgnore()}
                    className="bg-green-800 text-white px-2 py-1 text-xs font-normal rounded m-2"
                  >
                    Ignore
                  </button>
                  <button
                    onClick={() => handleWarning()}
                    className="bg-yellow-600 text-white px-2 py-1 text-xs font-normal rounded m-2"
                  >
                    Warning
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="bg-red-600 text-white px-2 py-1 text-xs font-normal rounded m-2"
                  >
                    Delete
                  </button>
                  {showDeleteModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="bg-white p-4 rounded shadow-lg">
                        <ProfileDelete onCancel={closeModal} />
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "Posts":
        return (
          <table className="w-auto h-auto">
            <thead className="">
              <tr className="bg-blue-200 text-black">
                <th className="py-2 px-10 border-r-2 text-xs">REPORTED BY</th>
                <th className="py-2 px-10 border-r-2 text-xs">POST ID</th>
                <th className="py-2 px-10 border-r-2 text-xs">POST USERNAME</th>
                <th className="py-2 px-10 border-r-2 text-xs">REPORTED DATE</th>
                <th className="py-2 px-10 border-r-2 text-xs">CONTENT</th>
                <th className="py-2 px-10 border-r-2 text-xs">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-black border-b-2">
                <td className="py-2 text-center">@shubahnshubb</td>
                <td className="py-2 text-center">389928320320</td>
                <td className="py-2 text-center">@saitile</td>
                <td className="py-2 text-center">12 JUL 98</td>
                <td className="py-2 text-center">
                  <button
                    className="border-2 rounded-xl p-1"
                    onClick={() => setShowModal(true)}
                  >
                    VIEW
                  </button>
                  {/* Modal */}
                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="bg-white p-4 rounded shadow-lg">
                        <Profile onCancel={closeModal} />
                      </div>
                    </div>
                  )}
                </td>
                <td className="py-2 text-center flex flex-row">
                  <button
                    onClick={() => handleIgnore()}
                    className="bg-green-800 text-white px-2 py-1 text-xs font-normal rounded m-2"
                  >
                    Ignore
                  </button>
                  <button
                    onClick={() => handleWarning()}
                    className="bg-yellow-600 text-white px-2 py-1 text-xs font-normal rounded m-2"
                  >
                    Warning
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="bg-red-600 text-white px-2 py-1 text-xs font-normal rounded m-2"
                  >
                    Delete
                  </button>
                  {showDeleteModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="bg-white p-4 rounded shadow-lg">
                        <ProfileDelete onCancel={closeModal} />
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "Orbits":
        return (
          <table className="w-auto h-auto">
            <thead className="">
              <tr className="bg-blue-200 text-black">
                <th className="py-2 px-10 border-r-2 text-xs">REPORTED BY</th>
                <th className="py-2 px-10 border-r-2 text-xs">
                  ORBIT ID
                </th>
                <th className="py-2 px-10 border-r-2 text-xs">
                  ORBIT USERNAME
                </th>
                <th className="py-2 px-10 border-r-2 text-xs">REPORTED DATE</th>
                <th className="py-2 px-10 border-r-2 text-xs">CONTENT</th>
                <th className="py-2 px-10 border-r-2 text-xs">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-black border-b-2">
                <td className="py-2 text-center">@shubahnshubb</td>
                <td className="py-2 text-center">389928320320</td>
                <td className="py-2 text-center">@saitile</td>
                <td className="py-2 text-center">12 JUL 98</td>
                <td className="py-2 text-center">
                  <button
                    className="border-2 rounded-xl p-1"
                    onClick={() => setShowModal(true)}
                  >
                    VIEW
                  </button>
                  {/* Modal */}
                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="bg-white p-4 rounded shadow-lg">
                        <Profile onCancel={closeModal} />
                      </div>
                    </div>
                  )}
                </td>
                <td className="py-2 text-center flex flex-row">
                  <button
                    onClick={() => handleIgnore()}
                    className="bg-green-800 text-white px-2 py-1 text-xs font-normal rounded m-2"
                  >
                    Ignore
                  </button>
                  <button
                    onClick={() => handleWarning()}
                    className="bg-yellow-600 text-white px-2 py-1 text-xs font-normal rounded m-2"
                  >
                    Warning
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="bg-red-600 text-white px-2 py-1 text-xs font-normal rounded m-2"
                  >
                    Delete
                  </button>
                  {showDeleteModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="bg-white p-4 rounded shadow-lg">
                        <ProfileDelete onCancel={closeModal} />
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "Comments":
        return (
          <table className="w-auto h-auto">
            <thead className="">
              <tr className="bg-blue-200 text-black">
                <th className="py-2 px-10 border-r-2 text-xs">REPORTED BY</th>
                <th className="py-2 px-10 border-r-2 text-xs">
                  COMMENT ID
                </th>
                <th className="py-2 px-10 border-r-2 text-xs">
                  COMMENT USERNAME
                </th>
                <th className="py-2 px-10 border-r-2 text-xs">REPORTED DATE</th>
                <th className="py-2 px-10 border-r-2 text-xs">CONTENT</th>
                <th className="py-2 px-10 border-r-2 text-xs">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-black border-b-2">
                <td className="py-2 text-center">@shubahnshubb</td>
                <td className="py-2 text-center">389928320320</td>
                <td className="py-2 text-center">@saitile</td>
                <td className="py-2 text-center">12 JUL 98</td>
                <td className="py-2 text-center">
                  <button
                    className="border-2 rounded-xl p-1"
                    onClick={() => setShowModal(true)}
                  >
                    VIEW
                  </button>
                  {/* Modal */}
                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="bg-white p-4 rounded shadow-lg">
                        <Profile onCancel={closeModal} />
                      </div>
                    </div>
                  )}
                </td>
                <td className="py-2 text-center flex flex-row">
                  <button
                    onClick={() => handleIgnore()}
                    className="bg-green-800 text-white px-2 py-1 text-xs font-normal rounded m-2"
                  >
                    Ignore
                  </button>
                  <button
                    onClick={() => handleWarning()}
                    className="bg-yellow-600 text-white px-2 py-1 text-xs font-normal rounded m-2"
                  >
                    Warning
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="bg-red-600 text-white px-2 py-1 text-xs font-normal rounded m-2"
                  >
                    Delete
                  </button>
                  {showDeleteModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="bg-white p-4 rounded shadow-lg">
                        <ProfileDelete onCancel={closeModal} />
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" bg-slate-50 h-screen">
      <h1 className="px-8 py-8 text-black text-2xl font-semibold">Report</h1>
      <div className="flex-row flex ">
        <div className=" flex-col flex w-44 ml-10">
          <button
            className={`text-left text-black text-base font-normal hover:text-blue-900 hover:bg-white active:bg-white px-3 py-3 rounded-md flex flex-row ${
              activeTab === "Profile" ? "bg-slate-200" : ""
            }`}
            onClick={() => handleTabChange("Profile")}
          >
            <h1 className="text-black mr-2 text-2xl">
              <FaUserTie />
            </h1>
            Profile
          </button>
          <button
            className={`text-left text-black text-base font-normal hover:text-blue-900 hover:bg-white active:bg-white px-3 py-3 rounded-md flex flex-row ${
              activeTab === "Posts" ? "bg-slate-200" : ""
            }`}
            onClick={() => handleTabChange("Posts")}
          >
            <h1 className="text-black mr-2 text-2xl">
              <FaImage />
            </h1>
            Posts
          </button>
          <button
            className={`text-left text-black text-base font-normal hover:text-blue-900 hover:bg-white active:bg-white px-3 py-3 rounded-md flex flex-row ${
              activeTab === "Orbits" ? "bg-slate-200" : ""
            }`}
            onClick={() => handleTabChange("Orbits")}
          >
            <h1 className="text-black mr-2 text-2xl">
              <FaVideoSlash />
            </h1>
            Orbits
          </button>
          <button
            className={`text-left text-black text-base font-normal hover:text-blue-900 hover:bg-white active:bg-white px-3 py-3 rounded-md flex flex-row ${
              activeTab === "Comments" ? "bg-slate-200" : ""
            }`}
            onClick={() => handleTabChange("Comments")}
          >
            <h1 className="text-black mr-2 text-2xl">
              <FaComment />
            </h1>
            Comments
          </button>
        </div>

        <div className="mt-2 px-12">{renderTable()}</div>
      </div>
    </div>
  );
};

export default Page;
