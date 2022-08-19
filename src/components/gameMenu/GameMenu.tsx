import React from "react";
import { BackgroundGameMenu } from "./GameMenu.styled";
import { useNavigate } from "react-router-dom";

const GameMenu = () => {
    const navigate = useNavigate();

    return (
        <BackgroundGameMenu>
            <button onClick={() => navigate("/game")}>find game</button>
            <button onClick={() => navigate("/game")}>find game</button>
            <button onClick={() => navigate("/game")}>find game</button>
            <button onClick={() => navigate("/game")}>find game</button>
            <button onClick={() => navigate("/game")}>find game</button>
            <button onClick={() => navigate("/game")}>find game</button>
            <button onClick={() => navigate("/game")}>find game</button>
            <button onClick={() => navigate("/game")}>find game</button>
            <button onClick={() => navigate("/game")}>find game</button>
        </BackgroundGameMenu>
    );
};

export default GameMenu;
