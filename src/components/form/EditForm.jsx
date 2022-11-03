import React, { useState } from "react";

export default function EditForm({
  item,
  projectId,
  allProjects,
  setEditForm,
  setAllProjects,
  completeEffect,
  addEffect,
  sound,
}) {
  const [title, setTitle] = useState(item.title);
  const [desc, setDesc] = useState(item.desc);
  const [date, setDate] = useState(item.deadline);
  const [progress, setProgress] = useState(item.progress);

  const handleInput = (data, e) => {
    if (data === "title") {
      setTitle(e.target.value);
    }
    if (data === "date") {
      setDate(e.target.value);
    }
    if (data === "desc") {
      setDesc(e.target.value);
    }
    if (data === "progress") {
      setProgress(parseInt(e.target.value));
    }
  };
  const editProject = (e) => {
    if (sound) {
      completeEffect.play();
    }
    e.preventDefault();
    const newData = allProjects.map((project, id) => {
      if (id === projectId) {
        console.log("id", id, "project", project);
        console.log(progress);
        let progStatus = "none";
        if (progress === "100") {
          progStatus = "Completed";
        } else {
          progStatus = "Active";
        }
        console.log("progStatus", progStatus);
        return {
          ...project,
          title: title,
          deadline: date,
          desc: desc,
          status: progStatus,
          progress: progress,
        };
      } else {
        return project;
      }
    });
    setAllProjects(newData);
    setTimeout(() => {
      setEditForm(false);
    }, 400);
  };
  const closeModal = () => {
    if (sound) {
      addEffect.play();
    }
    setTimeout(() => {
      setEditForm(false);
    }, 300);
  };

  console.log("All projects", allProjects);
  return (
    <>
      <div id="myModal" className="modal" style={{ display: "block" }}>
        <div className="modal-content w-[80%] sm:w-[50%]">
          <form onSubmit={editProject}>
            <input
              type="text"
              placeholder="Project Name"
              className="input-field my-2"
              value={title}
              onChange={(e) => handleInput("title", e)}
            />
            <input
              type="text"
              placeholder="Description"
              className="input-field my-2"
              value={desc}
              onChange={(e) => handleInput("desc", e)}
            />
            <p className="paragraph text-start">Progress : {progress}%</p>
            <input
              className="progressBar"
              type="range"
              min="0"
              max="100"
              step="10"
              value={progress}
              onChange={(e) => handleInput("progress", e)}
            />
            <input
              type="date"
              placeholder="deadline"
              value={date}
              className="input-field my-2"
              onChange={(e) => handleInput("date", e)}
            />
            <div className="flex justify-around">
              <div className="circle2">
                <button type="submit" className="form_btn">
                  DONE
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
