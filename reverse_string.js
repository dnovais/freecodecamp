(function(){
  function reverseString(str) {
    var strArray = str.split('');
    
    var strArrayReverse = strArray.reverse();
    
    str = strArrayReverse.join('');

    return str;
  }
  
  reverseString("hello");
})();