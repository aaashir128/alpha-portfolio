import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../config/StateProvider";
import "./Sidebar.css";

function Sidebar({ navToggle }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className={`${navToggle ? "nav-toggler" : "sidebar"} `}>
      <Link to={!user ? "/login" : "/admin"}>
        <div className="sidebar__image">
          <img
            className="sidebar__imageLogo"
            src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-9/79996799_2883809331669634_7612487412245069824_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHQFG1ajuggofaUXbVSsIktax74szkHk5drHvizOQeTlwmGvcOakhifSQe41k2Ei8fwRE13rmvIZhPvL2INinrI&_nc_ohc=wJTrGe34S_8AX8-oPe-&_nc_ht=scontent.fkhi17-1.fna&oh=db30f6b6b38c48e7a83b3398e5cf9cc2&oe=616658CB"
            alt=""
          />

        </div>
      </Link>

      <hr className="sidebar__hr" />
      <div className="sidebar__center">
        <Link to="/">
          <h5 className="sidebar__centerLinks">Home</h5>
        </Link>
        <Link to="/about">
          <h5 className="sidebar__centerLinks">About</h5>
        </Link>
        <Link to="/resume">
          <h5 className="sidebar__centerLinks">Resume</h5>
        </Link>
        <Link to="/portfolios">
          <h5 className="sidebar__centerLinks">Portfolio</h5>
        </Link>
        <Link to="/contact">
          <h5 className="sidebar__centerLinks">Contact</h5>
        </Link>
      </div>
      <hr className="sidebar__hr" />

      <div className="sidebar__footer">
        <h2>© 2021 Portfolio Website</h2>
      </div>
    </div>
  );
}

export default Sidebar;
