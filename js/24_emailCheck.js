$(function () {
  $("#childEmail").focus();

  $("#childEmail").keypress(function (e) {
    if (e.which === 13) {
      $("#check").click();
    }
  });

  $("#check").click(function () {
    const email = $("#childEmail").val().trim();
    if (!email) {
      $("#result").text("이메일을 입력해주세요.").css("color", "red");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users") || "[]");

    const isDuplicate = users.some((user) => user.email === email);
    console.log("users:", users);
    console.log("입력값:", email);
    console.log("중복 여부:", isDuplicate);

    if (isDuplicate) {
      $("#result").text("이미 사용 중인 이메일입니다.").css("color", "red");
      $("#send").prop("disabled", true);
    } else {
      $("#result").text("사용 가능한 이메일입니다.").css("color", "green");
      $("#send").prop("disabled", false);
    }
  });

  $("#send").click(function () {
    const email = $("#childEmail").val().trim();

    // 부모창에 이메일 전달
    $(opener.document).find("#inputEmail").val(email);

    // 중복확인 완료 상태를 세션스토리지에 기록
    opener.sessionStorage.setItem("emailChecked", "true");

    window.close();
  });
});
