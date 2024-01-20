import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

const CreateItem = () => {
  const { initialDate } = useParams();
  const [title, setShowTitle] = useState("Sample title");
  const [date, setDate] = useState(initialDate ? initialDate : "2024-01-01");
  const [time, setTime] = useState("00:00");
  const [frequency, setFrequency] = useState(1);
  const [message, setMessage] = useState("Hello!");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      title: title,
      date: date,
      time: time,
      frequency: frequency,
      message: message,
    });
    navigate("/calendar");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-between p-4 leading-normal border rounded-lg border-gray-200 shadow-2xl w-4/5 "
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 py-5">
        New Sheduler
      </h5>

      {/* Title */}
      <label className="block mt-2 text-sm font-medium ">Title</label>
      <input
        type="text"
        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:bg-white"
        placeholder="Title"
        aria-label="Title"
        name="Title"
        onChange={(e) => setShowTitle(e.target.value)}
        value={title}
        required
      />

      {/* Label */}
      <label className="block mt-2 text-sm font-medium  ">Time</label>

      <div className="flex flex-row">
        {/* Date */}
        <input
          type="date"
          id="birthday"
          name="birthday"
          className="flex-1 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 focus:bg-white"
          value={date}
          onChange={(x) => setDate(x.target.value)}
          required
        ></input>

        {/* Time */}
        <input
          type="time"
          id="appt"
          name="appt"
          className="flex-1 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 focus:bg-white"
          required
          onChange={(x) => setTime(x.target.value)}
          value={time}
        />

        {/* Frequency */}
        <select
          required
          id="frequency"
          className="flex-1 bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:bg-white"
          value={frequency}
          onChange={(x) => setFrequency(x.target.value)}
        >
          <option value="1">Doesn't Repeat</option>
          <option value="2">Daily</option>
          <option value="3">Weekly</option>
          <option value="4">Monthly</option>
          <option value="5">Annually</option>
        </select>
      </div>

      {/* Message */}
      <label className="block mt-2 text-sm font-medium">Message</label>
      <textarea
        id="message"
        rows="4"
        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:bg-white"
        placeholder="Write your thoughts here..."
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-4"
      >
        submit
      </button>
    </form>
  );
};

export default CreateItem;
