 $(function(){

	// 바로가기 이벤트

	const introTop = $("#intro").offset().top;
	const leadTop = $("#lead").offset().top;
	
	$(".goTopBt").fadeOut(0);

	// 01. 스크롤 다운
	$(".scrollBt").on({
		click:	function(){
			$("html,body").stop().animate({scrollTop:leadTop}, 800);
		}
	});

	// 02. goTop 버튼
	$(".goTopBt").on({ 
		click:	function(){
			$("html,body").stop().animate({scrollTop:intro}, 800);
		}
   	});

	// 03. 인트로에서 스크롤 다운
	$("#intro").on('mousewheel', function(e){ 
		if(e.originalEvent.wheelDelta<0){ 
			$("html,body").stop().animate({scrollTop:leadTop}, 800);
		} 
	});

	// 04. 리드에서 스크롤 업
	$("#lead").on('mousewheel', function(e){ 
		if(e.originalEvent.wheelDelta>0){ 
			$("html,body").stop().animate({scrollTop:introTop}, 800);
		} 
	});
	   

	$(window).scroll(function(){
        if($(window).scrollTop()>=leadTop){
            $(".goTopBt").fadeIn(600);
        } else {
            $(".goTopBt").fadeOut(600);
        }
    });
    


	// 스크롤 바 이벤트

	const sec1Top = $("#section0").offset().top;
	const sec2Top = $("#section1").offset().top;
	const sec3Top = $("#section2").offset().top;

	const sec1Bottom = $("#section0").innerHeight();
	const sec2Bottom = sec1Bottom + $("#section1").innerHeight();
	const sec3Bottom = sec1Bottom + sec2Bottom + $("#section2").innerHeight();

	
	$(window).scroll(function(){
		
		const bar = $(".base").offset().left;

		if ($(window).scrollTop() >= sec1Top && $(window).scrollTop() < sec1Bottom + 1000) {
			$("#progress0").css("left", bar);
			$("#progress0").removeClass("end");
			$("#progress0").addClass("start");
		} else if ( $(window).scrollTop() >= sec1Bottom + 1000) {
			$("#progress0").css("left", "-23px");
			$("#progress0").removeClass("start");
			$("#progress0").addClass("end");
		} else {
			$("#progress0").css("left", "-23px");
			$("#progress0").removeClass("start");
			$("#progress0").removeClass("end");
		}

		return false;
	});
	
	

	$(window).scroll(function(){

		const bar = $(".base").offset().left;
		if ($(window).scrollTop() >= sec2Top && $(window).scrollTop() < sec2Bottom + 1000) {
			$("#progress1").css("left", bar);
			$("#progress1").removeClass("end");
			$("#progress1").addClass("start");
		} else if ( $(window).scrollTop() >= sec2Bottom + 1000) {
			$("#progress1").css("left", "-23px");
			$("#progress1").removeClass("start");
			$("#progress1").addClass("end");
		} else {
			$("#progress1").css("left", "-23px");
			$("#progress1").removeClass("start");
			$("#progress1").removeClass("end");
		}

		return false;

	});


	$(window).scroll(function(){

		const bar = $(".base").offset().left;

		if ($(window).scrollTop() >= sec3Top && $(window).scrollTop() < sec3Bottom - 5100) {
			$("#progress2").css("left", bar);
			$("#progress2").removeClass("end");
			$("#progress2").addClass("start");
		} else if ( $(window).scrollTop() >= sec3Bottom - 5100) {
			$("#progress2").css("left", "-23px");
			$("#progress2").removeClass("start");
			$("#progress2").addClass("end");
		} else {
			$("#progress2").css("left", "-23px");
			$("#progress2").removeClass("start");
			$("#progress2").removeClass("end");
		}
			
		return false;
	});
	


	// 스크롤 소제목 이벤트
	$(".bar-wrap .text > li").hide();
	$(".show").show();

	// 섹션 01
	const barText1=$(".bar-text1").offset().top - 450;
	const barText2=$(".bar-text2").offset().top - 550;
	const barText3=$(".bar-text3").offset().top - 480;
	const barText4=$(".bar-text4").offset().top - 480;
	const barText5=$(".bar-text5").offset().top - 480;
	const barText6=$(".bar-text6").offset().top - 480;
	const barText7=$(".bar-text7").offset().top - 480;

	// 섹션 02
	const barText8=$(".bar-text8").offset().top - 500;
	const barText9=$(".bar-text9").offset().top - 500; //827
	const barText10=$(".bar-text10").offset().top - 480;
	const barText11=$(".bar-text11").offset().top - 480;
	const barText12=$(".bar-text12").offset().top - 500; //913

	const barText13=$(".bar-text13").offset().top - 500;
	const barText14=$(".bar-text14").offset().top - 500;
	const barText15=$(".bar-text15").offset().top - 500;
	const barText16=$(".bar-text16").offset().top - 500;

	// 섹션 03
	const barText17=$(".bar-text17").offset().top - 300;
	const barText18=$(".bar-text18").offset().top - 500;
	const barText19=$(".bar-text19").offset().top - 500;



    $(window).scroll(function(){
        
            if ($(window).scrollTop() >= barText1 && $(window).scrollTop() < barText2){
                $(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(1).show();
			} else if ($(window).scrollTop() >= barText2 && $(window).scrollTop() < barText3){
				$(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(2).show();
			} else if ($(window).scrollTop() >= barText3 && $(window).scrollTop() < barText4){
				$(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(3).show();
			} else if ($(window).scrollTop() >= barText4 && $(window).scrollTop() < barText5){
				$(".bar-wrap .text > li").hide();
				$(".bar-wrap .text > li").eq(4).show();
			} else if ($(window).scrollTop() >= barText5 && $(window).scrollTop() < barText6){
				$(".bar-wrap .text > li").hide();
				$(".bar-wrap .text > li").eq(5).show();
			} else if ($(window).scrollTop() >= barText6 && $(window).scrollTop() < barText7){
				$(".bar-wrap .text > li").hide();
				$(".bar-wrap .text > li").eq(6).show();
			} 
			else if ($(window).scrollTop() >= barText7 && $(window).scrollTop() < barText8){
				$(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(7).show();
				$(".bar-wrap .text > li").eq(8).show();
			} // 섹션 01
			
			else if ($(window).scrollTop() >= barText9 && $(window).scrollTop() < barText10){
				$(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(9).show();
			} else if ($(window).scrollTop() >= barText10 && $(window).scrollTop() < barText11){
				$(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(10).show();
			} else if ($(window).scrollTop() >= barText11 && $(window).scrollTop() < barText12){
				$(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(11).show();
			} else if ($(window).scrollTop() >= barText12 && $(window).scrollTop() < barText13){
				$(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(12).show();
			} else if ($(window).scrollTop() >= barText13 && $(window).scrollTop() < barText14){
				$(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(13).show();
			} else if ($(window).scrollTop() >= barText14 && $(window).scrollTop() < barText15){
				$(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(14).show();
			} else if ($(window).scrollTop() >= barText15 && $(window).scrollTop() < barText16){
				$(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(15).show();
			} else if ($(window).scrollTop() >= barText16 && $(window).scrollTop() < barText17){
				$(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(16).show();
                $(".bar-wrap .text > li").eq(17).show();
			} // 섹션 02

			else if ($(window).scrollTop() >= barText18 && $(window).scrollTop() < barText19){
				$(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(18).show();
			} else if ($(window).scrollTop() >= barText19){
				$(".bar-wrap .text > li").hide();
                $(".bar-wrap .text > li").eq(19).show();
			} 
			
			else {
				$(".bar-wrap .text > li").not(".show").hide();
                $(".bar-wrap .text > li").eq(0).show();
				$(".bar-wrap .text > li").eq(8).show();
				$(".bar-wrap .text > li").eq(17).show();
			}
            
            
    });  
		
	
 });


    