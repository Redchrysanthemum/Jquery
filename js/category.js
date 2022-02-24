$(document).ready(function(){

    $("#section2").hide();
    
    
    $("#top ul li a").click(function(){
        $("#top ul li a").removeClass("selected");
        $(this).addClass("selected");

        $("#section1, #section2").hide();
        $($(this).attr("href")).show();
        return false;
    });


    var showcon = false;
 $(".click1").click(function(){
     showcon = !showcon;
    //consol.log(showcon)
     if(showcon){ // true
        $(".menu_wrap2").slideUp("fast");
        $(".click1 img").attr("src","images/category/pngegg1.png");
    }else {// false 
        $(".menu_wrap2").slideDown("fast");
        $(".click1 img").attr("src","images/category/pngegg2.png");
        }
    });

 $(".click2").click(function(){
     showcon = !showcon;
    //consol.log(showcon)
     if(showcon){ // true
        $(".map_wrap").slideUp("fast");
        $(".click2 img").attr("src","images/category/pngegg1.png");
    }else {// false 
        $(".map_wrap").slideDown("fast");
        $(".click2 img").attr("src","images/category/pngegg2.png");
        }
    });

});