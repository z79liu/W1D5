
var phrase = "a man a plan a canal panama";

function isPalindrome(s) {
  var stringReverse = s.split("").reverse().join("").split(' ').join('');
  s = s.split(" ").join("")
  return s == stringReverse;
}

console.log(isPalindrome(phrase))

module.exports = isPalindrome;
