import React from "react";
import "./App.css";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import SkillContainer from "./components/SkillContainer/SkillContainer";
import TopContainer from "./components/TopContainer/TopContainer";
import Header from "./components/Header/Header";
import ExperienceContainer from "./components/ExperienceContainer/ExperienceContainer";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="app">
      <Header/>
      <TopContainer/>
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </div>
    
  );
}

export default App;