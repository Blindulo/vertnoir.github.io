import React, { useEffect } from "react";
import "../css/home.css";
import Video from "../components/HomePage/video";
import DecentCards from "../components/HomePage/decentCards";
import LuxuryCards from "../components/HomePage/luxuryCards";
import UltraCards from "../components/HomePage/ultraCards";
import Footer from "../components/footer";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Video />
      <DecentCards />
      <LuxuryCards />
      <UltraCards />
      <Footer />
    </div>
  );
}

export default HomePage;
