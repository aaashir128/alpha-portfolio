import React from "react";
import "./ImageSection.css";

function ImageSection() {
  return (
    <div className="imageSection">
      <div className="imageSection__left">
        <img
          src="https://scontent.fkhi22-1.fna.fbcdn.net/v/t31.18172-8/17854729_1498411726876075_466557641655588347_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeExIA8GhEe7a6JIXR7xpg321gnAipTKtj_WCcCKlMq2P6Xn2FK4tolbssp4q_mv-MIXNa9FAOH33o-6bUCm1Sbb&_nc_ohc=lRRQmto3--wAX-JDrm1&_nc_ht=scontent.fkhi22-1.fna&oh=623c67dfee553ec659c9dbbb3645baa4&oe=6169B452"
          alt="Muhammad Ashir Khan"
        />
      </div>
      <div className="imageSection__right">
        <div className="subTitle">
          <h4>
            I am <span className="highlight">Ashir Khan</span>
          </h4>
        </div>
        <p className="aboutDetails">
          I am Full-Stack Developer, enthusiastic and eager to explore new
          methodolgies. If you are looking for{" "}
          <span className="specialization">Web Development</span> ,
          <span className="specialization">Hybrid App development</span>,{" "}
          <span className="specialization">bug fixing</span> ,{" "}
          <span className="specialization">Database Integration</span> or{" "}
          <span className="specialization">User Authentication </span>
         do <span className="highlight">CONTACT ME</span>
        </p>
        <div className="aboutInfo">
          <div className="aboutInfo__infoTitle">
            <p>Full name:</p> <h5>Muhammad Ashir Khan</h5>
          </div>
          <div className="aboutInfo__infoTitle">
            <p>Age:</p> <h5>26</h5>
          </div>
          <div className="aboutInfo__infoTitle">
            <p>Nationality:</p> <h5>Pakistani</h5>
          </div>
          <div className="aboutInfo__infoTitle">
            <p>Languages:</p> <h5>English / Urdu</h5>
          </div>
          <div className="aboutInfo__infoTitle">
            <p>Services:</p> <h5>Web / Application Development</h5>
          </div>
        </div>

        {/* <div className='about__cv'>
          <button>Download </button>
        </div> */}
      </div>
    </div>
  );
}

export default ImageSection;
