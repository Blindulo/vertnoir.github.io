import * as React from "react";
import Card from "../HomePage/card";
import VideoCard from "../HomePage/cardVideo";
import "../../css/Homepage/ultra.css";
import card2 from "../../assets/Homepage/card4.jpg";
import card3 from "../../assets/Homepage/card6.jpg";
import video from "../../assets/Homepage/card_video1.mp4";

const UltraCards = () => {
  return (
    <div className="ultra">
      <div className="cards">
        <div className="ultra-panel">
          <Card
            src={card2}
            tierName=""
            price="$99.00"
            productName="NAME OF PRODUCT"
            url="./gallery"
          />
        </div>
        <div className="ultra-panel">
          <VideoCard
            src={video}
            tierName="ULTRA"
            price=""
            productName=""
            url="./"
          />
        </div>
        <div className="ultra-panel">
          <Card
            src={card3}
            tierName=""
            price="$99.00"
            productName="NAME OF PRODUCT"
            url="./gallery"
          />
        </div>
      </div>
    </div>
  );
};

export default UltraCards;
