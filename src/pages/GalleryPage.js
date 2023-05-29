import React, { useEffect } from "react";

import "../css/gallery.css";
import Footer from "../components/footer";
import FullMedia from "../components/Gallery/fullMedia";
import ShopTheCollection from "../components/Gallery/shopTheCollection";

import IntroductionBlock from "../components/Gallery/introductionBlock";
import introductionImage1 from "../assets/Gallery/introductionImage1.jpg";
import introductionImage2 from "../assets/Gallery/introductionImage2.jpg";
import introductionImage3 from "../assets/Gallery/introductionImage3.jpg";
import introductionImage4 from "../assets/Gallery/introductionImage4.jpg";

import fullImage from "../assets/Gallery/full-image4.jpg";
import fullImage2 from "../assets/Gallery/full-image6.jpg";
import fullVideo from "../assets/Gallery/full-video.mp4";

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <FullMedia isVideo={false} src={fullImage} />
      <IntroductionBlock
        srcLarge={introductionImage1}
        srcSmall={introductionImage2}
        introduction={
          "Some introduction of how great this set is, and how luxury the product are"
        }
        introductionIsLeft={false}
        url={"/"}
      />
      <FullMedia isVideo={true} src={fullVideo} />
      <IntroductionBlock
        srcLarge={introductionImage3}
        srcSmall={introductionImage4}
        introduction={
          "Some introduction of how great this set is, and how luxury the product are"
        }
        introductionIsLeft={true}
        url={"/"}
      />
      <div className="gallery-small-full-image-container">
        <img className="gallery-small-full-image" src={fullImage2}></img>
      </div>
      <ShopTheCollection />
      <Footer />
    </div>
  );
}

export default GalleryPage;
