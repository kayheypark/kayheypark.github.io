$(document).ready(function () {

    $("#container a, .moreBox a, .main_banner a, #sitemap_wrap a, .to_top a").click(function(e){
        e.preventDefault();

    });
    
    /* 탑버튼 */
    $(".to_top").click(function(){
        $("html,body").stop().animate({"scrollTop":0},1200,"swing");
    });
    /*탑버튼(스크롤탑=0일시 안보이게)*/
    $(window).scroll(function(){

        var nowScroll = $(this).scrollTop();
        console.log(nowScroll);
        if(nowScroll<100){
            $(".to_top").addClass("on"); // .to_top.on{opacity:0}
            
        }else{
            $(".to_top").removeClass("on");

        }
    });

    /* 탑메뉴 : 검색서식열기 */
    var srchFlag = false;
    $(".btn_srch").click(function(){
        if(srchFlag==0){
            $(".srch_wrap").css({"display":"block"});
            $(".dark_area").addClass("on");
            $(".btn_srch").addClass("on");
            srchFlag = true;
        } else {
            $(".srch_wrap").css({"display":"none"});
            $(".dark_area").removeClass("on");
            $(".btn_srch").removeClass("on");
            srchFlag = false;
        }

        });


    /* 배너 */
    var $bnnNum=0;
    var $lastNum=$(".slide_wrap>div").size()-1
    function autoBanner(){
        if($bnnNum>=$lastNum){$bnnNum=-1;}//현재 배너가 마지막 배너 번호 보다 크면 다시 -1로 되돌아 가야 함
        $bnnNum++; //0

        //모든 active 클래스 삭제
        $(".slide_wrap>div").removeClass("active")
        $(".slide_ctrl li a").removeClass("active")

        //active 클래스가 div에 추가되게
        $(".slide_wrap>div").eq($bnnNum).addClass("active")
        $(".slide_ctrl li a").eq($bnnNum).addClass("active")

    }

    /*배너 리버스*/
    function autoBannerRvs(){
        if($bnnNum<=0){$bnnNum=$lastNum+1;}//0보다 작으면 다시 클릭시 맨끝으로 보내준다.
        $bnnNum--; //0
        console.log("$lastNum : "+$lastNum);

        //모든 active 클래스 삭제
        $(".slide_wrap>div").removeClass("active")
        $(".slide_ctrl li a").removeClass("active")

        //active 클래스가 div에 추가되게
        $(".slide_wrap>div").eq($bnnNum).addClass("active")
        $(".slide_ctrl li a").eq($bnnNum).addClass("active")

    }

    
  

    //다음버튼
    $(".btn_box .next").click(function(){
        autoBanner();
    });
    //이전버튼
    $(".btn_box .prev").click(function(){
        autoBannerRvs();
    });

    //동그라미 배너 네비게이션
    $(".slide_ctrl li:nth-of-type(1) a").click(function(){
        console.log("?");
         //모든 active 클래스 삭제
         $(".slide_wrap>div").removeClass("active")
         $(".slide_ctrl li a").removeClass("active")
 
         //active 클래스가 div에 추가되게
         $(".slide_wrap>div").eq(0).addClass("active")
         $(".slide_ctrl li a").eq(0).addClass("active")
    });
    $(".slide_ctrl li:nth-of-type(2) a").click(function(){
        console.log("?");
         //모든 active 클래스 삭제
         $(".slide_wrap>div").removeClass("active")
         $(".slide_ctrl li a").removeClass("active")
 
         //active 클래스가 div에 추가되게
         $(".slide_wrap>div").eq(1).addClass("active")
         $(".slide_ctrl li a").eq(1).addClass("active")
    });
    $(".slide_ctrl li:nth-of-type(3) a").click(function(){
        console.log("?");
         //모든 active 클래스 삭제
         $(".slide_wrap>div").removeClass("active")
         $(".slide_ctrl li a").removeClass("active")
 
         //active 클래스가 div에 추가되게
         $(".slide_wrap>div").eq(2).addClass("active")
         $(".slide_ctrl li a").eq(2).addClass("active")
    });

//2초마다 오토배너
var autoBnn = setInterval(autoBanner,6000);

    //배너 재생 멈춤
    var flag = true;
    $(".slide_ctrl .pause a").click(function(){
        if(flag==true){
            //멈춰라
            clearInterval(autoBnn);
            $(this).addClass("on");
            flag=false;
        } else {
            //다시시작해라
            autoBnn = setInterval(autoBanner,6000);
            $(this).removeClass("on");
            flag=true;
        }
    });

    $(".slide_ctrl .pause a").mouseover(function(){
        if(flag==true){
            //멈춰라
            $(this).addClass("on");
        }
    });
    $(".slide_ctrl .pause a").mouseout(function(){
        if(flag==true){
            //멈춰라
            $(this).removeClass("on");
        }
    });

    $(".slide_ctrl .pause a").mouseover(function(){
        if(flag==false){
            //멈춰라
            $(this).removeClass("on");
        }
    });
    $(".slide_ctrl .pause a").mouseout(function(){
        if(flag==false){
            //멈춰라
            $(this).addClass("on");
        }
    });


    //슬라이드 액티브시 동그라미 불들어오기
    


//주메뉴슬라이딩
        //<![CDATA[
        $("nav>ul>li:nth-of-type(1)>a").bind("mouseover focus", function () {
            $(".header_wrap").animate({
                "height": "380px"
            }, 150);

            $("nav>ul>li>ul").css("display", "none");
            $(this).next().css("display", "block");

            $("nav>ul>li").removeClass("on");
            $(this).parent().addClass("on");

        });

        $("nav>ul>li:nth-of-type(2)>a").bind("mouseover focus", function () {
            $(".header_wrap").animate({
                "height": "250px"
            }, 150);

            $("nav>ul>li>ul").css("display", "none");
            $(this).next().css("display", "block");

            $("nav>ul>li").removeClass("on");
            $(this).parent().addClass("on");

        });
        $("nav>ul>li:nth-of-type(3)>a").bind("mouseover focus", function () {
            $(".header_wrap").animate({
                "height": "250px"
            }, 150);

            $("nav>ul>li>ul").css("display", "none");
            $(this).next().css("display", "block");

            $("nav>ul>li").removeClass("on");
            $(this).parent().addClass("on");

        });
        $("nav>ul>li:nth-of-type(4)>a").bind("mouseover focus", function () {
            $(".header_wrap").animate({
                "height": "460px"
            }, 150);

            $("nav>ul>li>ul").css("display", "none");
            $(this).next().css("display", "block");

            $("nav>ul>li").removeClass("on");
            $(this).parent().addClass("on");

        });
        $("nav>ul>li:nth-of-type(5)>a").bind("mouseover focus", function () {
            $(".header_wrap").animate({
                "height": "270px"
            }, 150);

            $("nav>ul>li>ul").css("display", "none");
            $(this).next().css("display", "block");

            $("nav>ul>li").removeClass("on");
            $(this).parent().addClass("on");

        });

        $("nav").bind("mouseleave blur", function () {
            $(".header_wrap").stop().animate({
                "height": "70px"
            }, 100, "linear");
            $("nav>ul>li>ul").css("display", "none");

            $("nav>ul>li").removeClass("on");

        });
        //]]>

    

}); // 독레디닫기