// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.


function bouncer(arr) {
  return arr.filter(function(item) {
    return Boolean(item);
  });
}

bouncer([7, "ate", "", false, 9]);
