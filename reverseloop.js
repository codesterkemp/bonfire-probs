function rev_loop (array) {
for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
}
}
var list = ['a','b','c','d','e','f','g','h','i','j'];
rev_loop(list);