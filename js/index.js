$(document).ready(function() {

$.get("http://54.67.101.240/backend.php", function( data ) {
	console.log(data);
                for(i=0;i < data.length;i++) {
                        newPhoto = $("<div class='card'>").html("<img src='"+data[i]['url']+"'>");
                        $( ".card-deck" ).append($(newPhoto));
                }
        });



});	
