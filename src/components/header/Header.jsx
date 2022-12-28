import React from 'react'
import {ReactComponent as Search} from '../../icon/search.svg'
import {ReactComponent as ShoppingCart} from '../../icon/shopping-cart.svg'
import {ReactComponent as Account} from '../../icon/account.svg'
import {ReactComponent as Logo} from '../../icon/LOGO_SHOPPE.svg'
import './header.css'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  const classHeader = location.pathname === "/"?'header':'header bottomBorder'
  return (
    <div className={classHeader}>
      <div className='logo'><Link className='nav-button' to="/"><Logo/></Link></div>
      <div className='menu'>
        <ul className='nav'>
          <NavLink className='nav-li left-nav'  to="/shop"><li className='nav-button'> Shop</li></NavLink>
          <NavLink className='nav-li left-nav'  to="/blog"><li className='nav-button'> Blog</li></NavLink>
          <NavLink className='nav-li left-nav'  to="/out-story"> <li className='nav-button'>Out Story</li></NavLink>
          <li><div className='separator'></div></li>
          <NavLink className='nav-li right-nav' to="/search"><li className='nav-button'><Search/></li></NavLink>
          <NavLink className='nav-li right-nav' to="/shoppingCart"><li className='nav-button'><ShoppingCart/></li></NavLink>
          <NavLink className='nav-li right-nav' to="/account"><li className='nav-button'><Account/></li></NavLink>
        </ul>
      </div>
    </div>
  )
}
