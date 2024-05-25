document.getElementById("next-button").addEventListener("click", function () {
  const files = document.getElementById("file-upload").files;
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let isChecked = false;

  // 체크박스 검사
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      isChecked = true;
      break;
    }
  }

  // 파일이 첨부되지 않았거나, 체크박스가 선택되지 않은 경우
  if (files.length === 0) {
    alert("파일을 첨부하세요.");
  } else if (!isChecked) {
    alert("내역 정리할 항목을 고르세요.");
  } else {
    window.location.href = "page3.html"; // 다음 페이지로 이동
  }
});

function displayFileNames() {
  const input = document.getElementById("file-upload");
  const fileList = document.getElementById("file-list");
  fileList.innerHTML = "";

  for (let i = 0; i < input.files.length; i++) {
    const file = input.files[i];
    const fileName = document.createElement("p");
    fileName.textContent = file.name;
    fileList.appendChild(fileName);
  }
}
