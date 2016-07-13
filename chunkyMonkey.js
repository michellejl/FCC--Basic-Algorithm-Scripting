// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {

  var arrayPart = [];
  var newArray = [];

  var start = 0;
  var end = size;
  var increase = size;

  var chunks = Math.ceil(arr.length / size);

  var j = 0;
  while (j < chunks) {
    arrayPart = arr.slice(start, end);
    start = start + increase;
    end = end + increase;
    j++;
    newArray.push(arrayPart);
  }
  return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
