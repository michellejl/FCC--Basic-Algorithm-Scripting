// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) {

  var len = str.length;
  var letter;
  var decoded = "";

  for (var i = 0; i < len; i++){
    letter = str[i];
    letter = letter.charCodeAt(0);


    if (letter >= 65 && letter <= 90) {
      var num = letter + 13;

      if (num > 90) {
        var temp = 90 - letter;
        letter = 65 + (12 - temp);
      } else {
        letter = num;
      }

      letter = String.fromCharCode(letter);
    } else if (letter > 90 || letter < 65) {
      letter = String.fromCharCode(letter);
    }
    decoded = decoded + letter;

  }
    //return letter;
   return decoded;

}
rot13("SERR PBQR PNZC!");
