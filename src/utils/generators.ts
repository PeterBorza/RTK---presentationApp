export const generateId = (): string => {
    return Math.random().toString(36).substr(2, 9);
};

export const shuffle = <T>(arr: T[]) =>
    arr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

export const randomize = (num: number): string => `#${Math.floor(Math.random() * num)}`;

export const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

export const createArray = (count: number) => new Array(count).fill(null);
