$(function () {
  $(a).click(singUp);
});

function singUp() {
  e.preventDefault(); // 기본 링크 동작 방지
  // 제출하기 일시 정지 상태로
  // 아래 정규식, 데이터 저장 여부등과 같은 규정을
  // 모두 확인한 후 result.html 이동 할 수 있도록 설정

  // 입력값 가져오기
  const username = $("#username").val();
  const userpw = $("#userpw").val();

  // 서버로 전송할 데이터
  // userData 형식 또한 추후 DB에 저장할 때 사용
  const useData = {
    username: username,
    password: userpw,
  };

  // json저장할때 사용 예정DB 에 저장할 때 나중에 등장 ! $.post()

  //localStorage에 저장
  localStorage.setItem("username", username);
  localStorage.setItem("userpw", userpw);

  // 모두 자정하고 나서 결과 페이지 이동
  window.location.href = "22_result.html";
}
