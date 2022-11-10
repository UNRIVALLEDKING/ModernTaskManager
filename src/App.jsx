import React, { useEffect, useState } from "react";
import { AddIcon, EditIcon, DeleteIcon } from "./assets/Icons/icons_index";
import "./App.css";
import Card from "./components/card/Card";
import Form from "./components/form/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoDataCard from "./components/noDataCard/NoDataCard";
import AddEffect from "./assets/Audio/Add_sound_effect.wav";
import CompEffect from "./assets/Audio/Complete_sound_effect.wav";
import Welcome from "./components/welcomeMessage/Welcome";

function App() {
  // States
  const [editingName, setEditingName] = useState(false);
  const [sound, setSound] = useState(() => {
    const effect = localStorage.getItem("sound");
    if (effect) {
      return JSON.parse(effect);
    } else {
      return true;
    }
  });
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
    if (sound) {
      compAudio.play();
    }
    setForm(true);
  };

  const closeModal = () => {
    if (sound) {
      compAudio.play();
    }
    setForm(false);
  };
  const disposeAll = () => {
    if (sound) {
      AddAudio.play();
    }
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
      if (sound) {
        AddAudio.play();
      }
      localStorage.setItem("user", JSON.stringify(user));
      setEditingName(false);
    } else {
      event.preventDefault();
      toast("Username can't be more than 15 letters");
    }
  };

  const SoundEffect = () => {
    setSound(!sound);
    localStorage.setItem("sound", JSON.stringify(!sound));
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
            AddAudio={AddAudio}
            compAudio={compAudio}
            SoundEffect={SoundEffect}
            sound={sound}
            setSound={setSound}
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
                    placeholder="Username"
                    className="input-field my-2"
                    value={user}
                    onChange={handleNewUser}
                  />
                  <div className="flex justify-between my-8">
                    <p className="paragraph text-2xl">Sound Effect</p>
                    <div className="circle3">
                      <button
                        type="button"
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
              sound={sound}
            />
          </>
        ) : (
          <></>
        )}
        <h1 className="header under">ToDoMatic</h1>
        <div className=" flex items-center my-3">
          <h2 className="header text-[1.2rem] xxs:text-[1.8rem] mr-1">
            {user}
          </h2>
          <div className="flex w-full justify-around">
            <button
              onClick={openModal}
              className="bg-transparent add-btn"
              aria-label="Add Projects"
            >
              <AddIcon />
            </button>
            <button
              onClick={editName}
              className="bg-transparent add-btn"
              aria-label="Edit Username"
            >
              <EditIcon />
            </button>
            <button
              onClick={disposeAll}
              className="bg-transparent add-btn"
              aria-label="Delete All Projects"
            >
              <DeleteIcon />
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
                  sound={sound}
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
      <div className="mt-4 text-[22px]">
        <p>
          source code available on{" "}
          <a
            className="border border-current rounded px-4 py-2 hover:text-[#35f8ff]"
            href="https://github.com/UNRIVALLEDKING/ModernTaskManager"
          >
            github
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
