import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <div className="line"></div>
      <div className="base -mx-5 md:m-auto">
        <h1 className="header under">ToDoMatic</h1>
        <div className="flex justify-around my-3">
          <h1 className="header">Projects</h1>
          <button className="bg-transparent add-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        <div className="card-container">
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
