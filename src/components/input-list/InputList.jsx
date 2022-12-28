import React from 'react'
import './input-list.css'
import {ReactComponent as ArrowInput} from '../../icon/arrow_input.svg'

export default function InputList(props) {
  return (
    <div className='inputDatalistWrapper'>
        <form> 
            <div className='containerDatalist'>
                <input className='inputDatalist' list="filter" placeholder={props.placeholder}/>
                <ArrowInput/>
            </div>
            <datalist id="filter">
                {props.options.map((by)=><option>{by}</option>)}
            </datalist> 
        </form>
   </div>
  )
}
