import React, { useState, useEffect } from "react";
import "../css/header.css";

const Header = () => {
  const [shouldHide, setShouldHide] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setShouldHide(true);
      } else {
        setShouldHide(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="header"
      style={{
        opacity: shouldHide && !isHovering ? 0 : 1,
        transition: "opacity 0.3s ease-in-out",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/gallery">GALLERY</a>
        </li>
        <li>
          <a href="/collections">COLLECTION</a>
        </li>
        <li>
          <a href="/">CONTACTS</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
