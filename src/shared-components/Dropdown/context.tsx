import React from "react";
import { useToggle } from "hooks";

export type TriggerNameType = React.ReactNode | string;

export interface IDropContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  triggerName: TriggerNameType;
  setTriggerName: (value: TriggerNameType) => void;
  toggle: () => void;
}

const initialContext: IDropContext = {
  isOpen: false,
  setIsOpen: () => null,
  triggerName: "",
  setTriggerName: () => null,
  toggle: () => null,
};

export const DropdownContext = React.createContext<IDropContext>(initialContext);

export const DropdownContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [isOpen, toggle, setIsOpen] = useToggle(false);
  const [triggerName, setTriggerName] = React.useState<TriggerNameType>("");

  const context = React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
      triggerName,
      setTriggerName,
      toggle,
    }),
    [isOpen, setIsOpen, triggerName, setTriggerName, toggle],
  );
  return <DropdownContext.Provider value={context}>{children}</DropdownContext.Provider>;
};
