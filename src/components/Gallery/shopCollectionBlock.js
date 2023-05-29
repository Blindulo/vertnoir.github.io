import * as React from "react";
import "../../css/Gallery/shop-collection-block.css";
import ShopCollectionCard from "./shopCollectionCard";
import image1 from "../../assets/Gallery/shopCollection1.jpg";
import image2 from "../../assets/Gallery/shopCollection2.jpg";
import image3 from "../../assets/Gallery/shopCollection3.jpg";

const ShopCollectionBlock = () => {
  return (
    <div className="shop-collection-block-container">
      <ShopCollectionCard
        isNew={false}
        productName={"NAME OF PRODUCT"}
        description={"shape & size customizable"}
        price={"$69"}
        url={"/gallery"}
        src={image1}
      />
      <ShopCollectionCard
        isNew={true}
        productName={"NAME OF PRODUCT"}
        description={"shape & size customizable"}
        price={"$69"}
        url={"/collections"}
        src={image2}
      />
      <ShopCollectionCard
        isNew={true}
        productName={"NAME OF PRODUCT"}
        description={"shape & size customizable"}
        price={"$69"}
        url={"/"}
        src={image3}
      />
    </div>
  );
};

export default ShopCollectionBlock;
