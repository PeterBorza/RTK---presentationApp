import { IguessGameItem } from "../state";

import { FlipCard } from "shared-components";

type Props = {
  finishedGame: boolean;
  gameCombo: IguessGameItem[];
};

const HiddenCombo = ({ finishedGame, gameCombo }: Props) => {
  const comboItem = ({ id, color }: IguessGameItem) => {
    return (
      <div className="hidden_combo" key={id}>
        <FlipCard flipped={finishedGame}>
          <FlipCard.Front>
            <div key={id} className="front-card" />
          </FlipCard.Front>
          <FlipCard.Back darkBack>
            <div key={id} className="back-card" style={{ backgroundColor: color }} />
          </FlipCard.Back>
        </FlipCard>
      </div>
    );
  };
  return <div className="combination">{gameCombo.map(comboItem)}</div>;
};

export default HiddenCombo;
