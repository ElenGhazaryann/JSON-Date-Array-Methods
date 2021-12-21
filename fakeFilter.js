function myFilter(arr, cb) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  myFilter([1, 2, 3, -2, 4, -1], function (val, i, arr) {
    return val > 0;
  })
);
