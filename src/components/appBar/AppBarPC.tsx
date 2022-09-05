import React from "react";
import { BackgroundAppBarPC, Link } from "./AppBar.styled";
import UserMenuPC from "components/userMenu/UserMenuPC";

const AppBarPC = () => {
    return (
        <BackgroundAppBarPC>
            <Link to="/home">Chess-World</Link>
            <UserMenuPC />
        </BackgroundAppBarPC>
    );
};

export default AppBarPC;
