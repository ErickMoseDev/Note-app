import React from "react";

const Form = () => {
  return (
    <div className="bg-white flex-col shadow-md rounded-[10px] px-6 py-8 m-5">
      <h1 className="text-indigo-500 font-Barlow font-extrabold text-3xl">
        Add a New Note
      </h1>
      <p className="mt-2 font-Poppins font-light text-sm text-gray-800">
        Enter the details below
      </p>
      <input
        class="appearance-none block w-full bg-gray-100 text-gray-700 py-3 px-4 leading-tight outline-none rounded-lg font-Poppins font-light mt-4"
        id="grid-last-name"
        type="text"
        placeholder="Title"
      />
      <textarea
        name="description"
        id="descritpion"
        cols="30"
        rows="5"
        placeholder="Description"
        class="appearance-none block w-full bg-gray-100 text-gray-700 py-3 px-4 leading-tight outline-none rounded-lg mt-4 resize-none"
      ></textarea>

      <button className="bg-indigo-500 w-full my-5 p-3 rounded-md text-white font-Barlow font-medium">
        Save
      </button>
    </div>
  );
};

export default Form;
