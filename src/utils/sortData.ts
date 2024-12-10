interface SortType<T> {
  data: T[];
  dataProperty?: keyof T;
  reversed?: boolean;
}

// TODO sort by boolean ? false -1 true 1

const sortData = <T>({ data, dataProperty: key, reversed = false }: SortType<T>): T[] => {
  const reverseValue = reversed ? -1 : 1;

  const getObjectKey = (item: T) => (key ? item[key] : item);

  const sortObject = (a: T, b: T) => {
    const x = getObjectKey(a);
    const y = getObjectKey(b);
    const checkType = (type: string) => typeof x === type && typeof y === type;

    if (checkType("boolean")) {
      return x === y ? 0 : (reversed ? x : y) ? -1 : 1;
    }
    if (checkType("number")) {
      return reversed ? +y - +x : +x - +y;
    }
    return x !== y ? (x < y ? -1 : 1) * reverseValue : 0;
  };

  return data.slice().sort((a, b) => sortObject(a, b));
};

export default sortData;
