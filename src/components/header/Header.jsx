import React from 'react'
import {ReactComponent as Search} from '../../icon/search.svg'
import {ReactComponent as ShoppingCart} from '../../icon/shopping-cart.svg'
import {ReactComponent as Account} from '../../icon/account.svg'
import {ReactComponent as Logo} from '../../icon/LOGO_SHOPPE.svg'
import './header.css'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  const classHeader = location.pathname === "/"?'header':'header bottomBorder'
  return (
    <div className={classHeader}>
      <div className='logo'><Link className='nav-button' to="/"><Logo/></Link></div>
      <div className='menu'>
        <ul className='nav'>
          <li className='nav-li left-nav'><Link className='nav-button' to="/shop"> Shop</Link></li>
          <li className='nav-li left-nav'><Link className='nav-button' to="/blog"> Blog</Link></li>
          <li className='nav-li left-nav'><Link className='nav-button' to="/qqq"> Out Story</Link></li>
          <li><div className='separator'></div></li>
          <li className='nav-li right-nav'><Link className='nav-button' to="/shop"><Search/></Link></li>
          <li className='nav-li right-nav'><Link className='nav-button' to="/shop"><ShoppingCart/></Link></li>
          <li className='nav-li right-nav'><Link className='nav-button' to="/shop"><Account/></Link></li>
        </ul>
      </div>
    </div>
  )
}
