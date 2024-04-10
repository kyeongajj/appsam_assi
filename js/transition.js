$(()=>{
  //carousel slide JS
  const carouselSlide = document.querySelector(".slide_list");
  const carouselContents = document.querySelectorAll(".slide_item");

  const prevBtn = document.querySelector(".prevBtn");
  const nextBtn = document.querySelector(".nextBtn");

  let counter = 1;
  //몇번째 slide index인지를 알수있도록 설정해주고, "1"을 준이유는 미리 첫번째 컨텐츠에 와있도록 하기위함.
  //(5>1>2>3>4>5>1 순서로 slide설정)
  const size = carouselContents[0].clientWidth;

  carouselSlide.style.transform = "translateX(" + -size*counter + "px)"; //size width만큼 왼쪽으로 이동.

  //prevBtn & nextBtn Event
  nextBtn.addEventListener("click", function(){
    if(counter >= carouselContents.length - 1) return;   //다음버튼은 counter가 slide_item의 전체갯수보다 더 크면 멈춘다.
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + -size*counter + "px)";
  })
  prevBtn.addEventListener("click", function(){
    if(counter <= 0) return;   //이전버튼은 counter가 0보다 더 작으면 멈춘다.
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter--;
    carouselSlide.style.transform = "translateX(" + -size*counter + "px)";
  })

  carouselSlide.addEventListener("transitioned", function(){
    //"transitioned"이벤트란, transition이 완료된 이후에 발생하는 이벤트
    //"transitioned"이벤트는, transition 완료를 감지한다.
    //"transitioned"과 함께 사용하는 함수.
    if(carouselContents[counter].id === "lastClone"){  //prevBtn을 계속 클릭하여, "lastClone" id에 도달하면,,,
      carouselSlide.style.transition = "none";  //도달하면, 아무런 애니메이션이 없도록 "none" 설정.
      counter = carouselContents.length - 2;   //(5>1>2>3>4>5>1 순서로) 앞의 5를, 뒤의 5에 오도록 설정.
      carouselSlide.style.transform = "translateX(" + -size*counter + "px)";  //재설정된 counter만큼 위치하도록 해줌.
    }
    if(carouselContents[counter].id === "fristClone"){  //nextBtn을 계속 클릭하여, "fristClone" id에 도달하면,,,
      carouselSlide.style.transition = "none";   //도달하면, 아무런 애니메이션이 없도록 "none" 설정.
      counter = carouselContents.length - counter;  //(5>1>2>3>4>5>1 순서로) 뒤의 1를, 앞의 1에 오도록 설정.
      carouselSlide.style.transform = "translateX(" + -size*counter + "px)";  //재설정된 counter만큼 위치하도록 해줌.
    }
  })

});