export function arrayGroupByThree ([a, b, c, ...others]) {
  if (others.length === 0) return [[a, b, c].filter(x => x !== undefined)]
  return [[a, b, c]].concat(arrayGroupByThree(others))
}
