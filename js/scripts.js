function Ticket(movie, time, age){
  this.movie = movie;
  this.time = time;
  this.age = age;
};
var price = 10;
Ticket.prototype.ticketPrice = function(inputtedTime, inputtedAge){
  if ((inputtedAge < 18) || (inputtedAge> 60)) {
     price -= 3 ;
  }
  if (inputtedTime > 2) {
      price += 3;
  }
}
$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    var inputtedMovie= $("#first").val();
    var inputtedTime = parseInt($("input#time").val());
    var inputtedAge = parseInt($("input#age").val());
    var myTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    $("input#time").val("");
    $("input#age").val("");

    myTicket.ticketPrice(inputtedTime, inputtedAge);
    console.log(price);


  });
});
