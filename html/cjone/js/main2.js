var $banner_w;
$(document).ready(function(){
    /*고객센터*/
    $("dl.topMenu dd").eq(4).click(function(){
        $(this).toggleClass("on");
        if($(this).hasClass("on")){
            $(this).children("a").attr("title","고객센터 닫기");
        }else{
            $(this).children("a").attr("title","고객센터 열기");
        }
    });
    
    /*모바일 고객센터*/
    $("dl.mob_topMenu dd").eq(4).click(function(){
        $(this).toggleClass("on");
        if($(this).hasClass("on")){
            $(this).children("a").attr("title","고객센터 닫기");
        }else{
            $(this).children("a").attr("title","고객센터 열기");
        }
    });
        
    /*주메뉴*/
    $(".gnb>ul>li>a").bind("mouseover focus",function(){
        if($("form.srch").is(":visible")){
        $("form.srch").removeClass("on");
        $(".srch_open").removeClass("on");
        }
        if($(".topMenu dd").eq(4).hasClass("on")){
            $(".topMenu dd").eq(4).removeClass("on");
        }
        $(".header_wrap").animate({"height":"445px"},300,"linear",function(){
            $(".gnb>ul>li>ul").css("display","block");
            //주메뉴 검색 오류 처리
        });
    });

    $(".gnb").bind("mouseleave blur",function(){
        $(".header_wrap").animate({"height":"120px"},300,"linear",function(){
            $(".gnb>ul>li>ul").css("display","none");
        });
    });
    
    /*모바일 햄버거 버튼 열기/닫기*/
    $(".mobBtn").click(function(){
        $(".header_inner").addClass("on");
        $("body").css({"overflow":"hidden"});
        
    });
    $(".mobBtn_close").click(function(){
        $(".header_inner").removeClass("on");
        $("body").css({"overflow":"unset"});
    });
    
    /*모바일 주메뉴 2단*/
    $(".mob_gnb>ul>li").click(function(){
        //e.preventDefault();
        $(this).siblings().removeClass("on");
        $(this).toggleClass("on");
    });
    
    /*검색*/
    $(".srch_open").click(function(){
        $("form.srch").toggleClass("on");
        $(this).toggleClass("on");
    });
    
    /*로그인 이미지*/
    var appear="";
    for(i=0;i<57;i++){
        if(i<10){
            appear+="<img src='images/appear/appear_0000"+i+".png' alt='로그인버튼"+i+"'>"
        }else{
            appear+="<img src='images/appear/appear_000"+i+".png' alt='로그인버튼"+i+"'>"
        }
    }
    $(".appear").html(appear);
    
    var loop="";
    for(i=0;i<82;i++){
        if(i<10){
            loop+="<img src='images/loop/loop_0000"+i+".png' alt='로그인버튼"+i+"'>"
        }else{
            loop+="<img src='images/loop/loop_000"+i+".png' alt='로그인버튼"+i+"'>"
        }
    }
    $(".loop").html(loop);
    
    /*로그인 애니메이션*/
    for(var k=0;k<57;k++){
        $(".appear>img").eq(k).css({"animation":"ani 2.85s linear "+0.05*k+"s 1 normal"});
    }
    for(var j=0;j<82;j++){
        $(".loop>img").eq(j).css({"animation":"ani 4.1s linear "+(2.85+0.05*j)+"s infinite normal"});
    }
    
    /*프로모션 배너*/
    var $bnnNum=0;
    var $lastNum=$(".banner_frame>section").size()-1;
    $banner_w=$("body>section").width();
    
    //리사이즈
    $(window).resize(function(){
        $banner_w=$("body>section").width();
    });
    
    //다음
    $(".next").click(function(){
        $bnnNum++;
        if($bnnNum>$lastNum) $bnnNum=0;
        $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear",function(){
            if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
                $(this).siblings().find("a").addClass("wbtn");
            }else{
                $(this).siblings().find("a").removeClass("wbtn");
            }
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    });
    
    //이전
    $(".prev").click(function(){
        $bnnNum--;
        if($bnnNum<0) $bnnNum=$lastNum;
        $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear",function(){
            if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
                $(this).siblings().find("a").addClass("wbtn");
            }else{
                $(this).siblings().find("a").removeClass("wbtn");
            }
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    });
    
    var $banner=$(".banner_roll a").click(function(){
        $bnnNum=$banner.index(this);
        $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear",function(){
            if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
                $(this).siblings().find("a").addClass("wbtn");
            }else{
                $(this).siblings().find("a").removeClass("wbtn");
            }
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    });
    
    /*오토배너*/
    function autoBanner(){
        //다음 쿼리 그대로 가져옴
        $bnnNum++;
        if($bnnNum>$lastNum) $bnnNum=0;
        $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear",function(){
            if($(".banner_frame>section").eq($bnnNum).hasClass("white")){
                $(this).siblings().find("a").addClass("wbtn");
            }else{
                $(this).siblings().find("a").removeClass("wbtn");
            }
            $(".banner_roll a").removeClass("on");
            $(".banner_roll a").eq($bnnNum).addClass("on");
        });
    }
    
    //일정한 시간동안 계속반복
    var $autoBnn=setInterval(autoBanner,5000);
    
    /*재생멈춤*/
    var flag=true;
    $("a.play").click(function(){
        if(flag){
            clearInterval($autoBnn);
            $(this).toggleClass("play pause");
            flag=false;
        }else{
            //꼭 기존의 변수에다가 setInterval을 넣어야함
            $autoBnn=setInterval(autoBanner,1500);
            $(this).toggleClass("play pause");
            flag=true;
        }
    });
    
    /*퀵메뉴 이미지*/
    var quick1="";
    for(i=0;i<20;i++){
        if(i<10){
            quick1+="<img src='images/quick01/quick01_0000"+i+".png' alt='카드등록안내"+i+"'>"
        }else{
            quick1+="<img src='images/quick01/quick01_000"+i+".png' alt='카드등록안내"+i+"'>"
        }
    }
    $(".quick1").html(quick1);
    
    var quick2="";
    for(i=0;i<20;i++){
        if(i<10){
            quick2+="<img src='images/quick02/quick02_0000"+i+".png' alt='포인트적립처"+i+"'>"
        }else{
            quick2+="<img src='images/quick02/quick02_000"+i+".png' alt='포인트적립처"+i+"'>"
        }
    }
    $(".quick2").html(quick2);
    
    var quick3="";
    for(i=0;i<20;i++){
        if(i<10){
            quick3+="<img src='images/quick03/quick03_0000"+i+".png' alt='보너스포인트안내"+i+"'>"
        }else{
            quick3+="<img src='images/quick03/quick03_000"+i+".png' alt='보너스포인트안내"+i+"'>"
        }
    }
    $(".quick3").html(quick3);
        
    var quick4="";
    for(i=0;i<20;i++){
        if(i<10){
            quick4+="<img src='images/quick04/quick04_0000"+i+".png' alt='쿠폰혜택안내"+i+"'>"
        }else{
            quick4+="<img src='images/quick04/quick04_000"+i+".png' alt='쿠폰혜택안내"+i+"'>"
        }
    }
    $(".quick4").html(quick4);
    
    //마우스를 올렸을 때
    $(".content1").find("a").hover(function(){
        for(var k=0;k<20;k++){
            $(this).find("span").children().eq(k).css({"animation":"ani 1s linear "+0.05*k+"s 1 normal"});
        }
    },function(){
        $(this).find("span").children().css({"animation":"none"});
        
    });
    
    /*패밀리 사이트*/
    $(".family_site").click(function(e){
        e.preventDefault();
        $(this).toggleClass("on");
        if($(this).hasClass("on")){
            $(this).children("a").attr("title","닫기");
        }else{
            $(this).children("a").attr("title","열기");
        }
    });
    
    /*동그라미 움직임*/
    $(window).scroll(function(){
        var width=$(document).width();
        var scroll=$(this).scrollTop();
        $(".posi1").css({"top":325+scroll*0.5});
        $(".posi2").css({"top":722+scroll*0.1});
        $(".posi3").css({"top":1202+scroll*0.8});
        $(".posi4").css({"bottom":-90+scroll/20});
        $(".combine_1").css({"top":796+scroll*1.1});
        $(".combine_r").css({"top":947+scroll*1.1});
        $(".doughnut_1").css({"top":-760+scroll*1.1});
        $(".doughnut_r").css({"top":-200+scroll*0.7});
        
        if(width>1024){
            if(scroll>1400&&scroll<1600){
                var scroll_n=scroll-1400;
                $(".content2_inner>article:nth-of-type(3)").css({"top":500+scroll_n});
            }else{
                return false;   
            }
        }
            
    });
    
    /*content3*/
    /*대분류*/
    $(".content3_inner>ul>li>a").bind("click focus",function(e){
        e.preventDefault();
        $(this).parent().siblings().removeClass("on");
        $(this).parent().addClass("on");
        
        var idx=$(this).parent().index();
        
        $(".content3_inner section ul li").hide();
        /*$(".content3_inner section").eq(idx-1).show();*/
        
        //console.log($(".content3_inner section ul").find(".event"));
        switch(idx){
            case 0:$(".content3_inner section ul li").show(); break;
            case 1:$(".content3_inner section ul").find(".ent").show(); break;
            case 2:$(".content3_inner section ul").find(".tele").show(); break;
            case 3:$(".content3_inner section ul").find(".shop").show(); break;
            case 4:$(".content3_inner section ul").find(".diner").show(); break;
            case 5:$(".content3_inner section ul").find(".tour").show(); break;
            case 6:$(".content3_inner section ul").find(".box").show(); break;
        }
        
    });
    
    /*마우스를 올렸을때*/
    $(".content3_inner>section>ul>li").hover(function(){
        $(this).addClass("on");
    },function(e){
        $(this).removeClass("on");
    });
    
    /*var respon_w;
    $(window).resize(function(){
        respon_w=$("body>section").width();
        console.log(respon_w);
    });*/
    
    /*스크롤탑 위치*/
    $(window).scroll(function(){
        
        var scroll=$(this).scrollTop();
        var scroll_w=$(document).width();
        var scroll_h=$(window).height();
        
        console.log(scroll);
        
        if(scroll>scroll_h){
            $("div.top").addClass("on");
        }else{
            $("div.top").removeClass("on");
        }
        
        var scroll_b;
        if(scroll_w>1024){
            scroll_b=scroll-2950;
            if(scroll>3000){
                $(".top").css({"bottom":50+scroll_b});
                if(scroll_b+50>294){
                    $(".top").css({"bottom":294});
                }
            }else{
                $(".top").css({"bottom":50});
            }
        }else if(scroll_w>768&&scroll_w<1024){
            scroll_b=scroll-3450;
            if(scroll>3450){
                $(".top").css({"bottom":50+scroll_b});
                if(scroll_b+50>312){
                    $(".top").css({"bottom":312});
                }
            }else{
                $(".top").css({"bottom":50});
            }
        }else{
            scroll_b=scroll-3680;
            if(scroll>3680){
                $(".top").css({"bottom":50+scroll_b});
                if(scroll_b+50>319){
                    $(".top").css({"bottom":319});
                }
            }
        }
    });
    
    /*맨위로가기*/
    $(".top a").click(function(e){
        e.preventDefault();
        $("html, body").stop().animate({
            scrollTop:0
        },500);
    });
    
    /*http://jquerymobile.com/download-builder*/
    
    //모바일 기기의 방향을 전환(가로/세로)할 때 화면의 너비가 달라지는 것에 대비해서 항상 바른 위치에 있도록 애니메이션 적용
    $("body>section").bind("orientationchange",function(){
        $banner_w=$("body>section").width();
        $(".banner_frame").animate({"left":-$bnnNum*$banner_w},600,"linear");
    });
    
    //모바일에서
    $("body>section").bind("swipeleft",function(){
        $(".next").trigger("click");
    });
    $("body>section").bind("swiperight",function(){
        $(".prev").trigger("click");
    });
});