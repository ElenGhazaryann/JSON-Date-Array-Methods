function myMap(arr, cb, index, array) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    index = i;
    array = arr;
    newArr.push(cb(arr[i], index, array));
  }
  return newArr;
}

console.log(
  myMap([1, 2, 3], function (val, index, array) {
    return val + 5;
  })
);
