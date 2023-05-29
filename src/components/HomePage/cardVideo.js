import * as React from "react";
import "../../css/Homepage/card-video.css";

const VideoCard = (props) => {
  const { src, tierName, price, productName, url } = props;
  return (
    <a href={url}>
      <div className="card-video">
        <div className="tierName">{tierName}</div>
        <div className="productInfo">
          <div className="productName">{productName}</div>
          <div className="price">{price}</div>
        </div>
        <video autoPlay muted loop>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </a>
  );
};

export default VideoCard;
