$(function(){
	///$('#gallery-images-holder .card').hover(function(e){
	$('#gallery-images-holder .card').click(function(){
		//console.log("gal test");
		$('#left-content, #right-content').addClass('show-gal-cont');
		var imgsrc = $(this).find('img').attr('src');
			//alert("Image Source Is :"+$imgsrc);
		$(".gal-img-container img").attr("src", imgsrc);

		var site_name = $(this).find('img').data("sitename");
		var site_link = $(this).find('img').data("link");
		var site_tag = $(this).find('img').data("tag");

		//alert(site_name);
		//$(this).data("id") 
		$('#my-sitename').append('<h2><a href='+ site_link +' target="_blank">'+ site_name +'</a></h2>');
		$('#my-tags').append(site_tag);

		var tag_items = $("div#my-tags").text().split(",");
		$("div#my-tags").empty();
		$.each(tag_items, function(i, v) {
		    $("div#my-tags").append($("<span class='item-tag'>").text(v));
		});
	});

	$(".close-gal-preview").on('click', function(){
		$('#left-content, #right-content').removeClass('show-gal-cont');
		$(".gal-img-container img").attr('src', '');
		$('#my-sitename').empty();
		$('#my-tags').empty();
	});
});