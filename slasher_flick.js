(function(){
  function slasher(arr, howMany) {
    var slashedArray = arr.slice(howMany);
    return slashedArray;
  }

  slasher([1, 2, 3], 2);  
})();