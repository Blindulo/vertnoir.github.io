import * as React from "react";
import "../../css/Collections/back-image.css";
import AllButton from "../button";

const BackImage = (props) => {
  const { src, largeTitle, smallTitle, url } = props;
  return (
    <div className="back">
      <div className="smallTitle">{smallTitle}</div>
      <div className="largeTitle">{largeTitle}</div>
      <div className="seeMore">
        <AllButton url={url} text={"SEE MORE"} />
      </div>
      <img src={src}></img>
    </div>
  );
};

export default BackImage;
