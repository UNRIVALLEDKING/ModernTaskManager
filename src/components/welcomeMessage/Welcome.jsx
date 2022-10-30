import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import "./welcome.css";

export default function Welcome({
  allProjects,
  setDashboard,
  setUser,
  user,
  setGreeting,
  greeting,
  AddAudio,
  compAudio,
  SoundEffect,
  sound,
  setSound,
}) {
  const userRef = useRef();

  const addUser = (event) => {
    if (userRef.current.value.length <= 15) {
      event.preventDefault();
      if (sound) {
        AddAudio.play();
      }
      localStorage.setItem("user", JSON.stringify(userRef.current.value));
      localStorage.setItem("sound", JSON.stringify(sound));
      setUser(userRef.current.value);
      setGreeting(true);
    } else {
      event.preventDefault();
      toast("Username can't be more than 15 letters");
    }
  };
  const close = () => {
    if (sound) {
      compAudio.play();
    }
    setDashboard(false);
  };
  const completedProjects = allProjects.filter((item) => {
    return item.status === "Completed";
  });

  return (
    <>
      <div id="myModal" className="modal" style={{ display: "block" }}>
        <div className="modal-content w-[80%] sm:w-[50%]">
          {greeting ? (
            <>
              <div className="max-w-md m-auto">
                <div className="rounded-2xl pending-card box">
                  <div className="circle"></div>

                  <div className="text-center p-3 sm:pr-8 ">
                    <h3 className="text-xl font-bold title pb-4">
                      Hello, {user}
                    </h3>
                  </div>

                  <p className="paragraph min-h-[20px]">
                    This is ToDoMatic, Your project or task manager. This will
                    help you maintain your day-to-day tasks or projects
                    everything that you have to do.
                  </p>
                  <br />
                  <div className="flex justify-between">
                    <p className="paragraph">
                      Total Projects :- {allProjects.length}
                    </p>
                    <p className="paragraph">
                      Completed Projects :- {completedProjects.length}
                    </p>
                  </div>
                  <div className="flex justify-between items-center my-8">
                    <p className="paragraph text-2xl">Sound Effect</p>
                    <div className="circle3">
                      <button
                        onClick={SoundEffect}
                        className="form_btn text-center p-0 h-16 w-16"
                      >
                        {sound ? "On" : "Off"}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-around">
                    <div className="circle2">
                      <button
                        onClick={close}
                        className="form_btn text-center p-0"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <form onSubmit={addUser}>
                <input
                  type="text"
                  placeholder="Username"
                  className="input-field my-2"
                  ref={userRef}
                />
                <div className="flex justify-between my-8">
                  <p className="paragraph text-2xl">Sound Effect</p>
                  <div className="circle3">
                    <button
                      type="button"
                      onClick={() => setSound(!sound)}
                      className="form_btn text-center p-0 h-16 w-16"
                    >
                      {sound ? "On" : "Off"}
                    </button>
                  </div>
                </div>
                <div className="flex justify-around">
                  <div className="circle2">
                    <button type="submit" className="form_btn text-center p-0">
                      Continue
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
