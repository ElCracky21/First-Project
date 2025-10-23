const funFacts = [
    "I Love Watching Football.",
    "I can code for 3 hours straight.",
    "I'm a Manchester United Fan.",
    "I'm a Fullstack Developer and a Community Manager."
];

const funFactBtn = document.getElementById("funFactBtn");
const funFact = document.getElementById("funFact");

funFactBtn.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const randomFact = funFacts[randomIndex];

    funFact.textContent = randomFact;
    funFact.classList.remove("hidden");
});