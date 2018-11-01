$(document).ready(function(){
    var ht=parseInt($(window).height());
    $(window).on("mousewheel", function(e){
    if(e.originalEvent.wheelDelta < 0){ 
        $("html,body").not(":animated").animate({scrollTop:"+="+ht+"px"},800);
        $(".toTop").fadeIn(500);
        $(".header,.logo,#con p,#con .conImg, .con3, .con4").addClass("scroll");
    } else {
        $("html,body").not(":animated").animate({scrollTop:"-="+ht+"px"},800);
//        $(".toTop").fadeOut(500);
//        $(".header,.logo,#con p,#con .conImg").removeClass("scroll");
    }
    return false;
    });
    $("#vs, #vs ul").height(ht);
    var wd=parseInt($("#vs").width());
    var cnt=$("#vs ul li").length;
    var n=0;
    $("#vs ul li").eq(0).css("z-index", "30").css("opacity", "1");
    $("#vs ul li").eq(0).siblings().css("z-index", "25").css("opacity", "0");
    var intv=setInterval(function(){ 
        if(n<cnt-1) {
            n=n+1;
            nAni(n); 
        } else {
            n=0;
            nAni(n);
        }
    }, 3000);

    function nAni(i){
        $("#vs ul li").eq(i).siblings().css("z-index", "25");
        $("#vs ul li").eq(i).css("z-index" , "30").not(":animated").animate({"opacity" : "1"}, 800, function() {
           $("#vs ul li").eq(i).siblings().css("opacity", "0");
        });
    };
    
    
});
/*
$(window).scroll(function(){
   var st = $(window).scrollTop();
   if(st>=500){
       $(".toTop").fadeIn(500);
       $("#hd").css("background","rgba(0,0,0,0.5)");
   } else {
       $(".toTop").fadeOut(500);
       $("#hd").css("background","rgba(0,0,0,0.5)");
   }
});
*/
//$(document).ready(function(){
//    $(window).on("scroll", function() {
//		var winTop = $(window).scrollTop();
//		if (winTop >= 10)  {
//			$(".header").addClass("scroll").removeClass("bounceInLeft").removeClass("animated").css("visibility","visible");
//

//		} else {  
//			$(".header").removeClass("scroll").css("visibility","visible");
//		}
//
//	});
//});
