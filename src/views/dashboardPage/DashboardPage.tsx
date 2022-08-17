import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/home");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div>dashboard</div>;
};

export default DashboardPage;
