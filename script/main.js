/* 292 */
const badgeEl = document.querySelector('header');
const topBtnEl = document.querySelector('.top_btn');

topBtnEl.addEventListener('click',function(){
  gsap.to(window,.6, {  //브라우저를 선택하여 0.6초만에 
    scrollTop:0  //스크롤 꼭때기 0까지 올라간다.
  });
});
window.addEventListener('scroll', function(){
  console.log(window.scrollY); //스크롤값 확인하기
  if(650<window.scrollY){
    // badgeEl.style.display='none';
    gsap.to(badgeEl, 0.8, {
      opacity:0,
      display:'none'
    });
    gsap.to(topBtnEl, 0.6, {
      opacity:1,
      x:0
    });
  }else{
    // badgeEl.style.display='block';
    gsap.to(badgeEl, 0.6, {
      opacity:1,
      display:'block'
    })
    gsap.to(topBtnEl, 0.6, {
      opacity:0,
      
    })
  }
});

const fadeEl = document.querySelectorAll('.fadeIn');

/* gsap.to(요소, 시간, 속성) */

fadeEl.forEach(function(fadeEl,index){
  gsap.to(fadeEl,1,{
    delay:(index+1)*0.7,  //0.7초씩 느리게 시간을 추가
    opacity:1
  });
});






var swiper = new Swiper(".s_notice", {
  direction: "vertical",
  autoplay: true, 
  loop: true
});


var swiper = new Swiper(".proSlide", {  //객체 생성
  slidesPerView: 3,  //속성:값
  spaceBetween: 10,  //속성:값
  centeredSlides: true,     //1번 슬라이드가 중앙에 배치
  pagination: {
    el: ".swiper-pagination", //콘트롤버튼 나오게
    clickable: true,    //콘트롤버튼 클릭 할 수 있음
  },
  loop: true,   //반복회전
  autoplay: true,    //자동으로 움직임
  navigation: {     //좌, 우 버튼 만들기
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

// gsap.to(요소,시간,속성)


// 커피프로모션 토글아이콘 클릭시 박스 숨기고/나타내기
const promotionEl = document.querySelector('section.promotion');
const toggleBtnEl = document.querySelector('.toggle_btn');
// 토글버튼을 클릭하면 프로모션의 크기가 변한다.
toggleBtnEl.addEventListener('click',function(){
  if(promotionEl.classList.contains('hide')){ //만약에 promotion 클래스에 hide 서식이 있다면
    // 높이 0이되어야 
    promotionEl.classList.remove('hide');
  }else{ //그렇지 않으면
    // 높이가 0
    promotionEl.classList.add('hide');
  }
});



// 6,7,8,10 콘텐츠가 화면의 80%지점에 보일 때 동작하는 스크립트
  const spyEl = document.querySelectorAll('section.scroll-spy');

  spyEl.forEach(function(spyEl){

    new ScrollMagic
    .Scene({  //감시할 장면을 추가
    triggerElement:spyEl,
    triggerHook:0.8  //화면의 80%지점에서 동작
  })
  .setClassToggle(spyEl,'show')  //show클래스를 적용하거나 해제하
  .addTo(new ScrollMagic.Controller());   //컨트롤러 장면을 할당한다.
  })

  // awards
  new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
      prevEl: '.awards .swiper-button-prev',
      nextEl: '.awards .swiper-button-next'
    }
  });

  // const thisYear = document.querySelector('.this-year');
  // thisYear.textContent = new Date().getFullYear();