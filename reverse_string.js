(function(){
  function reverseString(str) {
    // Transforming the content of str in a Array
    var strArray = str.split('');
    
    // Get reverse from Array of String
    var strArrayReverse = strArray.reverse();
    
    // Join - Get the array and 'concatenate' the string
    str = strArrayReverse.join('');

    return str;
  }
  
  reverseString("hello");
})();