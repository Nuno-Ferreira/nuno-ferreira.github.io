import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.footer`
    background: #151F30;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem calc((100vw - 1000px) / 2);
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 12;
`;

export const FooterLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #4d4dff;
    }
`;

export const FooterMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 1rem 0;
    }
`;

export const FooterLogo = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;
