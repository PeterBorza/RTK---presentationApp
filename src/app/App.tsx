import Navigation from "features/Navigation";
import { LinkContextProvider } from "context";
import { Outlet } from "react-router-dom";

export default () => (
    <>
        <LinkContextProvider>
            <Navigation />
        </LinkContextProvider>
        <Outlet />
    </>
);
