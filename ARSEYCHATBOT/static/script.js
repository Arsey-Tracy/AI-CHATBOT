document.addEventListener("DOMContentLoaded", () => {
  const chatbox = document.getElementById("chatbox");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

//  function appendMessage(content, sender) {
  //  const messageDiv = document.createElement("div");
   // messageDiv.classList.add("message", sender);
    //messageDiv.textContent = content;
    //chatbox.appendChild(messageDiv);
   // chatbox.scrollTop = chatbox.scrollHeight;
  //}
function appendMessage(content, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    
    // Use innerHTML instead of innerText to render markdown as HTML
    messageDiv.innerHTML = content;

    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}
  sendBtn.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (message) {
      appendMessage(message, "user");
      userInput.value = "";

      // Send message to Flask backend
      fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      })
        .then(response => response.json())
        .then(data => {
          if (data.response) {
            appendMessage(data.response, "bot");
          } else {
            appendMessage("Error: No response from server.", "bot");
          }
        })
        .catch(() => {
          appendMessage("Error: Unable to reach the server.", "bot");
        });
    }
  });

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendBtn.click();
    }
  });
});