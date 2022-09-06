import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { BackgroundProfile } from "./DashboardPage.style";
import AppBarMobi from "components/appBar/AppBarMobi";
import Media from "react-media";
import AppBarPC from "components/appBar/AppBarPC";
import PropTypes from "prop-types";

// eslint-disable-next-line @typescript-eslint/no-redeclare
type PropTypes = {
    curentG: any;
};

const DashboardPage: React.FC<PropTypes> = ({ curentG }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!curentG) {
            navigate("/home");
        } else {
            navigate("/game");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BackgroundProfile>
            <Media query="(max-width: 767px)" render={() => <AppBarMobi />} />
            <Media query="(min-width: 768px)" render={() => <AppBarPC />} />
            <Outlet />
        </BackgroundProfile>
    );
};

export default DashboardPage;
