import React, { useState, useEffect } from "react";
import "../css/button.css";

const AllButton = (props) => {
  return (
    <a href={props.url}>
      <div className="button">
        <p>{props.text}</p>
      </div>
    </a>
  );
};

export default AllButton;
