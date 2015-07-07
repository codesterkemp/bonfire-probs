function bouncer(arr) {
    
  // Don't show a false ID to this bouncer.
  return arr.filter(falsyValues);
}

function falsyValues(value){
    if (value !== value || value === 0 || value === false || value === undefined || value ===null || value === ""){
        return false;
    }
    return true;
}

bouncer([7, 'ate', '', false, 9]);
