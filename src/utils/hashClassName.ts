export const hashClassName = (name: string, length = 10) =>
    btoa(name).substring(0, length);
