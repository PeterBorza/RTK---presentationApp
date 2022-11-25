import Navigation from "features/Navigation";
import { LinkContextProvider } from "context";
import { Outlet } from "react-router-dom";

const App = () => (
    <LinkContextProvider>
        <Navigation />
        <Outlet />
    </LinkContextProvider>
);

export default App;
