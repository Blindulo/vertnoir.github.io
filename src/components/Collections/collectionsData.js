import React from "react";
import BackImage from "./backImage";
import fullImage from "../../assets/Collections/full-image.jpg";
import fullImage2 from "../../assets/Collections/full-image2.jpg";
import fullImage3 from "../../assets/Collections/full-image3.jpg";

const Events = () => {
  return (
    <div>
      <BackImage
        src={fullImage}
        largeTitle={"SPRING - SUMMER 2023 COLLECTION"}
        smallTitle={"GALLERY"}
        url={"/"}
      />
      <BackImage
        src={fullImage2}
        largeTitle={"TARO X VERTNOIR DIY NAIL JUST FOR YOU"}
        smallTitle={"OFFLINE EVENT"}
        url={"/gallery"}
      />
      <BackImage
        src={fullImage3}
        largeTitle={"FALL - WINTER 2022 COLLECTION"}
        smallTitle={"GALLERY"}
        url={"/collections"}
      />
    </div>
  );
};

export default Events;
