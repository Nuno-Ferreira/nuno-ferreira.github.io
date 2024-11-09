import React from "react";
import logo from "../logo.svg";
import { StyledFooter, FooterLink, FooterMenu, FooterLogo } from "./FooterElements";

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <FooterMenu>
                    <FooterLink to="https://reactjs.org" activeStyle>
                        <FooterLogo src={logo} />
                        Created with React.js
                    </FooterLink>
                    <FooterLink to="https://www.linkedin.com/in/nuno-ferreira-2950741b8/" activeStyle>
                        LinkedIn
                    </FooterLink>
                    <FooterLink to="https://github.com/Nuno-Ferreira" activeStyle>
                        GitHub
                    </FooterLink>
                </FooterMenu>
            </StyledFooter>
        </>
    );
}

export default Footer;
