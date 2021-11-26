import React, { createContext, ReactNode } from "react";

import { v4 as uuid } from "uuid";
import { Home } from "../components";
import { Bubbles } from "../components/bubble-story";
import { Colors, Photos, Game } from "../components/memoryGame-story";
import { Building } from "../components/building-story";
import { GasExpenses } from "../components/gas-story";

interface LinkProps {
	children: React.ReactNode;
}

interface ProviderProps {
	to: string;
	label: string;
	id: string;
	element: ReactNode;
}

type Props = ProviderProps[];

export const LinkContext = createContext<Props | null>(null);

export const LinkContextProvider = ({ children }: LinkProps) => {
	const routes: Props = [
		{
			to: "/",
			label: "home",
			id: uuid(),
			element: <Home />,
		},
		{
			to: "/building",
			label: "building",
			id: uuid(),
			element: <Building />,
		},
		{
			to: "/bubbles",
			label: "bubbles",
			id: uuid(),
			element: <Bubbles />,
		},
		{
			to: "/gas",
			label: "gas",
			id: uuid(),
			element: <GasExpenses />,
		},
		{
			to: "/colors",
			label: "colors",
			id: uuid(),
			element: <Colors />,
		},
		{
			to: "/photos",
			label: "photos",
			id: uuid(),
			element: <Photos />,
		},
		{
			to: "/game",
			label: "game",
			id: uuid(),
			element: <Game />,
		},
	];
	return (
		<LinkContext.Provider value={routes}>{children}</LinkContext.Provider>
	);
};
