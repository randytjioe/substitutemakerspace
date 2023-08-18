/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Cart = ({ className }) => {
  return (
    <svg
      className={`cart ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.25 21.6489C9.07843 21.6489 9.75 20.9774 9.75 20.1489C9.75 19.3205 9.07843 18.6489 8.25 18.6489C7.42157 18.6489 6.75 19.3205 6.75 20.1489C6.75 20.9774 7.42157 21.6489 8.25 21.6489Z"
        fill="white"
      />
      <path
        className="path"
        d="M18.75 21.6489C19.5784 21.6489 20.25 20.9774 20.25 20.1489C20.25 19.3205 19.5784 18.6489 18.75 18.6489C17.9216 18.6489 17.25 19.3205 17.25 20.1489C17.25 20.9774 17.9216 21.6489 18.75 21.6489Z"
        fill="white"
      />
      <path
        className="path"
        d="M7.86469 14.8989H20.115L21.915 5.89893H6.27609L5.87906 3.64893H1.5V5.14893H4.62094L6.87094 17.8989H20.25V16.3989H8.12906L7.86469 14.8989Z"
        fill="white"
      />
    </svg>
  );
};
