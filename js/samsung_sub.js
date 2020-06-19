/* samsung_sub.js */

$(function () {

    //
    $("a").click(function(e){
        e.preventDefault();
    });
    
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

});