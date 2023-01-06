import { useState } from "react";
import { useAppRedux } from "app";
import { useForm, useToggle, useWindowSize } from "hooks";
import {
    CheckBox,
    DropSelect,
    Scroller,
    ToggleButton,
    Range,
    TextInput,
    Form,
    Button,
    UserField,
} from "shared-components";
import { icons, rainPhotos } from "utils";

import { MenuType } from "shared-components/DropSelect/DropSelect";
import DemoBox from "./DemoBox";

import classNames from "classnames";
import styles from "./Home.module.scss";

const Home = () => {
    const { isDarkMode } = useAppRedux();
    const { width } = useWindowSize();
    const SMALL_SCREEN = width < 600;

    const [label, setLabel] = useState<MenuType>("Select");
    const [range, setRange] = useState(50);
    const [enableDot, toggleDot] = useToggle(false);
    const [clr, setClr] = useState("");
    const [userField, setUserField] = useState("");

    const { values, changeHandler, resetValues } = useForm({ name: "" });

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        setLabel(values.name);
        resetValues();
    };

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

    const renderCheckBoxes = (item: string) => (
        <CheckBox
            key={item}
            onChange={(isChecked: boolean) => setClr(isChecked ? item : "")}
            value={item}
            name={item}
            label={item}
        />
    );

    return (
        <div className={containerClasses} style={{ backgroundColor: clr }}>
            <DemoBox componentName="Scroller" darkMode={isDarkMode}>
                <Scroller scrollerTitle={label as string} images={rainPhotos} size="small" />
            </DemoBox>
            <DemoBox componentName="DropSelect" darkMode={isDarkMode}>
                <div className={styles.dropContainer}>
                    <DropSelect menu={mockMenuList} onSelect={element => setLabel(element)} />
                </div>
            </DemoBox>
            <DemoBox componentName="ToggleButton" darkMode={isDarkMode}>
                <ToggleButton
                    darkMode={isDarkMode}
                    enabled={enableDot}
                    toggleEnabled={() => toggleDot()}
                    size="xxl"
                />
            </DemoBox>
            <DemoBox componentName="CheckBox" darkMode={isDarkMode}>
                {colors.map(renderCheckBoxes)}
            </DemoBox>
            <DemoBox componentName="Range" darkMode={isDarkMode}>
                <Range
                    name="left"
                    value={range}
                    onChange={(value: number) => setRange(value)}
                    darkMode={isDarkMode}
                />
            </DemoBox>
            <DemoBox componentName="UserField" darkMode={isDarkMode}>
                <UserField
                    name="userField"
                    value={userField}
                    onSubmit={value => setUserField(value)}
                    isDark={isDarkMode}
                    size="medium"
                    placeHolder="type to validate submit"
                />
            </DemoBox>
            <DemoBox componentName="Form" darkMode={isDarkMode}>
                <Form
                    formTitle="Scroller title"
                    renderFields={
                        <TextInput
                            value={values.name}
                            onChange={changeHandler}
                            name={"name"}
                            isValid={isNaN(+values.name)}
                        />
                    }
                    onSubmit={submitHandler}
                    onCancel={resetValues}
                    width="xxl"
                    disabled={values.name === ""}
                />
            </DemoBox>
            <DemoBox componentName="Button" darkMode={isDarkMode}>
                <Button value={icons.bars} onClick={() => setLabel("Select")} />
            </DemoBox>
        </div>
    );
};

export default Home;
