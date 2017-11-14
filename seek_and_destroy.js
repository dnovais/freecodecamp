(function(){
  function destroyer(arr) {
    // Using Arguments - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    var args = Array.prototype.slice.call(arguments, 1);
    
    var filteredArray = [];
  
    // Iterate in arr and args to find the seek and destroy rsrsr
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < args.length; j++){
        // If the item from arr is strict equal item in args element
        if(arr[i] === args[j]){
          // Remove element at position "i"
          delete arr[i];
        }
      }
    }

    filteredArray = arr.filter(function(number){
      if(number){
        return number;
      }
    });

    return filteredArray;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
})();