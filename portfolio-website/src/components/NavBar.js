import React from "react";
import headshot from "../headshot.png";
import { Nav, NavLink, NavMenu, NavLogo } from "./NavBarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLogo src={headshot} />
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
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