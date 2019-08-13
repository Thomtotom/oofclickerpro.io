
console.log("my first website")

$("#cow").click(function(){
    console.log ("fart");
    $("#cow").slideUp(5000)
});
   

$("#fart").click(function(){
    location.reload();


});


$("#are").click(function(){
    $("#are").append("<H1><font color="goldenrod"> you finised!! this one </font></H1>")
    $("#are").slideUp(5000)
});