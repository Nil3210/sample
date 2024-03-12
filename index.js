function parent () {
   var count = 1;
    function child () {
      console.log("first", count);
      count ++;
      console.log("second", count);
    }
  return child;
}

parent()
parent()
parent()
parent()
parent()
