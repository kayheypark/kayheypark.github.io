/* samsung_sub.js */


$(function () {



    
    
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


    // $("header").click(function(){
    //     alert("뒤로가기");
	// 	window.history.back();

	// });



});