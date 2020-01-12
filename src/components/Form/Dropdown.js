import React, { useState } from "react";
import "./Dropdown.scss";

export default function Dropdown({ list, label, getSelectedValue }) {
  const mappedList = list.map(item => (
    <button
      key={item}
      onClick={() => {
        toogleList(dropdownListVisibility ? "" : "show-list");
        getSelectedValue(item);
        setValue(item);
      }}
    >
      {item}
    </button>
  ));

  const [dropdownListVisibility, toogleList] = useState("");
  const [selectedValue, setValue] = useState("");

  return (
    <div className="dropdown">
      <span className="label">{label}</span>
      <button
        onClick={() => toogleList(dropdownListVisibility ? "" : "show-list")}
      >
        {selectedValue}
      </button>
      <ul className={`dropdown-list ${dropdownListVisibility}`}>
        {mappedList}
      </ul>
    </div>
  );
}
