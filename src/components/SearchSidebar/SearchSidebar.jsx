import React from 'react'
import {ReactComponent as Search} from '../../icon/search.svg'
import './searchSidebar.css'
export default function SearchSidebar() {
  return (
    <div className='searchBlock'>
        <input className='inputSearchShop' type={'text'} placeholder={"Search..."}/>
        <Search/>
    </div>
  )
}
