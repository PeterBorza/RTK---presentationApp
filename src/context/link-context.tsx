import React, { createContext, ReactNode } from "react";

import { v4 as uuid } from "uuid";
import {
	Home,
	buildingStory,
	bubbleStory,
	gasStory,
	memoryStory,
} from "../components";

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
			element: () => <buildingStory.Building />,
		},
		{
			to: "/bubbles",
			label: "bubbles",
			id: uuid(),
			element: () => <bubbleStory.Bubbles />,
		},
		{
			to: "/gas",
			label: "gas",
			id: uuid(),
			element: () => <gasStory.GasExpences />,
		},
		{
			to: "/colors",
			label: "colors",
			id: uuid(),
			element: () => <memoryStory.Colors />,
		},
		{
			to: "/photos",
			label: "photos",
			id: uuid(),
			element: () => <memoryStory.Photos />,
		},
	];
	return (
		<LinkContext.Provider value={routes}>{children}</LinkContext.Provider>
	);
};