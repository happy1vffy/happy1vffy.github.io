$(document).ready(function(){
        var ht=$("#vs .picBox").height();
        $("#vs, #vs .picBox").height(ht);

        var wd=parseInt($("#vs").width());
        var cnt=$("#vs .picBox li").length;
        var n=0;
        $("#vs .picBox li").eq(0).css("z-index", "30").css("opacity", "1");
        $("#vs .picBox li").eq(0).siblings().css("z-index", "25").css("opacity", "0");
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
            $("#vs .picBox li").eq(i).siblings().css("z-index", "25");
            $("#vs .picBox li").eq(i).css("z-index" , "30").not(":animated").animate({"opacity" : "1"}, 800, function() {
	           $("#vs .picBox li").eq(i).siblings().css("opacity", "0");
            });
            $("#vs .btnBox .btn").eq(i).siblings().removeClass("on");
            $("#vs .btnBox .btn").eq(i).addClass("on");
        }
        $(".btnBox .btn").click(function(){
            clearInterval(intv);
            n=parseInt($(this).attr("data-val"));
            $(".btnBox .btn").removeClass("on");
            $(this).addClass("on");
            nAni(n);
            intv=setInterval(function(){ 
               	if(n<cnt-1) {
                    n=n+1;
                    nAni(n); 
                } else {
                                n=0;
                                     nAni(n);
                }
            }, 3000);
         });
        var sw=true;
        $(".btnBox .psBtn").click(function(){
            if(sw==true){
                clearInterval(intv);
            } else {
                intv=setInterval(function(){ 
                    if(n<cnt-1) {
                        n=n+1;
                        nAni(n); 
                    } else {
                        n=0;
                        nAni(n);
                    }
                }, 3000);
            }
            sw= !sw;
            $(this).toggleClass("on");
        });
    });
$(document).ready(function(){
   
  $('ul.tab li').click(function(){
    var tab_id = $(this).attr('data-tab');
 
    $('ul.tab li').removeClass('is-active');
    $('.tab-content').removeClass('is-active');
 
    $(this).addClass('is-active');
    $("#"+tab_id).addClass('is-active');
  })
 
});

$(window).scroll(function(){
    var st = $(window).scrollTop();
    if(st>=800){
        $(".hero.is-medium").css("background","#fafafa");
    } else {
        $(".hero.is-medium").css("background","#fff");
    }
});