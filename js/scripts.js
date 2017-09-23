//business logic//

function pingPong(userInput) {
    var outputArray = [];
    if (userInput >= 1) {
        for (var i = 1; i <= userInput; i++) {
            if (i % 15 === 0) {
                outputArray.push("ping-pong");
            }
            else if (i % 5 === 0) {
                outputArray.push("pong");
            }
            else if (i % 3 === 0) {
                outputArray.push("ping");
            }
            else {
                outputArray.push(i);
            }
        }
    }
    else {
        alert("enter valid number");
    }
return outputArray;
}



//front end logic//
$(function() {
    $("#formone").submit(function(event) {
        event.preventDefault();
        var input = parseInt($("input#pingpong").val());
        var result = pingPong(input);
        var outputArraytoString = result.join("<br/>");

        $("#reset").click(function() {
            $("ul#result").empty();
        })

        $("ul#result").html(outputArraytoString);
        $("#output").show();

    });
});
