import React from 'react'
import './slider.css'
import ReactSlider from 'react-slider'
import { useState } from 'react'

export default function Slider() {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(500)
  return (
    <div className='sliderWrapper'>
        <ReactSlider
            defaultValue={[min, max]}
            className="slider"
            trackClassName="tracker"
            min={0}
            max={500}
            minDistance={50}
            step={5}
            withTracks={true}
            pearling={true}
            renderThumb={(props)=>{
                return <div {...props} className="thumb"></div>
            }}
            renderTrack={(props, state)=>{
                return <div {...props}  className={"track" + state.index}></div>
            }}
            onChange={([min,max])=>{
                setMin(min);
                setMax(max);
            }}
        />
        <div className='value-wrapper'>
            <p className='price-min-max'>Price: <span>${min}</span> - <span>${max}</span></p>
        </div>
    </div>
  )
}
