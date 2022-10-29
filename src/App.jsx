import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Form from "./components/form/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [form, setForm] = useState(false);
  const [disAnimate, setDisAnimate] = useState(false);
  const [allProjects, setAllProjects] = useState(() => {
    const savedData = localStorage.getItem("projects");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });
  const openModal = () => {
    setForm(true);
  };

  const closeModal = () => {
    setForm(false);
  };
  const disposeAll = () => {
    setDisAnimate(true);
    localStorage.clear();
    setTimeout(() => {
      setAllProjects([]);
      setDisAnimate(false);
    }, 1500);
  };

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(allProjects));
  }, [allProjects]);
  return (
    <>
      <ToastContainer />
      <div className="line"></div>
      <div className="base -mx-5 sm:m-auto">
        {form ? (
          <>
            <Form
              form={form}
              setForm={setForm}
              closeModal={closeModal}
              allProjects={allProjects}
              setAllProjects={setAllProjects}
            />
          </>
        ) : (
          <></>
        )}
        <h1 className="header under">ToDoMatic</h1>
        <div className="flex justify-around my-3">
          <h1 className="header">Projects</h1>
          <button onClick={openModal} className="bg-transparent add-btn">
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
        <div className="btn_container text-center my-5 w-[50%]">
          <div className="prog_btn whitespace-nowrap" onClick={disposeAll}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-1 ml-0 p-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
            Dispose
          </div>
          <svg
            className="svgStroke"
            width={222}
            height={65}
            viewBox="0 0 222 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={
                disAnimate
                  ? {
                      animation:
                        "dash 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }
                  : { animation: "none" }
              }
              d="M205 84H21L1 63.4941V18.5765L21 1H205L221 18.5765V63.4941L205 84Z"
              stroke="white"
              strokeWidth={2}
            />
          </svg>
        </div>
        <div className="card-container">
          {allProjects.length > 0 ? (
            <>
              {allProjects.map((item, id) => (
                <Card
                  allProjects={allProjects}
                  setAllProjects={setAllProjects}
                  item={item}
                  key={id}
                  id={id}
                />
              ))}
            </>
          ) : (
            "no data"
          )}
        </div>
      </div>
    </>
  );
}

export default App;
