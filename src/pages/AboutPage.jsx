import React from "react";
import ImageSection from "../components/ImageSection";
import ServicesSection from "../components/ServicesSection";
import Title from "../components/Title";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="aboutPage">
      <Title title="About Me" span="About Me" />
      <ImageSection />

      <ServicesSection />
    </div>
  );
}

export default AboutPage;
