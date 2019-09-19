
console.log("my first website")

$("#cow").click(function(){
    console.log ("fart");
    $("#cow").slideUp(500)

});
   

$("#fart").click(function(){
    location.reload();


});

// tom was here 
$("#are").click(function(){
    // $("#are").append("<H1><font color="goldenrod"> you finised!! this one </font></H1>")
    $("#are").append("you finished")
    $("#are").slideUp(5000)

});
$("#kik").click(function(){
    // $("#are").append("<H1><font color="goldenrod"> you finised!! this one </font></H1>")
    $("#kik").append("you finished")
    $("#kik").slideUp(5000)
});

$("#you").click(function(){
    // $("#are").append("<H1><font color="goldenrod"> you finised!! this one </font></H1>")
    $("#you").append("you finished")
    $("#you").slideUp(5000)
});

$(document).ready(function(){
    $("button").click(function(){
      $("p").toggleClass("main");
    });
  });


$("#but").click(function(){
    $("#but").css("background-color", "DeepPink");
    }, function(){
    $("#but").css("background-color", "aqua");
    }, function(){
    $("#but").css("background-color", "blue");
    }, function(){
    $("#but").css("background-color", "purple");
    }, function(){
    $("#but").css("background-color", "black");
  });



$("#mop").click(function(){
    var text = ""
    for (i = 0; i < 10; i++) {
        text += "bigger ";
    }
    $("#mop").append(text)

});

$("#mop").click(function(){
    $("#mop").append("biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger biger ")

});
