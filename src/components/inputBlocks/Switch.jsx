import React, { useState } from "react";
import "./switch.css";

export default function Switch({ filter, setFilter, type }) {
  const [count, setCount] = useState({ class: "switchOff", status: false });
  return (
    <div
      onClick={() => switcher(filter, setFilter, type, count, setCount)}
      className={"switch transitionSwitch "}
    >
      <div className={"ellipse transitionSwitch " + count.class}></div>
    </div>
  );
}
function switcher(filter, setFilter, type, count, setCount) {
  setFilter({ ...filter, [type]: !count.status });
  if (filter[type]) {
    setCount({ class: "switchOff", status: false });
  } else {
    setCount({ class: "switchOn", status: true });
  }
}
