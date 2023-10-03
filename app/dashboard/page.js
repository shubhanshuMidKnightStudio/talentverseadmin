import React from "react";

const page = () => {
  return (
    <div className=" bg-slate-50">
      <div className="flex px-8 py-8">
        <h1 className="text-black ml-7 max-h-5 text-2xl font-semibold">
          Talentverse
        </h1>
        <h1 className="text-black ml-20 max-h-5 text-2xl font-semibold">
          Good Morning, Naveen !
        </h1>
      </div>
      // Sidebar
      <div className="px-10 py-5 ml-5 flex-col flex w-60 ">
        <button className="bg-violet-500 text-black text-left hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mb-5 px-3 py-3 rounded">
          Dashboard
        </button>
        <button className="text-left text-black hover:bg-violet-600 active:bg-violet-700 mb-5 px-3 py-3 rounded">
          User Analytics
        </button>
        <button className="text-left text-black hover:bg-violet-600 active:bg-violet-700 mb-5 px-3 py-3 rounded">
          User Engagement
        </button>
        <button className="text-left text-black hover:bg-violet-600 active:bg-violet-700 mb-5 px-3 py-3 rounded">
          Performance
        </button>
        <button className="text-left text-black hover:bg-violet-600 active:bg-violet-700 mb-5 px-3 py-3 rounded">
          Northstar
        </button>

        <h1 className="text-slate-500 ">---------------------</h1>

        <button className="text-left text-black hover:bg-violet-600 active:bg-violet-700 mb-5 px-3 py-3 rounded">
          Add Users
        </button>
        <button className="text-left text-black hover:bg-violet-600 active:bg-violet-700 mb-5 px-3 py-3 rounded">
          Naveen
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default page;
