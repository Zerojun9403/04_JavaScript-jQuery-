// $.get()

$(function () {
  $.get("../json/youtube.json").done(function (data) {
    $("#results").html(
      `
        <p class="title">영화제목</p> ${data.result.title}<br>

        <p class="info">영화설명</p> ${data.result.description}<br>

        <img src=${data.result.thumbnail}><br>

        <p class="url-text">주소</p>${data.result.url}<br>
        
        `
    );
  });
});
//https://abhi-api.vercel.app/api/search/yts?text=heat+waves
//.done()
// results 결과

//<p> 영화제목
//<p> 영화설명
//<img> 썸네일
//<P> 주소

$.get("../json/youtube.json").done(function (data) {
  const search = $("#searchInput").val();

  if (data.result.title == search) {
    // 검색 결과 출력
    $("#result").html(
      `
       <p class="title">영화제목</p> ${data.result.title}<br>

        <p class="info">영화설명</p> ${data.result.description}<br>

        <img src=${data.result.thumbnail}><br>

        <p class="url-text">주소</p>${data.result.url}<br></br>
        `
    );
  }
});
