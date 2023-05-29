import React from "react";
import "../css/footer.css";
import Links from "./links";
import SignUp from "./signUp";

const Footer = () => {
  return (
    <div className="footer">
      <SignUp />
      <div className="link">
        <Links />
      </div>
    </div>
  );
};

export default Footer;
