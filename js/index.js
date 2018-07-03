jQuery.noConflict();

function annotateHandler() {
	anno.makeAnnotatable(document.getElementById('annotatable'));
}

jQuery(document).ready(function($) {

$.get("http://54.67.101.240/backend.php", function( data ) {
	console.log(data);
                for(i=0;i < data.length;i++) {
                        newPhoto = $("<div class='card'>").html("<img data-id='"+data[i]['id']+"' src='"+data[i]['url']+"'>");
                        $( ".card-columns" ).append($(newPhoto));
		
                }

		$('.card').click(function(){
			location.href = "image.html?id="+$(this).find("img").attr('data-id');
		});
        });







});	
