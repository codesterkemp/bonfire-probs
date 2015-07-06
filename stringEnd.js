function end(str, target) {
var slicePoint = (str.length) - target.length;
    console.log(str.slice(slicePoint) + " cut string");
    if (str.slice(slicePoint) === target) {
        return true;
    }
  return false;
}

end('Bastian', 'n');
