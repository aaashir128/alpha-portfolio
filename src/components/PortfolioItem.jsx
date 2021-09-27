import React, { useState, useEffect } from "react";
import "./PortfolioItem.css";
import PortfolioWork from "./PortfolioWork";

import db from "../config/firebase";

function PortfolioItem() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    db.collection("portfolio")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPortfolios(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, [portfolios]);

  return (
    <div className="portfolioItem">
      {portfolios.map((v, i) => (
        <PortfolioWork
          key={i}
          image={v.data.image}
          title={v.data.title}
          details={v.data.details}
          githubURL={v.data.githubURL}
          webURL={v.data.webURL}
          timestamp={v.data.timestamp}
        />
      ))}
    </div>
  );
}

export default PortfolioItem;
