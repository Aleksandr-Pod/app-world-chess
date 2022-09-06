import React, { useEffect, useState } from "react";
import { BackgroundGameMenu, ButtonTimeGame, TimeControl } from "./GameMenu.styled";
import { ReadyState } from "react-use-websocket";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { reqWsStartGame } from "../../helpers/requestWs";
import Modal from "../modal/Modal";
import ModalFindGame from "../modalFindGame/ModalFindGame";

// eslint-disable-next-line @typescript-eslint/no-redeclare
type PropTypes = {
    connect: { sendMessage: any; readyState: any; lastMessage: any };
};

const GameMenu: React.FC<PropTypes> = ({ connect }) => {
    const [modal, setModal] = useState(false);
    const idWs = useSelector((state: any) => state.idWs);
    const color = useSelector((state: any) => state.colorGame); // мі храним цвет последней сыгранной партии в кеше для того чтоб чередовать его на беке
    const token = useSelector((state: any) => state.token);
    const [typeGame, setTypeGame] = useState("standart");
    const { sendMessage, readyState } = connect;

    const gameRegim = () => {
        setTypeGame((prev) => (prev === "standart" ? "fisher" : "standart"));
    };
    useEffect(() => {
        console.log(modal);
    }, [modal]);

    const handleClickSendMessage = async (timeControl: number, timePluse: number) => {
        setModal(true);
        try {
            sendMessage(JSON.stringify(reqWsStartGame(timeControl, timePluse, typeGame, token, color, idWs)));
            toast.info(`Finding game ${timeControl} + ${timePluse} min, wite please...`);
        } catch (error) {
            toast.error("error");
        }
    };

    return (
        <BackgroundGameMenu>
            {modal ? (
                <Modal
                    onModalClose={() => {
                        setModal(false);
                    }}
                >
                    <ModalFindGame
                        onModalClose={() => {
                            setModal(false);
                        }}
                    ></ModalFindGame>
                </Modal>
            ) : null}
            <ButtonTimeGame onClick={() => handleClickSendMessage(1, 0)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>1min</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(3, 0)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>3min</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(5, 0)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>5min</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(1, 1)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>1min+1s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(3, 2)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>3min+2s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(5, 3)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>5min+3s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(10, 5)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>10min+5s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(15, 10)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>15min+10s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(30, 30)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>30min+30s</TimeControl>
            </ButtonTimeGame>
            <span>
                <button onClick={gameRegim}>
                    choose regim
                    <br />
                    {typeGame}
                </button>
            </span>
        </BackgroundGameMenu>
    );
};

export default GameMenu;
