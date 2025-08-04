$(function () {
  $("a").click(singUp);
});

function singUp(e) {
  e.preventDefault(); // 기본 링크 동작 방지
  // 제출하기 일시 정지 상태로
  // 아래 정규식, 데이터 저장 여부등과 같은 규정을
  // 모두 확인한 후 result.html 이동 할 수 있도록 설정

  // 입력값 가져오기
  const username = $("#userName").val();
  const userpw = $("#userPw").val();

  // 서버로 전송할 데이터
  // userData 형식 또한 추후 DB에 저장할 때 사용
  const useData = {
    username: username,
    password: userpw,
  };

  // json저장할때 사용 예정DB 에 저장할 때 나중에 등장 ! $.post()

 
  // username 과 userpw 는 맨 마지막 가입된 사람의 정보로 덮어쓰기가 됨!
  //배열에 기존 회원 목록 뒤에 새로 가입한 유저 목록 추가
  //localStorage에 목록 리스트 형태로 저정

  // 기존 회원 목록 가져오가(없으면 빈 배열 형태) 가져온 값을 userList변수 이름에 담아두기
  let userList =JSON.parse(localStorage.getItem('userList')||[]);

// 새회원 정보를 담을 json 형태의 배열 생성
const newUser={

  username: username,
  password :userpw,
};
// 빈 배열이나 기존 배열에 새로운 유저정보 를 추가 
userList.push(newUser);

  // localStorage에 배열로 저장 ->
  localStorage.setItem("userList", JSON.stringify(userList));


 //localStorage에 저장
  localStorage.setItem("userName", username);
  localStorage.setItem("userPw", userpw);

  // 모두 자정하고 나서 결과 페이지 이동
  window.location.href = "22_result.html";
}
