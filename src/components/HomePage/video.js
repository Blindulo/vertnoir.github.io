import React from "react";
import video from "../../assets/Homepage/video.mp4";
import "../../css/Homepage/video.css";

function Video() {
  return (
    <div className="video-container">
      <video className="video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
