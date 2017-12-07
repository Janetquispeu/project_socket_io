var socket = io();

$(document).ready(function() {
	$(".b-image").on("change",function(e){
    console.log(e);
    var file = e.originalEvent.target.files[0];
    var reader = new FileReader();
    
    reader.onload=function(evt){
      console.log(evt);
      var value = evt.target.result
			socket.emit('user image', value);
    };
    reader.readAsDataURL(file);
  });

});


socket.on('addimage',function(msg,base64image){
  console.log(msg, base64image);
	$(".b-preview-image").append($('<p>').append($('<b>').text(msg),'<a target="_blank" href="'+base64image+'"><img src="'+base64image+'"/></a>'));
});