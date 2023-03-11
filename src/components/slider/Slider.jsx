import React, { useEffect } from "react";
import "./slider.css";
import ReactSlider from "react-slider";
import { useState } from "react";

export default function Slider({
  setFilterParameters,
  setProductReturn,
  product,
  filter,
  setFilter,
  filterProducts,
}) {
  const [min, setMin] = useState(filter.price.min);
  const [max, setMax] = useState(filter.price.max);

  useEffect(() => {
    setMin(filter.price.min);
    setMax(filter.price.max);
  }, [filter.price.min, filter.price.max]);

  function changeTest() {
    setFilter({
      ...filter,
      filterPrice: {
        min: min,
        max: max,
      },
    });
    filterProducts(filter, setProductReturn, setFilterParameters);
  }

  return (
    <div className="sliderWrapper">
      <div>
        <ReactSlider
          defaultValue={[filter.price.min, filter.price.max]}
          onAfterChange={() => changeTest()}
          className="slider"
          trackClassName="tracker"
          min={filter.price.min}
          max={filter.price.max}
          minDistance={50}
          value={[filter.filterPrice.min || min, filter.filterPrice.max || max]}
          step={5}
          withTracks={true}
          pearling={true}
          renderThumb={(props) => {
            return <div {...props} className="thumb"></div>;
          }}
          renderTrack={(props, state) => {
            return <div {...props} className={"track" + state.index}></div>;
          }}
          onChange={([min, max]) => {
            setMin(min);
            setMax(max);
          }}
        />
      </div>

      <div className="value-wrapper">
        <p className="price-min-max">
          Price: <span>${min}</span> - <span>${max}</span>
        </p>
      </div>
    </div>
  );
}
