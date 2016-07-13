// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {

  // split string into items in an array
  str = str.split(" ");

  var strLength = str.length;
  for (var i = 0; i < strLength; i++) {
    var word = str[i];
    var letter = word.charAt(0).toUpperCase();
    word =  word.substring(1, word.length).toLowerCase();
    word = letter + word;
    str[i] = word;
  }

  str = str.join(" ");

  return str;
}

titleCase("I'm a little tea pot");
