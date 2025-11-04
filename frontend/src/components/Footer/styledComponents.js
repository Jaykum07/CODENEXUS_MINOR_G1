import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0F0725;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  padding: 60px 40px 20px; // Top, sides, bottom padding
  border-top: 1px solid #333; // Separator line
  
  @media screen and (max-width: 768px) {
    padding: 40px 20px 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
  margin-bottom: 40px; // Space before the copyright line

  @media screen and (max-width: 992px) {
    flex-wrap: wrap; // Allows columns to wrap on smaller screens
    justify-content: center; // Center items when wrapped
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column; // Stack vertically on small mobile
    align-items: center;
    gap: 30px;
  }
`;

export const FooterSection = styled.div`
  flex: 1; // Each section takes equal space initially
  min-width: 250px; // Minimum width before wrapping/stacking
  
  @media screen and (max-width: 992px) {
    flex-basis: 45%; // Two columns per row on tablets
  }
  
  @media screen and (max-width: 768px) {
    flex-basis: 100%; // Full width on mobile
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  @media screen and (max-width: 992px) {
    justify-content: center; // Center logo on wrap
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column; // Stack logo and text on mobile
    justify-content: center;
  }
`;

export const LogoImage = styled.img`
  height: 60px;
  width: 60px;
`;

export const WebsiteName = styled.h3`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 25px;
  color: #cccccc;

  @media screen and (max-width: 992px) {
    max-width: 400px; // Constrain width for wrapped text
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (max-width: 992px) {
    justify-content: center; // Center icons on wrap
  }
`;

export const SocialLink = styled.a`
  color: #ffffff;
  font-size: 30px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #E8A509; // Hover color
    transform: translateY(-3px); // Subtle lift animation
  }
`;

export const SectionTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #E8A509; // Section titles are orange
  
  @media screen and (max-width: 992px) {
    margin-top: 30px; // Add space when sections wrap
  }
  
  @media screen and (max-width: 768px) {
    margin-top: 20px; // Less space on mobile
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center; // Center nav links when wrapped
  }
`;

export const NavItem = styled.li`
  margin-bottom: 10px;
`;

// Using RouterNavLink for internal links to ensure proper routing
export const FooterNavLink = styled(RouterNavLink)`
  color: #cccccc;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #E8A509; // Hover color
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  @media screen and (max-width: 992px) {
    align-items: center; // Center contact info when wrapped
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start; // Align icon and text at the top
  gap: 10px;
  color: #cccccc;
  font-size: 15px;

  & svg {
    font-size: 20px;
    color: #E8A509; // Icon color
    flex-shrink: 0; // Prevent icon from shrinking
  }
  
  // Link styling for mailto and location
  & a {
    color: #cccccc;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #E8A509;
    }
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid #333; // Line above copyright
  padding-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #cccccc;
  max-width: 1200px;
  margin: 0 auto;
`;