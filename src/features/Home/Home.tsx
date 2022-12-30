import { useToggle, useWindowSize } from "hooks";
import { CheckBox, DropSelect, Scroller, ToggleButton, Range } from "shared-components";

import classNames from "classnames";
import styles from "./Home.module.scss";
import { rainPhotos } from "utils";
import { FC, useCallback, useState } from "react";
import { MenuType } from "shared-components/DropSelect/DropSelect";
import { useAppRedux } from "app";

const Home = () => {
    const { isDarkMode } = useAppRedux();
    const { width } = useWindowSize();
    const SMALL_SCREEN = width < 600;
    const [label, setLabel] = useState<MenuType>("Select");
    const [range, setRange] = useState(10);
    const [enableDot, toggleDot] = useToggle(false);
    const [clr, setClr] = useState("");

    const mockMenuList = [
        "1 pair",
        "2 pairs",
        "3 of a kind",
        "straight",
        "full house",
        "flush",
        "quads",
        "straight flush",
        "very long word to see how it behaves when in container",
    ];

    const colors = ["green", "red", "blue", "olive"];

    const containerClasses = classNames(styles.container, {
        [styles.container__small]: SMALL_SCREEN,
        [styles.container__darkMode]: isDarkMode,
    });

    const renderCheckBoxes = (item: string) => {
        return (
            <CheckBox
                key={item}
                onChange={() => setClr(item)}
                value={item}
                name={item}
                label={item}
                isChecked={clr === item}
            />
        );
    };

    const HomeBox: FC = ({ children }) => <div className={styles.homeBox}>{children}</div>;

    return (
        <div className={containerClasses} style={{ backgroundColor: clr }}>
            <HomeBox>
                <Scroller scrollerTitle={label as string} images={rainPhotos} />
            </HomeBox>

            <HomeBox>
                <div className={styles.dropContainer}>
                    <DropSelect menu={mockMenuList} onSelect={element => setLabel(element)} />
                </div>
            </HomeBox>

            <HomeBox>
                <ToggleButton
                    darkMode={isDarkMode}
                    enabled={enableDot}
                    toggleEnabled={() => toggleDot()}
                    size="xxl"
                />
            </HomeBox>

            <HomeBox>{colors.map(renderCheckBoxes)}</HomeBox>

            <HomeBox>
                <Range name="left" value={range} onChange={(value: number) => setRange(value)} />
            </HomeBox>
        </div>
    );
};

export default Home;
