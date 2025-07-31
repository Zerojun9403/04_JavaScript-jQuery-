// jQuery 이벤트 처리
$(function () {
  $("#btn1").click(getCats);
  $("#btn2").click(getDogs);
  $("#btn3").click(getSelectedAnimal);
  $("#btn4").click(getCatsWithCount);
  $("#btn5").click(getRandomGallery);
});

// 문제 1: 고양이 사진 3장 가져오기
function getCats() {
  $("#result1").html(
    '<div class="loading">🐱 고양이 사진을 가져오는 중...</div>'
  );
  $.get("https://api.thecatapi.com/v1/images/search?limit=3").done(function (
    data
  ) {
    // limit = 3장 이어도 무조건 10장 이 나오는 사이트!!
    // 이럴 때 3장만 가져오는 방법
    //.slice(시작할 인데스 번호, 종료하고 난 다음인데스 부터)
    const threeCats = data.slice(0, 3);
    $("#result1").html(
      threeCats.map(
        (cat) =>
          `
            <div class ="photo-item">
                <img src="${cat.url}">
                <p>고양이 ID : ${cat.id}</p>
            </div>
            `
      )
    );
  });
}
// 문제 2: 강아지 사진 5장 가져오기
function getDogs() {
  $("#result2").html(
    '<div class="loading">🐶 강아지 사진을 가져오는 중...</div>'
  );
  $.get("https://api.thedogapi.com/v1/images/search?limit=3").done(function (
    data
  ) {
    const threeDogs = data.slice(0, 5);
    $("#result2").html(
      threeDogs.map(
        (dog) =>
          `

        <div class="photo-grid">
        
        
            <div class ="photo-item">
                <img src="${dog.url}">
                <p>강아지 ID : ${dog.id}</p>
            </div>
        </div>
            `
      )
    );
  });
}

// 문제 3: 선택한 동물 사진 가져오기
function getSelectedAnimal() {
  const selected = $("#animalSelect").val();

  if (!selected) {
    $("#result3").html('<div style="color: red;">동물을 선택해주세요!</div>');
    return;
  }

  $("#result3").html(
    '<div class="loading">선택한 동물 사진을 가져오는 중...</div>'
  );

  // 여기에 코드 작성

  $.get(`https://api.the${selected}api.com/v1/images/search?limit=3`).done(
    function (data) {
      const count = data.slice(0, 5);
      $("#result3").html(
        count.map(
          (animal) =>
            `
          <div class="photo-item">
            <img src="${animal.url}"/>
             <p> ${selected} ID=${animal.id}</p>
        </div>
          `
        )
      );
    }
  );
}

// 문제 4: 원하는 개수만큼 고양이 사진 가져오기

function getCatsWithCount() {
  const count = $("#photoCount").val();

  if (!count || count < 1 || count > 10) {
    $("#result4").html(
      '<div style="color: red;">1-10 사이의 숫자를 입력해주세요!</div>'
    );
    return;
  }

  $("#result4").html('<div class="loading">고양이 사진을 가져오는 중...</div>');

  // 여기에 코드 작성
  // count 개수만큼 고양이 사진 가져오기

  // map 사용
  //join("") 마지막에 , 나 ` 실행되는것을 "" rkqtdmfh cjfl
  $.get(`https://api.thecatapi.com/v1/images/search?limit=10`)
    .done(function (data) {
      const cats = data.slice(0, count);
      $("#result4").html(
        `<div class="photo-grid">
      ${cats
        .map(
          (cat) =>
            `<div class="photo-item">
            <img src="${cat.url}" alt="고양이 사진"> 
            </div>`
        )
        .join("")}
      </div>`
      );
    })
    .fail();
}

// 문제 5: 랜덤 동물 사진 갤러리
function getRandomGallery() {
  $("#result5").html(
    '<div class="loading">🎲 랜덤 동물 갤러리를 만드는 중...</div>'
  );

  // 여기에 코드 작성
  // 고양이 4장 + 강아지 4장 = 총 8장
  // 두 배열을 합쳐서 하나의 갤러리로 표시
  //1.https://api.thecatapi.com/v1/images/search?limit=10
  //2.https://api.thedogapi.com/v1/images/search?limit=10
  animal("cat");
  animal("dog");
}

function animal(동물이름) {
  $.get(`https://api.the${동물이름}api.com/v1/images/search?limit=10`).done(
    function (data) {
      const count = data.slice(0, 5);
      $("#result5").html(
        $("#result5").html() + count.map((i) => `<img src="${i.url}">`)
      );
    }
  );
}
