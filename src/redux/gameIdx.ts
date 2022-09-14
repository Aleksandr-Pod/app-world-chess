import { createSlice } from "@reduxjs/toolkit";

export const activeGame = createSlice({
    name: "activeGame",
    initialState: {gameIdx: "", userInGame: ""},
    reducers: {
        setActiveGameIdx(state, {payload}) {
            return {...state, gameIdx: payload};
        },
        setUserInGame(state, {payload}) {
            return {...state, userInGame: payload};
        }
    },
});

export const { setActiveGameIdx, setUserInGame } = activeGame.actions;