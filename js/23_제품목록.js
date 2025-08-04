$(function () {
  displayProducts();
  $("#delete_btn").click(deleteprodects);
});

function displayProducts() {
  //기존 배열 목록 가져오기
  let productList = JSON.parse(localStorage.getItem("productList") || "[]");

  //#product-grid 내부에

  // map 형태로 내부에 실습코드 -> 제품목록.js 추가할목

  $("#product-grid").html(
    productList
      .map(
        (product) => `
     <div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">${Number(
            product.price
          ).toLocaleString()}원</p>
        </div>
      </div>
    
    `
      )
      .join("")
  );
}

function deleteprodects(e) {
  e.preventDefault(); // a의href 로 이동 하는 기본 동작방지

  //사용자에게 정말 삭제할 것인지 최종확인 !!
  if (confirm("정말 모든 제품을 삭제하시겠습니까?"))
    //confitm 에서 확인을 눌렀을 경우
    // localStorage 에 productList 에 데이터만 제거
    localStorage.removeItem("productList");

  // 화면을 f5(새로고침) 하여 변경사항을 반영
  alert("모든상품이 삭제 되었습니다. ");
  location.reload(); //  현재 페이지 새로고침 window. 생략가능
}
