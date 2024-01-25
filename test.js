function shiftArray(arr, n) {
  const len = arr.length;
  const newArr = arr.map((item) => item);
  console.log(newArr)
  let tempIdx = 0;
  const resArr = arr.map((val, idx) => {
    if (idx + n >= len) {
      tempIdx = (idx + n) - len;
    } else {
      tempIdx = idx + n;
    }
    console.log(tempIdx);
    newArr[tempIdx] = val;
    return newArr;
  });
  return newArr;
}

console.log(shiftArray(['a', 'b', 'c', 'd'], -1));
