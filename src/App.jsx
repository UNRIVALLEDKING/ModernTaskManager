import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Form from "./components/form/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoDataCard from "./components/noDataCard/NoDataCard";
import CompEffect from "./assets/SoundEffects/Complete_sound_effect.wav";

function App() {
  const [form, setForm] = useState(false);
  const [allProjects, setAllProjects] = useState(() => {
    const savedData = localStorage.getItem("projects");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });

  const compAudio = new Audio(CompEffect);
  const openModal = () => {
    compAudio.play();
    setForm(true);
  };

  const closeModal = () => {
    compAudio.play();
    setForm(false);
  };
  const disposeAll = () => {
    localStorage.clear();
    setTimeout(() => {
      setAllProjects([]);
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
        <span className="bord"></span>
        <span className="bord"></span>
        <span className="bord"></span>
        <span className="bord"></span>
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
        <div className=" flex my-3">
          <h1 className="header w-1/2">Projects</h1>
          <div className="flex w-1/2 justify-around">
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
            <button onClick={disposeAll} className="bg-transparent add-btn">
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
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </button>
          </div>
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
            <>
              <NoDataCard openModal={openModal} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
