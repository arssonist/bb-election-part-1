$(document).ready(function() {
    // $('').click(function(){
      $.ajax({
        url:'https://bb-election-api.herokuapp.com/',
        method:'GET',
        data: {},
        dataType:'json'
      }).done(function(responseData){
// create candidates list
        var candidates =
        responseData['candidates'];

        console.log(candidates);
// create ul, not sure if here of in HTML
      var candidateContainer = $('<ul>');
        // loop through candidates
      for (var i = 0; i < candidates.length; i++){
        // clark's code
      $('<li>').html("Name: " + candidates[i].name + " Votes: " + candidates[i].votes).appendTo
      }
      // candidates.forEach(function(i){
      //   console.log(candidates[i])
      // // });

    });
    // });
});
