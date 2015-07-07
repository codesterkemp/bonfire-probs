function mutation(arr) {
    var bigArr = arr[0].toLowerCase().split("");
    var smArr = arr[1].toLowerCase().split("");
    for (var i = 0; i < smArr.length; i++) {
        if (bigArr.indexOf(smArr[i]) < 0){
            return false;
        }
    }
  return true;
}

mutation(['hello', 'hey']);
