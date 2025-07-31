// jQuery 이벤트 처리와
// 기능명칭으로 분류하여 기능 호출하기
$(function () {
  $("#btn1").click(문제1번기능);
  $("#btn2").click(userInfo); // ID가 btn1 를 클릭헸을때 문제1번 기능 함수에 담긴 기능 사용
  $("#btn3").click(getRandom);
  $("#btn4").click(getComments);
  $("#btn5").click(errorFn);
  $("#btn6").click(getPosts);
  $("#btn7").click(userList);
  $("#btn").click(searchUser);
});
//문제 1 :  기본텍스트 데이터 가져오기
// https://jsonplaceholder.typicode.com/posts/1

function 문제1번기능() {
  $.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    // url주소를 가져오는데 성공!
    function (data) {
      $("#result1").html(
        `<div class="success">
                    <strong> 게시물 제목: </strong> ${data.title}<br>
                    // 게시물 내용 body 가져오기
                     <strong> 게시물 내용: </strong> ${data.boby}
                </div>`
      );
    }
  );
}

//문제 2 : 사용자 정보 표시하기
//https://jsonplaceholder.typicode.com/users/{userId}

function userInfo() {
  const ui = $("#userId").val(); // 사용자가 작성한 값
  $.get(`https://jsonplaceholder.typicode.com/users/${ui}`)

    //1.데이터를 무사히 가져오는것 성공
    .done(function (data) {
      if (!data.id || !data) {
        $("result2").html(
          '<div class = "error"> 해당하는 사용자를 찾을수없습니다.</div>'
        );
        return; // 데이터 가 없음으로 function 아래 기능을 사용하지 못하도록 돌려보내기
      }
      // 데이터 가져올수 있도록 접속하는데 성공!
      $("#result2").html(
        ` <div class="success">
              <strong> 이름 </strong>${data.name} <br>
              <strong> 이메일 </strong>${data.email} <br>
              <strong> 전화번호 </strong>${data.phone} <br>
             </div> `
      );
    })

    //2.데이터를 가져오는것 실패
    .fail(function () {
      $("#result2").html(
        `<div class="error">
            해당 사용자를 찾을수 없습니다(404 error 발생)
            주소 자체 접속이 안되는 상황
        </div>`
      );
    });
}

//문제 3 : 랜덤 명언 가져오기
function getRandom() {
  // 1 . get 이용해서 데이터 가져올 주소 설정
  // https://api.quotable.io/random

  $.get("https://api.quotable.io/random")

    //데이터 가져오는데 문제가 없을 경우
    .done(function (data) {
      $("#result3").html(
        `<div class="success">
        <blockquote>${data.content}</blockquote>
             <strong>${data.author}</strong>
     <div>
    `
      );
    })

    .fail(
      //데이터 주소를 가져오는데 문제가 있는 경우
      $("#result3").html(
        `<div class="success">
                명언을 가져오는데 실패했습니다.
            <div>
        `
      )
    );
}

// 문제 4  : 댓글 .length 개를 성공적으로 가져왔다 띄워주기
// https://jsonplaceholder.typicode.com/posts/1/comments

//문제 5 : 에러 처리하기
//https://jsonplaceholder.typicode.com/posts/1/comments
function getComments() {
  $.get("https://jsonplaceholder.typicode.com/posts/1/comments")
    .done(function (data) {
      $("#result4").html(
        `
          <div class ="success">
                    댓글 ${data.length} 개 를 성공적으로 불러왔습니다. 
                    첫번째 댓글 ${data[0].body} index번호를 이용핫여 첫번째 댓글 가져오기
                </div>                     
                
     `
      );
    })

    .fail(function (data) {
      $("#result4").html(
        `<div class="success">
                댓글을 가져오는데 실패 하였습니다.
            <div>
        `
      );
    });

  //데이터 주소를 가져오는데 문제가 있는 경우
}

//문제 5 : 에러처리하기
//https://jsonplaceholder.typicode.com/posts/999999
function errorFn() {
  $get("https://jsonplaceholder.typicode.com/posts/999999")
    .done(function (data) {
      $("#result5").html(
        `
            <div class ="success">
                데이터를 성공적으로 가져 왔습니다. 
            </div>
            `
      );
    })

    .fail(function (xhr) {
      $("#result5").html(
        `
            <div class ="error">

                애러 발생 !
                <strong> 상태 코드 : </strong> ${xhr.status}<br>
                <strong> 에러 메세지 : </strong> ${xhr.statusText}<br>


            </div>
            
            `
      );
    });
}

//문제 6 : 게시물 5개 가져오기
// https://jsonplaceholder.typicode.com/posts?_limit=5

function getPosts() {
  $.get("https://jsonplaceholder.typicode.com/posts?_limit=5").done(function (
    data
  ) {
    $("#result6").html(
      //data 가 배열 =  목록 = 리스트 형태로 다수 존재할 경우
      // data.map() 배열 형태를 하나씩 꺼내서 나열 하는 메서드 사용
      data.map((i) => `<p><strong>${i.title}</strong></p>`)
    );
  });
}

//문제 7 : 유저 목록 모두 조회하기
// https://jsonplaceholder.typicode.com/users
function userList() {
  $.get("https://jsonplaceholder.typicode.com/users").done(
    //데이터 가져오기 성공했을 경우
    // data.mpa을 활용해서 모든 유저 목록 확인
    // result7.html (``)내부에서 데이터를 확인
    // map 내부에서 변수 이름은 i 대신 user
    //<p> 유저닉네임${user.username}</p>
    //<p> 유저이메일 ${user.email}</p>

    function (data) {
      $("#result7").html(
        data.map(
          (user) =>
            `<p><strong>${user.username}</strong></p>
           <p><strong>${user.email}</strong></p>`
        )
      );
    }
  );
}

//문제 8 : 검색 기능 구현하기
//https://jsonplaceholder.typicode.com/users
function searchUser() {
  //검색된 사용자의 val 값을 가져오기
  const searchName = $("#searchName").val();
  /*
    filter() 
    베열 = 목록 = 리스트에서 조건에 맞는 것들만 골라내는 기능
    베열 .filter(조건함수)
     data .filter((uesr) => user.name == searchName)
     url 에서 가져온 데이트딜 에서 걸러낼게요 하나식 data 를 꺼내서 user 변수 이름으로 확인
    user 에서 name 과 소비자가 검색한 이름과  user  라는 변수이름에 담아 둘게요

    data : url 에서 가져온 데이터를 담고 있는변수
    .filter(   : data 에서 가져온 데이터들을 걸러내는 작업진행 
             (user) => : 우선은 data=user 서로 가지고 있는 리스트가 동일하지만 
                        : 추후 소비자가 찾는 이름과 user 내에서 name 키로 일치하는 값만
                        : user 변수이름에 담아 놓기 
    user.name == searchName
    
    
    
    
    */
  //filter() 기능을 이용해서 원하는 소비자 검색으로 걸러내기
  // 걸러낸 소비자들을 리스트 형태로 가지고 있기
  // map  이용해서 하나씩 꺼내기
  // #result8 에서 보여주기
  $.get("https://jsonplaceholder.typicode.com/users")
  .done(function (data) {
    /* 1. 검색에 해당하는 사람들만 걸러내서 목록형태로 조회 */
    $("#result8").html(
      data
        .filter((user) => user.name == searchName)
        .map((user) => 
        `<p>${user.name}</p>
        <p>${user.email}</p>
        `
        )
    );
  });
}
