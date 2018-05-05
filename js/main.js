
$(document).ready(function () {

  $('#mce-EMAIL').on('input',function(e){

     if($('#mce-EMAIL').val().length == 0){
       console.log("remove class");
       $('#mc-embedded-subscribe').css("color", "black");
    }

      if($('#mce-EMAIL').val().length >= 1){
        console.log("add class");
        $('#mc-embedded-subscribe').css("color", "white");
     }

  });
});
