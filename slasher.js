function slasher(arr, howMany) {
  arr = arr.slice(howMany);
  // it doesn't always pay to be first
  return arr;
}

slasher([1, 2, 3], 2);
