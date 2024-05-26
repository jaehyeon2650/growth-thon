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

const fileInput = document.querySelector(".input-container input");
fileInput.addEventListener("change", displayFileNames);
function displayFileNames() {
  const input = document.getElementById("file-upload");
  const fileList = document.getElementById("file-list");
  const filesArray = Array.from(input.files);
  fileList.innerHTML = "";

  filesArray.forEach((file, index) => {
    const fileItem = document.createElement("div");
    fileItem.className = "file-item";

    const fileName = document.createElement("p");
    fileName.textContent = file.name;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-btn";
    removeButton.textContent = "❌";
    removeButton.onclick = function () {
      filesArray.splice(index, 1);
      updateFileList(filesArray);
    };

    fileItem.appendChild(fileName);
    fileItem.appendChild(removeButton);
    fileList.appendChild(fileItem);
  });
}

function updateFileList(filesArray) {
  const input = document.getElementById("file-upload");
  const fileList = document.getElementById("file-list");
  const dataTransfer = new DataTransfer();

  filesArray.forEach((file) => {
    dataTransfer.items.add(file);
  });

  input.files = dataTransfer.files;
  fileList.innerHTML = "";

  filesArray.forEach((file, index) => {
    const fileItem = document.createElement("div");
    fileItem.className = "file-item";

    const fileName = document.createElement("p");
    fileName.textContent = file.name;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-btn";
    removeButton.textContent = "❌";
    removeButton.onclick = function () {
      filesArray.splice(index, 1);
      updateFileList(filesArray);
    };

    fileItem.appendChild(fileName);
    fileItem.appendChild(removeButton);
    fileList.appendChild(fileItem);
  });
}
