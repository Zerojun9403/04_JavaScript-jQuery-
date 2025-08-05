$(function () {
  // 초기 테스트 회원 정보 저장 (최초 1회만)
  if (!localStorage.getItem("users")) {
    const userinfo = [
      { email: "test@test.com", phone: "010-1111-2222" },
      { email: "user@gmail.com", phone: "010-3333-4444" },
      { email: "admin@naver.com", phone: "010-5555-6666" },
      { email: "hello@daum.net", phone: "010-7777-8888" },
      { email: "sample@korea.kr", phone: "010-9999-0000" },
    ];
    localStorage.setItem("users", JSON.stringify(userinfo));
  }

  showUserList();

  // 중복확인 버튼 클릭 시 팝업 열기
  $("#emailCheck").click(function () {
    const popupWidth = 450;
    const popupHeight = 250;
    const left = (window.screen.width - popupWidth) / 2;
    const top = (window.screen.height - popupHeight) / 2;
    const options = `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`;

    window.open("24_emailCheck.html", "_blank", options);
  });

  // 회원가입 제출
  $("#signupForm").submit(function (e) {
    e.preventDefault();

    const email = $("#inputEmail").val().trim();
    const phone = $("#phone").val().trim();

    if (!email || !phone) {
      alert("이메일과 전화번호를 모두 입력해주세요.");
      return;
    }

    // sessionStorage 통해 중복확인 여부 확인
    const isChecked = sessionStorage.getItem("emailChecked") === "true";
    if (!isChecked) {
      alert("이메일 중복확인을 먼저 해주세요.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((user) => user.email === email)) {
      alert("이미 등록된 이메일입니다.");
      return;
    }

    users.push({ email, phone });
    localStorage.setItem("users", JSON.stringify(users));

    alert("회원가입이 완료되었습니다!");

    $("#inputEmail").val("");
    $("#phone").val("");
    sessionStorage.removeItem("emailChecked");

    showUserList();
  });
});

// 회원 목록 표시
function showUserList() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const html = users
    .map((user) => `<li>이메일: ${user.email} | 전화번호: ${user.phone}</li>`)
    .join("");
  $("#userList").html(html);
}
