import Home from "./pages/Home";
import Calendar from "./pages/Calendar";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/create/:date"
            element={
              <>
                <Calendar />
              </>
            }
          />
          <Route
            path="/calendar"
            element={
              <>
                <Calendar />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
