import {FiBriefcase, FiFileText, FiHome, FiSend} from 'react-icons/fi'
import {AiOutlineAppstore, AiOutlineFundProjectionScreen, AiOutlineUser} from 'react-icons/ai'
import { FaTimes } from "react-icons/fa";
import './Navbar.scss'

function Navbar() {
  const toggleMenu = ()=>{
    let navToggle = document.querySelector('.nav__menu');
    navToggle.classList.toggle('active')

  }
  return (
    <header className="header" id="header">
      <nav className="nav container">
      <a href='/' className="nav__logo">Al Seny</a>
      <div className="nav__menu">
        <ul className="nav__list grid">
          <li className="nav__item">
            <a href="/home" className="nav__link">
              <FiHome className="nav__icon"/>Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              <AiOutlineUser className="nav__icon"/>
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              <FiFileText className="nav__icon"/>
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              <FiBriefcase className="nav__icon"/>
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">
              <AiOutlineFundProjectionScreen className="nav__icon"/>
              Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <FiSend className="nav__icon"/>
              Contact me
            </a>
          </li>
        </ul>
        <button className="nav__close" onClick={toggleMenu}>
          <FaTimes/>
        </button>
      </div>
      <button className='nav__toggle' onClick={toggleMenu}>
        <AiOutlineAppstore />
      </button>
      </nav>
    </header>
  )
}

export default Navbar