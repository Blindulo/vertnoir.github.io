import React, { useState, useEffect } from "react";
import "../css/logo.css";

const Logo = (props) => {
  const { pageHeight } = props;
  const [scrollDistance, setScrollDistance] = useState(0);
  const [logoPosition, setLogoPosition] = useState("");

  useEffect(() => {
    function handleScroll() {
      setScrollDistance(
        window.pageYOffset || document.documentElement.scrollTop
      );
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const height = pageHeight - window.innerHeight - 250;
    if (scrollDistance > height && scrollDistance > 0) {
      setLogoPosition(`${50 + scrollDistance - height}`);
    } else {
      setLogoPosition("50");
    }
  }, [scrollDistance, pageHeight]);

  return (
    <div
      className="logo"
      style={{
        top: `${logoPosition}px`,
      }}
    >
      <p>LOGO</p>
    </div>
  );
};

export default Logo;
