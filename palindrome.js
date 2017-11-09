(function(){

  function palindrome(str) {
    // Transforming the string to lowercase and remove special character
    var word = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    // Separating the string, and transform to Array
    var separateWord = word.split('');
    // Get the array string, get the reverse and concatenate.
    var reverseWord = separateWord.reverse('').join('');
    
    // Here, I check if the word and reverse word is equal (this is the cat leap rsrsrs)
    if(word === reverseWord){
      return true;
    } else {
      return false;
    }
  }
  
  palindrome("eye");
  
})();