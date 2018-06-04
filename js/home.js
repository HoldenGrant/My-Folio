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

    //$(document).ready(function () {
	    $.getJSON("http://jsonip.com/?callback=?", function (data) {
	    	var user_ip = data.ip;
	        //console.log(data);
	        //alert(user_ip);
	        //$('#user_ip').val(user_ip);

	    });
	//});

	$.get("http://ipinfo.io", function (response) {
	    //$("#ip").html("IP: " + response.ip);
	    //$('#user_ip').val("IP : " + response.ip);
	    //$("#country").html("Country Code: " + response.country);
	    //$('#user_add').val("Add. : " + response.country);
	    
	    //$("#details").html(JSON.stringify(response, null, 4));
	    $('#user_full').val(JSON.stringify(response, null, 4));
	}, "jsonp");
    
});