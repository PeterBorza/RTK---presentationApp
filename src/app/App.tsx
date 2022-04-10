import Navigation from "../features/Navigation";
import { LinkContextProvider } from "../context";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <>
            <LinkContextProvider>
                <Navigation />
            </LinkContextProvider>
            <Outlet />
        </>
    );
};

export default App;
