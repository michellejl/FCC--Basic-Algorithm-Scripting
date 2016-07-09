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
