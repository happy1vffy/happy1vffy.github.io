$(document).ready(function(){
    var ms = 1;
    var sldSw = 1;
    var op1, op2;
    $("#hd .menu").click(function(){
        if(ms==1) {
            $(".menu").css("background-image","url(./images/ico_close.png)");
            $("#gnb").slideDown(600);                       
        } else {
            $(".menu").css("background-image","url(./images/ico_menu.png)");
            $("#gnb").slideUp(600);            
        }
        ms = ms * -1;
    });

    var intv1 = setInterval(function(){ vsAni(); }, 2500);
    function vsAni() {
        if(sldSw==1) {
            sldSw=0;
            op1=0;
            op2=1;
        } else {
            sldSw=1;                
            op1=1;
            op2=0;
        }
        $("#main ul li").eq(op1).fadeIn(1000);
        $("#main ul li").eq(op2).fadeOut(1000);
    };
    var ht=parseInt($(window).height());
    $(window).scroll(function(){
      var par=parseInt($(window).scrollTop());
      if(par>=300){
          $("#toTop").fadeIn(500);
      } else {
          $("#toTop").fadeOut(500);
      }
    });
           
    var wd=parseInt($("#vs").width());
    var intv2 = setInterval(function(){nAni();},3000);
    function nAni(){
       $("#vs ul").not(":animated").animate({"margin-left":-wd+"px"},800, function(){
           $("#vs ul li").eq(0).appendTo($("#vs ul"));
           $("#vs ul").css("margin-left","0px");
       });
    };
});
