//register page
/*$("#submit").click( function(){

    $.post( $("#myform").attr("action"),
            $("#myform :input").serializeArray(),
             function(info){
                 $("#ack").empty();
                 $("#ack").html(info);
                 clear;
             });

    $("#myform").submit(function() {
        return false;
    });
});*/
$(document).ready(function() {
$("#submit").click(function() {
var name = $("#username").val();
var email = $("#myemail").val();
var password = $("#password").val();
var pnumber = $("#pnumber").val();
if (username == '' || myemail == '' || password == '' || pnumber == '') {
alert("Please fill above fields...!!!!!!");
} else if ((password.length) < 8) {
alert("Password should atleast 8 character in length...!!!!!!");
} else {
$.post("process.php", {
username1: username,
myemail1: myemail,
password1: password
}, function(data) {
if (data == 'You have Successfully Registered.....') {
$("myform")[0].reset();
}
alert(data);
});
}
});
});
