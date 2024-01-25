function shiftArray(arr, n) {
  const newArr = arr;
  let item;
  if (n < 0) {
    for (let i = n; i < 0; i += 1) {
      item = newArr.pop();
      newArr.unshift(item);
    }
  } else {
    for (let i = 0; i <= n; i += 1) {
      item = newArr.shift();
      newArr.push(item);
    }
  }
  return newArr;
}

console.log(shiftArray(['a', 'b', 'c', 'd'], -1));
