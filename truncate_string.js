(function(){
  function truncateString(str, num) {
    var suspensionPoints = "...";
    var limit = 3;

    if (str.length > num && num > limit) {
      return str.slice(0, (num - limit)) + suspensionPoints;
    } else if (str.length > num && num <= limit) {
      return str.slice(0, num) + suspensionPoints;
    } else {
      return str;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 11);
})();