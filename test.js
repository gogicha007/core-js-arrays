function createNDimensionalArray(n, size) {
  const base = Array(size).fill(Array(size).fill(0, 0),0);

  return base;
}
console.log(createNDimensionalArray(3, 2));
