$(function () {
  loadMovies();
  $("#openLoginPopup").click(openLoginPopup);
  $("#moveRegister").click(goToSignup);
});

function loadMovies() {
  $.get("https://ghibliapi.vercel.app/films")
    .done(function (data) {
      $(".loading").hide(); // 로딩 숨기기
      displayMovies(data); // 데이터 출력 함수 호출
    })
    .fail(function () {
      console.error("영화 데이터를 불러오는 데 실패했습니다.");
    });
}

// 지브리 영화 데이터 가져오기

// 영화 목록 표시
function displayMovies(movies) {
  const movieCard = movies
    .map(
      (movie) => `
                    <div class="movie">
                        <h3>${movie.original_title}</h3>
                        <img src=${
                          movie.movie_banner
                        } style="width:300px;hight:300px;"/>
                        <p class="year">개봉년도: ${movie.release_date}</p>
                        <p><strong>감독:</strong> ${movie.director}</p>
                        <p><strong>제작자:</strong> ${movie.producer}</p>
                        <p>
                        <span class="detail-link" onclick="goToDetail('${movie.id}')">
                        ${movie.description.substring(0, 10) + "...상세보기"}
                        </span>
                        </p>
                    </div>
                `
    )
    .join("");
  $(".movies").html(movieCard);
}
// 로그인 팝업 열기
function openLoginPopup() {
  const popup = window.open("login.html", "_blank", "width=450,height=600");
}

// 회원가입 페이지로 이동
function goToSignup() {
  window.location.href = "register.html";
}

function goToDetail(movieId) {
/*
http://127.0.0.1:5500/index.html ?key=value
     * ?뒤에 매개변수로 전달받은 값을 detail.html 에 전달하겠다.
     *
     * detail.html 로 들어가면 -> 상세페이지에서 표시할 내용이 존재하지 않습니다.
     *
     * detail.html?id=id에 해당하는 값을 작성하면
     * 해당 데이터를 detail에서 불러올 수 있음
     
     
     
*/    
  window.location.href = `detail.html?id=${movieId}`;
}
