import * as React from "react";
import "../../css/Gallery/introduction.css";
import AllButton from "../button";

const Introduction = (props) => {
  const { src, introduction, url } = props;
  return (
    <div className="introduction-card">
      <div>
        <img className="introduction-small-image" src={src}></img>
      </div>
      <div className="introduction-text">{introduction}</div>
      <div className="introduction-button">
        <AllButton url={url} text={"SHOP NOW"} />
      </div>
    </div>
  );
};

export default Introduction;
