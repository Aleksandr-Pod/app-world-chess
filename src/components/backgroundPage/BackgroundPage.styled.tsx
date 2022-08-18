import styled from "@emotion/styled";
import chess from "../../images/chess.jpg";

export const BackgroundBox = styled.div`
    background-color: #4a4f5a;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(rgba(0, 0, 0, 0.31), rgba(0, 0, 0, 0.31)), url(${chess});
`;

export const BlurMainPage = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(5px);
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
`;
