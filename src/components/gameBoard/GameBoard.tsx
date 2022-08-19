import React, { useEffect, useState } from "react";
import Media from "react-media";
import { ChessBoardMobi, ChessBoardPC, BoxGame } from "./GameBoard.styled";
import HelperBoardMobi from "components/helperBoard/HelperBoardMobi";
import HelperBoardPC from "components/helperBoard/HelperBoardPC";
import { Square } from "./GameBoard.styled";

const GameBoard = () => {
    const [board, setBoard] = useState([0]);

    useEffect(() => {
        let boardEmpty: Array<number> = [];
        const createSquare = () => {
            for (let cord = 0; cord < 64; cord++) {
                boardEmpty.push(0);
            }
            setBoard(boardEmpty);
        };
        createSquare();
        console.log(board);
    }, []);
    return (
        <BoxGame>
            <Media
                query="(max-width: 767px)"
                render={() => (
                    <ChessBoardMobi>
                        {board.map((element, index, array) => {
                            const clr = ((index % 8) + Math.floor(index / 8)) % 2 ? "black" : "wite";
                            return <Square color={clr}>{clr}</Square>;
                        })}
                    </ChessBoardMobi>
                )}
            />
            <Media
                query="(min-width: 768px)"
                render={() => (
                    <ChessBoardPC>
                        {board.map((element, index, array) => {
                            const clr = ((index % 8) + Math.floor(index / 8)) % 2 ? "black" : "wite";
                            return <Square color={clr}>{clr}</Square>;
                        })}
                    </ChessBoardPC>
                )}
            />
            <Media query="(max-width: 767px)" render={() => <HelperBoardMobi />} />
            <Media query="(min-width: 768px)" render={() => <HelperBoardPC />} />
        </BoxGame>
    );
};

export default GameBoard;
