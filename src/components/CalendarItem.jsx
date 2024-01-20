import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { useNavigate } from "react-router";

const CalendarItem = () => {
  const navigate = useNavigate();
  const handleDateClick = (arg) => {
    // bind with an arrow function
    navigate(`/create/${arg.dateStr}`);
  };

  const handleEventClick = (arg) => {
    console.log(arg.event.extendedProps.message);
    arg.el.style.borderColor = "red";
  };

  return (
    <div className="w-4/5 ">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[
          {
            title: "Laundry Day",
            date: "2024-01-23T10:30:00",
            extendedProps: { message: "Time for Laundry!" },
          },
          {
            title: "Cleaning Day",
            date: "2024-01-22T10:30:00",
            extendedProps: { message: "Time to clean!" },
          },
        ]}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
    </div>
  );
};

export default CalendarItem;
