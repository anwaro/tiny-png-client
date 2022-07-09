export const objectEntries = <Keys extends string | number | symbol, Value>(obj: {
    [K in Keys]?: Value;
}): Array<[Keys, Value]> => {
    // Object.entries typings error
    // @ts-ignore
    return Object.entries(obj);
};

export const objectHas = (obj: Record<string, unknown>, key: string) =>
    Object.prototype.hasOwnProperty.call(obj, key);

export const toggleInArray = <T>(array: T[], value: T) =>
    array.includes(value) ? array.filter((val) => val !== value) : [...array, value];
