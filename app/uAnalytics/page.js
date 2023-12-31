"use client";
import React from "react";
import { DiAndroid, DiAppstore } from "react-icons/di";
import { FaMale, FaFemale, FaGenderless } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import {
  MdInterests,
  MdLink,
  MdOutlineSystemUpdateAlt,
  MdPeople,
} from "react-icons/md";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";

const page = () => {
  const OSData = [
    { name: "Android", value: 88499 },
    { name: "IOS", value: 45000 },
  ];
  const COLORS = ["#ea5a0c", "#60a5fa"];

  const GenderData = [
    { name: "Male", value: 310 },
    { name: "Female", value: 450 },
    { name: "Others", value: 220 },
  ];
  const COLOR = ["#ea5a0c", "#1e3b8a"];

  return (
    <div className=" bg-slate-50 h-auto pb-10">
      <h1 className="px-8 py-3 text-black text-2xl font-semibold">
        User Analytics
      </h1>

      <div className="px-24 py-2 flex flex-row">
        <div className="flex flex-col border-blue border-2 rounded-md bg-white pl-5 w-1/3 pr-5">
          <h1 className="text-black font-medium mt-5 px-24 py-1 flex flex-row">
            <MdOutlineSystemUpdateAlt className="text-black mt-1 mr-3" />
            Operating System
          </h1>
          <PieChart width={400} height={200}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={OSData}
              cx={200}
              cy={100}
              outerRadius={80}
              fill="#8884d8"
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                percent,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill="black"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {`${(percent * 100).toFixed(0)}%`}
                  </text>
                );
              }}
              labelLine={false}
            >
              {OSData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <table className="w-full ">
            <thead>
              <tr className="bg-slate-100">
                <th className="py-1 text-black text-sm font-normal">Type</th>
                <th className="py-1 text-black text-sm font-normal">
                  Total Users
                </th>
                <th className="py-1 text-black text-sm font-normal">
                  Bounce Rate
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="py-1">
                <td className="text-black text-left pl-5 flex flex-row">
                  <DiAndroid className="text-orange-600 mr-3 text-xl" />
                  Android
                </td>
                <td className=" text-black text-left pl-5">45,4000</td>
                <td className=" text-green-600 text-left pl-8">45 %</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="py-2">
                <td className="text-black text-left pl-5 flex flex-row">
                  <DiAppstore className="text-blue-400 mr-3 text-2xl" />
                  IOS
                </td>
                <td className="text-black text-left pl-5">45,4000</td>
                <td className="text-green-600 text-left pl-8">45 %</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col border-blue border-2 rounded-md bg-white pl-5 w-1/3 pr-5 ml-5">
          <h1 className="text-black font-medium mt-5 px-28 py-1 pt-2 flex flex-row">
            <MdPeople className="text-black mt-1 mr-3" />
            Gender
          </h1>
          <PieChart width={400} height={200}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={GenderData}
              cx={200}
              cy={100}
              outerRadius={80}
              fill="#8884d8"
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                percent,
                index,
              }) => {
                console.log("Label Data:", {
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  percent,
                  index,
                });

                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                console.log("Label Position:", { x, y });

                return (
                  <text
                    x={x}
                    y={y}
                    fill="black"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {`${(percent * 100).toFixed(0)}%`}
                  </text>
                );
              }}
              labelLine={false}
            >
              {OSData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLOR[index % COLOR.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <table className="w-full ">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-black font-normal text-sm">Type</th>
                <th className="text-black font-normal text-sm">Total Users</th>
                <th className="text-black font-normal text-sm">Bounce Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-black text-left pl-5 flex flex-row">
                  <FaMale className="text-orange-600 mt-1 mr-3" />
                  Male
                </td>
                <td className="text-black text-left pl-5">45,4000</td>
                <td className="text-green-600 text-left pl-8">45 %</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="text-black text-left pl-5 flex flex-row">
                  <FaFemale className="text-blue-900 mt-1 mr-3" />
                  Female
                </td>
                <td className="text-black text-left pl-5">45,4000</td>
                <td className="text-green-600 text-left pl-8">45 %</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="text-black text-left pl-5 flex flex-row">
                  <FaGenderless className="text-red-400 mt-1 mr-3" />
                  Other
                </td>
                <td className="text-black text-left pl-5">45,4000</td>
                <td className="text-green-600 text-left pl-8">45 %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="px-10 py-5 flex flex-row ml-16">
        <div className="flex flex-col border-blue border-2 rounded-md bg-white pl-5 w-1/3 pr-5">
          <h1 className="text-black font-medium px-20 py-4 flex flex-row">
            <MdInterests className="text-black mt-1 mr-3" />
            Interests
          </h1>
          <table className="">
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

        <div className="flex flex-col border-blue border-2 rounded-md bg-white pl-5 w-2/5 pr-5 ml-10">
          <h1 className="text-black font-medium px-20 py-4 flex flex-row">
            <MdLink className="text-black mt-1 mr-3" />
            Referrals
          </h1>
          {/* <h1 className="text-black px-28 py-4 border-b-2">Referrals</h1> */}

          <div className="px-8 py-4">
            <h3 className="text-gray-400 ">By Northstar</h3>
            <div className="flex flex-row px-4 py-2">
              <h3 className="text-gray-700 ">54%</h3>
              <BsDot className="text-yellow-950 mr-3 text-xl" />
              <h3 className="text-gray-700 ">543445 Users</h3>
            </div>
          </div>

          <div className="px-8 py-4">
            <h3 className="text-gray-400 ">By Users</h3>
            <div className="flex flex-row px-4 py-2">
              <h3 className="text-gray-700 ">59%</h3>
              <BsDot className="text-yellow-950 mr-3 text-xl" />
              <h3 className="text-gray-700 ">543445 Users</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
