import React, { useState } from "react";
import Project from "../Project/Project";
import "./ProjectContainer.css";
import { Element } from "react-scroll";
import lottery from "../../assets/lottery.png";
import house from "../../assets/house.jpeg";
import docker from "../../assets/docker.png";
import banknote from "../../assets/banknote.jpeg";
import review from "../../assets/review.jpeg";
import todo from "../../assets/todo.png";

const ProjectContainer = () => {
  const [choosen, setChoosen] = useState(true);

  const client_projects = [
    {
      img: review,
      title: "Sentiment Analysis",
      link: "https://github.com/Mugunth007/Movie-Review-Sentiment-Analysis/",
    },
    {
      img: house,
      title: "House Price Prediction",
      link: "https://github.com/Mugunth007/Boston_House_Price_Prediction/",
    },
    {
      img: lottery,
      title: "Lottery Smart Contract",
      link: "https://github.com/Mugunth007/Lottery-Smart-Contract/",
    },
    {
      img: banknote,
      title: "Bank Note Authentication",
      link: "https://github.com/Mugunth007/Bank_Note_authentication/",
    },
    {
      img: docker,
      title: "ML app with docker",
      link: "https://github.com/Mugunth007/MLappWithDocker/",
    },
    
  ];

  const clone_works = [
    {
      img: todo,
      title: "TODO list",
      link: "https://github.com/Mugunth007/TODO-LIST-in-REACT/",
    },
    
    
  ];

  return (
    <Element className="projectContainer" id="projects">
      <h1>Projects</h1>
      <p>
        Here some of my projects that will lead you to interest in the field
      </p>
      <div className="projectContainer__title">
        <h4
          className={choosen ? "projectContainer__title--active" : undefined}
          onClick={() => setChoosen(true)}
        >
          Data Science
        </h4>
        <h4
          className={!choosen ? "projectContainer__title--active" : undefined}
          onClick={() => setChoosen(false)}
        >
          React
        </h4>
      </div>

      {choosen ? (
        <div className="projectContainer__projects">
          {client_projects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      ) : (
        <div className="projectContainer__projects">
          {clone_works.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      )}
    </Element>
  );
};

export default ProjectContainer;
