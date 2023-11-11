import React from "react";
import { MdCancel } from "react-icons/md";

const ProfileView = ({ subject, message, onCancel }) => {
  return (
    <div className="flex flex-col px-5 py-2 rounded w-72">
      <div className="flex flex-row">
        <h1 className="text-black text-lg font-semibold">Report Details</h1>
        <button className="text-black ml-24 text-lg" onClick={onCancel}>
          <MdCancel />
        </button>
      </div>

      <div className="flex flex-col mt-3">
        <h2 className="text-black font-bold text-left">Subject: </h2>
        <h3 className="text-black text-justify border-2 border-blue-100 pl-2">Fake Profile</h3>
        <h2 className="text-black font-bold text-left">Message: </h2>
        <h3 className="text-black text-justify border-2 border-blue-100 p-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </h3>
      </div>
    </div>
  );
};

export default ProfileView;
