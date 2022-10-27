import React, { useState } from "react";
import "./form.css";

export default function Form({ form, setForm, closeModal }) {
  const [date, setDate] = useState("text");

  const addProject = () => {
    setForm(false);
  };
  return (
    <>
      <div id="myModal" className="modal" style={{ display: "block" }}>
        <div className="modal-content w-[80%] sm:w-[50%]">
          <form>
            <input
              type="text"
              placeholder="Project Name"
              className="input-field my-2"
            />
            <input
              type="text"
              placeholder="Description"
              className="input-field my-2"
            />
            <input
              type={date}
              onFocus={() => setDate("date")}
              placeholder="deadline"
              className="input-field my-2"
            />
            <div className="flex justify-around">
              <div className="circle2">
                <button onClick={addProject} className="form_btn">
                  ADD
                </button>
              </div>
              <div className="circle2">
                <button onClick={closeModal} className="form_btn">
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
