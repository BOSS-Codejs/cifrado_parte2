import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header-footer.css";
import logo from "./img/reset.png";

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del menú

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} className="logo-icon" alt="logo" />
          <h1 className="headerh1">Encriptación</h1>
        </div>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          {isOpen ? <MenuMOvil /> : <MenuWeb />}
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>
    </>
  );
};

const MenuWeb = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <ul>
        <li
          onMouseEnter={() => handleMouseEnter("tema1")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="menu-btn">Métodos de encriptación</button>
          {activeDropdown === "tema1" && (
            <ul className="dropdown">
              <Link to={"/"}>
                <li className="text">Método de cifrado Escilata</li>
              </Link>
              <Link to={"/Cesar"}>
                <li className="text">Método de cifrado César</li>
              </Link>
              <Link to={"/EdDsa"}>
                <li className="text">Método de cifrado EdDSA</li>
              </Link>
              <Link to={"/Rc5"}>
                <li className="text">Método de cifrado RC5</li>
              </Link>
              <Link to={"/Hash"}>
                <li className="text">Método de cifrado HASH tiger</li>
              </Link>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("tema2")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="menu-btn">Documentación</button>
          {activeDropdown === "tema2" && (
            <ul className="dropdown">
              <li>
                {" "}
                <a href="https://drive.google.com/drive/folders/1cPQw0l98ZHL3dSM1ILYmit2yBoqIr5HH?usp=sharing">
                  {" "}
                  Comparación de métodos
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

const MenuMOvil = () => {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);

  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  return (
    <>
      <ul>
        <li>
          <button onClick={toggleDropdown1} className="menu-btn">
            Métodos de encriptación
          </button>
          <ul className="dropdown">
            <Link to={"/"}>
              <li className="text">Método de cifrado Escilata</li>
            </Link>
            <Link to={"/Cesar"}>
              <li className="text">Método de cifrado César</li>
            </Link>
            <Link to={"/EdDsa"}>
              <li className="text">Método de cifrado EdDSA</li>
            </Link>
            <Link to={"/Rc5"}>
              <li className="text">Método de cifrado RC5</li>
            </Link>
            <Link to={"/Hash"}>
              <li className="text">Método de cifrado HASH tiger</li>
            </Link>
          </ul>
        </li>
        <li>
          <button onClick={toggleDropdown2} className="menu-btn">
            Documentación
          </button>
          {isDropdownOpen2 && (
            <ul className="dropdown">
              <li>Subtema 1</li>
              <li>Subtema 2</li>
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export default HeaderNav;
