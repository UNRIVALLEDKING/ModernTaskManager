import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function Welcome({
  allProjects,
  setDashboard,
  setUser,
  user,
  setGreeting,
  greeting,
}) {
  const userRef = useRef();

  const addUser = (event) => {
    if (userRef.current.value.length <= 15) {
      event.preventDefault();
      localStorage.setItem("user", JSON.stringify(userRef.current.value));
      setUser(userRef.current.value);
      setGreeting(true);
    } else {
      event.preventDefault();
      toast("Username can't be more than 15 letters");
    }
  };
  const close = () => {
    setDashboard(false);
  };

  return (
    <>
      <div id="myModal" className="modal" style={{ display: "block" }}>
        <div className="modal-content w-[80%] sm:w-[50%]">
          {greeting ? (
            <>
              <div className="max-w-md m-auto my-8">
                <div className="rounded-2xl pending-card box">
                  <div className="circle"></div>

                  <div className="text-center p-3 sm:pr-8 ">
                    <h3 className="text-xl font-bold title pb-4">
                      Welcome {user}
                    </h3>
                  </div>

                  <p className="paragraph min-h-[20px]">
                    Task Manager, A simple WebApp that tets you list down all
                    your task and mark the completed task. Simple and Awesome UI
                    Task Manager.
                  </p>
                  <br />
                  <div className="flex justify-between">
                    <p className="paragraph">
                      Total Projects :- {allProjects.length}
                    </p>
                    <p className="paragraph">
                      Total Projects :- {allProjects.length}
                    </p>
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
                  placeholder="Enter Your Name"
                  className="input-field my-2"
                  ref={userRef}
                />
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
