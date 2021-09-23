import React from "react";
import "./PortfolioItem.css";
import PortfolioWork from "./PortfolioWork";
import netflix from "../Gallery/portfolio Images/castlewoodflix (1).jpg";
import whtsp from "../Gallery/portfolio Images/whatsapp-clone.jpg";
import twet from "../Gallery/portfolio Images/twitter-clever_firebaseapp_com.jpg";
import botstrapWeb from "../Gallery/portfolio Images/simple bootstrap castlewood.jpg";
import professionalweb from "../Gallery/portfolio Images/professionals_agency_web_app.jpg";
import eCom from "../Gallery/portfolio Images/aaashir128_github_io_CastleWood.jpg";

function PortfolioItem() {
  return (
    <div className="portfolioItem">
      <PortfolioWork
        image={netflix}
        title={"castlewoodFlix"}
        details="Netflix Clone Fully resoponsive with API integration."
      />
      <PortfolioWork
        image={whtsp}
        title={"Whatspp Clone"}
        details="Whataspp UI with Chat functionality, CRUD, User Authentication and Firebase Database."
      />
      <PortfolioWork
        image={twet}
        title={"Twitter Clone "}
        details="Twitter UI with Chat functionality, Status Upload and CRUD, User Authentication and Firebase Database."
      />
      <PortfolioWork
        image={botstrapWeb}
        title={"Portfolio Website"}
        details="Portfolio website made by using HTML , CSS and bootstrap with fully responsive."
      />
      <PortfolioWork
        image={professionalweb}
        title={"Real Estate Website"}
        details="Simple Static Website made by using HTML, CSS and Bootstrap."
      />
      <PortfolioWork
        image={eCom}
        title={"E-Commerce Website"}
        details="Simple Static E-commerce Website, I've used HTML, CSS & Bootstrap"
      />
    </div>
  );
}

export default PortfolioItem;
