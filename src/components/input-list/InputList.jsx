import React from "react";
import "./input-list.css";
import { ReactComponent as ArrowInput } from "../../icon/arrow_input.svg";

export default function InputList({
  type,
  filter,
  setFilter,
  placeholder,
  options,
}) {
  // checks the correspondence of filter categories
  function checks(value) {
    for (let i = 0; i < options.length; i++) {
      if (value === options[i]) {
        console.log("true", value);
        setFilter({ ...filter, [type]: value });
        document.getElementById("input" + type).value = "";
      }
    }
  }
  // return placeholder value
  function placeholderValue() {
    if (filter[type] === "all") {
      return placeholder;
    } else {
      return filter[type];
    }
  }

  return (
    <div className="inputDatalistWrapper">
      <form>
        <div className="containerDatalist">
          <input
            id={"input" + type}
            onChange={(event) => checks(event.target.value)}
            className="inputDatalist"
            list={type}
            placeholder={placeholderValue()}
          />
          <ArrowInput />
        </div>
        <datalist id={type}>
          {options.map((by, index) => (
            <option key={index}>{by}</option>
          ))}
        </datalist>
      </form>
    </div>
  );
}
