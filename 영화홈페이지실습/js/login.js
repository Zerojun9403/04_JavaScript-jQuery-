$(function () {
  $("#login").click();
  $("#goToSignup").click(goToSignup);
});

function goToSignup() {
  opener.location.href = "register.html";
  window.close(); //현재로그인페이지 닫기
}
