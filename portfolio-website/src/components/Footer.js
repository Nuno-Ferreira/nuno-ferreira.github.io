import React from "react";
import logo from "../logo.svg";
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
                    <FooterLink to="https://www.linkedin.com/in/nuno-ferreira-2950741b8/" target="_blank" activeStyle>
                        LinkedIn
                    </FooterLink>
                    <FooterLink to="https://github.com/Nuno-Ferreira" target="_blank" activeStyle>
                        GitHub
                    </FooterLink>
                </FooterMenu>
            </StyledFooter>
        </>
    );
}

export default Footer;
