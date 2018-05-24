jQuery(function($){
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

    $('#home-menu').hover(
        function(e){
          //alert("test1");
          $('#my-work .side-black .side-border').css({'width':'20px','transition': '.5s'});
        }, // over
        function(e){
          //alert("test2");
          $('#my-work .side-black .side-border').css({'width':'0px','transition': '.5s'});
        }  // out
    );

    // $("#gallery-images-holder .card").slice(0, 6).show();
    // $("#loadMore").on('click', function (e) {
    //     e.preventDefault();
    //     $("div:hidden").slice(0, 4).slideDown();
    //     if ($("div:hidden").length == 0) {
    //         $("#load").fadeOut('slow');
    //     }
    //     $('html,body').animate({
    //         scrollTop: $(this).offset().top
    //     }, 1500);
    // });
    // setTimeout(function(){
    //     $('#gallery-images-holder .card').fadeIn(500);
    // }, 5000);
});