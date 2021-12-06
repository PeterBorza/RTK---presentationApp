import React, { createContext, ReactNode } from "react";

import { v4 as uuid } from "uuid";
import Home from "../components/Home";
import { Bubbles } from "../components/bubble-story";
import { Photos, Game } from "../components/memoryGame-story";
import { Building } from "../components/building-story";
import { UtilityContainer } from "../components/Utilities";

interface LinkProps {
	children: React.ReactNode;
}

interface ProviderProps {
	to: string;
	label: string;
	id: string;
	element: ReactNode;
}

export const LinkContext = createContext<ProviderProps[] | null>(null);

export const LinkContextProvider = ({ children }: LinkProps) => {
	const routes: ProviderProps[] = [
		{
			to: "/",
			label: "home",
			id: uuid(),
			element: <Home />,
		},
		{
			to: "/utilities",
			label: "utilities",
			id: uuid(),
			element: <UtilityContainer />,
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
