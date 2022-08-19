import React from "react";
import { BackgroundAppBarPC, Link } from "./AppBar.styled";

const AppBarPC = () => {
    return (
        <BackgroundAppBarPC>
            <Link to="/home">Chess-World</Link>
        </BackgroundAppBarPC>
    );
};

export default AppBarPC;
