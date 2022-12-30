import { useState } from "react";
import { useAppRedux } from "app";
import { useToggle, useWindowSize } from "hooks";
import { CheckBox, DropSelect, Scroller, ToggleButton, Range } from "shared-components";
import { rainPhotos } from "utils";

import { MenuType } from "shared-components/DropSelect/DropSelect";
import DemoBox from "./DemoBox";

import classNames from "classnames";
import styles from "./Home.module.scss";

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

    const colors = ["green", "red", "blue", "olive", "rgb(40, 64, 73)"];

    const containerClasses = classNames(styles.container, {
        [styles.container__small]: SMALL_SCREEN,
        [styles.container__darkMode]: isDarkMode,
    });

    const renderCheckBoxes = (item: string) => (
        <CheckBox
            key={item}
            onChange={() => setClr(item)}
            value={item}
            name={item}
            label={item}
            isChecked={clr === item}
        />
    );

    return (
        <div className={containerClasses} style={{ backgroundColor: clr }}>
            <DemoBox>
                <Scroller scrollerTitle={label as string} images={rainPhotos} size="medium" />
            </DemoBox>
            <DemoBox>
                <div className={styles.dropContainer}>
                    <DropSelect menu={mockMenuList} onSelect={element => setLabel(element)} />
                </div>
            </DemoBox>
            <DemoBox>
                <ToggleButton
                    darkMode={isDarkMode}
                    enabled={enableDot}
                    toggleEnabled={() => toggleDot()}
                    size="xxl"
                />
            </DemoBox>
            <DemoBox>{colors.map(renderCheckBoxes)}</DemoBox>
            <DemoBox>
                <Range name="left" value={range} onChange={(value: number) => setRange(value)} />
            </DemoBox>
        </div>
    );
};

export default Home;
