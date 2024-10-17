import { Container } from "shared-components";
import { useAppRedux } from "app";

const DUMMY_TEXT = "This is from the consumer";

const GuessGame = () => {
  const { isDarkMode } = useAppRedux();

  const renderHeader = () => {
    return <div>{DUMMY_TEXT} header</div>;
  };

  const renderSideBar = () => {
    return <div>{DUMMY_TEXT} sidebar</div>;
  };

  return (
    <Container darkMode={isDarkMode} header={renderHeader} sideBar={renderSideBar}>
      {DUMMY_TEXT} body
    </Container>
  );
};

export default GuessGame;
