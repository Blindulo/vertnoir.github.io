import * as React from "react";
import "../../css/Homepage/card.css";

const Card = (props) => {
  const { src, tierName, price, productName, url } = props;
  return (
    <a href={url}>
      <div className="card">
        <div className="tierName">{tierName}</div>
        <div className="productInfo">
          <div className="productName">{productName}</div>
          <div className="price">{price}</div>
        </div>
        <img src={src}></img>
      </div>
    </a>
  );
};

export default Card;
