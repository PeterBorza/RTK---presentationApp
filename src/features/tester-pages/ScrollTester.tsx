import React, { useState } from "react";

import { NavLinkUrls, useAppRedux } from "app";
import { useForm, useToggle } from "hooks";
import { icons, rainPhotos } from "utils";

import DemoBox from "../Home/DemoBox";
import { MenuType } from "shared-components/DropSelect/DropSelect";
import { PagesType } from "shared-components/ScrollPage/ScrollPage";

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
    ScrollPage as Pages,
} from "shared-components";

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

// TODO fix scrolling issue to Scroller, it is a component within a Hashlinked component

const ScrollTester = () => {
    const { isDarkMode } = useAppRedux();

    const [label, setLabel] = useState<MenuType>("Select");
    const [range, setRange] = useState(50);
    const [enableDot, toggleDot] = useToggle(false);
    const [clr, setClr] = useState("");
    const [userField, setUserField] = useState("");

    const renderCheckBoxes = (item: string) => (
        <CheckBox
            key={item}
            onChange={(isChecked: boolean) => setClr(isChecked ? item : "")}
            value={item}
            name={item}
            label={item}
        />
    );

    const { values, changeHandler, resetValues } = useForm({ name: "" });

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        setLabel(values.name);
        resetValues();
    };

    const insertToDemoBox = (content: JSX.Element, label?: string) => {
        const toSentenceCase = (text: string) =>
            text.trim().replace(text.charAt(0), text.charAt(0).toLocaleUpperCase());
        return (
            <DemoBox componentName={toSentenceCase(label!!)} darkMode={isDarkMode}>
                {content}
            </DemoBox>
        );
    };

    const testerPages: PagesType<JSX.Element>[] = [
        {
            id: "dropSelect",
            label: "drop-select",
            content: (
                <div style={{ backgroundColor: "cadetblue", width: "30%" }}>
                    <DropSelect menu={mockMenuList} onSelect={element => setLabel(element)} />
                </div>
            ),
        },
        {
            id: "toggleButton",
            label: "toggle-button",
            content: (
                <ToggleButton
                    darkMode={isDarkMode}
                    enabled={enableDot}
                    toggleEnabled={() => toggleDot()}
                    size="xxl"
                />
            ),
        },
        // {
        //     id: "scroller",
        //     label: "Scroller",
        //     content: (
        //         <DemoBox componentName="Scroller" darkMode={isDarkMode}>
        //             <Scroller
        //                 route={NavLinkUrls.TESTER}
        //                 scrollerTitle={label as string}
        //                 images={rainPhotos}
        //                 size="small"
        //             />
        //         </DemoBox>
        //     ),
        // },
        {
            id: "checkBoxes",
            label: "checkbox",
            content: (
                <div style={{ padding: "1rem", backgroundColor: clr, border: "1px solid white" }}>
                    {colors.map(renderCheckBoxes)}
                </div>
            ),
        },
        {
            id: "range",
            label: "range",
            content: (
                <Range
                    name="left"
                    value={range}
                    onChange={(value: number) => setRange(value)}
                    darkMode={isDarkMode}
                />
            ),
        },
        {
            id: "userField",
            label: "userField",
            content: (
                <UserField
                    name="userField"
                    value={userField}
                    onSubmit={(value: string) => setUserField(value)}
                    isDark={isDarkMode}
                    size="fullSize"
                    placeHolder="type to validate submit"
                />
            ),
        },
        {
            id: "form",
            label: "form",
            content: (
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
            ),
        },
        {
            id: "menuButton",
            label: "menu-button",
            content: <Button value={icons.bars} onClick={() => setLabel("Select")} />,
        },
    ];

    const toTesterPages = testerPages.map(item => ({
        ...item,
        content: insertToDemoBox(item.content, item.label),
    }));
    return <Pages baseUrl={NavLinkUrls.TESTER} pages={toTesterPages} isDarkMode />;
};

export default ScrollTester;
