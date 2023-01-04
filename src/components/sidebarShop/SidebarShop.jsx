import React from 'react'
import './sidebarShop.css'

import SwitchBlock from '../inputBlocks/SwitchBlock'
import Slider from '../slider/Slider'
import InputList from '../input-list/InputList'
import SearchSidebar from '../SearchSidebar/SearchSidebar'

export default function Sidebar() {
    const sortBy = [
        "cheap to expensive",
        "from expensive to cheap",
        "name",
        "rating"
    ]
    const shopBy = [
        "cheap to expensive",
        "from expensive to cheap",
        "name",
        "rating"
    ]
  return (
    <nav className='navbar'>
        <h1>Shop The Latest</h1>
        {/* <div className='searchBlock'>
            <input className='inputSearchShop' type={'text'} placeholder={"Search..."}/>
            <Search/>
        </div> */}
        <SearchSidebar/>
        <div className='blockFilter'>
            <InputList placeholder={"Shop By"} options={shopBy}/>
            <InputList placeholder={"Sort By"} options={sortBy}/>
            <Slider/>
            <SwitchBlock title={"On sale"}/>
            <SwitchBlock title={"In stock"}/>
        </div>
    </nav>
  )
}
