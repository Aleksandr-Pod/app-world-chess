import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/loader/Loader";

const Layout = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    );
};

export default Layout;
