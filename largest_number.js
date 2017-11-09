(function(){
  function largestOfFour(arr) {
    var largestNumbers = [];
    // Iterate in array
    for(var i = 0; i < arr.length; i++){
      // using the method max with apply to return the max number to this context
      largestNumbers.push(Math.max.apply(Math, arr[i]));
    }

    return largestNumbers;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
})();