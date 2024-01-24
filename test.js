function findLongestIncreasingSubsequence(nums) {
  let subArr = [];
  let lastItem = nums[0];
  return nums
    .reduce((acc, val, idx, arr) => {
      if (val >= lastItem) {
        subArr.push(val);
      } else {
        acc.push(subArr);
        subArr = [val];
      }
      lastItem = val;
      if (idx === arr.length - 1) acc.push(subArr);
      return acc;
    }, [])
    .sort((a, b) => b.length - a.length)[0].length;
}

console.log(
  findLongestIncreasingSubsequence([41, 60, 80, 10, 22, 9, 33, 21, 50])
);
