import styled from "@emotion/styled";

export const ChessBoardMobi = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100vw;
    height: 100vw;
    background-color: #fff5e8;
    border-width: 10px;
    border-color: #815c3b;
    border-style: solid;
`;

export const ChessBoardPC = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff7ec;
    width: 100vh;
    height: 100vh;
    color: #fde4c2;
    border-width: 50px;
    border-color: #815c3b;
    border-style: solid;
`;

export const BoxGame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    flex-grow: 1;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const Square = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: #838383;
    border-style: solid;
    width: ${() => {
        return 100 / 8;
    }}%;
    height: ${() => {
        return 100 / 8;
    }}%;
    background-color: ${({ color }: any) => (color === "black" ? "#9b7858" : "#fff")};
    color: ${({ color }: any) => (color === "black" ? "#f0eae5" : "#252525")};
`;
