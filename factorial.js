function factorialize(num) {
    var running_tot = 1;
    for (var i = num; i > 0; i--) {
        running_tot = running_tot*i;
    }
  return running_tot;
}

factorialize(5);
