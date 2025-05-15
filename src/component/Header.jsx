import React, { useState } from "react";
import Logo from "../images/logo.png";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleShowNavBar() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="header_container max_width">
      <nav className="nav_container flex justify-between items-center text-white p-[2rem_0rem_.5rem] ">
        <div className="menu" onClick={handleShowNavBar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="h-[3rem]" />
          <h4 className="logo_name w-[5rem] leading-[1.2rem] font-light">
            Clive's Gourment
          </h4>
        </div>
        <div
          className={`webpage_links flex items-center justify-between w-[55rem] relative ${
            menuOpen && "open"
          }`}
        >
          <ul className={`links_container flex gap-[3rem] font-semibold`}>
            <li>
              <a href="#about" id="link">
                About Us
              </a>
            </li>
            <li>
              <a href="#ourmenu" id="link">
                Our Menu
              </a>
            </li>
            <li>
              <a href="#reserve" id="link">
                Reserve
              </a>
            </li>
            <li>
              <a href="#review" id="link">
                Reviews
              </a>
            </li>
            <li>
              <a href="#contact" id="link">
                Contacts
              </a>
            </li>
          </ul>
          <button className="header_button bg-white text-[#857313] font-semibold p-[.5rem_1rem] rounded-3xl hover:bg-[#857313] hover:text-white">
            Book Your Table
          </button>
          <button className="close_btn" onClick={handleShowNavBar}></button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
