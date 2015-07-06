function palindrome(str) {
  // Good luck!

  str = strip(str);
  str = str.toLowerCase();
  var rev = str.split("").reverse().join("");
  if (rev ===str ) {
    return true;
  }
  return false;
}

function strip (str) {
var res = str.replace(/[^a-z^0-9]/ig, "");
return res;
}

palindrome("A man, a plan, a canal. Panama")
