jQuery(function($){
	$('#gallery-images-holder .card').css('opacity', 0);
	$("#work-menu").on('click', function(){
		$(this).addClass('move-left');
		$('#my-work').addClass('show-canvas');
		$('#home-menu').addClass('work-menu-right');
		setTimeout(
			function() {
			$('#gallery-images-holder .card').waypoint(function() {
				$('#gallery-images-holder .card').addClass('fadeInUp');
			}, { offset: '500%' });
		}, 1200);
	});

	$("#home-menu").on('click', function(){
		$('#work-menu').removeClass('move-left');
		$('#my-work').removeClass('show-canvas');
		$(this).removeClass('work-menu-right');
		$('#gallery-images-holder .card').css('opacity', 0);
		$('#gallery-images-holder .card').removeClass('fadeInUp');
	});

   if(window.location.href.indexOf("#work") > -1) {
       $('#work-menu').addClass('move-left');
       $('#my-work').addClass('show-canvas');
       $('#home-menu').addClass('work-menu-right');
       setTimeout(
			function() {
			$('#gallery-images-holder .card').waypoint(function() {
				$('#gallery-images-holder .card').addClass('fadeInUp');
			}, { offset: '500%' });
		}, 1200);
    }

    $('#home-menu').hover(
        function(e){
          $('#my-work .side-black .side-border').css({'width':'20px','transition': '.5s'});
        },
        function(e){
          $('#my-work .side-black .side-border').css({'width':'0px','transition': '.5s'});
        }
    );

    // hide our element on page load
	  


	 //   $('#animateheader').css('opacity', 0);

  // $('#animateheader').waypoint(function() {
  //     $('#animateheader').addClass('fadeInUp');
  // }, { offset: '70%' });

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