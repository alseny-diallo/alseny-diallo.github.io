import { FiBriefcase, FiFileText, FiHome, FiSend } from "react-icons/fi";
import {
  AiOutlineAppstore,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import "./Navbar.scss";
import PropTypes from "prop-types";
import { useEffect } from "react";

const ItemsList = ({ icon, title, id }) => {
  return (
    <li className="nav__item">
      <a href={id} className="nav__link">
        <>{icon}</>
        {title}
      </a>
    </li>
  );
};

ItemsList.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.element,
  title: PropTypes.string,
};

function Navbar() {
  const toggleMenu = () => {
    let navToggle = document.querySelector(".nav__menu");
    navToggle.classList.toggle("active");
  };
  const itemsList = [
    { id: "#home", icon: <FiHome className="nav__icon" />, title: "Home" },
    {
      id: "#about",
      icon: <AiOutlineUser className="nav__icon" />,
      title: "About",
    },
    {
      id: "#skills",
      icon: <FiFileText className="nav__icon" />,
      title: "Skills",
    },
    {
      id: "#services",
      icon: <FiBriefcase className="nav__icon" />,
      title: "Services",
    },
    {
      id: "#projects",
      icon: <AiOutlineFundProjectionScreen className="nav__icon" />,
      title: "Projects",
    },
    { id: "#contact", icon: <FiSend className="nav__icon"/>, title: "Contact me" },
  ];

  const removeMenu = ()=>{
    const navMenu = document.querySelector(".nav__menu");
    navMenu.classList.remove("active");
  }

  useEffect(() => {
    let navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach(element=>element.addEventListener("click",removeMenu));
    return () => {
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Al Seny
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            {itemsList.map((item, index) => (
              <ItemsList
                key={index}
                id={item.id}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </ul>
          <button className="nav__close" onClick={toggleMenu}>
            <FaTimes />
          </button>
        </div>
        <button className="nav__toggle" onClick={toggleMenu}>
          <AiOutlineAppstore />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
