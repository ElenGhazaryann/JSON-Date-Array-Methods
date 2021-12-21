function myMap(arr, cb) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i], i, arr));
  }
  return newArr;
}

console.log(
  myMap([1, 2, 3], function (val, i, arr) {
    return val + 5;
  })
);
