import React, { useState, useEffect } from "react";
import Link from "./link";
import "../css/links.css";

const Links = () => {
  const explore = [
    { text: "COLLECTION", url: "./" },
    { text: "NEW IN", url: "./" },
    { text: "OFFLINE EVENTS", url: "./" },
    { text: "STORIES", url: "./" },
    { text: "CONTACTS", url: "./" },
  ];
  const service = [
    { text: "PAYMENT METHODS", url: "./" },
    { text: "SHIPPING OPTIONS", url: "./" },
    { text: "MY ACCOUNT", url: "./" },
    { text: "FAQS", url: "./" },
    { text: "CARE & SERVICES", url: "./" },
  ];
  const customization = [
    { text: "ONLINE ORDERING", url: "./gallery" },
    { text: "TALK TO A NAIL ARTIST", url: "./gallery" },
    { text: "" },
    { text: "" },
    { text: "" },
  ];
  return (
    <div className="container">
      <Link head="EXPLORE VERTNOIR.COM" row={explore} />
      <Link head="ONLINE SERVICES" row={service} />
      <Link head="CUSTOMIZATION" row={customization} />
    </div>
  );
};

export default Links;
