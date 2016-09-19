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

        // console.log(candidates);
// create ul, not sure if here of in HTML
      var candidateContainer = $('<ul>');
        // loop through candidates
      for (var i = 0; i < candidates.length; i++){
        // clark's code
      // $('<li>').html("Name: " + candidates[i].name + " Votes: " + candidates[i].votes).appendTo

  // create new li
      var newli = $('<li>');
  // change the parts of li to name and votes, use the i to change on each one
      newli.text(" " + candidates[i].name + " " + candidates[i].votes);
  // attached the new li to the entire container
      newli.appendTo(candidateContainer)
      // repalce old ul with new ul
      }
      $('#ul-id').html(candidateContainer);
      // candidates.forEach(function(i){
      //   console.log(candidates[i])
      // // });

    });
    // });
});
