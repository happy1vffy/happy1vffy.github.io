$(document).ready(function(){
    var wd=parseInt($("#vs").width());
    var intv=setInterval(function(){nAni();},3000);
    function nAni(){
        $("#vs ul").not(":animated").animate({"margin-left":-wd+"px"},800,function(){
            $("#vs ul li").eq(0).appendTo($("#vs ul"));
            $("#vs ul").css("margin-left","0px");
            $("#vs .vsPage .vsBtn").removeClass("on");
            $("#vs .vsPage .vsBtn").eq(0).appendTo($("#vs .vsPage"));
            $("#vs .vsPage .vsBtn").eq(0).addClass("on");
        });
    };
    $("#vs .vsPage .vsBtn").click(function(){
        clearInterval(intv);
        var idx=$(this).index();
        for(var i=0;i<idx-2;i++){
            $("#vs ul li").eq(0).appendTo($("#vs ul"));
            $("#vs .vsPage .vsBtn").eq(0).appendTo($("#vs .vsPage"));
        }
        nAni();
        intv=setInterval(function(){nAni();},3000);
    });
    $(".menu").click(function(){
        $("#menu").addClass("on");
    });
    $(".close").click(function(){
        $("#menu").removeClass("on");
    })
    $("#menu .rMenu .lmr").click(function(){
  			 $(".rMenu .lmr").find(".lmDepth").css("display", "none");
			 $(this).find(".lmDepth").slideToggle(600);
    });
    /*
    $(".lMenu li").click(function(){
        $(this).addClass("on");
        $(".rMenu li").siblings.removeClass("on"); $(".rMenu").find("#this").slideDown(600);
    })
    /*
    /*
    $("#menu .rMenu .lmr .lmTit").click(function(){
        $(".lmDepth").toggleClass("on");
    });
    /*
    $("#menu .rMenu .lmr").click(function(){
  			 $(".rMenu .lmr").find(".lmDepth").css("display", "none");
			 $(this).find(".lmDepth").slideDown(600);
    });
    */
});