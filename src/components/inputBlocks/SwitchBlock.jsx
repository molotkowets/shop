import React from "react";
import Switch from "./Switch";
import "./switchBlock.css";
export default function SwitchBlock({ filter, setFilter, title, type }) {
  return (
    <div className="switchBlock">
      <h2>{title}</h2>
      <Switch filter={filter} setFilter={setFilter} type={type} />
    </div>
  );
}
