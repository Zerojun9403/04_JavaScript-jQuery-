$(function () {
  뉴스불러오기();
  $("#loadBtn").click(검색하기);
});

// select value 값에 적당한 데이터만 검색하기 설정
function 검색하기() {
  $.get("../json/news.json").done(function (data) {
    $("#newsContainer").html(
      data
        .filter((category) => category.category == $("#category").val())
        .map(
          (category) =>
            `
        <div class="news-card">
            <div class="news-title">${category.title}</div>
            <div class="news-content">${category.content}</div>
        </div>
                `
        )
    );
  });
}

function 뉴스불러오기() {
  $.get("../json/news.json").done(function (data) {
    $("#newsContainer").html(
      data.map(
        (i) =>
          `
        <div class="news-card">
            <div class="news-title">${i.title}</div>
            <div class="news-content">${i.content}</div>
        </div>
                `
      )
    );
  });
}
