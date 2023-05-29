import React from "react";
import "../../css/Gallery/full-media.css";

const FullMedia = (props) => {
  const { isVideo, src } = props;
  return isVideo ? (
    <div className="full-media">
      <video autoPlay muted loop>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  ) : (
    <div className="full-media">
      <img src={src}></img>
    </div>
  );
};

export default FullMedia;
