const name = document.querySelector(".input-container input");

document
  .getElementById("next-button")
  .addEventListener("click", function (event) {
    if (name.value === "") {
      alert("이름을 입력하세요");
    } else {
      window.location.href = "page2.html";
    }
  });
