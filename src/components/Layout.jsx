import React from 'react'
import { Outlet, } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'
import './layout.css'
export default function Layout() {
  return (
    <div className="wrapper">
      <Header />
        <main className='main'>
          <Outlet />
       </main>
      <Footer/>
    </div>
    
  )
}
