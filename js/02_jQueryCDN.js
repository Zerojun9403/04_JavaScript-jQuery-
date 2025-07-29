
        //1번 html 문서가 모두 준비되면, 중괄호 안에 코드를 실행
        //$(document).ready(function(){ -> 고전방식
            $(()=>{
            // 2번 id가 btn 인 요소를 클릭했을떄 실행도리 함수 정의
            // $("#btn").click(function(){ //익명 함수 this 사용가능한 함수
             $("#btn").click(()=>{
                // 3번 : 텍스트 변경 : id 가 title인 요소의 텍스트 변경
                  $("#title").text("버튼이 클릭되었습니다.");
                // 4번 : id가 description 인 요소 0.5초간 숨겼다가 
                //다시 0.5초간 나타나는 메서드 사용
                 $("#description").fadeOut(700).fadeIn(500);

                //5번 : id가 box 인 hightlight 클래스를 추가하거나 제거
                 $("#box").toggleClass("highlight");
            });
        });
   