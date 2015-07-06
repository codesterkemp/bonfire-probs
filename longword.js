function findLongestWord(str){
  var num = 0;
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
      if (str[i].length > num) {
        num = str[i].length;
      }
  }
  return num;
}