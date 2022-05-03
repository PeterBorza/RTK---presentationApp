import React from "react";

export type TriggerNameType = React.ReactNode | string;

export interface IDropContext {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    triggerName: TriggerNameType;
    setTriggerName: (value: TriggerNameType) => void;
}

const initialContext: IDropContext = {
    isOpen: false,
    setIsOpen: () => null,
    triggerName: "",
    setTriggerName: () => null,
};

export const DropdownContext = React.createContext<IDropContext>(initialContext);

export const DropdownContextProvider: React.FC = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [triggerName, setTriggerName] = React.useState<TriggerNameType>("");

    const context = React.useMemo(
        () => ({
            isOpen,
            setIsOpen,
            triggerName,
            setTriggerName,
        }),
        [isOpen, setIsOpen, triggerName, setTriggerName],
    );
    return <DropdownContext.Provider value={context}>{children}</DropdownContext.Provider>;
};
