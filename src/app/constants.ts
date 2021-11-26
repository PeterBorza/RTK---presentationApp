export enum BaseAPI {
	BUBBLES_URL = "http://localhost:5010",
	COLORSETS_URL = "http://localhost:5005",
	GAS_UNITS_URL = "http://localhost:5006",
}

export enum Url {
	COLORS = "colorSets",
	BUBBLES = "bubbles",
	GAS = "units",
}

export enum Error {
	MESSAGE = "We are sorry, an error occured. Please try again later",
}

export enum Pending {
	MESSAGE = "Loading, please wait...",
}

export enum GasFormValues {
	FORM_BUTTON_LABEL = "Adauga citire noua",
	FORM_WIDTH = "small",
	FORM_TITLE = "Citire Lunara",
}

export enum GasLabels {
	DATA = "data",
	CITIRE = "citire",
	CONSUM = "consum",
	FACTURA = "factura",
	PLATIT = "platit",
}

export enum GasTableLabels {
	SUM_OF_BILLS = "Total platit pana in data de: ",
	IS = " este de ",
	RON = " RON",
}

export enum BubbleFormValues {
	BUTTON_LABEL = "Add new Bubble",
	FORM_WIDTH = "small",
	FORM_TITLE = "Position and shape of the bubble",
}

export enum BubbleButtons {
	DELETE = "Delete Selected Bubble",
	FETCH = "Get Bubbles",
	MENU = "Menu",
}

export enum BubbleSideBarTitle {
	TITLE = "Manage bubbles",
}

export enum BubbleValues {
	LEFT = "Left",
	TOP = "Top",
	SIZE = "Size",
	OPACITY = "Opacity",
	SELECT = "Select a bubble",
	TITLE = "Click to get more info",
}

export enum IconTitles {
	PAYED = "Payed",
	DELETE = "Delete",
	EDIT = "Edit",
	NOT_PAYED = "Not payed",
}
