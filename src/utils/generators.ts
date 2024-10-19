export const shuffle = <T>(arr: T[]) =>
  arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export const randomize = (num: number): string => `#${Math.floor(Math.random() * num)}`;

export const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

export const createArray = (count: number) => new Array(count).fill(null);

export const newArray = (count: number) => Array.from({ length: count }, (_, i) => i);

export const getRandomElement = <T>(arr: T[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

interface ResultedObjectType {
  [key: string]: string;
}

export const arrToObject = (arr: string[], cb: (val?: string, index?: number) => void) =>
  [...arr].reduce<ResultedObjectType[]>((acc, value, index) => {
    return { ...acc, [value]: cb(value, index) };
  }, []);

// map the above to see the results

export const mapToObject = (
  arr: string[],
  cb: (val?: string, index?: number) => NonNullable<unknown>,
) =>
  arr.reduce<ResultedObjectType[]>((acc, value, index) => {
    return { ...acc, [value]: cb(value, index) };
  }, []);

export const moveArrayItem = <T>(arr: T[], fromIndex: number, toIndex: number): T[] => {
  const array = [...arr];
  const element = array[fromIndex];
  array.splice(fromIndex, 1);
  array.splice(toIndex, 0, element);
  return array;
};
