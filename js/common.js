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

	//load나 resize되면, 실행될 함수
	$(window).on('load resize',function(){
	// Hide Header on on scroll down
		var didScroll = false;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('header').outerHeight(); //컨텐츠외 화면으로 보이는 세로값

		$(window).scroll(function(event){
			//$('header').addClass('scrolled');
			didScroll = true; //윈도우가 스크롤이 시작되면, true값을 준다. 그러므로 setInterval함수가 실행된다.
		});

		setInterval(function() {
			if (didScroll) { //didScroll이 true면.. hasScrolled()함수실행해라
 				hasScrolled();
				didScroll = false;
			}
		}, 0);
		/** 비동기 실행: 때로는 코드의 특정 부분을 비동기적으로 실행하고자 할 때 setInterval을 사용할 수 있습니다. 이 경우, 0ms의 타이머는 함수가 현재 실행 흐름 외부에서 가능한 한 빨리 실행되어야 함을 의미합니다. */

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
			$(".sameHeight").removeAttr('style'); //.sameHeight의 html인라인요소인 'style'속성을 제거하고..
			height_set(); //함수로 'height(maxHeight)'을 높이값으로 동일하게 설정해준다.
			//창크기가 '조정'되거나 페이지가 '로드'될때마다 이러한 높이를 업데이트한다.
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
	$('.allMenuWrap, .allMenuWrap *').attr('tabindex', '-1'); //웹접근성을위한 설정 : 비접근설정
	$('#content *').focus(function(){
		$('header').removeClass('active');		
	});
	$('header .allMenuBtn').click(function(){
		$('header').toggleClass('active');
		$('.allMenuWrap, .allMenuWrap *').removeAttr('tabindex', '-1'); //웹접근성을위한 설정 : 비접근설정 해지
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
		//키보드사용자를 위한 탭키 순서설정에서 '-1'은 '.allMenuWrap *'의 해당클래스요소와 모든 하위요소는 초점을 맞출수 없게 된다.
	});

	/**
tabindex="1"
문서 안에서 가장 먼저 초점을 받을 수 있습니다. 그러나 자연스러운 마크업 순서를 거스르기 때문에 주의해서 사용해야 합니다. 검색엔진 사이트에서 검색창에 사용하면 적합하지만(이 대신 autofocus 속성이 더 적절할 듯 해요) 그 외 적합한 경우는 잘 떠오르지 않는군요.

tabindex="0"
키보드 초점을 받을 수 없는 div, span과 같은 요소도 초점을 받을 수 있도록 만들어 줍니다. 초점을 받되 초점을 받는 순서는 자연스러운 마크업 순서를 따릅니다.

tabindex="-1"
키보드 초점을 받을 수 있는 요소도 초점을 받을 수 없도록 만들어 줍니다. 초점을 받을 수 없기 때문에 "-1" 이외의 다른 음의 정수 값은 사실상 의미가 없습니다.
	 * 
	 */

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
					//현재스크롤top값이 '.whzone'요소의 top값보다 넘어가면 && 현재스크롤 top값이 '.whzone'요소의 세로값을 포함한 값보다는 작으면...
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
