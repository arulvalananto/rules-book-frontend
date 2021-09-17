import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddRule = () => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col w-9/12 m-auto items-center justify-center h-full my-5">
      <h3 className="font-rule text-3xl my-3">Add New Rule Here</h3>
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <textarea
          className="p-2 border"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Type Here"
        ></textarea>
        <div className="flex flex-row items-center w-full">
          <Link
            to="/"
            className="p-1 border-black border-2 mt-4 bg-primary shadow-md flex-1 mr-3 flex items-center justify-center"
          >
            <button type="button">Back</button>
          </Link>
          <button
            type="submit"
            className="p-1 border-black border-2 mt-4 bg-tertiary shadow-md flex-1"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRule;
