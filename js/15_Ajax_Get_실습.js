// jQuery 이벤트 처리와
// 기능명칭으로 분류하여 기능 호출하기
$(function () {
  $("#btn1").click(문제1번기능);
  $("#btn2").click(userInfo); // ID가 btn1 를 클릭헸을때 문제1번 기능 함수에 담긴 기능 사용
  $("#btn3").click(getRandom);
  $("#btn4").click(getComments);
  $("#btn5").click(errorFn);
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
