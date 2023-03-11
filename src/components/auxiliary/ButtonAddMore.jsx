import React from "react";
import "./buttonAddMore.css";
import { ButtonCell } from "./ButtonCell";

export function ButtonAddMore({ quantity, activeCell }) {
  let numberCell = 0;
  let stepDownCell = -1;
  let stepUpCell = 1;
  if (quantity > 3 && activeCell <= 3) {
  }
  return (
    <div className="containerMore">
      <ButtonCell stepCell={1} filling={1} />
    </div>
  );
}
