import { v4 as uuid } from "uuid";
import React, { createContext, ReactNode } from "react";
import Home from "../components/Home";
import { Building } from "../components/building-story";
import { Bubbles } from "../components/bubble-story";
import { GasExpences, LightExpences } from "../components/house-keeping";
import { Colors } from "../components/memoryGame-story";

interface LinkProps {
	children: React.ReactNode;
}

interface ProviderProps {
	to: string;
	label: string;
	id: string;
	element: () => ReactNode;
}

type Props = ProviderProps[];

export const LinkContext = createContext<Props | null>(null);

export const LinkContextProvider = ({ children }: LinkProps) => {
	const routes: Props = [
		{
			to: "/",
			label: "home",
			id: uuid(),
			element: () => <Home />,
		},
		{
			to: "/building",
			label: "building",
			id: uuid(),
			element: () => <Building />,
		},
		{
			to: "/bubbles",
			label: "bubbles",
			id: uuid(),
			element: () => <Bubbles />,
		},
		{
			to: "/gas",
			label: "gas",
			id: uuid(),
			element: () => <GasExpences />,
		},
		{
			to: "/light",
			label: "light",
			id: uuid(),
			element: () => <LightExpences />,
		},
		{
			to: "/colors",
			label: "colors",
			id: uuid(),
			element: () => <Colors />,
		},
	];
	return (
		<LinkContext.Provider value={routes}>{children}</LinkContext.Provider>
	);
};
