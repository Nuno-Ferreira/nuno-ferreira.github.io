import React from "react";
import logo from "../logo.svg";
import { FaFreeCodeCamp, FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa";
import { StyledFooter, FooterLink, FooterMenu, FooterLogo } from "./FooterElements";

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <FooterMenu>
                    <FooterLink to="https://reactjs.org" target="_blank" activeStyle>
                        <FooterLogo src={logo} />
                        Created with React.js
                    </FooterLink>
                </FooterMenu>
                <FooterMenu>
                    <FooterLink to="/" activeStyle>
                        <FaCopyright />
                        Created by Nuno Ferreira
                    </FooterLink>
                </FooterMenu>
                <FooterMenu>
                    <FooterLink to="https://www.linkedin.com/in/nuno-ferreira-2950741b8/" target="_blank" activeStyle>
                        <FaLinkedin />
                        LinkedIn
                    </FooterLink>
                    <FooterLink to="https://github.com/Nuno-Ferreira" target="_blank" activeStyle>
                        <FaGithub />
                        GitHub
                    </FooterLink>
                    <FooterLink to="https://www.freecodecamp.org/Nunoferreira12" target="_blank" activeStyle>
                        <FaFreeCodeCamp />
                        freeCodeCamp Profile
                    </FooterLink>
                </FooterMenu>
            </StyledFooter>
        </>
    );
}

export default Footer;
