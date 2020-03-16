$(function() {

   
    $(".content").css("opacity", "0");
    
	// 스크롤링 본문 이벤트
	
	$(window).scroll(function() {

	$(".content").each(function(i) {
		var objectH = $(this).outerHeight();
		var objectTop = $(this).offset().top - objectH / 2;
		if ($(window).scrollTop() >= objectTop) {
			$(this).addClass("contUp");
		}
	});
	}); 


	// intro 틸트효과

	$(".intro > .title").on({
		mouseenter: function(){
			$(".c-glitch__img:nth-child(n+2)").addClass("tilt");
			$(".c-glitch__img:nth-child(2)").addClass("tilt");
			$(".c-glitch__img:nth-child(3)").addClass("tilt");
			$(".c-glitch__img:nth-child(4)").addClass("tilt");
			$(".c-glitch__img:nth-child(5)").addClass("tilt");
		},
		mouseleave: function(){
			$(".c-glitch__img:nth-child(n+2)").removeClass("tilt");
			$(".c-glitch__img:nth-child(2)").removeClass("tilt");
			$(".c-glitch__img:nth-child(3)").removeClass("tilt");
			$(".c-glitch__img:nth-child(4)").removeClass("tilt");
			$(".c-glitch__img:nth-child(5)").removeClass("tilt");
		}
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

	
});
