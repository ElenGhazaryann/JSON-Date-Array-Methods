function fakeSlice(arr, a, b) {
  let result = [];
  if (a >= 0 && b > 0) {
    for (let i = a; i < b; i++) {
      result.push(arr[i]);
    }
  } else if (a >= 0 && b < 0) {
    for (let i = a; i < arr.length + b; i++) {
      //   i < arr.length - (-b)
      result.push(arr[i]);
    }
  } else if (a < 0 && b > 0) {
    for (let i = a; i < b; i++) {
      result.push(arr[i]);
    }
  } else if (a < 0 && b < 0) {
    for (let i = arr.length + a; i < arr.length + b; i++) {
      // i < arr.length - (-b)
      result.push(arr[i]);
    }
  } else if (a > 0 && (b > arr.length || b == undefined)) {
    for (let i = a; i < arr.length; i++) {
      result.push(arr[i]);
    }
  } else if (a < 0 && (b > arr.length || b == undefined)) {
    for (let i = arr.length + a; i < arr.length; i++) {
      result.push(arr[i]);
    }
  } else if ((a == undefined && b == undefined) || (!(a >= 0) && !(a < 0))) {
    return arr;
  }
  return result;
}

console.log(fakeSlice([1, 2, 3, 4, 5, 6, 7], "2"));
