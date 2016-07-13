// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.


function palindrome(str) {
  // Remove any non-alphanumeric characters from str
  str = str.replace(/[^0-9a-z]/gi, '');

  // Convert str to lower case and removed spaces
  str = str.toLowerCase().replace(' ', '');

  // create a new variable to hold an array version of str
  var newstr = str.split('');

  // reverse the order of the items in newstr array and turn it back into a string
  newstr = newstr.reverse().join('');

  // check if str and newstr contain the same string
  if (str == newstr) {
    return true;
  } else {
    return false;
  }
}



palindrome("race car");
