function fakeForEach(arr, callback) {
  return callback(arr);
}

fakeForEach([1, 2, 3, 4, 5], function (val) {
  for (let i = 0; i < val.length; i++) {
    console.log(val[i]);
  }
});


