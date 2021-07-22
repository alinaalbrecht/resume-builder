import "./App.scss";
import { Experience } from "./Components/Experience";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import React, { useState } from "react";

const App = () => {
  const [preview, setPreview] = useState(false);

  const toggleMode = () => {
    setPreview(!preview);
  };

  return (
    <div className={`App ${preview ? "resume--preview" : "resume--edit"}`}>
      <div className="App__title">Resume Builder</div>
      <Header />
      <Sidebar />
      <Experience />
      <button className="button--mode" onClick={toggleMode}>
        {preview ? "Edit Mode" : "Preview Mode"}
      </button>
    </div>
  );
};

export default App;
