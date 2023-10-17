import React from "react";
import {
  MdDataSaverOn,
  MdOutlinePhotoSizeSelectActual,
  MdOutlineScreenShare,
  MdOutlineSmartDisplay,
  MdPeople,
} from "react-icons/md";

const page = () => {
  return (
    <div className=" bg-slate-50 h-screen">
      <h1 className="px-8 py-8 text-black text-2xl font-semibold">
        User Details
      </h1>
      <div className="px-20">
        <h2 className="text-black text-2xl font-medium">Sai Tile</h2>
        <h2 className="text-gray-800 text-lg font-normal">sai_tile</h2>

        <div className="flex flex-row mt-5 px-16">
          <div className="flex flex-col bg-white border-2 px-12 py-5 rounded-xl">
            <MdOutlinePhotoSizeSelectActual className="text-blue-800 text-4xl" />
            <h2 className="text-black text-lg font-normal">Posts</h2>
            <h3 className="text-black text-sm font-light"> 200 photos</h3>
          </div>
          <div className="flex flex-col bg-white border-2 px-12 py-5 rounded-xl ml-10">
            <MdOutlineSmartDisplay className="text-blue-800 text-4xl" />
            <h2 className="text-black text-lg font-normal">Orbits</h2>
            <h3 className="text-black text-sm font-light"> 200 videos</h3>
          </div>
          <div className="flex flex-col bg-white border-2 px-12 py-5 rounded-xl ml-10">
            <MdPeople className="text-blue-800 text-4xl" />
            <h2 className="text-black text-lg font-normal">Followers</h2>
            <h3 className="text-black text-sm font-light text-center"> 200</h3>
          </div>
          <div className="flex flex-col bg-white border-2 px-12 py-5 rounded-xl ml-10">
            <MdOutlineScreenShare className="text-blue-800 text-4xl" />
            <h2 className="text-black text-lg font-normal">Share</h2>
            <h3 className="text-black text-sm font-light"> 200 shares</h3>
          </div>
          <div className="flex flex-col bg-white border-2 px-12 py-5 rounded-xl ml-10">
            <MdDataSaverOn className="text-blue-800 text-4xl" />
            <h2 className="text-black text-lg font-normal">Share</h2>
            <h3 className="text-black text-sm font-light"> 200 shares</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
