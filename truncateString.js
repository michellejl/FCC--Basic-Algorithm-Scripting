function truncateString(str, num) {

  if (num < 3 ) {
     str = str.substr(0, num) + "...";
  } else if (num == str.length) {
     str = str.substr(0, num);
  } else if (num > str.length) {
    str = str;
  } else if (num < str.length) {
     num = num - 3;
     str = str.substr(0, num) + "...";
  }





  return str;
}

truncateString("Absolutely Longer", 2);
