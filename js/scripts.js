$(function(){
  var multiplierLooop = function(countVal, incrementVal) {
    if (incrementVal >= 0  && countVal >= incrementVal)  {
      debugger;
      for (var countNumber=0; countNumber<=countVal; countNumber+=incrementVal){
        event.preventDefault();
        $('#output ul').append("<li>"+countNumber+"</li>");
      }
    }
    // if else (incrementVal >= countVal){
    //   alert("Increment value larger than count value--please reverse order")
    // }
    else{
      alert("Enter all values correctly");
    }
  }

  $('.blanks button').click(function(event){
    //(submit) --> output
    var countInput = parseInt($('input#count').val());
    var incrementInput = parseInt($('input#increment').val());

    multiplierLooop(countInput,incrementInput);

  });
});
