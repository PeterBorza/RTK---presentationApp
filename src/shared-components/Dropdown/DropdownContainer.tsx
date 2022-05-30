import React from "react";
import Dropdown from "./index";
import { DropdownPositionType } from "./sub-components/DropdownList";
import { DropdownContextProvider } from "./context";

export type DropLabelType = string | React.ReactNode;

export interface DropContainerProps<T> {
    menuList: T[];
    onToggleMenu?: () => void;
    renderMenuItem: (item: T) => React.ReactNode;
    position?: DropdownPositionType;
    toggleDisableTrigger?: boolean;
    title?: string;
    label?: DropLabelType;
}

const DropdownContainer = <T extends unknown>({
    menuList,
    onToggleMenu,
    renderMenuItem,
    position = "bottom",
    toggleDisableTrigger = false,
    title = "toggle",
    label = "Click",
}: DropContainerProps<T>) => {
    /*
    /* use Dropdown.MenuItem to render the dropdown list !!!
    */

    return (
        <DropdownContextProvider>
            <Dropdown label={label}>
                <Dropdown.Trigger
                    onToggleMenu={() => onToggleMenu && onToggleMenu()}
                    isDisabled={toggleDisableTrigger}
                    label={label}
                ></Dropdown.Trigger>
                <Dropdown.DropdownList position={position}>
                    {menuList?.map((item, i) => (
                        <Dropdown.MenuItem key={`drop-item-${i}`}>
                            {renderMenuItem(item)}
                        </Dropdown.MenuItem>
                    ))}
                </Dropdown.DropdownList>
            </Dropdown>
        </DropdownContextProvider>
    );
};

export default DropdownContainer;
