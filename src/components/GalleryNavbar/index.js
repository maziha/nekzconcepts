import React, { useState, useEffect } from "react";

import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import Logo1 from "../../images/Logo1.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
} from "./GalleryNavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img
                src={Logo1}
                alt="Nekz Concepts"
                height="41px"
                width="100px"
              ></img>
            </NavLogo>

            <MobileIcon onClick={toggle}></MobileIcon>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
