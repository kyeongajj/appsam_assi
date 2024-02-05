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

  // let tl = scrollTrigger.create({
  //     trigger: ".header",
  //     // pin: true, // true이면 스크롤이 트리거를 지나갈 때까지 트리거를 고정
  //     start: "top top", // 트리거가 화면 중간에 닿으면 애니메이션 시작
  //     // markers: true,
  //     //end: "+=200", // 2000px만큼 스크롤하면 애니메이션 끝
  //     scrub: 1.5, // 스크롤 속도에 따라 애니메이션 속도가 달라짐
  // });
  // tl.to(".header", {y:"-50%"});


  let textani = gsap.timeline({
    scrollTrigger:{
      trigger:".content",
      start:"20% 30%",
      // end:"bottom 80%",
      pin:true,
      endTrigger: ".text_you",
      end:"+=1200px",
      scrub:1,
      // markers:true
    }
  });
  textani.to(".text01",{y:-30, autoAlpha:0, duration:0.3})
  .to(".text_with", {"top":"22%", duration: 1})
  .to(".text_u", { autoAlpha:1, duration:1.5}, "<")
  .to(".text_you", {"bottom" : "71%", autoAlpha:1, duration:1}, "<")
  .to(".text_with", {"left": "40%", duration: 0.7})
  .to(".text_you", {"right": "30%", autoAlpha:0, duration:0.7}, "<")
  .to("text_with", ".text_you", {deley:3})
  
})//readyfn

