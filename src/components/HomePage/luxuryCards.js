import * as React from "react";
import "../../css/Homepage/luxury.css";
import Card from "./card";
import VideoCard from "./cardVideo";
import cardLuxury1 from "../../assets/Homepage/card2.jpg";
import cardLuxury2 from "../../assets/Homepage/card3.jpg";
import videoLuxury from "../../assets/Homepage/card_video2.mp4";

const LuxuryCards = () => {
  return (
    <div class="luxury-container">
      <div className="luxury-left">
        <Card
          src={cardLuxury1}
          tierName=""
          price="$69.00"
          productName="NAME OF PRODUCT"
          url="./gallery"
        />
        <Card
          src={cardLuxury2}
          tierName=""
          price="$69.00"
          productName="NAME OF PRODUCT"
          url="./gallery"
        />
      </div>
      <div className="luxury-right">
        <VideoCard
          src={videoLuxury}
          tierName=""
          price=""
          productName=""
          url="./"
        />
      </div>
    </div>
  );
};

export default LuxuryCards;
