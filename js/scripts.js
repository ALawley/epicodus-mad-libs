$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personInput1 = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var excaimInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();


    $(".person1").text(personInput1);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(excaimInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
