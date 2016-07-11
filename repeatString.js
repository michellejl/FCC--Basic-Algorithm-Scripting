function repeatStringNumTimes(str, num) {
  var newstr = str;
  if (num <= 0) {
    return "";
  }
  for (var i = 0; i < num - 1; i++){
    newstr = newstr +  str;

  }
  return newstr;
}

repeatStringNumTimes("abc", 3);
