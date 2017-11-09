(function(){
  function factorialize(num) {
    // Using the recursive algorithm to resolve the n factorial

    // First, I check if num is lower than num, if true, it will return undefined
    if(num < 0){
      return undefined;
    // Else if num is strict equal 0, it will return 1
    } else if(num === 0){
      num = 1;
      return num;
    }
    
    // If the num passed all of the above validations, it return the factorial with recursive.
    num = num * factorialize(num - 1);

    return num
  }
  
  factorialize(5);
})();