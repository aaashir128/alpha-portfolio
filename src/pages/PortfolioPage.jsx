import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import Title from "../components/Title";
import "./PortfolioPage.css";

function PortfolioPage() {
  return (
    <div className="portfolioPage">
      <Title title="Portfolio" span="portfolio" />
      {/* <div className="portfolioPage__boxes"> */}
      <PortfolioItem />
      {/* </div> */}
    </div>
  );
}

export default PortfolioPage;
