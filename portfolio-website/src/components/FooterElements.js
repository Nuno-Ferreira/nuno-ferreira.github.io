import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.footer`
    background: #151F30;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

export const FooterLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const FooterMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
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
