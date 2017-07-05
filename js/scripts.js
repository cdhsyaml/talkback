$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Hi!</li>");
    $("li").click(function() {
      alert("Hi");
    });
  });
  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>See Ya!</li>");
    $("ul#webpage").prepend("<li>Goodbye</li>");
  });
  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
  });

});
