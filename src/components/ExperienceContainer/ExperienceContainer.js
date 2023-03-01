import React from "react";
import { Element } from "react-scroll";
import Experience from "../Experience/Experience";
import "./ExperienceContainer.css";

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience</h1>
      <div className="experienceContainer__info">
        <Experience number="2+" title="Certifactions" />
        <Experience
          number="5+"
          title="Projects"
          style={{ backgroundColor: "#f64c08" }}
        />
        <Experience number="2+" title="Years Training" />
        
      </div>
    </Element>
  );
};

export default ExperienceContainer;
