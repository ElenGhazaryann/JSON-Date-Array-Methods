function plusPlus(arr, a, b) {
  let result = [];
  for (let i = a; i < b; i++) {
    result.push(arr[i]);
  }
  return result;
}

function plusMinus(arr, a, b) {
  let result = [];
  for (let i = a; i < arr.length + b; i++) {
    //   i < arr.length - (-b)
    result.push(arr[i]);
  }
  return result;
}

function minusPlus(arr, a, b) {
  //todo
  let result = [];
  for (let i = arr.length + a; i < b; i++) {
    result.push(arr[i]);
  }
  return result;
}

function minusMinus(arr, a, b) {
  let result = [];
  for (let i = arr.length + a; i < arr.length + b; i++) {
    // i < arr.length - (-b)
    result.push(arr[i]);
  }
  return result;
}
function plusUndefined(arr, a, b) {
  let result = [];
  for (let i = a; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}

function minusUndefined(arr, a, b) {
  let result = [];
  for (let i = arr.length + a; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
function UndefinedUndefined(arr, a, b) {
  return arr;
}

function my_f(arr, a, b) {
  if (a >= 0 && b > 0) {
    return plusPlus(arr, a, b);
  } else if (a >= 0 && b < 0) {
    return plusMinus(arr, a, b);
  } else if (a < 0 && b > 0) {
    return minusPlus(arr, a, b);
  } else if (a < 0 && b < 0) {
    return minusMinus(arr, a, b);
  } else if (a > 0 && (b > arr.length || b == undefined)) {
    return plusUndefined(arr, a, b);
  } else if (a < 0 && (b > arr.length || b == undefined)) {
    return minusUndefined(arr, a, b);
  } else if ((a == undefined && b == undefined) || (!(a >= 0) && !(a < 0))) {
    return UndefinedUndefined(arr, a, b);
  }
}

console.log(my_f([1, 2, 3, 4, 5, 6, 7], -3, 5));
