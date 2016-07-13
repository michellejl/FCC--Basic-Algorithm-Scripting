function slasher(arr, howMany) {

  if (arr.length < howMany) {
    return [];
  }
  arr = arr.reverse();
  arr = arr.slice (0, arr.length - howMany);
  arr = arr.reverse();
  return arr;
}

slasher([1, 2, 3], 2);
