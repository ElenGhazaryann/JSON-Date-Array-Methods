function fakeMap(arr, callBack) {
  return callBack(arr);
}

console.log(
  fakeMap([1, 2, 3, 4], function (val, index, array) {
    let newArr = [];
    let i;
    index = [];
    array = val;
    for (i = 0; i < val.length; i++) {
      index.push(i);
      newArr.push(val[i]);
    }
    return val;
  })
);
