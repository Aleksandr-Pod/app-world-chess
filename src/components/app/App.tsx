import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useIsActivTokenQuery } from "redux/authAPI";
import { isUserName } from "redux/sliceUserName";
import { newWsID } from "redux/sliceWsID";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Layout from "layouts/Layout";
import PrivateRoute from "components/privateRoute/PrivateRoute";
import PublicRoute from "components/publicRoute/PublicRoute";
import Statistics from "components/statistics/Statistics";
import HomeTab from "components/homeTab/HomeTab";
import GameBoard from "components/gameBoard/GameBoard";
const socketUrl = "ws://localhost:5000/";

const LoginPage = React.lazy(() => import("views/loginPage/LoginPage"));
const RegisterPage = React.lazy(() => import("views/registerPage/RegisterPage"));
const DashboardPage = React.lazy(() => import("views/dashboardPage/DashboardPage"));

function App() {
    const token = useSelector((state: any) => state.token);
    const color = useSelector((state: any) => state.colorGame);
    const dispatch = useDispatch();
    const { data: auth } = useIsActivTokenQuery("", { skip: !token }); // const [messageHistory, setMessageHistory] = useState([]);
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

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
        if (lastMessage !== null) {
            const data = JSON.parse(lastMessage.data);
            console.log(data);
            if (data.idWs) {
                dispatch(newWsID(data.idWs));
            }
            if (data?.game?.id) {
                console.log("find curent game!");
            }
            sendMessage(JSON.stringify({ idWs: data.idWs, token, color, event: "start" }));
        }
    }, [auth, color, dispatch, lastMessage, sendMessage, token]);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <DashboardPage />
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
                                    <GameBoard />
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
