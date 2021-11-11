import { createContext, ReactNode, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export const SideBarContext = createContext<
	[boolean, Dispatch<SetStateAction<boolean>>]
>(false as any);

interface Props {
	children: ReactNode;
}

export const SideBarContextProvider = ({ children }: Props): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<SideBarContext.Provider value={[isOpen, setIsOpen]}>
			{children}
		</SideBarContext.Provider>
	);
};
