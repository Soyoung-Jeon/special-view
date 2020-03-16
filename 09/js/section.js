$(function() {

    // 인트로 바로가기 이벤트
    const secTop=$(".lead").offset().top;
   
   $(".btn_detailView").on({
        click:	function(){
            $("html,body").stop().animate({scrollTop:secTop}, 500);
        }
    });


	// 스크롤링 본문 이벤트
    $(".content").css("opacity", "0");
    
	$(window).scroll(function() {

	$(".content").each(function(i) {
		var objectH = $(this).outerHeight();
		var objectTop = $(this).offset().top - objectH / 2;
		if ($(window).scrollTop() >= objectTop) {
			$(this).addClass("contUp");
		}
	});
	}); 



	// 서베이
	// 숫자만 입력
    $("#answerBox").on("keyup", function() {
        $(this).val($(this).val().replace(/[^0-9]/g,""));
    });

    // submit 이벤트
    const startTop = $("#startTop").offset().top - 10;

    $("#submitBt").on({
        click: function() {
            if ($("#answerBox").val() == '') {
                alert("숫자를 입력해주세요.");
                return false;
            } else {
                $("html,body").stop().animate({ scrollTop: startTop }, 800);
            }
        }
    }); 


    // 섹션 03 아바타 클릭 이벤트
    $(".btn_avatar").click(function() {
        var i = $(".btn_avatar").index(this) + 1;

        $(this).each(function(index) {
            $(".bubble > li").hide(0);
            $(".bubble > li").eq(i).show(0);
        });
    });

    
    

    if ($(window).innerWidth() > 780) {
        $(".bubbleAfter").css({"transform":"translate(60px, 30px)"});
        $(".btn_avatar").eq(0).on({
            click:	function(){
                $(".bubbleAfter").css({"transform":"translate(60px, 4px)"});
            }
        });
        
        $(".btn_avatar").eq(1).on({
            click:	function(){
                $(".bubbleAfter").css({"transform":"translate(208px, 4px)"});
            }
        });
        
        $(".btn_avatar").eq(2).on({
            click:	function(){
                $(".bubbleAfter").css({"transform":"translate(358px, 4px)"});
            }
        });
    
        $(".btn_avatar").eq(3).on({
            click:	function(){
                $(".bubbleAfter").css({"transform":"translate(506px, 4px)"});
            }
        });
    } else {
        $(".bubbleAfter").css({"display":"none"});
        $(".btn_avatar").on({
            click:	function(){
                $(".bubbleAfter").css({"display":"block"});
            }
        });
    }

	
});
