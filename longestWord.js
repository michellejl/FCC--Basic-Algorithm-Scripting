function findLongestWord(str) {
  return str.split(" ").reduce(function(a, b) {
    return a.length > b.length ? a : b;
  }).length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
