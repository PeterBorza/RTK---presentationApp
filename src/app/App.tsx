import Navigation from "features/Navigation";
import { LinkContextProvider } from "context";
import { Outlet } from "react-router-dom";
import useHotKeys from "common/useHotKeys";
import useDocumentTitle from "./useDocumentTitle";

const App = () => {
    useHotKeys();
    useDocumentTitle();

    return (
        <LinkContextProvider>
            <Navigation />
            <Outlet />
        </LinkContextProvider>
    );
};

export default App;
