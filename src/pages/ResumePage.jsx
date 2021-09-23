import { BusinessCenter, School } from "@material-ui/icons";
import React from "react";
import ResumeItem from "../components/ResumeItem";
import Skills from "../components/Skills";
import Title from "../components/Title";
import "./ResumePage.css";

function ResumePage() {
  return (
    <div className="resumePage">
      <div className="resumePage__skills">
        <Skills />
      </div>
      <Title title="Resume" span="Resume" />
      <div className="resume__details">
        <div className="resume__detailsIcon">
          <BusinessCenter />
          <h1>MERN STACK</h1>
        </div>
        <ResumeItem
          date={"2019 - Present"}
          title={"Front-End "}
          subTitle={"React JS, Material UI, Bootstrap, Flex Box, etc..."}
          details={
            "I have Learned Web and Mobile hybrid applicaiton development course from Saylani Mass Training Program."
          }
        />
        <ResumeItem
          date={"2019 - Present"}
          title={"Hybrid App Development"}
          subTitle={"React Native & Expo Cli, etc..."}
          details={
            "I've Learned Web and Mobile hybrid applicaiton development course from Saylani Mass Training Program."
          }
        />
        <ResumeItem
          date={"2019 - Present"}
          title={"Databases "}
          subTitle={"Firebase & Mongo DB"}
          details={
            "I have Databases development and Managemnet from Saylani Mass Training Program."
          }
        />
        <ResumeItem
          date={"2020 - Present"}
          title={"Back-End "}
          subTitle={"Node JS, Express JS, Axios, Postman, Git"}
          details={
            "I have Learned Back End development from Online Platforms and Misc Channels."
          }
        />

        <div className="resume__detailsIcon">
          <School />
          <h1>STUDIES</h1>
        </div>

        <ResumeItem
          date={"2017 - 2020"}
          title={"Master Of Commerce "}
          subTitle={"University Of Karachi"}
          details={
            "I've done M.Com From Karachi Univeristy, Specialization in Finance and Accounting."
          }
        />

        <ResumeItem
          date={"2014 - 2016"}
          title={"Bachelor Of Commerce "}
          subTitle={"University Of Karachi"}
          details={
            "I've done B.Com From Karachi Univeristy ,Completed Banking, Statistics and Accounting as major subjects."
          } 
        />

        
      </div>
    </div>
  );
}

export default ResumePage;
