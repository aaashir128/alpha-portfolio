import { Button, IconButton } from "@material-ui/core";
import { Close, Edit } from "@material-ui/icons";
import React from "react";
import "./AdminPortfolio.css";

function AdminPortfolio({
  image,
  title,
  details,
  githubURL,
  webURL,
  timestamp,
}) {
  return (
    <div className="adminPortfolio">
      <div className="adminPortfolio__container">
        <div className="adminPortfolio__containerTop">
          <IconButton>
            <Edit />
          </IconButton>
          <IconButton>
            <Close />
          </IconButton>
        </div>
        <div className="adminPortfolio__containerImg">
          <img src={image} alt={image} />
        </div>
        <div className="adminPortfolio__containertxt">
          <div className="adminPortfolio__containertxtHead">
            <h4>{title}</h4>
            <small>4:30 PM, 2 Ahg 2020</small>
          </div>
          <div className="adminPortfolio__containertxtDetails">
            <p>{details}</p>
          </div>
          <div className="adminPortfolio__containertxtUrl">
            <h5>GitHub URL: </h5>
            <p>{githubURL}</p>
            <h5>Website URL: </h5>
            <p>{webURL}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPortfolio;
