export const reqWsStartApp = (idWs: string, token: string, color: string) => {
    const req = { idWs, token, event: "startApp", color };
    return req;
};
export const reqWsGame = (data: any) => {
    const req = { idWs: data.idWs, event: "game" };
    return req;
};
export const reqWsStartGame = (
    timeControl: number,
    timePluse: number,
    typeGame: string,
    token: string,
    idWs: string,
    color: "wite",
    idx: number
) => {
    const req = { idWs, typeGame, token, color, timeControl, timePluse, idx, event: "startGame" };
    return req;
};

export const reqWsStopGame = (
    token: string,
    idWs: string,
    gameIdx: number,
    user: string
) => {
    const req = { idWs, token, gameIdx, userInGame: user, event: "stopGame" };
    console.log("reqWsStopGame req:", req);
    return req;
};
