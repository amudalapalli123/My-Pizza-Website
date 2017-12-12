/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function(){
  $('.bxslider').bxSlider({
      auto: true,
      autoControls: false,
      slideWidth: 1495,
      slideheight:200,
      controls:false,
      pager:false

  });
});

function changeddl($this){
   $($this).next('.pizza-price').text($this.value>0?("Price: " + " $" + $this.value ):"");
};

function changedd2($this){
   $($this).next('.pizza-price1').text($this.value>0?("Price: " + " $" + $this.value ):"");
};
function changedd3($this){
   $($this).next('.pizza-price2').text($this.value>0?("Price: " + " $" + $this.value ):"");
};

//Login page

$("button#submit1").click(function() {
    if($("#username1").vall == "" || $("$password1").val == "")
       $("div#ack1").html("Please enter Username and Password");
    else
       $.post( $("logform: input") .serializeArray(),
       function(data){
           $("div#ack1").html(data);
       });
    $.("#logform").submit(function(){
        return false;
    });
});
