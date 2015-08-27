var main = function() {
  $('#submit').click(function(){
      var user = $('#user').val();
      if (user.length > 4 && user.length < 30) {
        window.open('test.html');
        //$("#body").load("test.html");
        //window.location.href = 'html/test.html';
        //alert(user+" is a correct name");
      } else{
          if (user.length <= 4) {alert('your name is short')};
          if (user.length >= 30) {alert('your name is so long')};
      };
  });
  
};
$(document).ready(main);