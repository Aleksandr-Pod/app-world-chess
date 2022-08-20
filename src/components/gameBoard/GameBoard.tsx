import React, { useEffect, useState } from "react";
import Media from "react-media";
import { ChessBoardMobi, ChessBoardPC, BoxGame } from "./GameBoard.styled";
import HelperBoardMobi from "components/helperBoard/HelperBoardMobi";
import HelperBoardPC from "components/helperBoard/HelperBoardPC";
import { Square } from "./GameBoard.styled";
import rookB from "../../images/Chess_rdt26.svg.png";
import rookW from "../../images/Chess_rlt26.svg.png";
import kingB from "../../images/Chess_tile_kd.svg.png";
import kingW from "../../images/Chess_tile_kl-whitebg.svg.png";
import quinB from "../../images/Chess_qdt26.svg.png";
import quinW from "../../images/Chess_tile_ql-whitebg.svg.png";
import nitB from "../../images/Chess_cdt45.svg.png";
import nitW from "../../images/Chess_clt26.svg.png";
import bishB from "../../images/Chess_tile_bd.svg.png";
import bishW from "../../images/Chess_tile_bl.svg.png";
import pinB from "../../images/Chess_tile_pd.svg.png";
import pinW from "../../images/Chess_tile_pl.svg.png";

const GameBoard = () => {
    const [board, setBoard] = useState([""]);

    useEffect(() => {
        const startPosition = "rnbqkbnrpppppppp88888888888888888888888888888888PPPPPPPPRNBQKBNR";
        const startPositionArr = startPosition.split("");
        // let boardEmpty: Array<string> = ["8"];
        const createSquare = () => {
            // for (let cord = 0; cord < 64; cord++) {
            //     boardEmpty.push("0");
            // }
            setBoard(startPositionArr);
        };
        createSquare();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const showFigure = (cord: number, figure: string) => {
        let fig = "";
        if (figure === "n") {
            return nitW;
        }
        if (figure === "b") {
            return bishW;
        }
        if (figure === "q") {
            return quinW;
        }
        if (figure === "r") {
            return rookW;
        }
        if (figure === "p") {
            return pinW;
        }
        if (figure === "k") {
            return kingW;
        }
        if (figure === "B") {
            return bishB;
        }
        if (figure === "K") {
            return kingB;
        }
        if (figure === "Q") {
            return quinB;
        }
        if (figure === "R") {
            return rookB;
        }
        if (figure === "N") {
            return nitB;
        }
        if (figure === "P") {
            return pinB;
        }
        return fig;
    };
    return (
        <BoxGame>
            <Media
                query="(max-width: 767px)"
                render={() => (
                    <ChessBoardMobi>
                        {board.map((element, index, array) => {
                            const clr = ((index % 8) + Math.floor(index / 8)) % 2 ? "black" : "wite";
                            return (
                                <Square key={index} color={clr}>
                                    <img src={showFigure(index, element)} alt="" />
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
                                <Square color={clr}>
                                    <img src={showFigure(index, element)} alt="" />
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
