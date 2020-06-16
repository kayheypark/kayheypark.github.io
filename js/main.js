/* main.js */

$(function () {
    //로딩페이지
    function imagesProgress(){
        var $container = $('#progress'), // div
            $progressBar = $container.find('.progress-bar'), // span
            $progressText = $container.find('.progress-text'), // span

            imgLoad = imagesLoaded('body'),
            imgTotal = imgLoad.images.length, // body 전체 이미지 수를 저장

            
            imgLoaded = 0, // 이미지 로딩한 숫자
            current = 0, // text에 들어갈 숫자
            
            progressTimer = setInterval(updateProgress, 1000 / 60);
            console.log("imgTotal : " + imgTotal);

            imgLoad.on('progress', function(){
                imgLoaded++;
            });

            function updateProgress(){
                var target = (imgLoaded / imgTotal) * 100;
                    current += (target - current) * 0.1;

                    $progressBar.css({width:current+'%'});
                    $progressText.text(Math.floor(current)+'%');

                    if(current >= 100){
                        clearInterval(progressTimer);
                        $container.addClass('progress-complete');

                        $progressBar.add($progressText).delay(800).animate({opacity:0},250,function(){
                            $container.animate({top:'-100%'}, 500, "swing");

                        });
                    }
                    if(current>99.9){
                        current = 100;
                    }

            }; //updateProgress()
    }//imagesProgress()
    imagesProgress();


    //a 누를때 자동스크롤 방지
    $(".btn_hamberger ,h1 a, .indicator a, .arrow a, section a").click(function(e){
        e.preventDefault();
    });

    //새로고침 TOP효과
    setTimeout (function(){
        scrollTo(0,0);
    },100);



    //상단에서 내려오는 .gnb
    var flag = false;
    $(".btn_hamberger").click(function (){

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
    $(window).mousemove(function(e){
        var posX = e.pageX;      // 마우스 커서의 x축 좌표값
        var posY = e.pageY;     // 마우스 커서의 Y축 좌표값

        
        //+반대방향, -같은방향
        //.obj11 { right: 20px; bottom: 20px;}
        $(".speed_1").css({
            "top": 140 - (posY/5),
        });
        $(".speed_2").css({
            "top": 180 + (posY/5),
        });
        $(".speed_3").css({
            "top": 210 - (posY/5),
        });
        $(".kickboard_area").css({
            "left": 300 + (posX/3),
            "top": -200 + (posY/2)
        });
    });

    //킥보드에 마우스 홀딩시 부스터
    $(window).mousedown(function(){
        $(".kickboard_area").removeClass("on");
        $(".kickboard_area").addClass("on");

        $(".speed_1").addClass("on");
        $(".speed_2").addClass("on");
        $(".speed_3").addClass("on");
    });
    $(window).mouseup(function(){
        $(".kickboard_area").removeClass("on");
        $(".speed_1").removeClass("on");
        $(".speed_2").removeClass("on");
        $(".speed_3").removeClass("on");
    });





    //원스크롤
    //mousewheel
    
    $("section").bind("mousewheel scroll", function(event, delta){
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

    //모바일에서 터치로 섹션 내려기
   /* $("section").bind("swipeleft",function(delta){
        console.log("2222");
        delta=1;
        $("section").trigger("mousewheel");
    });
    $("section").bind("swiperight",function(delta){
        console.log("22");
        delta=-1;
        $("section").trigger("mousewheel");
    }); */

    
    


    //좌측 인디케이터
     //클릭시 섹션이동
    function IdcMove(seq){
        var offset = $("#section" + seq).offset();
        $('html, body').stop().animate({scrollTop : offset.top}, 1000, "swing");
        $("#gnb").removeClass("on");
    }
    
    $(".indicator ul li:nth-of-type(1) a").click(function(){IdcMove('1');$(".indicator ul li a").removeClass("on");});
    $(".indicator ul li:nth-of-type(2) a").click(function(){IdcMove('2');$(".indicator ul li a").removeClass("on");});
    $(".indicator ul li:nth-of-type(3) a").click(function(){IdcMove('3');$(".indicator ul li a").removeClass("on");});
    $(".indicator ul li:nth-of-type(4) a").click(function(){IdcMove('4');$(".indicator ul li a").removeClass("on");});
    $(".indicator ul li:nth-of-type(5) a").click(function(){IdcMove('5');$(".indicator ul li a").removeClass("on");});
    
        //로고 클릭시 (TOP 으로)
    $("h1 a").click(function(){IdcMove('1')});

        //오프셋 탑값에 따라 자동으로 on 클래스 붙이기
        setInterval(function(){
            var secOffset1 = $("#section1").offset(),
                secOffset2 = $("#section2").offset(),
                secOffset3 = $("#section3").offset(),
                secOffset4 = $("#section4").offset(),
                secOffset5 = $("#section5").offset(),
                scrollTop = $(window).scrollTop();

                
                if(scrollTop == secOffset1.top){
                    $(".indicator ul li a").removeClass("on"); //주기적으로 삭제
                    $(".indicator ul li:nth-of-type(1) a").addClass("on");
                } else if(scrollTop == secOffset2.top) {
                    $(".indicator ul li a").removeClass("on"); //주기적으로 삭제
                    $(".indicator ul li:nth-of-type(2) a").addClass("on");
                } else if(scrollTop == secOffset3.top) {
                    $(".indicator ul li a").removeClass("on"); //주기적으로 삭제
                    $(".indicator ul li:nth-of-type(3) a").addClass("on");
                } else if(scrollTop == secOffset4.top) {
                    $(".indicator ul li a").removeClass("on"); //주기적으로 삭제
                    $(".indicator ul li:nth-of-type(4) a").addClass("on");
                } else if(scrollTop == secOffset5.top) {
                    $(".indicator ul li a").removeClass("on"); //주기적으로 삭제
                    $(".indicator ul li:nth-of-type(5) a").addClass("on");
                }
        },400);


    //GNB
    function gnbLstClk(){ // 리스트 클릭시 버튼 모양을 바꿔준다.

            if(flag == 0){//열음
            $(".btn_hamberger i").removeClass("fas fa-bars");
            $(".btn_hamberger i").addClass("fas fa-times");
            flag = true;
        } else {//닫음
            $(".btn_hamberger i").removeClass("fas fa-times");
            $(".btn_hamberger i").addClass("fas fa-bars");
            flag = false;
        }

    }

    $("#gnb ul li:nth-of-type(1) a").click(function(){
        IdcMove('1');
        gnbLstClk();
        });
    $("#gnb ul li:nth-of-type(2) a").click(function(){
        IdcMove('3');
        gnbLstClk();
        });
    $("#gnb ul li:nth-of-type(3) a").click(function(){
        IdcMove('4');
        gnbLstClk();
        });
    $("#gnb ul li:nth-of-type(4) a").click(function(){
        IdcMove('5');
        gnbLstClk();
        });

    
    

    
    //섹션별 색상다름 설정
    $(window).scroll(function(){
        var secOffset1 = $("#section1").offset();
        var secOffset2 = $("#section2").offset();
        var secOffset3 = $("#section3").offset();
        var secOffset4 = $("#section4").offset();
        var secOffset5 = $("#section5").offset();

        var scrollTop = $(window).scrollTop();
        //console.log(scrollTop);

        if(scrollTop <= secOffset1.top){
            $("#wrap").removeClass("color1");
            $("#wrap").removeClass("color2");
            $("#wrap").removeClass("color3");
            $("#wrap").removeClass("color4");

        }else if(scrollTop <= secOffset2.top){
            $("#wrap").removeClass("color2");
            $("#wrap").removeClass("color3");
            $("#wrap").removeClass("color4");
            $("#wrap").addClass("color1");
        } else if (scrollTop <= secOffset3.top) {
            $("#wrap").removeClass("color1");
            $("#wrap").removeClass("color3");
            $("#wrap").removeClass("color4");
            $("#wrap").addClass("color2");
        } else if (scrollTop <= secOffset4.top) {
            $("#wrap").removeClass("color1");
            $("#wrap").removeClass("color2");
            $("#wrap").removeClass("color4");
            $("#wrap").addClass("color3");
        } else if (scrollTop <= secOffset5.top) {
            $("#wrap").removeClass("color1");
            $("#wrap").removeClass("color2");
            $("#wrap").removeClass("color3");
            $("#wrap").addClass("color4");
        }
        
    });

    //숫자 카운팅
    
    //조건
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var secOffset2 = $("#section2").offset();
        console.log(scrollTop);
        console.log(secOffset2.top);
        if(scrollTop == secOffset2.top){


            $("#section2 .view_area span").addClass("counting");
            $('.counting').each(function() {
              var $this = $(this),
                  countTo = $this.attr('data-count');
              
              $({ countNum: $this.text()}).animate({
                countNum: countTo
              },
            
              {
            
                duration: 1400,
                easing:'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                }
            
              });  
              
            
            });
            
        } else {
            $("#section2 .view_area .skill_cnt").removeClass("counting").html("0");

        }
        
    

    });

    //섹션 2부터 킥보드 좌측 하단으로 이동

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var secOffset2 = $("#section2").offset();
        console.log(scrollTop);
        console.log(secOffset2.top);
        if(scrollTop >= (secOffset2.top/10)){
            $(".kickboard_area").addClass("mini");
        } else {
            $(".kickboard_area").removeClass("mini");
        }
    

    });

    $(window).mousewheel(function(delta){
        var scrollTop = $(window).scrollTop();
        var secOffset2 = $("#section2").offset();

        if(delta>0 && scrollTop >= (secOffset2.top/1.1)){
            $(".kickboard_area").removeClass("mini");
            $(".kickboard_area").css({"top":-120});
        }
        
    });



    


    //코딩, 앱디자인 섹션 가로이동
    var $bnnNum=1;
    var $lastNum=$("#train_1 article").size();
    var $banner_w=$("#train_1").width();

    $(window).resize(function(){
        $banner_w=$("#train_1").width();
    });
    
    $("#section3 .btn_next").click(function(){
        
        
        if($bnnNum<$lastNum){
            $("#train_1").stop().animate({"left":-$banner_w*$bnnNum});
            $bnnNum++;
            console.log("배너넘버"+$bnnNum);
            console.log("라스트넘버"+$lastNum);
            console.log("배너길이"+$banner_w);
        } else if ($bnnNum>=$lastNum){
            $("#train_1").animate({"left":0});
            $bnnNum=1;
            console.log("배너넘버"+$bnnNum);
            console.log("라스트넘버"+$lastNum);
            console.log("배너길이"+$banner_w);

        }

    });
    $("#section3 .btn_prev").click(function(){
      if($bnnNum<=1){
          $bnnNum=$lastNum;
          $("#train_1").stop().animate({"left":-$banner_w*($lastNum-1)});
        } else if ($bnnNum <= $lastNum) {
            $bnnNum--;
            $("#train_1").stop().animate({"left":-$banner_w*($bnnNum-1)});
            console.log("배너넘버"+$bnnNum);
            console.log("라스트넘버"+$lastNum);
            console.log("배너길이"+$banner_w);
        }

    });

    //앱디자인 배너
    var $bnnNumB=1;
    var $lastNumB=$("#train_2 article").size();
    var $banner_wB=$("#train_2").width();

    $(window).resize(function(){
        $banner_wB=$("#train_2").width();
    });
    
    $("#section4 .btn_next").click(function(){
        
        
        if($bnnNumB<$lastNumB){
            $("#train_2").stop().animate({"left":-$banner_wB*$bnnNumB});
            $bnnNumB++;
            console.log("배너넘버"+$bnnNumB);
            console.log("라스트넘버"+$lastNumB);
            console.log("배너길이"+$banner_wB);
        } else if ($bnnNumB>=$lastNumB){
            $("#train_2").animate({"left":0});
            $bnnNumB=1;
            console.log("배너넘버"+$bnnNumB);
            console.log("라스트넘버"+$lastNumB);
            console.log("배너길이"+$banner_wB);

        }

    });
    $("#section4 .btn_prev").click(function(){
      if($bnnNumB<=1){
          $bnnNumB=$lastNumB;
          $("#train_2").stop().animate({"left":-$banner_wB*($lastNumB-1)});
        } else if ($bnnNumB <= $lastNumB) {
            $bnnNumB--;
            $("#train_2").stop().animate({"left":-$banner_wB*($bnnNumB-1)});
            console.log("배너넘버"+$bnnNumB);
            console.log("라스트넘버"+$lastNumB);
            console.log("배너길이"+$banner_wB);
        }

    });



    
   
    //스크롤탑 표시
    /*
    setInterval(function(){
        var scrollTop = $(window).scrollTop();
        $("h1 a span").html(scrollTop);

    }, 10);
    */



    
}); // DocReady Close
