import React, { useEffect, useState } from "react";
import Media from "react-media";
import { ChessBoardMobi, ChessBoardPC, BoxGame, FigureImpg } from "./GameBoard.styled";
import HelperBoardMobi from "components/helperBoard/HelperBoardMobi";
import HelperBoardPC from "components/helperBoard/HelperBoardPC";
import { Square } from "./GameBoard.styled";
import showFigure from "helpers/showFigure";

const GameBoard = () => {
    const [board, setBoard] = useState([{ _id: 1, figure: "" }]);
    const [activFigure, setActivFigure] = useState({ _id: 1, figure: "" });

    useEffect(() => {
        const startPosition = "rnbqkbnrpppppppp88888888888888888888888888888888PPPPPPPPRNBQKBNR";
        const startPositionArr = startPosition.split("");
        let boardEmpty: any = [];
        const createSquare = () => {
            for (let cord = 0; cord < 64; cord++) {
                boardEmpty.push({ _id: cord, figure: startPositionArr[cord] });
            }
            setBoard(boardEmpty);
        };
        createSquare();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const eventHandler = (e: MouseEvent, index: number) => {
        if (activFigure.figure === "" || activFigure.figure === "8") {
            if (board[index].figure === "8" || board[index].figure === "") {
                return;
            }
            return setActivFigure(board[index]);
        }
        setBoard((prevSt) => {
            prevSt.splice(activFigure._id, 1, { _id: activFigure._id, figure: "" });
            prevSt.splice(index, 1, { _id: index, figure: activFigure.figure });
            return prevSt;
        });
        setActivFigure({ _id: 0, figure: "" });
    };

    // useEffect(() => {
    //     // console.log("active", activFigure);
    //     console.log("doska", board);
    // }, [activFigure, board]);

    return (
        <BoxGame>
            <Media
                query="(max-width: 767px)"
                render={() => (
                    <ChessBoardMobi>
                        {board.map((element, index, array) => {
                            const clr = ((index % 8) + Math.floor(index / 8)) % 2 ? "black" : "wite";
                            return (
                                <Square onClick={(e: any) => eventHandler(e, index)} key={index} color={clr}>
                                    <FigureImpg src={showFigure(index, element.figure)} alt="" />
                                </Square>
                            );
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
                            return (
                                <Square onClick={(e: any) => eventHandler(e, index)} key={index} color={clr}>
                                    <FigureImpg src={showFigure(index, element.figure)} alt="" />
                                </Square>
                            );
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
