
$(function(){
	// $('.parallax').paroller();
	// $(".slide-toggle").on("click", function () {
	// 	$('#slide-nav').toggleClass("is-slide");
	// 	// $('#white-overlay').toggleClass("is-visible");
	// });
	/* !scroll --------------------------------------------------- */
	$('.scroll-anchor').each(function(){
		$(this).click(function(e){
			var speed = 600,
			href= $(this).attr('href'),
			target = $(href == '#' || href == "" ? 'html' : href),
			position = target.offset().top;
			e.preventDefault();
			$('html, body').animate({scrollTop:position}, speed, 'swing');
			return false;
		});
	});
	/* !scrollevent --------------------------------------------------- */
	var setElm = $('.anime');
	$(window).on('load scroll resize',function(){
		var winH = $(window).height();
		var wincustomH = winH / 1.3;
		var w = $(window).width(),
				x = 768;
		if (w <= x) {
		} else {
		setElm.each(function(){
			var setThis = $(this);
			var setChild = $(this).find('.anime-elm');
			elmTop = setThis.offset().top;
			scrTop = $(window).scrollTop();
			if (scrTop > elmTop - wincustomH){
				setChild.stop().addClass('is-active');
			}else{
				//setChild.stop().removeClass('is-active');
			}
		});
		}
	});
	// $(window).on('load',function(){
	// 	var winH = $(window).height();
	// 	var w = $(window).width(),
	// 			x = 768;
	// 	if (w <= x) {
	// 	} else {
	// 		var rellax = new Rellax('.rellax');
	// 	}
	// });
	$(window).scroll(function() {
		var currentPos = $(this).scrollTop();
		startPos = currentPos;
		var pagetop = $('.pagetop');

		if ($(this).scrollTop() > 200) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}

		scrollHeight = $(document).height();
		scrollPosition = $(window).height() + $(window).scrollTop();
		if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.015) {
			pagetop.css('bottom', '230px');
		} else {
			pagetop.css('bottom', '20px');
		}

	});
	// $('.recommend-slider').slick({
	// infinite: true,
	// slidesToShow: 1,
	// slidesToScroll: 1,
	// dots: false,
	// autoplay: true,
	// autoplaySpeed: 6000,
	// asNavFor: '.recommend-nav',
	// focusOnSelect: true
	// });
	// $('.recommend-nav').slick({
	//   infinite: true,
	// slidesToShow: 3,
	// centerPadding: "0",
	// slidesToScroll: 1,
	// asNavFor: '.recommend-slider',
	// dots: false,
	// arrows: false,
	// centerMode: true,
	// focusOnSelect: true
	// });
	// var $SEARCH = $('#header-search-container'),
	//     $ICON = $('#header-search-btn');
	// $ICON.click(function() {
	//   var w = $(window).width(),
	//       x = 768;
	//   if (w <= x) {
	//     if($SEARCH.hasClass('is-active')){
	//     }else{
	//       $SEARCH.addClass('is-active');
	//     }
	//   } else {
	//   }
	// });


		// $(document).on('touchstart click', function(evt){
		//   var w = $(window).width(),
		//     x = 768;
		//     if (w <= x) {
		//       if($SEARCH.hasClass('is-active')){
		//         if( !$(evt.target).closest($SEARCH).length ){
		//           $SEARCH.stop().removeClass('is-active');
		//         }
		//       }
		//     }
		// });

	// $(".header-btn").on("click", function () {
	//   $('#slide-nav').toggleClass("is-slide");
	//   $('#white-overlay').toggleClass("is-visible");
	// });
	// $(".header-btn").on("click", function () {
	//   $('#slide-nav').toggleClass("is-slide");
	//   $('#white-overlay').toggleClass("is-visible");
	// });
	// var $BODY = $('body'),
	//     $BTN = $('#slide-btn');

	// $(window).on('load resize',function(){
	//   var w = $(window).width(),
	//       x = 768;
	//   if (w <= x) {
	//   } else {
	//   }
	// });

		// $('#slidemenu-btn').click(function(){
		//   if (searchmenuBtn.hasClass('is-menuvisible')) {
		//     searchmenuBtn.removeClass('is-menuvisible');
		//     fixedSearch.fadeOut();
		//   }else{
		//   }
		//   console.log('しゅつりょく');
		// });
	// $BTN.on('touchstart click', function(e) {
	//   e.preventDefault();
	//   $(this).toggleClass('is-open');
	//   $BODY.toggleClass('is-menushow');
	// });
	// $(document).on('touchstart click', function(evt){
	//   if( !$(evt.target).closest($BTN).length ){
	//     if ($BODY.hasClass('is-menushow')) {
	//       evt.preventDefault();
	//       $BODY.removeClass('is-menushow');
	//       $BTN.removeClass('is-open');
	//     }
	//   }
	// });
	// $('#body-content').on('touchstart click', function(e) {
	//   if ($BODY.hasClass('is-menu-show')) {
	//     e.preventDefault();
	//     $BODY.removeClass('is-menu-show');
	//     $BTN.removeClass('is-open');
	//   }
	// });
	// $(window).on('load', function() {
	//   var url = $(location).attr('href');
	//   if(url.indexOf("?id=") != -1){
	//       var id = url.split("?id=");
	//       var $target = $('#' + id[id.length - 1]);
	//       if($target.length){
	//           var pos = $target.offset().top,
	//               $h = $('#header').height();
	//           $("html, body").animate({
	//             scrollTop:pos - $h
	//           }, 800);
	//       }
	//   }
	// });
	// $('#hamburger').click(function() {
	//   $("#slide-nav").fadeIn(350);
	// });
	// $('#slide-close').click(function() {
	//   $("#slide-nav").fadeOut(350);
	// });



}); /* end of as page load scripts */
