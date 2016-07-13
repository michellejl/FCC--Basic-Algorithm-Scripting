// Return the remaining elements of an array after chopping off n elements from the head.
// The head means the beginning of the array, or the zeroth index.

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
