(function(){

  function confirmEnding(str, target) {
    // Using the slice to get part of string equal the target
    var slicedString = str.slice(-target.length);

    // Compare the sliced string with target
    return slicedString === target;

  }
  
  confirmEnding("Bastian", "n");
  
})();