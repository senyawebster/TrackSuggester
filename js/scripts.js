
$(document).ready(function(){
  $('#TrackSuggester').submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var size = $("select#size").val();

    if (name != '') {
      if (size === 'big') {
        alert("Hey " + name + " you should look at our C# and Java courses")
      } else if (size === 'startup') {
        alert("Hey " + name + " you should look at our Ruby track")
      } else if (size === 'contract') {
        alert("Hey " + name + " you should look at our PHP and Design courses")
      }
    } else {
      alert("please enter your name")
    };


  });
});
