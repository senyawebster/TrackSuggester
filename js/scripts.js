
//Back End —————————————————————————————————————
function RubyRails(scale, stack, nativeness){
  var suggested_track;

  // set suggested track based on user's input
  if (scale == "enterprise" && stack == "backend") {
    // set suggested track based on condition
    suggested_track = "You should work on backend enterprise level software!";
  } else if (scale == "enterprise" && stack == "frontend") {
    // set suggested track based on condition.
    suggested_track = "You should work on frontend enterprise level software!";
  } else {
    suggested_track = "No matching track";
  }

  return suggested_track;
}

//function


//Front End ————————————————————————————————————
$(document).ready(function(){
  $('#TrackSuggester').submit(function(event) {
    event.preventDefault();

    // assumes that the user has checked all radio inputs
    // fetches all radio input values
    var checked_values = $('input:checked', '#TrackSuggester').map(function() {
      console.log("value is " + this.value.toString());
      return this.value;
    }).get();
    #TrackSuggester#name.val();
    // passes user input to "backend" for processing
    var message = RubyRails(checked_values[0],
                            checked_values[1],
                            checked_values[2]);

    // output message to user
    alert(message);

    // var RubyRails = $()
    // var phpDrupal
    // var javaAndroid


    //if -- then Ruby/Rails
    //if -- then PHP/Drupal
    //if -- then Java/Android
    //if -- then CSS/Design
    //if -- then C#/.Net

  });

});
