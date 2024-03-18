import React from 'react'
import logo  from '../logo.svg'
import "./Hello_1.css"
import Hellowhite from './Hellowhite'
import Helloyellow from './Helloyellow'
export default function Hello_css() {
  return (
    <div>
      <p className = "hellomain">
        <img src={logo} alt='logo' className='helloimg'/>
       <Hellowhite/>
       <Helloyellow/>
      </p>
      
    </div>
  )
}

//rafc
//rfc
