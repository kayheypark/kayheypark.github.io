/* main.js */

$(function () {
    //a 누를때 자동스크롤 방지
    $(".btn_hamberger ,h1 a, .indicator a").click(function(e){
        e.preventDefault();
    });

    //상단에서 내려오는 .gnb
    var flag = false;
    $(".btn_hamberger").click(function(){

        if(flag == 0){//열음
            $("#gnb").addClass("on");
            $(".btn_hamberger i").removeClass("fas fa-bars");
            $(".btn_hamberger i").addClass("fas fa-times");
            flag = true;
        } else {//닫음
            $("#gnb").removeClass("on");
            $(".btn_hamberger i").removeClass("fas fa-times");
            $(".btn_hamberger i").addClass("fas fa-bars");
            flag = false;
        }

    });


    //메인_킥보드
    $("section").mousemove(function(e){
        var posX = e.pageX;      // 마우스 커서의 x축 좌표값
        var posY = e.pageY;     // 마우스 커서의 Y축 좌표값

        
        //+반대방향, -같은방향
        //.obj11 { right: 20px; bottom: 20px;}
        $(".speed_1").css({
            "top": 140 - (posY/5),
        });
        $(".speed_2").css({
            "top": 340 + (posY/5),
        });
        $(".speed_3").css({
            "top": 1000 - (posY/1),
        });
        $(".kickboard_area").css({
            "left": -350 + (posX/3),
            "top": -200 + (posY/2)
        });
    });


    //원스크롤
    //mousewheel
    
    
    $("#containter section").mousewheel(function(event, delta){
        event.preventDefault();

        if(delta>0){
            //마우스 휠을 올렸을 때, 양수값
            var prev = $(this).prev().offset().top;
            $("html,body").stop().animate({"scrollTop":prev},1000,"swing");
        } else if(delta<0){
            // 마우스 휠 내렸을때, 음수값
            var next = $(this).next().offset().top;
            $("html,body").stop().animate({"scrollTop":next},1000,"swing");
        }        
    });

    $(".works_coding article, .works_design article").mousewheel(function(event, delta){
        event.preventDefault();

        if(delta>0){
            //마우스 휠을 올렸을 때, 양수값
            var prev = $(this).prev().offset().top;
            $("html,body").stop().animate({"scrollTop":prev},1000,"swing");
        } else if(delta<0){
            // 마우스 휠 내렸을때, 음수값
            var next = $(this).next().offset().top;
            $("html,body").stop().animate({"scrollTop":next},1000,"swing");
        }        
    });

    



    
}); // DocReady Close

//<i class="fas fa-times"></i>