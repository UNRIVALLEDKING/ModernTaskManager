import React, { useRef, useState } from "react";
import "./form.css";
import AddSound from "../../assets/SoundEffects/Add_sound_effect.wav";

export default function Form({ closeModal, allProjects }) {
  const [date, setDate] = useState("text");
  const projectRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  let addEffect = new Audio(AddSound);

  const addProject = (e) => {
    e.preventDefault();
    addEffect.play();
    const project = {
      title: projectRef.current.value,
      desc: descRef.current.value,
      deadline: dateRef.current.value,
      start: new Date().toDateString(),
    };
    console.log("all", allProjects);
    const updatedProjects = [...allProjects, project];
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    closeModal();
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
              type={date}
              onFocus={() => setDate("date")}
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
