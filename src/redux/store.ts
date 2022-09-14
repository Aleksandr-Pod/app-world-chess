import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { authApi } from "./authAPI";
import { curentToken } from "./sliceToken";
import { curentWsID } from "./sliceWsID";
import { colorGame } from "./sliceColor";
import { curentUser } from "./sliceUserName";
import { activeGame } from "./gameIdx";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const tokenPersistConfig = {
    key: "chessWorld",
    storage,
    whitelist: ["token", "colorGame"],
};

const rootReduser = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    token: curentToken.reducer,
    userName: curentUser.reducer,
    colorGame: colorGame.reducer,
    WsID: curentWsID.reducer,
    activeGame: activeGame.reducer
});

const persistedReducer = persistReducer(tokenPersistConfig, rootReduser);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(authApi.middleware),
});

export const persistor = persistStore(store);
