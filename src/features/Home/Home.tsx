import useHotKeys from "common/useHotKeys";
import { useDocumentTitle } from "app";
import Navigation from "features/Navigation";
import { Outlet } from "react-router-dom";

const Home = () => {
  useHotKeys();
  useDocumentTitle();

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Home;
