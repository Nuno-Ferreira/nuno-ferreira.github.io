import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #253653;
    color: #fff;
`;

export const PageTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
`;

export const PageDescription = styled.p`
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
`;

export const PageButton = styled.button`
    background: #4d4dff;
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
    &:hover {
        background: #8080ff;
    }
`;

export const PageImage = styled.img`
    width: 50%;
    height: auto;
    margin-bottom: 1rem;
`;
