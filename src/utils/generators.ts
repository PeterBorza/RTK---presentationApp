export const generateId = (): string => {
	return Math.random().toString(36).substr(2, 9);
};

export const shuffle = (arr: any[]) =>
	arr
		.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
