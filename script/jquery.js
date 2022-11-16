
$(document).ready(function(){

  let n = 0;

  function fadeInOut(){
    //console.log('5초마다 함수가 호출되요');
    $('.mslide div').eq(n).stop().fadeOut();//현재 보이는 이미지 숨기기
    $('.mslide .ctrl_btn li').eq(n).removeClass('on');//현재 이미지에 해당하는 콘트롤 버튼 서식을 제거
    if(n==4){ //만약에 인덱스 번호가 2라면
      n=0; //0으로 넣어서 1번 슬라이드가 나오게
    }else{ //그렇지 않으면 
      n++; //다음 슬라이드가 나오게
    }
    console.log(n); //인덱스 번호 확인하기
    $('.mslide div').eq(n).stop().fadeIn(); //해당 번호에 맞는 이미지 보이게하기
    $('.mslide .ctrl_btn li').eq(n).addClass('on');//현재 이미지에 맞는 콘트롤 버튼에 서식을 적용.
  };

  function fadeInOut2(){ //0 , 2, 1, 0........
    $('.mslide div').eq(n).stop().fadeOut();//현재 보이는 이미지 숨기기
    $('.mslide .ctrl_btn li').eq(n).removeClass('on');
    if(n==0){ //만약에 인덱스 번호가 0라면
      n=4; //2으로 넣어서 3번 슬라이드가 나오게
    }else{ //그렇지 않으면 
      n--; //이전 슬라이드가 나오게
    }
    console.log(n); //인덱스 번호 확인하기
    $('.mslide div').eq(n).stop().fadeIn(); //해당 번호에 맞는 이미지 보이게하기
    $('.mslide .ctrl_btn li').eq(n).addClass('on');
  }

  //시간객체
  let Timer = setInterval(fadeInOut, 7000);

  //좌우 버튼 클릭시 해당 이미지 나오게....
  $('.mslide i.fa-angle-left').click(function(){
    //alert('왼쪽버튼을 클릭하셨습니다.');
    fadeInOut2(); //0,2,1,0
  });

  $('.mslide i.fa-angle-right').click(function(){
    //alert('오른쪽 버튼을 클릭하셨습니다.');
    fadeInOut(); //0,1,2,0
  }); 

  //좌우 버튼에 마우스 오버시 시간을 제거 멈추게, 다시 아웃시 시간을 넣어서 움직이게...
  $('.mslide i.fas,.mslide .ctrl_btn').hover(function(){
    clearInterval(Timer); //시간을 멈추게
  },function(){
    Timer = setInterval(fadeInOut, 5000);
  });

  
  $('.mslide .ctrl_btn li').click(function(){
    n = $(this).index();
    console.log(n); //0,1,2
    $('.mslide .ctrl_btn li').removeClass('on');
    $('.mslide .ctrl_btn li').eq(n).addClass('on');

    // 슬라이드 이미지 모두 숨기고
    // 해당 n값에 슬라이드 이미지 보이게 하기
    $('.mslide div').fadeOut();
    $('.mslide div').eq(n).stop().fadeIn();
  });

});