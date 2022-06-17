import React from "react";
import Dropdown from "./index";
import { DropdownPositionType } from "./sub-components/DropdownList";
import { DropdownContextProvider } from "./context";

export type DropLabelType = string | React.ReactNode;

export interface DropContainerProps {
    onToggleMenu?: () => void;
    position?: DropdownPositionType;
    toggleDisableTrigger?: boolean;
    label?: DropLabelType;
}

const DropdownContainer: React.FC<DropContainerProps> = ({
    onToggleMenu,
    position = "bottom",
    toggleDisableTrigger = false,
    label = "",
    children,
}) => {
    /*
    /* use Dropdown.MenuItem to render the dropdown list !!!
    */

    return (
        <DropdownContextProvider>
            <Dropdown>
                <Dropdown.Trigger
                    onToggleMenu={() => onToggleMenu && onToggleMenu()}
                    isDisabled={toggleDisableTrigger}
                    label={label}
                />
                <Dropdown.DropdownList position={position}>{children}</Dropdown.DropdownList>
            </Dropdown>
        </DropdownContextProvider>
    );
};

export default DropdownContainer;
