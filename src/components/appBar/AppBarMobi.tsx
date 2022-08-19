import React from "react";
import { BackgroundAppBarMobi, Link } from "./AppBar.styled";
import UserMenu from "../userMenu/UserMenu";

const AppBar = () => {
    return (
        <BackgroundAppBarMobi>
            <Link to="/home">Chess-World</Link>
            <UserMenu />
        </BackgroundAppBarMobi>
    );
};

export default AppBar;
