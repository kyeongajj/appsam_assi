$(()=>{
  gsap.registerPlugin(ScrollTrigger);

  $('#gnb .inMenuWrap').on('mouseenter',function(){
		$('#gnb > ul > li').removeClass('show');
		$(this).addClass('show');
	});
  $('#gnb .inMenuWrap').on("mouseleave", function(){
    $('#gnb > ul > li').removeClass('show');
  });

  $('.menuBtn').on("click", ()=>{
    $(".menuBtn").toggleClass('style');
    $('.allMenu').toggleClass('on')
  });

  //header_navbar
  $(window).on("load resize", function(){
    let navHeight = $('header').outerHeight();
    let lastsTop = 0;

    function screenScroll(){
      let sTop = $(this).scrollTop();

      if(sTop > lastsTop && sTop > navHeight){ //현재 스크롤위치가 lastsTop보다 클때, 현재스크롤위치가 헤더의 세로크기보가 클때,
        //scroll_Down
        $('.header').removeClass('navUp').addClass('navDown');
        $('#gnb > ul > li').removeClass('on');
      }else{
        //scroll_Up
        if(sTop + $(window).height() < $(document).height()) {
          $('.header').removeClass('navDown').addClass('navUp');
        }
      }
    };

    $(window).on("scroll", function(){
      screenScroll();
    });
  })
  
  
  gsap.to(".rightround",{
    scrollTrigger:{
      trigger: ".header",
      start: "center top",
      end: "top 200px",
      scrub: 1,
      // markers:true
    },
    y:-100,
    duration:3
  });


  let textani = gsap.timeline({
    scrollTrigger:{
      trigger:".content01",
      start:"20% 30%",
      pin:true,
      endTrigger: ".text_u",
      end:"+=1000px",
      scrub:1,
      // markers:true
    }
  });
  textani.to(".text_top",{y:-30, autoAlpha:0, duration:0.5})
  .to(".sticky_box", {y:-30, autoAlpha:0, duration:1})
  .to(".text_with", {"top":"15%", duration: 1})
  .to(".text_u", { autoAlpha:1, duration:1.5}, "<")
  .to(".text_you", {"bottom" : "71%", autoAlpha:1, duration:1}, "<")
  .to(".text_with", {"left": "50%", "transform" : "translateX(-50%)", duration: 1.2})
  .to(".text_you", {"right": "30%", autoAlpha:0, duration:1.2}, "<")
  .to("text_with", {deley:1, duration:2})
  

  let textani02 = gsap.timeline({
    scrollTrigger:{
      trigger: ".container .content02",
      start: "top 30%",
      pin: true,
      scrub: 1,
      end: "+=2000px",
      endTrigger: ".cont2 .text03",
      // markers: true,
      toggleClass: "toline",
      onLeave:()=>{
        let addname = document.querySelector(".content02");
        addname.classList.add("toline");
      },
    }
  });

  textani02
  .to(".content02 .cont1", {"transform":"translateY(0%)", autoAlpha: 1, duration: 2})
  .to(".content02 .cont2 .text02", {"transform":"translateY(0%)", autoAlpha: 1, duration: 2})
  .to(".content02 .cont2 .line_efect", { autoAlpha: 1, duration: 2})
  .to(".content02 .cont2 .text_box", {"transform":"translateY(0%)", autoAlpha: 1, duration: 2})
  .to(".content02 .cont2 .text_box", { deley: 10, duration: 10})


  
})//readyfn

