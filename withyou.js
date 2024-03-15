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
  .to(".text_with", {"top":"20%", duration: 1})
  .to(".text_u", { autoAlpha:1, duration:1.5}, "<")
  .to(".text_you", {"bottom" : "71%", autoAlpha:1, duration:1}, "<")
  .to(".text_with", {"left": "37%", duration: 1.2})
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

