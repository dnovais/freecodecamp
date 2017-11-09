(function(){

  function confirmEnding(str, target) {
    // Transforming the content of str in a Array
    var strArray = str.split(' ');
    var last_char = "";
    var last_word = "";

    // If strArray is only one word
    if(strArray.length == 1){
      // Get the last character from string
      last_char = strArray[0].substr(strArray[0].length - 1);

      // Return true if last_char is strict equal target
      return last_char === target;

    } else {
      // Iterate in strArray
      for(var i = 0; i < strArray.length; i++){
        //Get the last word (not the last character)
        last_word = strArray[strArray.length - 1];

        //Compare last_word with target too using strict equal 
        return last_word === target;
      }
    }

  }
  
  confirmEnding("Bastian", "n");
  
})();