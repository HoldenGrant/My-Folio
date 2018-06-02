$(function(){
	///$('#gallery-images-holder .card').hover(function(e){
		$('#gallery-images-holder .card').click(function(){
			console.log("gal test");
			$('#left-content, #right-content').addClass('show-gal-cont');
			var imgsrc = $(this).find('img').attr('src');
				//alert("Image Source Is :"+$imgsrc);
			$("#left-content img").attr("src", imgsrc);
		});
	//});
});