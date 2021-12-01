import React, { createContext, ReactNode } from "react";

import { v4 as uuid } from "uuid";
import Home from "../components/Home";
import { Bubbles } from "../components/bubble-story";
import { Photos, Game } from "../components/memoryGame-story";
import { Building } from "../components/building-story";
import { Utilities } from "../components/utility-package";
import { Url } from "../app/constants";

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
			label: Url.GAS,
			id: uuid(),
			element: <Utilities utility={Url.GAS} />,
		},
		{
			to: "/light",
			label: Url.LIGHT,
			id: uuid(),
			element: <Utilities utility={Url.LIGHT} />,
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
