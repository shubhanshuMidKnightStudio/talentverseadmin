"use client";
import React, { useState } from "react";
import { MdInterests } from "react-icons/md";

const page = () => {
  const [interest, setInterest] = useState("");
  const [category, setCategory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (interest.trim() !== "") {
      setCategory([...category, { interest }]);
      setInterest("");
    }
  };

  let renderTask = <h2>Nothing to Display</h2>;

  // Inside your component...
  if (category.length > 0) {
    renderTask = (
      <ul className="text-center flex flex-wrap mt-4 pl-3">
        {category.map((c, i) => (
          <li
            key={i}
            className="text-left ml-5"
            style={{ width: "23%", marginBottom: "10px" }}
          >
            <h5 className="text-sm text-orange-400 font-bold border-r border-gray-200 pr-2">
              {c.interest}
            </h5>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className=" bg-slate-50 h-screen">
      <h1 className="px-8 py-8 text-black text-2xl font-semibold">Interests</h1>
      <div className="flex flex-row">
        <div className="px-20">
          <div className="px-4 py-4 border-blue border-2 rounded-md h-auto bg-white w-96 flex flex-col">
            <h1 className="text-black font-medium m-4">Add New Category</h1>

            <form
              onSubmit={handleSubmit}
              className="justify-center flex flex-row"
            >
              <input
                type="text"
                className="text-base font-normal text-black border-black border-2 mr-5 pl-2 rounded w-36"
                placeholder="interests"
                value={interest}
                onChange={(e) => {
                  const inputText = e.target.value;
                  const regex = /^[A-Za-z\s]+$/;
              
                  if (regex.test(inputText) || inputText === "") {
                    setInterest(inputText);
                  }
                }}
              />

              <button className="bg-sky-500  text-white px-2 py-1 rounded">
                Add
              </button>
            </form>
          </div>

          <div className="px-4 py-4 border-blue border-2 rounded-md h-auto bg-white w-80 pl-5  text-black mt-6">
            <p className="text-black text-xl font-normal">Category</p>
            <ul className="text-center flex flex-row mt-4 pl-3">
              {renderTask}
            </ul>
          </div>
        </div>
        <div className="px-4 py-4 border-blue border-2 rounded-md h-auto bg-white w-1/3">
          <h1 className="text-black font-medium px-20 py-4 flex flex-row">
            <MdInterests className="text-black mt-1 mr-3" />
            Top Interest
          </h1>

          <table className="w-full">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-black text-sm font-normal">Category</th>
                <th className="text-black text-sm font-normal">Followers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 text-black text-center">Dance</td>
                <td className="py-2 text-black text-center pl-5">45,4000</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="py-2 text-black text-center">Creator</td>
                <td className="py-2 text-black text-center pl-5">45,4000</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="py-2 text-black text-center">Guitar</td>
                <td className="py-2 text-black text-center pl-5">45,4000</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="py-2 text-black text-center">Music</td>
                <td className="py-2 text-black text-center pl-5">45,4000</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="py-2 text-black text-center">Others</td>
                <td className="py-2 text-black text-center pl-5">45,4000</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="py-2 text-black text-center">Acting</td>
                <td className="py-2 text-black text-center pl-5">45,4000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
