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
    //console.log("test");
    $('#left-content, #right-content').removeClass('show-gal-cont');
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

    // hover effet
    $('#home-menu').hover(
        function(e){
          $('#my-work .side-black .side-border').css({'width':'20px','transition': '.5s'});
        },
        function(e){
          $('#my-work .side-black .side-border').css({'width':'0px','transition': '.5s'});
        }
    );

    //$(document).ready(function(){
        $("header").load("home.html");
        $("#display-gal").load("gallery.html");

           




    //}); 

function sendMail() {
    var name = $('#contact #name').val();
    var email = $('#contact #email').val();
    var message = $('#contact textarea').val();
    window.location.href = 'mailto:holdengrantcausing@gmail.com?subject=The subject - ' + name + ' (' + email + ')' + '&body=' + message;
};


// function myWorks() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }

//     $.get("../gallery.html", function(data){
//     $("#display-gal").load(data);
// });

    // get base url
    // var l = window.location;
    // var base_url = l.protocol + "//" + l.host + "/" + l.pathname.split('/')[1];
    // console.log(base_url);


    // $("#gallery-container ").on('click', function(){
    //   alert("ambot");
    // });
    //$(document).ready(function(e) {
    // $('#gallery-container .card').hover( function(){
    //   $(this).on('click', function(){
    //     console.log("gal test");
    //   });
    //     //$imgsrc=$(this + 'img').attr('src');file:///C:/Users/Holden%20Grant/Documents/My-Folio/imgs/chuttersnap-297550-unsplash.jpg
    //     //alert("Image Source Is :"+$imgsrc);
        
    //  });
    //});
     





    // $('#gallery-images-holder .card').hover(
    //     function(e){
    //       $(this).find('img').on('click', function(){
    //         console.log("gal test");
    //       });
    //     },
    //     function(e){
    //       $(this).find('img').on('click', function(){
    //         console.log("gal12345 test");
    //       });
    //     }
    // );





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