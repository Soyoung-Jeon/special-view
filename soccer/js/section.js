 $(function(){

    // 섹션 이동 이벤트
    

    // tab 이벤트
    $(".section").not("#section-01").hide(); // 초기화

    $(".tabBt").click(function(){

        const i = $(".tabBt").index(this);

        $(".tabBt").each(function(index){
        
            $(this).addClass("tabOn");
            
            if(i != index){
                $(this).removeClass("tabOn");
            }
        });
        
        $(".section").hide();
        $(".section").eq(i).show();

    });


 });


    