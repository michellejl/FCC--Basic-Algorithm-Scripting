// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  str = str.split('').reverse().join('');

  var endLength = target.split('').length;
  target = target.split('').reverse().join('');

  var comparison = str.substr(0, endLength);

  if (comparison == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
