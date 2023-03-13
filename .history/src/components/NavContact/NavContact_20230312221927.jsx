import React from 'react'
import styles from './NavContact.module.css'

const NavContact = () => {
  return (
    <div className="contact">
    <span className="num">+7 (999) 123-45-67</span>
    <a href="https://vk.com">
      <img className="lo" src={logo1} alt="logoSub" />
    </a>
    <a href="https://www.instagram.com/daridushoi/">
      <img className="lo" src={logo2} alt="logoinst" />
    </a>
  </div>
  )
}

export default NavContact