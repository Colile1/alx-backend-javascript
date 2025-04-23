function hasValuesFromArray(set, arr) {
  return arr.every((el) => set.has(el));
}

export default hasValuesFromArray;
