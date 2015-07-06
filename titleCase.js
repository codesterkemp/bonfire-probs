function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  for (var i = str.length - 1; i >= 0; i--) {
      str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  }
  str = str.join(" ");
  return str;
}

titleCase("I'm a little tea pot");
