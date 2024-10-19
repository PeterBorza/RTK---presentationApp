import Navigation from "features/Navigation";
import { Outlet } from "react-router-dom";
import useHotKeys from "common/useHotKeys";
import useDocumentTitle from "./useDocumentTitle";

const App = () => {
  useHotKeys();
  useDocumentTitle();

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default App;
