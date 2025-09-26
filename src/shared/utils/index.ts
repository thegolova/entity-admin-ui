export function getValue(obj: any, path: string) {
  return path
    .toString()
    .split(".")
    .reduce((acc, key) => acc?.[key], obj);
}
