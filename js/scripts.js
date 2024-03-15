/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// 사용자가 스크롤을 20px 이상 내렸을 때 버튼을 보여주는 함수
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// 버튼 클릭 시 페이지 맨 위로 이동하는 함수
function topFunction() {
  document.body.scrollTop = 0; // 사파리 브라우저 대응
  document.documentElement.scrollTop = 0; // 크롬, 파이어폭스, IE, 오페라 대응
}

