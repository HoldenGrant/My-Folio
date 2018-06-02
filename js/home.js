jQuery(function($){
	$("#contact-opt .email-me").on('click', function(){
        $('#email-me-form').toggleClass('show-email-form');
        //alert("contact me");
        $(this).toggleClass('bounce close-email');
        //$(this).find('.fa-envelope').toggleClass('for-mail-btn-hide');
        //$(this).find('.fa-times').toggleClass('for-mail-btn-show');
        $(this).find('.fa-envelope').removeClass();
        $(this).find('i').addClass('fa fa-times');

        // <i class="fa fa-times" aria-hidden="true"></i>
      //   if ( $(this).hasClass('close-email') ) {
      //   	$(this).hover(
		    //     function(e){
		    //     	$(this).find('i').removeClass('fa-envelope');
		    //     	$(this).find('i').addClass('fa-times');
		    //       //$('#my-work .side-black .side-border').css({'width':'20px','transition': '.5s'});
		    //     },
		    //     function(e){
		    //     	$(this).find('i').removeClass('fa-times');
		    //     	$(this).find('i').addClass('fa-envelope');
		    //       //$('#my-work .side-black .side-border').css({'width':'0px','transition': '.5s'});
		    //     }
		    // );
      //   };
    });
    
});