import React from "react";
import Dropdown from "./index";
import { DropdownPositionType } from "./sub-components/DropdownList";
import { DropdownContextProvider } from "./context";

export interface DropContainerProps<T> {
    menuList: T[];
    onToggleMenu?: () => void;
    renderTriggerTitle?: () => React.ReactNode;
    renderMenuItem: (item: T) => React.ReactNode;
    position?: DropdownPositionType;
    toggleDisableTrigger?: boolean;
    title?: string;
    label?: string;
}

const DropdownContainer = <T extends unknown>({
    menuList,
    onToggleMenu,
    renderTriggerTitle,
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
                    title={title}
                    isDisabled={toggleDisableTrigger}
                    label={label}
                >
                    {renderTriggerTitle && renderTriggerTitle()}
                </Dropdown.Trigger>
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
