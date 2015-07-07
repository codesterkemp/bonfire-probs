function chunk(arr, size) {
    var chunky = [];
    for (var i = 0; i < arr.length; i + size) {
        var end = i+size;
        if (i+size > arr.length){
            end = arr.length;
        }
        chunky.push(arr.splice(i,end));
    }
  // Break it up.
  return chunky;
}

chunk(['a', 'b', 'c', 'd'], 2);
