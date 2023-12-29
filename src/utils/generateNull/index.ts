export function generateNull(length: number): null[] {
  const arr: null[] = [];
  for (let i = 0; i < length; i++) {
    arr.push(null);
  }
  return arr;
}
