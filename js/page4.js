const button = document.querySelector(".input-box button");
const gpt_answer = document.querySelector(".q-result-placeholder");
const input = document.querySelector(".input-box input");

const apiEndpoint = "";
const api_key = "";

button.addEventListener("click", async (e) => {
  e.preventDefault();

  //입력폼 초기화
  const message = input.value;
  input.value = "";

  const aiResponse = await fetchAIResponse(message);

  gpt_answer.innerText = aiResponse;
});

//openai api 호출 함수
async function fetchAIResponse(prompt) {
  const requestOptions = {
    method: "POST",

    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${api_key}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "저는 인공지능 챗봇입니다. 저의 이름은 'GDSC AI' 입니다. 저는 한글로만 대답합니다. 여러분의 질문에 답변을 드릴 수 있습니다.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  };

  try {
    const response = await fetch(apiEndpoint, requestOptions);
    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    return aiResponse;
  } catch (error) {
    console.error("OpenAI API 호출 중 오류 발생:", error);
    return "OpenAI API 호출 중 오류 발생";
  }
}
