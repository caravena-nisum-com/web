var main = function() {
  $('#submit').click(function(){
      var user = $('#user').val();
      if(!validateAlphanumericUser(user) || !validateLengthUser(user)){
        $('#login').submit(function(event){
            event.preventDefault();
        });
      }else{
        return;
      }

  });
}

var validateAlphanumericUser = function(user){
    var regex = /^[a-zA-Z0-9][a-zA-Z0-9]+$/;
    if(!user.match(regex)){
      alert('You can use only numbers and letter');
      return false;
    }else {
        return true;
    }
}

var validateLengthUser = function(user){
    if(user.length <= 4 || user.length >= 30) {
        if (user.length <= 4) {
          alert('your name is short');
          return false;
        }
        if (user.length >= 30) {
          alert('your name is so long');
          return false;
        }
    }else{
      return true;
    }
}

$(document).ready(main);