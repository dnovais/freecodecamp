(function(){
  function findLongestWord(str){
    // Transform the sentence to a array
    var arrayStr = str.split(" ");
    // Create a empty array to store the length of each word
    var arrayLengthStr = [];
    // Iterate in array Str to get the lengths of each word from sentence
    for(var i = 0; i < arrayStr.length; i++){
      arrayLengthStr.push(arrayStr[i].length);
    }
    // using the method max with apply to return the max number to this context
    return Math.max.apply(Math, arrayLengthStr);
  }

  findLongestWord("The quick brown fox jumped over the lazy dog");
})();