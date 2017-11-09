(function(){
  function titleCase(str){
    // Transform the sentence to a array
    var arrayStr = str.toLowerCase().split(" ");
    var firstChar = "";
    var complement = "";
    var word = "";

    // Iterate in array Str to get the elements and set 
    for(var i = 0; i < arrayStr.length; i++){
      // Get the first character from string and set to uppercase
      firstChar = arrayStr[i].charAt(0).toUpperCase();

      // Get the remaining of string
      complement = arrayStr[i].substr(1);
      
      // Contatenate the first character with the remaining of string to get the word
      word = firstChar + complement;

      // Set the word to array in position "i"
      arrayStr[i] = word;
    }

    // Return the sentence concatenated
    return arrayStr.join(' ');

  }

  titleCase("I'm a little tea pot");
})();