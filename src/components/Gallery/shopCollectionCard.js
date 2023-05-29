import * as React from "react";
import "../../css/Gallery/shop-collection-card.css";
import AllButton from "../button";

const ShopCollectionCard = (props) => {
  const { src, isNew, price, productName, description, url } = props;
  return (
    <div className="shop-collection-card-container">
      {isNew ? (
        <div className="shop-collection-card-is-new">
          <p>NEW</p>
        </div>
      ) : null}
      <div>
        <img className="shop-collection-card-image" src={src}></img>
      </div>
      <div className="shop-collection-card-product-name">{productName}</div>
      <div className="shop-collection-card-description">{description}</div>
      <div className="shop-collection-card-price">{price}</div>
      <div className="shop-collection-card-button">
        <AllButton url={url} text={"VIEW DETAIL"} />
      </div>
    </div>
  );
};

export default ShopCollectionCard;
