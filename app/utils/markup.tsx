export function repeatNode<T>(
  len: number,
  callback: (index: number) => T
): T[] {
  let elements: T[] = [];
  for (let i = 0; i < len; ++i) {
    elements.push(callback(i));
  }
  return elements;
}