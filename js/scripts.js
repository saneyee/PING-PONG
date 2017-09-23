$(function() {
    $("#formone").submit(function(event) {
        event.preventDefault();
        var userInput = parseInt($("input#pingpong").val());
        // var result = pingpong(userInput);

        $("ul#result").text(userInput);
        $("#output").show();


    });
});
