import React from "react";
import headshot from "../headshot.png";
import { Nav, NavLink, NavMenu, NavLogo } from "./NavBarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                    <NavLogo src={headshot} />
                        Nuno Ferreira
                    </NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
