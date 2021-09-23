import React from "react";
import ServiceCard from "./ServiceCard";
import "./ServicesSection.css";
import Title from "./Title";
import backEnd from "../Gallery/backEnd.svg";
import frontEnd from "../Gallery/frontEnd.svg";
import webDesign from "../Gallery/webDesign.svg";

function ServicesSection() {
  return (
    <div className="servicesSection">
      <Title title="Services" span="Services" />
      <div className="servicesSection__services">
        <ServiceCard
          image={frontEnd}
          title="Front End"
          details=" I am a Front-End developer with competitive skills to build a webb app and websites."
        />
        <ServiceCard
          image={backEnd}
          title="Back End"
          details=" I am a Back-End developer with competitive skills to build full backend of a webb app and websites"
        />
        <ServiceCard
          image={webDesign}
          title="UI/UX Design"
          details=" Proficient in developing good user friendly UI/UX Design system using different tools."
        />
      </div>
    </div>
  );
}

export default ServicesSection;
