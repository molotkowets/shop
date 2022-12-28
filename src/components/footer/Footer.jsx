import React, { useState } from 'react'
import './footer.css'
import {ReactComponent as Facebook} from '../../icon/Icon_facebook.svg'
import {ReactComponent as Twitter} from '../../icon/Icon_twitter.svg'
import {ReactComponent as Instagram} from '../../icon/Icon_instagram.svg'
import {ReactComponent as Linkedin} from '../../icon/Icon_linkedin.svg'
import { Link } from 'react-router-dom'
import {ReactComponent as ArrowFooter} from '../../icon/arrow_footer.svg'

export default function Footer() {
  const[emailNews, senEmailNews] = useState("")
  return (
    <div className='footer'>
      <div className='footer-top'>
        <ul>
          <li><Link  to={'/contact'}>CONTACT</Link></li>
          <li><Link  to={'/contact'}>TERMS OF SERVICES</Link></li>
          <li><Link  to={'/contact'}>SHIPPING AND RETURNS</Link></li>
        </ul>
        <div className='inputContainerFooter'>
          <form>
            <input onChange={(event)=>senEmailNews(event.target.value)} type="email" pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/" size="30" placeholder="Give an email, get the newsletter." />
          </form>
          <ArrowFooter  onClick={()=>pushEmailForNews(emailNews)} className='buttonArrowPushEmail'/>
        </div>
      </div>

      <div className='footerAllInf'>
        <p><em>© 2021 Shelly.</em> Terms of use <em>and</em> privacy policy.</p>
        <ul className='footer-social-network'>
          <li><a href='https://www.linkedin.com/'><Linkedin/></a></li>
          <li><a href='https://www.facebook.com/'><Facebook/></a></li>
          <li><a href='https://www.instagram.com/'><Instagram/></a></li>
          <li><a href='https://twitter.com/'><Twitter/></a></li>
        </ul>
      </div>

    </div>
  )
}

// function for push email and gat news
function pushEmailForNews(v){
  console.log(v)
}

