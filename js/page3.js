const first_input = document.querySelector(
  ".input-container input:first-child"
);
const second_input = document.querySelector(
  ".input-container input:last-child"
);

document.getElementById("next-button").addEventListener("click", function () {
  if (first_input.value === "") {
    alert("사용 기간을 입력해주세요");
  } else if (second_input.value === "") {
    alert("목표예산을 입력하세요.");
  } else {
    window.location.href = "page4.html";
  }
});
