(function(){
  function mutation(arr) {
    var word = arr[0].toLowerCase();
    var term = arr[1].toLowerCase();

    for(var i = 0; i < term.length; i++){
      if(word.indexOf(term[i]) == -1){
        return false;
      }
    }

    return true;
  }
  
  mutation(["hello", "hey"]);
})();