// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

function factorialize(num) {
  var thing = [];
  var i = 1;
  while (thing.length < num) {
    thing.push(i);
    i++;
  }
  num = 1;
  for (i in thing) {
    num = num * thing[i];
  }
  return num;
}

factorialize(5);
