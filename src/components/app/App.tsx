import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useIsActivTokenQuery } from "redux/authAPI";
import { isUserName } from "redux/sliceUserName";
import Layout from "layouts/Layout";
import PrivateRoute from "components/privateRoute/PrivateRoute";
import PublicRoute from "components/publicRoute/PublicRoute";
import Statistics from "components/statistics/Statistics";
import HomeTab from "components/homeTab/HomeTab";
import GameBoard from "components/gameBoard/GameBoard";

const LoginPage = React.lazy(() => import("views/loginPage/LoginPage"));
const RegisterPage = React.lazy(() => import("views/registerPage/RegisterPage"));
const DashboardPage = React.lazy(() => import("views/dashboardPage/DashboardPage"));

function App() {
    const token = useSelector((state: any) => state.token);
    const dispatch = useDispatch();
    const { data: auth } = useIsActivTokenQuery("", { skip: !token });

    useEffect(() => {
        if (auth === undefined) {
            return;
        }
        dispatch(isUserName(auth.user.name));
    }, [auth, dispatch]);

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
                                    <HomeTab />
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
