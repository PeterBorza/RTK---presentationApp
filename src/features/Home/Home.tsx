
import useHotKeys from "common/useHotKeys";
import { useDocumentTitle } from "app";

const Home = () => {
  useHotKeys();
  useDocumentTitle();


  };
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Home;
