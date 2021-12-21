function myFindIndex(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

console.log(
  myFindIndex([1, 2, 3, -2, 4, -1], function (val, i, arr) {
    return val > 33;
  })
);
