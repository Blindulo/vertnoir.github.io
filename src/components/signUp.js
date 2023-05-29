import React, { useState } from "react";
import "../css/sign-up.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
    setShowButton(value.length > 0);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="signUp">
      <p className="title">SIGN UP</p>
      <p className="text">
        Sign up below for updates about the world of VertNoir, Including
        collection launches and early access to limited-edition products and
        collaborations.
      </p>
      <div className="input-container">
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        {showButton && (
          <button type="submit" role="button">
            <span>
              <svg
                width="24"
                height="24"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </span>
          </button>
        )}

        {showButton && !isValid && (
          <span style={{ color: "red" }}>Invalid email address</span>
        )}
      </div>
    </div>
  );
};

export default SignUp;
