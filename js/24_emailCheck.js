$(function () {
  $("#check").click(function () {
    const email = $("#childEmail").val();
    let userList = JSON.parse(localStorage.getItem("users") || "[]");

    const isDup = userList.filter((u) => u.email === email);
    // filter 는 배열로 데이터를 가져오기 때문에 .length 로 값이 한개라도 존재하는가 비교해야 함
    if (isDup.length > 0) {
      $("#result").html(
        `<span style = "color : red;">이미사용중인 이메일 입니다</span>`
      );
      $("#send").prop("disabled", true);
    } else {
      $("#result").html(
        `<span style = "color : green;">사용가능한 이메일 입니다</span>`
      );
      $("#send").prop("disabled", true);
    }
  });

  $("#send").click(function () {
    const email = $("#childEmail").val().trim();

    // 부모창에 이메일 전달

    //순수 자바스크립트 와 jquery 랑 언제든지 혼용해서 사용 가능 하다.
    //순수 자바스크립트 조합                            = jquery 조합
    //opener.document.getElementById("inputEmail").val = $("#childEmail").val();

    //jquery 조합
    opener.$("#inputEmail").val($("#childEmail").val());
    window.close();
  });
});
