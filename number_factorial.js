(function(){
  function factorialize(num) {
    if(num < 0){
      return undefined;
    } else if(num === 0){
      num = 1;
      return num;
    }
    
    return num * factorial(num - 1);
  }
  
  factorialize(5);
})();