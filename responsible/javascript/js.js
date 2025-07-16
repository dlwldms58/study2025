// 한줄주석
// 제이쿼리선언

// 화면을 열었을때, 다음과같은 일들이 일어나라

$(document).ready(function(){

// 실행문작성
// 클래스 toggle을 클릭했을때, 클래스 gnb가 슬라이드 Toggle 되어라.  

$('.toggle').click(function(){

    $('.gnb').slideToggle()
})

})