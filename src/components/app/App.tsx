import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useIsActivTokenQuery } from "redux/authAPI";
import { isUserName } from "redux/sliceUserName";
import { newWsID } from "redux/sliceWsID";
import { socketUrl } from "redux/testURL";
import { setActiveGameIdx, setUserInGame } from "redux/gameIdx";
import useWebSocket, { ReadyState } from "react-use-websocket";

import Layout from "layouts/Layout";
import { toast } from "react-toastify";
import PrivateRoute from "components/privateRoute/PrivateRoute";
import PublicRoute from "components/publicRoute/PublicRoute";
import Statistics from "components/statistics/Statistics";
import HomeTab from "components/homeTab/HomeTab";
import GameBoard from "components/gameBoard/GameBoard";
import { reqWsStartApp } from "helpers/requestWs";


const LoginPage = React.lazy(() => import("views/loginPage/LoginPage"));
const RegisterPage = React.lazy(() => import("views/registerPage/RegisterPage"));
const DashboardPage = React.lazy(() => import("views/dashboardPage/DashboardPage"));

function App() {
    const [curentG, setCurentG] = useState(false);
    const color = useSelector((state: any) => state.colorGame);
    const token = useSelector((state: any) => state.token);
    const userName: string = useSelector((state: any) => state.userName);
    const dispatch = useDispatch();
    const { data: auth } = useIsActivTokenQuery("", { skip: !token }); // const [messageHistory, setMessageHistory] = useState([]);
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl); // єто вызывает труднсти с делегированием логики так как нехочеться обрывать подключение попробуем пропсами отправлять стейт в доску

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const connectionStatus = {
        [ReadyState.CONNECTING]: "Connecting",
        [ReadyState.OPEN]: "Open",
        [ReadyState.CLOSING]: "Closing",
        [ReadyState.CLOSED]: "Closed",
        [ReadyState.UNINSTANTIATED]: "Uninstantiated",
    }[readyState];

    useEffect(() => {
        if (auth === undefined) {
            return;
        }
        dispatch(isUserName(auth.user.name));
    }, [auth, dispatch]);

    useEffect(() => {
        if (userName.length > 1) {
            if (lastMessage !== null) {
                const data = JSON.parse(lastMessage.data);
                const { mesRes } = data;
                console.log("last WS message:", mesRes);
                // если это первое подключение апп к серверу проверим не идет ли партия у игрока отправим метку старт на бек
                if (mesRes.message === "ws connect") {
                    dispatch(newWsID(mesRes.idWs));
                    sendMessage(JSON.stringify(reqWsStartApp(mesRes.idWs, token, color)));
                    return;
                }
                if (mesRes.message === "game") {
                    // если бек нашел какую то партию в базе то сообщим об этом юзеру и перенаправим его на страницу с доской
                    setCurentG(true);
                    toast.info(`We find curent game!${mesRes.idGame}`);
                    return;
                }   
                // отмена игры
                if (mesRes.message === "Game cancelled" ) {
                  toast.info(`${mesRes.user.name} cancelled the game time control ${mesRes.timeControl}`);
                    dispatch(setActiveGameIdx(""));
                    dispatch(setUserInGame(""));
                    return;
                }
                if (mesRes.joining) toast.info(mesRes.joining);
                if (mesRes.event === "startGame") {
                    toast.info(`${mesRes.user.name} choose the game time control ${mesRes.timeControl}`);
                    dispatch(setActiveGameIdx(mesRes.idx));
                    dispatch(setUserInGame(mesRes.user.name));
                }
                // if (mesRes.event === "stopGame") {
                //     toast.info(`${mesRes.user.name} cancelled the game time control ${mesRes.timeControl}`);
                //     dispatch(setActiveGameIdx(""));
                //     dispatch(setUserInGame(""));
                // }
                // если нет текущей игры ничего не происходит
                console.log("no find curent game...");
            }
        }
    }, [dispatch, lastMessage, sendMessage, token, userName, setCurentG, color]);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <DashboardPage curentG={curentG} />
                            </PrivateRoute>
                        }
                    >
                        <Route
                            path="/home"
                            element={
                                <PrivateRoute>
                                    <HomeTab connect={{ sendMessage, readyState, lastMessage }} />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/statistic"
                            element={
                                <PrivateRoute>
                                    <Statistics />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/game"
                            element={
                                <PrivateRoute>
                                    <GameBoard connect={{ sendMessage, readyState, lastMessage }} />
                                </PrivateRoute>
                            }
                        />
                    </Route>
                    <Route
                        path="/register"
                        element={
                            <PublicRoute>
                                <RegisterPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <PublicRoute>
                                <LoginPage />
                            </PublicRoute>
                        }
                    />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
