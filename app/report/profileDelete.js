import React from "react";

const profileDelete = ({onCancel}) => {

  const handleDelete = () => {

  }
  return (
    <div className="flex flex-col px-5 py-2 rounded w-72">
        <h1 className="text-black text-lg font-semibold">Are you Sure</h1>
        <div className="flex flex-row mt-6">

        <button className="text-white bg-black ml-5 text-lg p-2 rounded-lg" onClick={onCancel}>
          Cancel
        </button>
        <button className="text-white bg-red-700 ml-24 text-lg p-2 rounded-lg" onClick={handleDelete}>
          Delete
        </button>
      </div>
      
    </div>
  )
}

export default profileDelete
