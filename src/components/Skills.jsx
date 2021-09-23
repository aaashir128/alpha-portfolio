import React from "react";
import ProgressBar from "./ProgressBar";
import "./Skills.css";
import Title from "../components/Title";


function Skills() {
  return (
    <div className="skills">
     <Title title="Skills" span="Skills" />
      <ProgressBar title="React Js" progress={80} figure={80} />
      <ProgressBar title="Firebase" progress={70} figure={70} />
      <ProgressBar title="Redux / Context API" progress={50} figure={50} />
      <ProgressBar title="Express Js / Node Js" progress={40} figure={40} />
      <ProgressBar title="Mongo Db" progress={40} figure={40} />
      <ProgressBar title="Bootstrap" progress={60} figure={60} />
      <ProgressBar title="Material Ui" progress={80} figure={80} />
      <ProgressBar title="Github" progress={60} figure={60} /> 
    </div>
  );
}

export default Skills;
