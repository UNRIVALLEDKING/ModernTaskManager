import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Form from "./components/form/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoDataCard from "./components/noDataCard/NoDataCard";
import AddEffect from "./assets/SoundEffects/Add_sound_effect.wav";
import CompEffect from "./assets/SoundEffects/Complete_sound_effect.wav";
import Welcome from "./components/welcomeMessage/Welcome";

function App() {
  // States
  const [editingName, setEditingName] = useState(false);
  const [greeting, setGreeting] = useState(false);
  const [user, setUser] = useState(() => {
    const userName = localStorage.getItem("user");
    if (userName) {
      setGreeting(true);
      return JSON.parse(userName);
    } else {
      return "Not Set";
    }
  });
  const [form, setForm] = useState(false);
  const [dashboard, setDashboard] = useState(true);
  const [allProjects, setAllProjects] = useState(() => {
    const savedData = localStorage.getItem("projects");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });

  // Sound Effects
  const AddAudio = new Audio(AddEffect);
  const compAudio = new Audio(CompEffect);

  // Functions

  const openModal = () => {
    compAudio.play();
    setForm(true);
  };

  const closeModal = () => {
    compAudio.play();
    setForm(false);
  };
  const disposeAll = () => {
    AddAudio.play();
    localStorage.removeItem("projects");
    setTimeout(() => {
      setAllProjects([]);
    }, 800);
  };

  const editName = () => {
    setEditingName(true);
  };

  const handleNewUser = (e) => {
    setUser(e.target.value);
  };

  const upDateUser = (event) => {
    if (user.length <= 15) {
      AddAudio.play();
      localStorage.setItem("user", JSON.stringify(user));
      setEditingName(false);
    } else {
      event.preventDefault();
      toast("Username can't be more than 15 letters");
    }
  };

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(allProjects));
  }, [allProjects]);
  return (
    <>
      <ToastContainer />
      {dashboard ? (
        <>
          <Welcome
            allProjects={allProjects}
            setDashboard={setDashboard}
            setUser={setUser}
            user={user}
            greeting={greeting}
            setGreeting={setGreeting}
          />
        </>
      ) : (
        <></>
      )}

      {editingName ? (
        <>
          <div id="myModal" className="modal" style={{ display: "block" }}>
            <div className="modal-content w-[80%] sm:w-[50%]">
              <>
                <form onSubmit={upDateUser}>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="input-field my-2"
                    value={user}
                    onChange={handleNewUser}
                  />
                  <div className="flex justify-around">
                    <div className="circle2">
                      <button
                        type="submit"
                        className="form_btn text-center p-0"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </form>
              </>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

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
              addEffect={AddAudio}
            />
          </>
        ) : (
          <></>
        )}
        <h1 className="header under">{user}</h1>{" "}
        <div className=" flex my-3">
          <h1 className="header text-[2.5rem] mr-1">Projects</h1>
          <div className="flex w-full justify-around">
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
            <button onClick={editName} className="bg-transparent add-btn">
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
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
                  addEffect={AddAudio}
                  completeEffect={compAudio}
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
