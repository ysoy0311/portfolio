$(function(){
  if($(window).width() >= 1400){

      // 스크롤(휠) 움직임 전 초기값 세팅
      $(".profile>*").css({opacity:0});
      $(".ability>*").css({opacity:0});
      $(".works>*").css({opacity:0});
      $(".contact>*").css({opacity:0});

      //2.스크롤(휠) 움직임
      $(window).scroll(function(){
            var st = $(window).scrollTop();
            if(st < 100){
              $(".profile>*").css({opacity:0});
              $(".ability>*").css({opacity:0});
              $(".works>*").css({opacity:0});
              $(".contact>*").css({opacity:0});
            }
            if(st > 400 && st < 1300){
              $(".profile>*").stop().animate({opacity:1},"normal");
              $(".ability>*").css({opacity:0});
              $(".works>*").css({opacity:0});
              $(".contact>*").css({opacity:0});
            };
            if(st > 1400 && st < 2200){
              $(".ability>*").stop().animate({opacity:1},"normal");
              $(".profile>*").css({opacity:0});
              $(".works>*").css({opacity:0});
              $(".contact>*").css({opacity:0});
            };
            if(st > 2300 && st < 3200){
              $(".works>*").stop().animate({opacity:1},"normal");
              $(".profile>*").css({opacity:0});
              $(".ability>*").css({opacity:0});
              $(".contact>*").css({opacity:0});
            };
            if(st > 3300){
              $(".contact>*").stop().animate({opacity:1},"normal");
              $(".profile>*").css({opacity:0});
              $(".ability>*").css({opacity:0});
              $(".works>*").css({opacity:0});
            };

            //스크롤바의 위치에 따라 전역메뉴 하단 span구역 자동 위치조절
            if(st > 0 && st < 940){ //인트로
                $("#header nav span").css({ marginLeft: 0 });
            }else if( st >= 940 && st < 1880){  //프로필
                $("#header nav span").css({ marginLeft: 180 });
            }else if( st >= 1880 && st < 2820 ){ //직무역량
                $("#header nav span").css({ marginLeft: 360 });
            }else if( st >= 2820 && st < 3760 ){  //포트폴리오
                $("#header nav span").css({ marginLeft: 540 });
            }else if( st >= 3760  ){ //연락처
                $("#header nav span").css({ marginLeft: 720 });
            };
      });    
  }
    // works 마우스 오버 시 사진 확장
    $(".works li").on("mouseover",function(){
        $(this).stop().animate({ backgroundSize:"120%"},"slow");
    });
    $(".works li").on("mouseleave",function(){
      $(this).stop().animate({ backgroundSize:"100%"},"slow");
  });

});