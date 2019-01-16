$(document).ready(function(){
  $("#letter-group").submit(function(event){
    var name1Input = $("input#name1").val();

    $(".name1").text(name1Input);

    $("#letter").show();
    event.preventDefault();
  });
});
