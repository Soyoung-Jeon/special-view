$(function(){

    const introTop=$(".intro").offset().top;
    const secTop=$(".contents-wrap").offset().top -40;


    // 인트로 바로가기 이벤트
    $(".intro-btn").on({
        click:	function(){
            $("html,body").stop().animate({scrollTop:secTop}, 500);
        }
    });

    // goTop 버튼 이벤트
    $(".goTopBt").on({
        click:	function(){
            $("html,body").stop().animate({scrollTop:introTop}, 500);
        }
    });


    // 상단 진행바 이벤트 - 01. 페이드인
    $(".bar-wrap").fadeOut(0);
    $(".goTopBt").fadeOut(0);

	$(window).scroll(function(){
        if($(window).scrollTop()>=secTop){
            $(".bar-wrap").fadeIn(400);
            $(".goTopBt").fadeIn(600);
        } else {
            $(".bar-wrap").fadeOut(400);
            $(".goTopBt").fadeOut(600);
        }
    });  

    // 상단 진행바 이벤트 - 02. 스크롤링  
    $(window).on('scroll', function(){
        var current = ($(window).scrollTop()); 
        var height = $(document).outerHeight() - $(window).height(); 
        var percent = (current / height) * 100; 
        $(".bar-stop > span").css("transform","translate("+(-100+percent)+"%,0)"); 
    });

    



    // 스크롤링 본문 이벤트
    $(window).scroll(function(){

        $(".contents").each(function(i){

            const objectH = $(this).outerHeight();
            const objectTop = $(this).offset().top - objectH/2;
            const sec4Top = $("#cont04-wrap").offset().top - 350;
            

            if ($(window).scrollTop()>=objectTop){
                $(this).animate({"opacity":"1"}, 500);
                $(this).children("h2").addClass("addH2");
                $(this).children(".h2-line").children().delay(1000).animate({"padding-bottom":"60px"}, 400);
                $(this).children("ul").addClass("addUl");
            } 
            else if ($(window).scrollTop()>=sec4Top){
                $(".main").addClass("bgTrans");
            }
            else if ($(window).scrollTop()<=sec4Top){
                $(".main").removeClass("bgTrans");
            }
        });
    });


    $(".ul-clickOn").fadeOut(0);
    $(".ul-clickOff").fadeIn(0);


    // section-03 이벤트
    $(".clickBtn").on({
        click:	function(){
            $(".cont03-clickOff").fadeOut(400);
            $(".cont03-clickOn").fadeIn(400);
            $(".js-criminalImg").addClass("transImg");
            $(".js-criminalImg").attr("src","img/img_criminal_on.png");
        }
    });
    

    $(".bubble").slideUp(0);

    // section-04 이벤트
    $(".timelineBt").on({
        mouseover:	function(){
            $(this).siblings(".bubble").stop().slideDown(400); 
            $(".timeline > p").hide(0); 
        },
        mouseleave:	function(){
            $(this).siblings(".bubble").delay(2000).slideUp(400);
        }
        
    });


    // section-07 이벤트
    $(".map").on({
        mouseover:	function(){
            $(this).siblings(".text").children().children(0).addClass("opacityFlag");
            $(this).siblings(".text").children().children(1).addClass("showFlagText");
        },
        mouseleave:	function(){
            $(this).siblings(".text").children().children(0).addClass("opacityFlag");
            $(this).siblings(".text").children().children(1).addClass("showFlagText");
        }
        
    });


});






