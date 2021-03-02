export function makeArrayOfIndexes(dimension: number): number[] {
  return [...Array(dimension)].map((_, index) => index);
}

export function isMultipleOf(ref: number) {
  return function (test: number): boolean {
    return test % ref === 0;
  };
}
