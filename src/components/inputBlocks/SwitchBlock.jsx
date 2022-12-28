import React from 'react'
import Switch from './Switch'
import './switchBlock.css'
export default function SwitchBlock(props) {
  return (
    <div className='switchBlock'>
        <h2>{props.title}</h2>
        <Switch/>
        
    </div>
  )
}
