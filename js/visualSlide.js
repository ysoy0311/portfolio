
        var count = 0; 
        var vS = setInterval("vSlide()",3000);

        function vSlide(){ 

                count += 1;
                if(  count <=  1 ){  
                        $(".intro>div>ul").stop().animate({ marginLeft:  "-100%" },"slow");
                        vSlideBtn(count);
                }else{
                        $(".intro>div>ul li:first").appendTo(".intro>div>ul"); 
                        $(".intro>div>ul").css({ marginLeft:  0 });
                        $(".intro>div ul").stop().animate({ marginLeft: "-100%" },"slow",function(){
                                $(".intro>div ul li:first").appendTo(".intro>div ul");
                                $(".intro>div>ul").css({ marginLeft:  0 });
                                count = 0;
                                vSlideBtn(count);
                        });
                };                           
        };


        function vSlideBtn(count){
                $(".visual_controls button").css({ background:"none"});
                $(".visual_controls button:eq("+ (count+1) +")").css({ background:"#fff"});
        };


$(function(){


        vSlideBtn(count); 

        $(".visual_controls button:not(:first)").on("click",function(){
                clearInterval(vS);              
                count = $(this).index(); 

                $(".visual_controls button").css({ background:"none"});
                $(".visual_controls button:eq("+count+")").css({ background:"#fff"}); 

                $(".intro>div>ul").stop().animate({ marginLeft: -100 * (count-1) +"%" });  
        });

        $(".visual_controls button:first").on("click",function(){       

                if(   $(this).children("img").attr("alt") == "일시정지" ){
                        clearInterval(vS); 
                        $(this).children("img").attr("src","images/play_btn.png").attr("alt","자동재생");
                }else{
                        vSlide();
                        vS =  setInterval("vSlide()",3000); 
                        $(this).children("img").attr("src","images/pause_btn.png").attr("alt","일시정지");
                };               
        });



});