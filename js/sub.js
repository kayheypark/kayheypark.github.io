/* samsung_sub.js */


$(function () {

        //a 누를때 자동스크롤 방지
        $(".to_top a, header").click(function(e){
            e.preventDefault();
        });



    
    
    //
    // $("").click(function(e){
    //     e.preventDefault();
    // });
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
    

    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop() ;

        if(scrollTop >= 941 ){
            $("header").addClass("black");
        } else {
            $("header").removeClass("black");
        }
        console.log(scrollTop);

    });

    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop() ;

        if(scrollTop >= 100 ){
            $(".to_top a").css({"opacity":"1"});
        } else {
            $(".to_top a").css({"opacity":"0"});
        }

    });

    //탑으로
    $(".to_top a").click(function(){
        $('html, body').stop().animate({"scrollTop" : 0}, 3000, "easeInOutQuint");
    });

    //목업 스크롤할때마다 상승
    $(window).scroll(function(){
        var scroll=$(this).scrollTop();
        var scroll_w=$(document).width();
        var scroll_h=$(window).height();
        console.log("scroll :"+scroll+", scroll_h :"+scroll_h+", scroll_w :"+scroll_w);
        
        /*�숆렇�쇰� ��吏곸엫*/
        // $(".cj-spread").css({"top":2250-scroll*1});
        $(".cj-spread").stop().animate({top:2000-scroll*1}, 2000, "easeOutQuart");
    });


    // $("header").click(function(){
    //     alert("뒤로가기");
	// 	window.history.back();

	// });



});