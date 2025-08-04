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
  const userPw = $("#userPw").val();

  // 서버로 전송할 데이터
  // userData 형식 또한 추후 DB에 저장할 때 사용
  const useData = {
    username: username,
    password: userPw,
  };

  // json저장할때 사용 예정DB 에 저장할 때 나중에 등장 ! $.post()

  // username 과 userpw 는 맨 마지막 가입된 사람의 정보로 덮어쓰기가 됨!
  //배열에 기존 회원 목록 뒤에 새로 가입한 유저 목록 추가
  //localStorage에 목록 리스트 형태로 저정

  // 기존 회원 목록 가져오가(없으면 빈 배열 형태) 가져온 값을 userList변수 이름에 담아두기
  /**
   * localStorage 는 문자열만 저장 가능
   *
   * JSON.parse()    : JSON형식의문자열(String)을 javascript 의 객체 (object) 나 배열(Array변환
   *                   문자열 -> 객체 배열 형태로 변환
   * JSON.stringify(): javascript 의 객체 (object) 나 배열(Array)을 JSON형식의 문자열(String) 변환
   *                   객체 or 배열 -> 문자열 변환
   */

  let userList = JSON.parse(localStorage.getItem("userList") || "[]"); // 문자열-> 배열, 리스트 형태 변환

  // 새회원 정보를 담을 json 형태의 배열 생성
  const newUser = {
    username: username,
    password: userPw,
  };
  // 빈 배열이나 기존 배열에 새로운 유저정보 를 추가
  // localStorage에 배열로 저장 ->userList.html 에서 유저 목록을 확인하기 위한 배열 저장 형태
  /**
   *  userList = localStorage 에 키 명칭으로 지정되어 있는 유저 목록 을 담고 있는 변수 이름
   *  .push()  = 브라우저에서 저장된 리스트가 있든 없든 .push()저장한다. 뒤로 추가하여 항목을 저장
   *  newUser  = 위에서 소비자가 작성한 값을 키 : username 값 : username형태로 가져와서 저장
   *
   * .setItem("키이름", 값) :  데이터를 저장할 때 사용
   *                           마치 물건에 이름표(key)를 붙여 사물함에 넣는 것과 같음
   * .getItem("키이름"    ) :  setItem() 으로 저장해둔 데이터를 가져올 때 사용
   *
   *                           사물함에서 이름표(key)를 보고 물건을 꺼내는것과 같음
   * 단순한 글자나 숫자 데이터를 저장할때는 parse() 나 stringify()를 작성할 필요 없음
   * 왜냐하면 문자열 형태나 하나씩 지정될 것이 때문
   *
   * 배열이나 목록은 문자열로 저장된 형태를 배열이나 리스트 형태로 변환해서
   * JavaScript 내부에 활요할 것이기 때문에 변환 필요
   */
  userList.push(newUser);
  localStorage.setItem("userList", JSON.stringify(userList)); //localStorage 저장할 때는 베열, 리스트 -> 문자열 형태로 변환

  //result.html 에서 개별 사용자가 본인이 회원가입을 무사히 했는지 확인하기 위한 변수 이름 저장 형태
  localStorage.setItem("userName", username);
  localStorage.setItem("userPw", userPw);

  // 모두 자정하고 나서 결과 페이지 이동
  window.location.href = "22_result.html";
}

/**
 *
 * localStorage 에서 회원가입 진행
 * 입련된 정보는 두가지 형태로 지정
 * 개별 정보  : 현제 가입 한 사용자아이디(username) 과 비밀번호(userpw)가 단일 항목 지정
 * 목록 정보  : 기존 회원 목록에 현재 가입한 사용자의 정보를 추가하여 전체 회원 목록(userList) 배열 형태 저장
 *
 * result.html : 가입이 완료되면 개별 가입 확인을 위해 결과 페이지로 이동
 * localStorage 에 저장된 개별 정보를 가져와 소비자가 작성한 데이터를 확인 할 수 있도록 설정
 *
 * userList.html :   가입이 모두 완료되어 localStorage에 저장된 목록을 확인
 * localStorage 에 저장된 목록 정보를 가져와 사이트를 가입한 모든 회원의 아이디와 비밀번호를 화면에 표시
 *
 * 크롬이나 엣지 등 브라우저의 데이터 모두 지우기를 하기 전까지😉
 *
 *
 */
