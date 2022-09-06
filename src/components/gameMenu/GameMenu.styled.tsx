import styled from "@emotion/styled";
// import { Button } from "@mui/material";

export const BackgroundGameMenu = styled.div`
    background-color: #ccd4e7;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    height: 100vw;
    width: 100vw;
    @media (min-width: 768px) {
        flex-direction: row;
        height: 100vh;
        width: 100vh;
    }
`;

export const ButtonTimeGame = styled.button`
    color: #5f019e;
    background-color: ${({ theme }: any) => theme.colors.green};
    border-radius: 10px;
    box-shadow: -3px -3px 10px ${({ theme }: any) => theme.colors.accent};
    width: ${() => {
        return 100 / 4;
    }}%;
    height: ${() => {
        return 100 / 4;
    }}%;
    margin: ${() => {
        return 100 / 32;
    }}%;

    @media (min-width: 768px) {
    }
    :hover {
        background-color: ${({ theme }: any) => theme.colors.hoverGreen};
    }
`;

export const TimeControl = styled.span`
    color: #400053;
    font-weight: 600;
`;
