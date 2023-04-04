import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export const Main: React.FC = () =>

    <div>
        <Header />
        < main >
            <Outlet />
        </ main >
        < Footer />
    </div>;