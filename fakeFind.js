function myFind(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return arr[i];
    }
  }
}

console.log(
  myFind([0, 2, 3, -2, 4, 0, -1], function (val, i, arr) {
    return val > -1;
  })
);
