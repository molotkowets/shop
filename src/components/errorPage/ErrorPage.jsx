import React from 'react'
import { Link } from 'react-router-dom'
import './errorPage.css'

export default function ErrorPage() {
  return (
    <div className='errorPage'>
        <h1>404 ERROR</h1>
        <p>This page not found;
back to home and start again</p>

<Link to={'/'}>HOMEPAGE</Link>
    </div>
  )
}
