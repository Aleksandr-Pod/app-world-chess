import React, { useState } from "react";
import { ReadyState } from "react-use-websocket";
// import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { reqWsStartGame, reqWsStopGame } from "../../helpers/requestWs";
import Modal from "../modal/Modal";
import ModalFindGame from "../modalFindGame/ModalFindGame";
import { BackgroundGameMenu, ButtonTimeGame, TimeControl } from "./GameMenu.styled";
import { setActiveGameIdx, setUserInGame } from "redux/gameIdx";

// eslint-disable-next-line @typescript-eslint/no-redeclare
type PropTypes = {
    connect: { sendMessage: any; readyState: any; lastMessage: any };
};

const GameMenu: React.FC<PropTypes> = ({ connect }) => {
    const [modal, setModal] = useState(false);
    const idWs = useSelector((state: any) => state.idWs);
    const color = useSelector((state: any) => state.colorGame); // мі храним цвет последней сыгранной партии в кеше для того чтоб чередовать его на беке
    const token = useSelector((state: any) => state.token);
    const user = useSelector ((state: any) => state.userName);
    const {gameIdx, userInGame} = useSelector((state: any) => state.activeGame);
    const [typeGame, setTypeGame] = useState("standart");
    const { sendMessage, readyState } = connect;
    const dispatch = useDispatch();

    console.log("readyState:", readyState);
    console.log("ReadyState.OPEN:", ReadyState.OPEN);

    const gameRegim = () => {
        setTypeGame((prev) => (prev === "standart" ? "fisher" : "standart"));
    };

    const handleClickSendMessage = async (timeControl: number, timePluse: number, idx: number) => {
        setModal(true);
        try {
            sendMessage(JSON.stringify(reqWsStartGame(timeControl, timePluse, typeGame, token, color, idWs, idx)));
            dispatch(setActiveGameIdx(idx));
            dispatch(setUserInGame(user + userInGame));
            toast.info(`Waiting for second player ${timeControl} + ${timePluse} min, wait please...`);
        } catch (error) {
            toast.error("error");
        }
    };

    return (
        <BackgroundGameMenu>
            {modal ? (
                <Modal
                    onModalClose={() => {
                        sendMessage(JSON.stringify(reqWsStopGame( token, idWs, gameIdx, user)));
                        dispatch(setActiveGameIdx(""));
                        dispatch(setUserInGame(""));
                        setModal(false);
                    }}
                >
                    <ModalFindGame
                        onModalClose={() => {
                            sendMessage(JSON.stringify(reqWsStopGame( token, idWs, gameIdx, user)));
                            dispatch(setActiveGameIdx(""));
                            dispatch(setUserInGame(""));
                            setModal(false);
                        }}
                    ></ModalFindGame>
                </Modal>
            ) : null}
            <ButtonTimeGame onClick={() => handleClickSendMessage(1, 0, 1)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>1min</TimeControl>
                {gameIdx === 1 && (<><hr/><br/><p>{userInGame}</p></>)}
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(3, 0, 2)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>3min</TimeControl>
                {gameIdx === 2 && (<><hr/><br/><p>{userInGame}</p></>)}
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(5, 0, 3)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>5min</TimeControl>
                {gameIdx === 3 && (<><hr/><br/><p>{userInGame}</p></>)}
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(1, 1, 4)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>1min+1s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(3, 2, 5)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>3min+2s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(5, 3, 6)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>5min+3s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(10, 5, 7)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>10min+5s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(15, 10, 8)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>15min+10s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage(30, 30, 9)} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>30min+30s</TimeControl>
            </ButtonTimeGame>
            <span>
                <button onClick={gameRegim}>
                    Choose Level
                    <br />
                    {typeGame}
                </button>
            </span>
        </BackgroundGameMenu>
    );
};

export default GameMenu;
