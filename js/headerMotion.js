$(function(){
    if($(window).width() >= 1400){

      //등장모션(누처) 화면 조작
      $("#header").css({ opacity:0 });
      $("#header").animate({ opacity:1},"fast",function(){
        $("h1").animate({ marginTop:0},200);
        $(".gnb li:eq(0)").animate({ marginTop:0},200);
        $(".gnb li:eq(1)").animate({ marginTop:0},400);
        $(".gnb li:eq(2)").animate({ marginTop:0},600);
        $(".gnb li:eq(3)").animate({ marginTop:0},800);
        $(".gnb li:eq(4)").animate({ marginTop:0},1000);
      });

      //선택된 전역메뉴를 따라다니는 하단선!!!!
      $("#header nav").append("<span></span>");
      $("#header nav span").css({  position:"absolute", top:"90px", width: "180px", height:"5px", background:"#fff", marginLeft:0 });

      $(".gnb li").on("mouseover",function(){      
        $("#header nav span").stop().animate({ marginLeft: 180 * $(this).index() },100);
      });

      //html문서에 발생되는 세로 스크롤바의 위치(scrollTop/scrollLeft)를 전역메뉴 클릭시 동작으로 제어
      $(".gnb li").on("click",function(){
        $("html").animate({ scrollTop: 940 * $(this).index() });
      });
    };

});