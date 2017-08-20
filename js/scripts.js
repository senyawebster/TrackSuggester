
$(document).ready(function(){
  $('#TrackSuggester').submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var size = $("select#size").val();

    if (name != '') {
      if (size === 'big') {
        alert("Hey " + name + ", you should look at our C# and Java courses")
        $("form#TrackSuggester").hide();
        $("div.bigResult").show();
      } else if (size === 'startup') {
        alert("Hey " + name + ", you should look at our Ruby track")
        $("form#TrackSuggester").hide();
        $("div.startupResult").show();
      } else if (size === 'contract') {
        alert("Hey " + name + ", you should look at our PHP and Design courses")
        $("form#TrackSuggester").hide();
        $("div.contractResult").show();
      }
    } else {
      alert("please enter your name")
    };


  });
});
