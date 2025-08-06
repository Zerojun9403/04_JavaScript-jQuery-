$(function () {
  $("#signup").click(signup);
  $("#goToLogin").click(goToLogin);
});

function signup() {
  const username = $("#username").val().trim();
  const email = $("#email").val().trim();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  //사용자 정보 저장
  const users = JSON.parse(localStorage.getItem("gbUSers") || "[]");

  const newUser = {
    id: Date.now(), //ms 값을 이용하여 고객 가입 번호 활용
    username: username,
    email: email,
    password: password,
    createAt: new Date().toLocaleString("ko-KR"),
  };
  users.push(newUser); // 자바스크립에서 localStorage 에서 가져온 리스트에 추가

  // 추가된 데이터를 localStorage업로드
  localStorage.setItem("gbUSers",JSON.stringify(users));
  alert("회원가입이 완료 되었습니다.");
  window.location.href = "index.html";
}

function hideMessages() {}

function goToLogin() {
  window.open("login.html", "_blank", "width=450,height=600");
  window.location.href = "index.html";
}
