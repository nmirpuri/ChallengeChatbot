const challenges = [
    { question: "I speak without a mouth and hear without ears. What am I?", answer: "echo" },
    { question: "What has to be broken before you can use it?", answer: "egg" },
    { question: "I’m tall when I’m young, and short when I’m old. What am I?", answer: "candle" },
    { question: "Unscramble this word: ‘TPROJE’", answer: "report" },
    { question: "2 + 2 * 2 = ?", answer: "6" }
];

let currentChallenge = null;

function addMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function startChallenge() {
    currentChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    addMessage(`🤖 Challenge: ${currentChallenge.question}`, "bot");
}

document.getElementById("send-btn").addEventListener("click", () => {
    const userInput = document.getElementById("user-input");
    const userText = userInput.value.trim().toLowerCase();
    if (!userText) return;

    addMessage(userInput.value, "user");
    userInput.value = "";

    if (currentChallenge) {
        if (userText === currentChallenge.answer.toLowerCase()) {
            addMessage("✅ Correct! Want another challenge? Type 'yes'.", "bot");
            currentChallenge = null;
        } else {
            addMessage("❌ Not quite! Try again.", "bot");
        }
    } else if (userText === "yes") {
        startChallenge();
    } else {
        addMessage("Type 'yes' to get a challenge!", "bot");
    }
});

// Start with a welcome message
addMessage("Hi! I'm Challenge Bot. Type 'yes' to get your first challenge!", "bot");
