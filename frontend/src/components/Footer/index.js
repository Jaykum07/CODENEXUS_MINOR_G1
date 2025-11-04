import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import {
  FooterContainer,
  FooterContent,
  FooterSection,
  LogoContainer,
  LogoImage,
  WebsiteName,
  Description,
  SocialIcons,
  SocialLink,
  SectionTitle,
  NavList,
  NavItem,
  FooterNavLink,
  ContactInfo,
  ContactItem,
  Copyright,
} from './styledComponents';

import LOGO_URL from '../../assets/logo_cn.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* --- About Section --- */}
        <FooterSection>
          <Link to="/">
            <LogoContainer>
              <LogoImage src={LOGO_URL} alt="Code Nexus Logo" />
              <WebsiteName>CODE NEXUS</WebsiteName>
            </LogoContainer>
          </Link>
          <Description>
            Code Nexus is our college tech community that empowers students to learn, build, and grow
            through coding, collaboration, and innovation. We organize hackathons, workshops, and
            projects that help members turn ideas into real impact.
          </Description>
          <SocialIcons>
            <SocialLink href="https://www.linkedin.com/in/code-nexus-jitb/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://instagram.com/codenexus.jitb" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
          </SocialIcons>
        </FooterSection>

        {/* --- Pages Section --- */}
        <FooterSection>
          <SectionTitle>Pages</SectionTitle>
          <NavList>
            <NavItem><FooterNavLink to="/">Home</FooterNavLink></NavItem>
            <NavItem><FooterNavLink to="/events">Upcoming Events</FooterNavLink></NavItem>
            <NavItem><FooterNavLink to="/resources">Resources</FooterNavLink></NavItem>
            <NavItem><FooterNavLink to="/contact">Contact Us</FooterNavLink></NavItem>
        
          </NavList>
        </FooterSection>

        {/* --- Contact Us Section --- */}
        <FooterSection>
          <SectionTitle>Contact Us</SectionTitle>
          <ContactInfo>
            <ContactItem>
              <FaEnvelope />
              <a href="mailto:codenexus.jitb@gmail.com">codenexus.jitb@gmail.com</a>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              JIT Borawan, Khargone <br /> Madhya Pradesh, India
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      {/* --- Copyright Section --- */}
      <Copyright>
        &copy; {new Date().getFullYear()} Code Nexus. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;