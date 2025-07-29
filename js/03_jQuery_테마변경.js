// ready 가 아닌 현대 방식의 웹문서 기능 설정환경
 $(()=>{
// toogleBtn 클릭했을때 화살표 익명 함수로 
 $("#toggleBtn").click(()=>{
    $("body").toggleClass("dark-mode");
// toogleClass활용해서 다크모드로 변경하기
    });
});