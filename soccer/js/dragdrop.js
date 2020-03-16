
// 영역
var $Group = $('.player_wrap');
var $all = $('.wrap');
var $el = $Group.find('.player');

var dragCheck = false;
var $dragItem = '';

var startImgX = 0;
var startImgY = 0;
var itemZindex = 0;


// 셀렉터
var containerlLeft = $all.offset().left;
var containerlTop = $all.offset().top;
var containerlRight = $all.offset().left + $all.innerWidth();
var containerlBottom = $all.offset().top + $all.height();

var feetInCheck = false;

var $ground = $('.field');

$(document).ready(function(){
	initEvent();
});


function initEvent(){
// 마우스 누를때
	$el.on('mousedown',function(e){
		dragCheck = true;
		$dragItem = $(this);
		// 클릭한 위치를 구한다
		var offset = $dragItem.offset();		
		startImgX = e.pageX - offset.left;
		startImgY = e.pageY - offset.top;
		$dragItem.css('z-index',itemZindex++);
		activeDragEvent();
    });
    
	function activeDragEvent(){

		// 마우스 이동 - 전역위치 부여
		$(document).on('mousemove',function(e){
			if (dragCheck == true){
                e.preventDefault();
                
				// 드래그 포인트 - 클릭한 위치를
				var top = e.pageY - startImgY;
				var left = e.pageX - startImgX;
				
				if(e.pageX > containerlLeft + startImgX && e.pageX < containerlRight - ($el.width() - startImgX)) {

					if(e.pageY + startImgY > containerlTop && e.pageY < containerlBottom + startImgY) {
						$dragItem.offset({top:top,left:left});
					} else if(e.pageX > containerlLeft + startImgX && e.pageX < containerlRight - ($banner.width() - startImgX)) {
                        $dragItem.offset({left:left});
                    }
                    
				} else if(e.pageY + startImgY > containerlTop && e.pageY < containerlBottom + startImgY) {
					$dragItem.offset({top:top});
				}
			}
        });			
        		
		// 마우스 뗄 때 - 드롭위치 처리
		$(document).on('mouseup',function(e){
			checkSelectArea(e.pageX, e.pageY);
			dragCheck = false;
			$dragItem = null;
			$(this).off(); // 드래그 안할 때 mousemove, mouseup 끄기
		});
	}
 


	function checkSelectArea(dropX, dropY){

		if(dropX > containerlLeft && dropX < containerlRight){
			if(dropY < containerlTop && dropY > containerlBottom){
				$ground.append($dragItem);
				$dragItem.off();
			  $dragItem = null;
			}
		}
		
		
	} 
	
}		
