import React, { useRef, useState } from "react";
import "./form.css";
import AddSound from "../../assets/SoundEffects/Add_sound_effect.wav";
import { toast } from "react-toastify";

export default function Form({ closeModal, allProjects, setAllProjects }) {
  const projectRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  let addEffect = new Audio(AddSound);

  const addProject = (e) => {
    e.preventDefault();

    if (projectRef.current.value.trim > 0) {
      addEffect.play();
      const project = {
        title: projectRef.current.value,
        desc: descRef.current.value,
        deadline: dateRef.current.value,
        start: new Date().toDateString(),
        progress: 40,
        status: "ongoing",
      };
      const updatedProjects = [...allProjects, project];
      setAllProjects(updatedProjects);
      localStorage.setItem("projects", JSON.stringify(updatedProjects));
      closeModal();
    } else {
      toast("Fill Project Details to Continue");
    }
  };

  return (
    <>
      <div id="myModal" className="modal" style={{ display: "block" }}>
        <div className="modal-content w-[80%] sm:w-[50%]">
          <form onSubmit={addProject}>
            <input
              type="text"
              placeholder="Project Name"
              className="input-field my-2"
              ref={projectRef}
            />
            <input
              type="text"
              placeholder="Description"
              className="input-field my-2"
              ref={descRef}
            />
            <input
              type="date"
              placeholder="deadline"
              className="input-field my-2"
              ref={dateRef}
            />
            <div className="flex justify-around">
              <div className="circle2">
                <button type="submit" className="form_btn">
                  ADD
                </button>
              </div>
              <div className="circle2">
                <button type="button" onClick={closeModal} className="form_btn">
                  ABORT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
