import React, { useState } from 'react'
import './switch.css'

export default function Switch() {
    const [count, setCount] = useState({class: "switchOff", status: false});
  return (
    <div onClick={()=>switcher(count, setCount)} className={'switch transitionSwitch ' } >
        <div className={'ellipse transitionSwitch ' + count.class}></div>
    </div>
  )
}
function switcher(arr, func){
    if(arr.status){
        func({class: "switchOff", status: false})
        console.log("off", {class: "switchOff", status: false})
    }else{
        func({class: "switchOn",status: true})
        console.log("on", {class: "switchOn",status: true})
    }
}