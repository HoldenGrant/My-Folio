$(function(){
   $("#work-menu").on('click', function(){
   	// alert("test");
   	$(this).addClass('move-left');
   	$('#my-work').addClass('show-canvas');
    $('#home-menu').addClass('work-menu-right');
   });

   $("#home-menu").on('click', function(){
    // alert("test");
    $('#work-menu').removeClass('move-left');
    $('#my-work').removeClass('show-canvas');
    $(this).removeClass('work-menu-right');
   });


   if(window.location.href.indexOf("#work") > -1) {
       //alert("your url contains the name franky");
       $('#work-menu').addClass('move-left');
       $('#my-work').addClass('show-canvas');
       $('#home-menu').addClass('work-menu-right');
    }
});