import styled from "@emotion/styled";

export const BackgroundGameMenu = styled.div`
    background-color: #ccd4e7;
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vw;
    width: 100vw;
    @media (min-width: 768px) {
        flex-direction: row;
        height: 100vh;
        width: 100vh;
    }
`;
