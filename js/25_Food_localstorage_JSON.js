$(function () {
  // 페이지 시작할떄 모든 저장 데이터 보여주기
  $("#addBtn").click(addFoodData);
  $("#searchBtn").click(searchFoodData);
  $("#showAllBtn").click(showAllFoodData);
  $("#clearAllBtn").click(clearFoodData);
});

/**
 *
 * @param {*} e : 파라미터에 대한 작성 공간
 */
function addFoodData(e) {
  e.preventDefault();

  const foodName = $("#foodName").val().trim();
  const price = $("#price").val().trim();
  const category = $("#category").val().trim();
  // 기존에 저장된 데이터가 localStorage 존재하는지 확왼
  // 없으면 빈배열을 문자열로 가져오기 실정
  let foodList = JSON.parse(localStorage.getItem("foodList") || "[]");

  const newFood = {
    foodName: foodName,
    price: price,
    category: category,
    createAt: new Date().toLocaleString("ko-KR"),
    // 저장시간 현재시간으로 한국기준설정
  };
  // js에서 foodList 목록에 newFood 데이터 맨 마지막에 추가
  foodList.push(newFood);
  // 추가된 foodList를 localStorage에 글자열 변환하여 저장
  localStorage.setItem("foodList", JSON.stringify(foodList));
  //foodName,price,createAt 입력창 비우기
  $("#foodName, #price, #category, #createAt").val("");
  //alert로컬스토리지에 저장 되었습니다. 띄우기
  alert("로컬스토리지에 저장되었습니다. :) ");
}

function searchFoodData(e) {
  e.preventDefault();
}

function showAllFoodData(e) {
  /**
   * showFoodData 행동이 들어왔을때
   *              해동에 대한 결과를 수행
   * 버튼이나 input처럼 특정 행위가 없을때는
   * undefined(행동이 전달되지 않은 상태 / 단순 페이지 오픈 상태)
   *
   *if(e).preventDefault();
   *  클릭거ㅣ 깉은 동작이 들어왔을때 태그 속석을 멈추기위하여 설정
   *  if로 e.preventDefault()를 감싸주지 않는다면
   * 지금과 같이
   * 페이지 로딩하고, 데이터를 모두 보기한 성태에서
   * undefined.preventDefault() 기 되어 문제가 밣생하므로
   *아래 기능을 수행하지 못함.
   *
   *
   *
   *
   */
  if (e) e.preventDefault();
  // 순서를 지키지 않으면 loading 에서 특정 행위나 이벤트가 없을때는
  // 내부 에러로 인하여 데이터가 보이지 않을수 있다.
  // 그래서 변수를 선언하고 선언된 변수 이름을 사용할때 반드시 순서를 지킬 것
  let foodList = JSON.parse(localStorage.getItem("foodList") || "[]");
  let html = `<h3>🍽️ 저장된 음식 목록 (총 ${foodList.length}개)</h3>`;

  //for문 사용회되, userList 값을 모두 [i] 로 가져올것
  for (let i = 0; i < foodList.length; i++) {
    html += `
      <div class="item-row">
        <div>
          <strong>🍽️ ${foodList[i].foodName}</strong><br>
          💰 가격: ${foodList[i].price}원<br>
          📂 카테고리: ${foodList[i].category}<br>
          📅 등록일: ${foodList[i].createAt}
        </div>
      </div>
    `;
  }

  $("#allData").html(html);
}

function clearFoodData(e) {
  e.preventDefault();
  if (confirm(" 정말로 사용자를 삭제하시겠습니까?")) {
    //localStorage.removeItem("userList");
    // => 로컬스토리지 내에서 특정 키만 삭제

    //localStorage.clear();
    // => 로컬스토리지 내부에 존재하는 모든 데이터 삭제
    localStorage.clear();
  }
  alert("모든 데이터가 삭제되었습니다.");
}
