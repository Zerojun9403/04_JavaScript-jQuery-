$(function () {
  showUsers();
  $("#clear-all").click(deleteprodects);
});

function showUsers() {
  // localStorage 에서 모든 데이터를 담을 수 있는 리스트 변수 이름 생성

  let userList = JSON.parse(localStorage.getItem("userList") || "[]");

  // 사용자 총 회원표시 userList.length

  // 사용자가 없으면 userList.length === 0 no-users 볼 수 있음!

  //map 사용해서 HTML 로 소비자 유저 리스트 목록을 확인 할수 있도로고 설정

  const userHTML = userList.map(
    (u) =>
      `
    <div class="user-item">
        <div class="user-id"> 아이디 : ${u.username}</div>
        <div class="user-pw"> 비밀번호 : ${u.password}</div>
    </div>
    `
  );
  $("#user-list").html(userHTML);
}
function deleteprodects(e) {
  e.preventDefault(); // a의href 로 이동 하는 기본 동작방지

  //사용자에게 정말 삭제할 것인지 최종확인 !!
  if (confirm("정말 모든 목록을 삭제하시겠습니까?"))
    //confitm 에서 확인을 눌렀을 경우
    // localStorage 에 productList 에 데이터만 제거
    localStorage.removeItem("userList");

  // 화면을 f5(새로고침) 하여 변경사항을 반영
  alert("모든목록이 삭제 되었습니다. ");
  location.reload(); //  현재 페이지 새로고침 window. 생략가능
}
