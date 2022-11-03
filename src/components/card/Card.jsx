import React, { useState } from "react";
import "./Card.css";
import { EditIcon } from "../../assets/Icons/icons_index";
import EditForm from "../form/EditForm";

export default function Card({
  item,
  allProjects,
  setAllProjects,
  id,
  completeEffect,
  addEffect,
  sound,
}) {
  // States
  const [animate, setAnimate] = useState(false);
  const [compAnimate, setCompAnimate] = useState(false);
  const [editForm, setEditForm] = useState(false);

  // Functions

  // Add Progress Function
  const addProgress = (projectId) => {
    setAnimate(true);
    if (sound) {
      addEffect.play();
    }
    setAllProjects(
      allProjects.map((project, id) => {
        if (projectId === id) {
          if (project.progress < 90) {
            return { ...project, progress: project.progress + 10 };
          } else {
            return { ...project, progress: 100, status: "Completed" };
          }
        } else {
          return project;
        }
      })
    );
    setTimeout(() => {
      setAnimate(false);
    }, 1500);
  };

  // Complete Project Function
  const complete = (projectId) => {
    setCompAnimate(true);
    if (sound) {
      completeEffect.play();
    }
    setAllProjects(
      allProjects.map((project, id) => {
        if (projectId === id) {
          return { ...project, progress: 100, status: "Completed" };
        } else {
          return project;
        }
      })
    );
    setTimeout(() => {
      setCompAnimate(false);
    }, 1500);
  };

  // Dispose Project Function
  const dispose = (projectId) => {
    setCompAnimate(true);
    if (sound) {
      completeEffect.play();
    }
    const newProjectList = allProjects.filter((project, id) => {
      return id !== projectId;
    });
    setTimeout(() => {
      setAllProjects(newProjectList);
      setCompAnimate(false);
    }, 1500);
  };

  // Edit Project Funtion
  const editProject = () => {
    setTimeout(() => {
      setEditForm(true);
    }, 400);
  };

  return (
    <>
      <div className="max-w-md m-auto my-8">
        {editForm ? (
          <>
            <EditForm
              item={item}
              projectId={id}
              allProjects={allProjects}
              setEditForm={setEditForm}
              setAllProjects={setAllProjects}
              sound={sound}
              addEffect={addEffect}
              completeEffect={completeEffect}
            />
          </>
        ) : (
          <></>
        )}
        <div className="rounded-2xl pending-card box">
          <button
            onClick={() => editProject(id)}
            className="prog_btn absolute right-0 top-3 rounded-full px-[10px] z-[999] editBtn"
          >
            <EditIcon />
          </button>
          <div className="circle"></div>

          <div className="text-center p-3 sm:pr-8 ">
            <h3 className="text-xl font-bold title pb-4">{item.title}</h3>

            {item.desc.length > 0 ? (
              <>
                {item.desc.length > 75 ? (
                  <>
                    <p className="min-h-[20px] paragraph">
                      {item.desc?.substring(0, 75) + " ..."}{" "}
                      <span>{item.status}</span>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="min-h-[20px] paragraph">
                      {item.desc} <br />
                      <span>{item.status}</span>
                    </p>
                  </>
                )}
              </>
            ) : (
              <>
                <p className="min-h-[20px] paragraph">
                  No Description <br />
                  <span>{item.status}</span>
                </p>
              </>
            )}
          </div>

          <p className="text-left progress_data">
            <span>Progress : </span>
            {item.progress}%
          </p>
          <div
            className="progress_bar my-2"
            style={{ width: `${item.progress}%` }}
          ></div>
          <div className="flex justify-end">
            <span className="progress_data">
              <span>Deadline : </span>
              {item.deadline}
            </span>
          </div>

          {item.status === "Active" ? (
            <>
              <div>
                <div className="btn_container text-center mr-1 w-[48%]">
                  <div
                    className="prog_btn whitespace-nowrap"
                    onClick={() => addProgress(id)}
                  >
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
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    Add 10%
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
                        animate
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
                <div className="btn_container text-center my-5 w-[50%]">
                  <div
                    className="prog_btn whitespace-nowrap"
                    onClick={() => complete(id)}
                  >
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Complete
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
                        compAnimate
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
              </div>
            </>
          ) : (
            <>
              <div className="btn_container text-center my-5 w-[50%]">
                <div
                  className="prog_btn whitespace-nowrap"
                  onClick={() => dispose(id)}
                >
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
                      compAnimate
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
            </>
          )}
        </div>
      </div>
    </>
  );
}
