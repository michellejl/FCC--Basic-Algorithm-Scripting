// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {

  var arrayTotals = [];
  for (var i = 0; i < 4; i++) {
    arr[i].sort(function(a,b){
      return b - a;
    });
    var largest = arr[i][0];
    arrayTotals.push(largest);
  }

  return arrayTotals;

  //return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
