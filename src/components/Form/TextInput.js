import React from "react";
import "./TextInput.scss";

export default function TextInput({ label, type, reference }) {
  return (
    <div className="input-container">
      <span className="label">{label}</span>
      <input className="input" type={type} ref={reference}></input>
    </div>
  );
}
