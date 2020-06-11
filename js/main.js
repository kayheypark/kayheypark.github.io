/* main.js */

$(function () {
    //a 누를때 자동스크롤 방지
    $(".btn_hamberger ,h1 a").click(function(e){
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
        console.log(posX);
        
        //+반대방향, -같은방향
        //.obj11 { right: 20px; bottom: 20px;}
        $(".speed_1").css({
            "top": 40 - (posY/80),
        });
        $(".speed_2").css({
            "top": 340 + (posY/20),
        });
        $(".speed_3").css({
            "top": 500 - (posY/5),
        });
        $(".kickboard_area").css({
            "left": -10 + (posX/15),
            "top": 20 + (posY/40)
        });
        console.log("성공");
    });


    //원스크롤


    
}); // DocReady Close

//<i class="fas fa-times"></i>