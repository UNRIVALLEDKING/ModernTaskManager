import React, { useState } from "react";

export default function EditForm({
  item,
  projectId,
  allProjects,
  setEditForm,
  setAllProjects,
}) {
  const [title, setTitle] = useState(item.title);
  const [desc, setDesc] = useState(item.desc);
  const [date, setDate] = useState(item.deadline);

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
  };
  const editProject = (e) => {
    e.preventDefault();
    const newData = allProjects.map((project, id) => {
      if (id === projectId) {
        console.log("id", id, "project", project);
        return { ...project, title: title, deadline: date, desc: desc };
      } else {
        return project;
      }
    });
    setAllProjects(newData);
    setEditForm(false);
  };
  const closeModal = () => {
    setEditForm(false);
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
