import React from "react";
import "./ResumeItem.css";

function ResumeItem({ date, title, subTitle, details }) {
  return (
    <div className="resumeItem">
      <div className="resumeItem__left">
        <h3>{date}</h3>
      </div>
      <div className="resumeItem__right">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default ResumeItem;
