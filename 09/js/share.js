$(function () {

    Kakao.init('eec686a7acb25012f6d0a5750fe15239');
    
    // 현재 페이지 타이틀과 URL을 가져온다.
    var cur_title = $('head > title').text()
    var cur_page_url = window.location.href

    // 페이스북 공유 정보에 제목이랑 URL 데이터 집어넣어주기
    $('meta[property="og:title"]').prop('content', cur_title)
    $('meta[property="og:url"]').prop('content', cur_page_url)

    // 현재 URL을 숨긴 인풋 텍스트에 집어넣는다.
    $('#current_url').val(cur_page_url)

    // 숨긴 인풋 텍스트에 입력된 텍스트를 클립보드로 카피해온다.
    $("button[class=share_url]").on('click', function () {
        var copyText = document.getElementById("current_url");
        copyText.select();
        document.execCommand("Copy");
        alert('주소를 복사했습니다.')
    })

    // 팝업 오픈 공통 함수
    var popupOpen = function(target_url, param) {
        if(param) target_url += ('?' + param)
        window.open(target_url, 'pop01', 'top=10, left=10, width=500, height=600, status=no, menubar=no, toolbar=no, resizable=no')
    }

    // Facebook Share Button Handle
    $("button[class=share_facebook]").on('click', function () {
        popupOpen('https://www.facebook.com/sharer/sharer.php', 'u=' + cur_page_url)
    }) 

    // Twitter Share Button Handle
    $("button[class=share_twitter]").on('click', function () {
        var _text = cur_title
        var param = 'text=' + _text + '&url=' + cur_page_url
        popupOpen('https://twitter.com/intent/tweet', param)
    })

    // Kakao Share Button Handle
    $("button[class=share_kakao]").on('click', function () {
        Kakao.Link.sendScrap({requestUrl : location.href})
    })

});

