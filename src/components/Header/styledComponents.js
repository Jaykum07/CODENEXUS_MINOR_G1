import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #4b0082;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1001;

  @media screen and (max-width: 890px) {
    padding: 10px 20px;
  }
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

export const LogoImage = styled.img`
  height: 50px;
  width: 50px;
`;

export const NavLinksContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 890px) {
    display: none;
  }
`;

export const NavLink = styled(RouterNavLink)`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 5px 0;

  &.active {
    color: #e8a509;
    font-weight: 700;
  }
  &:hover {
    color: #e8a509;
  }
`;

export const AuthContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 890px) {
    display: none;
  }
`;

export const LoginLink = styled(RouterNavLink)`
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
`;

export const SignUpButton = styled.button`
  background-color: #f0f0f0;
  color: #4b0082;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

/* --- MOBILE STYLES --- */

export const MobileMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 890px) {
    display: block;
    font-size: 28px;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  width: 100vw;
  max-height: 60vh;
  padding: 100px 30px 30px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  background-color: #4b0082;
  transition: top 0.3s ease-in-out;
  z-index: 1000;

  @media screen and (min-width: 891px) {
    display: none;
  }
`;

export const MobileAuthContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: auto;
  padding-top: 20px;
  gap: 20px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;

  @media screen and (min-width: 890px) {
    display: none;
  }
`;
