jQuery.noConflict();

function annotateHandler() {
	anno.makeAnnotatable(document.getElementById('annotatable'));
}



function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

jQuery(document).ready(function($) {

$.get("http://54.67.101.240/backend.php?id="+GetURLParameter("id"), function( data ) {
	console.log(data);
		
	newPhoto = $("<div class='card'>").html("<img id='annotatable' data-id='"+data['id']+"' src='"+data['url']+"'>");
                        $( ".image-container" ).append($(newPhoto));        

});

$('#editBtn').click(function() {
	anno.makeAnnotatable(document.getElementById('annotatable'));
});

});	
