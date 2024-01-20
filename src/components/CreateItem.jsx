import React from "react";

const CreateItem = () => {
  return (
    <div className="flex flex-col justify-between p-4 leading-normal border rounded-lg border-gray-200 hover:bg-gray-100 w-4/5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        New Sheduler
      </h5>

      {/* Title */}
      <label for="title" className="block mt-2 text-sm font-medium ">
        Title
      </label>
      <input
        type="text"
        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:bg-white"
        placeholder="Title"
        aria-label="Title"
        name="Title"
      />

      {/* Time */}
      <label for="countries" className="block mt-2 text-sm font-medium">
        Time
      </label>

      {/* Date */}
      <input
        type="date"
        id="birthday"
        name="birthday"
        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 focus:bg-white"
      ></input>

      {/* Time */}
      <input
        type="time"
        id="appt"
        name="appt"
        min="09:00"
        max="18:00"
        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 focus:bg-white"
        required
      />

      {/* Frequency */}
      <select
        id="frequency"
        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:bg-white"
      >
        <option selected value="1">
          Doesn't Repeat
        </option>
        <option value="2">Daily</option>
        <option value="3">Weekly</option>
        <option value="4">Monthly</option>
        <option value="5">Annually</option>
      </select>

      {/* Message */}
      <label for="message" className="block mt-2 text-sm font-medium">
        Message
      </label>
      <textarea
        id="message"
        rows="4"
        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:bg-white"
        placeholder="Write your thoughts here..."
      ></textarea>

      <button
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-4"
      >
        submit
      </button>
    </div>
  );
};

export default CreateItem;
