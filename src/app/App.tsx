import Navigation from "features/Navigation";
import { LinkContextProvider } from "context";
import { Outlet, useNavigate } from "react-router-dom";
import useHotKeys from "common/useHotKeys";
import { useEffect } from "react";
import useDocumentTitle from "./useDocumentTitle";

const App = () => {
    const navigate = useNavigate();
    const key = useHotKeys();

    useEffect(() => {
        key && navigate(key);
    }, [key, navigate]);

    useDocumentTitle();

    return (
        <LinkContextProvider>
            <Navigation />
            <Outlet />
        </LinkContextProvider>
    );
};

export default App;
