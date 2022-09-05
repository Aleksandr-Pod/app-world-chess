import React, { useCallback, useEffect, useState } from "react";
import { BackgroundGameMenu, ButtonTimeGame, TimeControl } from "./GameMenu.styled";
import { ReadyState } from "react-use-websocket";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-redeclare
type PropTypes = {
    connect: { sendMessage: any; readyState: any; lastMessage: any };
};

const GameMenu: React.FC<PropTypes> = ({ connect }) => {
    const token = useSelector((state: any) => state.token);
    const [type, setType] = useState("standart");
    const { sendMessage, readyState, lastMessage } = connect;
    const navigate = useNavigate();

    const gameRegim = () => {
        setType((prev) => (prev === "standart" ? "fisher" : "standart"));
    };

    const handleClickSendMessage = useCallback(
        (time: string) => {
            try {
                sendMessage(JSON.stringify({ time, type, token }));
                toast.info(`Finding game ${time} min, wite please...`);
            } catch (error) {
                toast.error("error");
            }
        },
        [sendMessage, token, type]
    );

    useEffect(() => {
        if (lastMessage !== null) {
            const data = JSON.parse(lastMessage.data);
            if (data?.game) {
                navigate("/game");
            }
        }
    }, [connect, lastMessage, navigate]);

    return (
        <BackgroundGameMenu>
            <ButtonTimeGame onClick={() => handleClickSendMessage("1")} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>1min</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage("3")} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>3min</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage("5")} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>5min</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage("1+1")} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>1min+1s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage("3+2")} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>3min+2s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage("5+3")} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>5min+3s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage("10+5")} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>10min+5s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage("15+10")} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>15min+10s</TimeControl>
            </ButtonTimeGame>
            <ButtonTimeGame onClick={() => handleClickSendMessage("30+30")} disabled={readyState !== ReadyState.OPEN}>
                find new game <TimeControl>30min+30s</TimeControl>
            </ButtonTimeGame>
            <span>
                <button onClick={gameRegim}>
                    choose regim
                    <br />
                    {type}
                </button>
            </span>
        </BackgroundGameMenu>
    );
};

export default GameMenu;
