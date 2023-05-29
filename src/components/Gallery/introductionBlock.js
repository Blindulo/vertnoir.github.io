import * as React from "react";
import "../../css/Gallery/introduction-block.css";
import Introduction from "./introduction";

const IntroductionBlock = (props) => {
  const { srcLarge, srcSmall, introduction, introductionIsLeft, url } = props;
  const introductionPart = (
    <div className="introduction-part">
      <Introduction src={srcSmall} introduction={introduction} url={url} />
    </div>
  );
  const imagePart = <img className="introduction-img" src={srcLarge}></img>;
  return introductionIsLeft ? (
    <div className="introduction-block">
      {introductionPart}
      {imagePart}
    </div>
  ) : (
    <div className="introduction-block">
      {imagePart}
      {introductionPart}
    </div>
  );
};

export default IntroductionBlock;
