(function(){
  function destroyer(arr) {
    // Using Arguments - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    var args = Array.prototype.slice.call(arguments, 1);
    //console.log(args);

    // Iterate in arr and args to find the seek and destroy rsrsr
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < args.length; j++){
        // If the item from arr is strict equal item in args element
        if(arr[i] === args[j]){
          // Remove element at position "i"
          arr.splice(i, 1);
        }
      }
    }
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  
})();