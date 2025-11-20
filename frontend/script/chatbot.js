document.addEventListener('DOMContentLoaded', () => {
  const chatbotIcon = document.getElementById('chatbot-icon');
  const chatbotModal = document.getElementById('chatbot-modal');
  const closeBtn = document.getElementById('chatbot-close');
  const messagesContainer = document.getElementById('chatbot-messages');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

  // Open chatbot
  chatbotIcon.addEventListener('click', () => {
    chatbotModal.style.display = 'block';
  });

  // Close chatbot
  closeBtn.addEventListener('click', () => {
    chatbotModal.style.display = 'none';
  });

  // Send message
  sendBtn.addEventListener('click', async () => {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // Display user message
    addMessage(userMessage, 'user');

    // Fetch AI bot response
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();

      // Display AI bot response
      addMessage(data.reply, 'bot');
    } catch (error) {
      addMessage("Sorry, I couldn't process your request. Please try again.", 'bot');
    }

    userInput.value = '';
  });

  // Add message to the chat
  function addMessage(text, type) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
});
