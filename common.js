/**************** 모바일에서 브라우저 하단베젤 고려 ****************/
let mvh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${mvh}px`);
window.addEventListener('resize', () => {
	// We execute the same script as before
	let mvh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${mvh}px`);
});

$(function(){
	var m= matchMedia("screen and (max-width:1280px)"); 
	var win = $(window);
	var vh = 0;
	$(window).load(function(){
		$('header').addClass('load');
	});

	$(window).on('load resize',function(){
	// Hide Header on on scroll down
		var didScroll = false;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('header').outerHeight();

		$(window).scroll(function(event){
			//$('header').addClass('scrolled');
			didScroll = true;
		});

		setInterval(function() {
			if (didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 0);

		function hasScrolled() {
			var st = $(this).scrollTop();
			
			// Make sure they scroll more than delta
			if(Math.abs(lastScrollTop - st) <= delta)
				return;
			
			if (st > lastScrollTop && st > navbarHeight){
				// Scroll Down
				if($('header').hasClass('active')){
				
				}else{
					$('header').removeClass('nav-up').addClass('nav-down');
					$('#gnb > ul > li').removeClass('on');
				}
				
			} else {
				// Scroll Up
				if(st + $(window).height() < $(document).height()) {
					$('header').removeClass('nav-down').addClass('nav-up');
				}
			}
			
			lastScrollTop = st;
		}
	});

	$(window).on('load scroll', function(){
		$('header').addClass('load');
	});

	$('#scrTop').click(function(e){
		//e.preventDefault();
		$('html, body').animate({scrollTop: '0'}, 650, 'easeInCubic');	
	});

	/* elements height 동일하게 */
	$(function(){
		function height_set(){
			var heights = $(".sameHeight").map(function (){
				return $(this).height();
			}).get();
			maxHeight = Math.max.apply(null, heights);
			$(".sameHeight").each(function(){
				$(this).height(maxHeight);
			});
		}
		height_set();
		$(window).on('load resize',function(){
			$(".sameHeight").removeAttr('style');
			height_set();
		});
	});

	// 230522 UPDATE
	
	/**************** POPUP ****************/
	if($('.pop_wrap').length){
		$('.pop_btn').click(function(e){
			$('.pop_wrap').toggleClass('on');
		});
	}

	/**************** ALLMENUBTN ****************/
	$('.allMenuWrap, .allMenuWrap *').attr('tabindex', '-1');
	$('#content *').focus(function(){
		$('header').removeClass('active');		
	});
	$('header .allMenuBtn').click(function(){
		$('header').toggleClass('active');
		$('.allMenuWrap, .allMenuWrap *').removeAttr('tabindex', '-1');
		if($('header').hasClass('active')){
			$(this).find('span').html('전체메뉴 닫기');
		}else{
			$(this).find('span').html('전체메뉴 열기');
		}
	});
	if(m.matches){
		$('.all_menu > li > a').click(function(e){
			e.preventDefault();
			$('.all_menu > li').removeClass('on');
			$(this).parent('li').addClass('on');
		});
	}
	$('header .all_menu ul li a').click(function(){
		$('header').removeClass('active');
		$('.allMenuWrap, .allMenuWrap *').attr('tabindex', '-1');
	});

	$('#gnb > ul > li').on('focusin mouseenter',function(){
		$('#gnb > ul > li').removeClass('on');
		$(this).addClass('on');
		$('header').removeClass('nav-down');
	});
	$('#gnb > ul > li').on('focusout mouseleave',function(){
		$(this).removeClass('on');
	});

	/**************** WH & BH HEADER ****************/
	var whzone = $('.whzone');
	if(whzone.length){
		$(document).on('scroll', function(e){
			let currentPos = $(this);
			let flag = false;
			for(var i=0;i<whzone.length;i++){
				var thisScroll = $(this).scrollTop();
				var whzoneOffset = $(whzone[i]).offset().top;
				var whzoneH = whzoneOffset + $(whzone[i]).height();
				
				if(thisScroll >= whzoneOffset && thisScroll < whzoneH){
					flag = true;
					break;
				}
			}
			if(flag){
				$('header').addClass('wh');
			}else{
				$('header').removeClass('wh');
			}
		});
	}

	if($('#wrap.wh').length){
		$(window).scroll(function(){
			if($(this).scrollTop() > 300){
				$('#wrap').removeClass('wh');
			}else{
				$('#wrap').addClass('wh');
			}
		});
	}

	/**************** FOOTER ****************/
	$('.ft_blank').css('height', $('footer').height());
	let footer = gsap.timeline({
		scrollTrigger: { 
			trigger: '.ft_blank',
			start: "99% bottom",
			end: "100%",
			scrub: true,
		},
	});
	
	footer
	.to('footer',1,{className:'lg on'})

	if($('.smile').length){
		let smile = gsap.timeline({
			scrollTrigger: { 
				trigger: '.smile',
				start: "-50% top",
				end: "100%",
				scrub: true,
			},
		});
		
		smile
		.to('.smile',1,{className:'smile off'})
	}

	$('.fam_site button').click(function(){
		$('.fam_site').toggleClass('on');
	});
	
	$('.fam_site button, .fam_site a').on('focus',function(){
		$('.fam_site').addClass('on');
	});

	$('.fam_site').on('focusout mouseleave',function(){
		$(this).removeClass('on');
	});

	/**************** WAVE TEXT ****************/
	$('.wave').each(function(i,e){
		var wave = $(this).children().clone();
		$(this).append(wave);
	});
	
	/**************** WAVE TEXT ****************/
	if($('.icon_u').length){
		$('.icon_u').each(function(e,i){ 
			var fill = $(this).data('color');
			if(fill == undefined){
				fill = "fff";
			}
			$(this).html(
				`<svg viewBox="0 0 796 339" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M686.71 239.799H113.435V0H0V256.325C0 301.982 36.9388 339 82.4966 339H713.515C759.061 339 796 301.982 796 256.325V0H686.71V239.799Z" fill="#${fill}"/>
			</svg>`
			);
		});
	}

	/**************** ONLY MOBILE SWIPER ****************/
	if(m.matches){
		$('.swiper_m').addClass('swiper');
		$('.swiper_m > ul').addClass('swiper-wrapper');
		$('.swiper_m > ul > li').addClass('swiper-slide');
	} else{
		$('.swiper_m').removeClass('swiper');
		$('.swiper_m > ul').removeClass('swiper-wrapper');
		$('.swiper_m > ul > li').removeClass('swiper-slide');
	}

	/**************** BROWSER WIDTH ****************/
	var width = $(window).width();
	$(window).on('resize', function() {
		if ($(this).width() !== width) {
			width = $(this).width();
			//location.reload();
		}
	});
	
	/**************** AOS ****************/
	AOS.init({duration: 1000, offset: 0, easing: 'cubic-bezier(0.25, 1, 0.5, 1);'});
	$(window).scroll(function(){
		AOS.init({duration: 1000, offset: 0, easing: 'cubic-bezier(0.25, 1, 0.5, 1);'});
	});
});

/**************** IMG RESIZING ****************/
$(window).on('load', function(){
	var allRemImg = $('.remImg');
	allRemImg.hide();
	for(i=0; i<allRemImg.length; i++){
		var remImg = allRemImg.eq(i);
		var remImgWidth= remImg[0].naturalWidth;
		remImg.css({'width' : remImgWidth + 'rem', 'display' : 'block'});
		allRemImg.show();
	}

	/**************** SWIPER 웹 접근성 (불필요한 attr 삭제) ****************/
	if($('.swiper-slide').length){
		$('.swiper-slide').removeAttr('aria-label', 'aria-live');	
	}
});
