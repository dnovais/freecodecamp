(function(){
  function bouncer(arr) {
    //Using the filter
    return arr.filter(Boolean);
  }
  
  bouncer([7, "ate", "", false, 9]);
})();