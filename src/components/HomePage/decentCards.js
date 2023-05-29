import * as React from "react";
import Card from "./card";
import VideoCard from "./cardVideo";
import "../../css/Homepage/decent.css";
import card2 from "../../assets/Homepage/card4.jpg";
import card3 from "../../assets/Homepage/card6.jpg";
import video from "../../assets/Homepage/card_video1.mp4";

const DecentCards = () => {
  return (
    <div className="decent">
      <div className="cards">
        <div className="decent-panel">
          <VideoCard
            src={video}
            tierName="DECENT"
            price=""
            productName=""
            url="./"
          />
        </div>
        <div className="decent-panel">
          <Card
            src={card2}
            tierName=""
            price="$49.00"
            productName="NAME OF PRODUCT"
            url="./gallery"
          />
        </div>
        <div className="decent-panel">
          <Card
            src={card3}
            tierName=""
            price="$49.00"
            productName="NAME OF PRODUCT"
            url="./gallery"
          />
        </div>
      </div>
    </div>
  );
};

export default DecentCards;
