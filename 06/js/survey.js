$(function(){

    $("#btn_check").click(function () {
        var check_length = $("input:radio[name*='question_t']:checked").length;
        var sum_value = $("input[name='sum']").val();

        function POP(){
            $(".popUp-wrap").css("display", "block");
            $("#score_pop").val(sum_value);
            $(".popUp-box > p").css("display", "none");
        }

        if ( check_length != 14 ) {

            alert("설문에 대한 답변을 선택해 주세요.");
            return false;

        } else if (sum_value == 0) {
            POP();
            $(".zero").css("display", "block");

        } else if (sum_value == 1) {
            POP();
            $(".one").css("display", "block");
        } else if (sum_value == 2) {
            POP();
            $(".two").css("display", "block");
        } else if (sum_value == 3) {
            POP();
            $(".three").css("display", "block");
        } else if (sum_value == 4) {
            POP();
            $(".four").css("display", "block");
        } else if (sum_value == 5) {
            POP();
            $(".five").css("display", "block");
        } else if (sum_value == 6) {
            POP();
            $(".six").css("display", "block");
        } else if (sum_value == 7) {
            POP();
            $(".seven").css("display", "block");
        } else if (sum_value == 8) {
            POP();
            $(".eight").css("display", "block");
        } else if (sum_value == 9) {
            POP();
            $(".nine").css("display", "block");
        } else if (sum_value == 10) {
            POP();
            $(".ten").css("display", "block");
        } else if (sum_value == 11) {
            POP();
            $(".eleven").css("display", "block");
        } else if (sum_value == 12) {
            POP();
            $(".twelve").css("display", "block");
        } else if (sum_value == 13) {
            POP();
            $(".thirteen").css("display", "block");
        } else if (sum_value == 14) {
            POP();
            $(".fourteen").css("display", "block");
        } 

    });


    $(".popUp_close").click(function () {
        $(".popUp-wrap").css("display", "none");
    });

    


    function sumTest() {

        var sumInput=0;

        $("input:radio[name*='question_t']:checked").each(function () {
            sumInput += Number($(this).val());
        });

        $("input[name='sum']").val(sumInput);

    }


    $(document).on("click", "input:radio[name*='question_t']", function () {
        sumTest();
    });
        

    $("#close").click(function () {
        $("input:radio[name*='question_t']:checked").each(function () {
            $(this).attr('checked', false);
        });
      
        $("input[name='sum']").val(0);
    });




});