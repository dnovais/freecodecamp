(function(){
  function chunkArrayInGroups(arr, size) {
    var chunkyArray = [];
  
    // Iterate the array in size step by step
    for(var i = 0; i < arr.length; i+=size){
      // Setting the new array with sliced array
      chunkyArray.push(arr.slice(i, i+size));
    }
    return chunkyArray;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
})();