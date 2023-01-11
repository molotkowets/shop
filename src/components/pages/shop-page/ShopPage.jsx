import React from 'react'
import Item from '../../item/Item'
import Sidebar from '../../sidebarShop/SidebarShop'
import './shopPage.css'
import {bd} from "../../../bd"

export default function ShopPage() {

  // console.log(filterProducts(bd, "all"))
  return (
    <div className='mainWrapper'>
      <Sidebar/>
        <div className='productCards'>
          <ul className='goods'>
            {filterProducts(bd, "all").slice(0, 6).map((x) => <Item item={x} key={x.id}/>)}
          </ul>
        </div>
    </div>
  )
}


function filterProducts(bd, params){
  if(params === "all"){
    let productPush = [];
    for(let i=0; i<Object.keys(bd("newProducts")).length; i++){
      productPush.push(...bd("newProducts")[Object.keys(bd("newProducts"))[i]])
    }
    return productPush
  }else {return "no params"}
}