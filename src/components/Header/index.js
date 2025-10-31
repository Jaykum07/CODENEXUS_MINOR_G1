import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Nav,
  LogoContainer,
  LogoImage,
  NavLinksContainer,
  NavLink,
  AuthContainer,
  LoginLink,
  SignUpButton,
  MobileMenuIcon,
  MobileMenuContainer,
  MobileAuthContainer,
  Overlay,
} from "./styledComponents";

import LOGO_URL from "../../assets/logo_cn.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = false;

  // No changes to these functions
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <Nav>
        <LogoContainer>
          <Link to="/">
            <LogoImage src={LOGO_URL} alt="Code Nexus Logo" />
          </Link>
        </LogoContainer>

        {/* --- Desktop Navigation --- */}
        <NavLinksContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Upcoming Events</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinksContainer>
        <AuthContainer>
          {isAuthenticated ? (
            <SignUpButton>Logout</SignUpButton>
          ) : (
            <>
              <LoginLink to="/login">Login</LoginLink>
              <Link to="/signup">
                <SignUpButton>Sign up</SignUpButton>
              </Link>
            </>
          )}
        </AuthContainer>

        {/* --- Hamburger Icon --- */}
        <MobileMenuIcon onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuIcon>
      </Nav>

      <Overlay isOpen={isOpen} onClick={closeMobileMenu} />

      {/* --- Mobile Dropdown Menu --- */}
      <MobileMenuContainer isOpen={isOpen}>
        <NavLink to="/" onClick={closeMobileMenu}>
          Home
        </NavLink>
        <NavLink to="/events" onClick={closeMobileMenu}>
          Upcoming Events
        </NavLink>
        <NavLink to="/resources" onClick={closeMobileMenu}>
          Resources
        </NavLink>
        <NavLink to="/contact" onClick={closeMobileMenu}>
          Contact
        </NavLink>

        <MobileAuthContainer>
          {isAuthenticated ? (
            <SignUpButton onClick={closeMobileMenu}>Logout</SignUpButton>
          ) : (
            <>
              <LoginLink to="/login" onClick={closeMobileMenu}>
                Login
              </LoginLink>
              <Link to="/signup" onClick={closeMobileMenu}>
                <SignUpButton>Sign up</SignUpButton>
              </Link>
            </>
          )}
        </MobileAuthContainer>
      </MobileMenuContainer>
    </>
  );
};

export default Header;
