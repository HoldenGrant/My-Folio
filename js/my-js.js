$(function(){
   $("#work-menu").on('click', function(){
   	// alert("test");
   	$(this).addClass('move-left');
   	$('#my-work').addClass('show-canvas');
   });
   if(window.location.href.indexOf("#work") > -1) {
       //alert("your url contains the name franky");
       $('#work-menu').addClass('move-left');
       $('#my-work').addClass('show-canvas');
    }
});