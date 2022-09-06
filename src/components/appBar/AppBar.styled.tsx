import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const BackgroundAppBarMobi = styled.div`
    background-color: #7a5739;
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 60px;
    padding: 15px;
`;

export const BackgroundAppBarPC = styled.div`
    background-color: #b6c0d6;
    // justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100vh;
    padding: 15px;
`;
export const Link = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    color: #d1d1d1;
    font-weight: 700;
    font-size: 20px;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.1);
    }
    @media (min-width: 768px) {
        color: #1a1a1a;
    }
`;
