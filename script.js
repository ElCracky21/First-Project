const funFacts = [
  "I Love Watching Football.",
  "I can code for 3 hours straight.",
  "I'm a Manchester United Fan.",
  "I'm a Fullstack Developer and a Community Manager.",
];

const funFactBtn = document.getElementById("funFactBtn");
const funFact = document.getElementById("funFact");

funFactBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  const randomFact = funFacts[randomIndex];

  funFact.textContent = randomFact;
  funFact.classList.remove("hidden");
});

document.getElementById("submitQuiz").addEventListener("click", function () {
  const answers = {
    q1: "blue",
    q2: "minna",
    q3: "football",
    q4: "web developer",
    q5: "manchester united",
  };

  let score = 0;
  const form = document.getElementById("quizForm");

  for (let key in answers) {
    const userAnswer = form.elements[key].value.trim().toLowerCase();
    if (userAnswer === answers[key]) score++;
  }

  const result = document.getElementById("result");
  result.textContent = "You got ${score} out of 5 correct!";

  if (score >= 4) {
    document.body.style.backgroundColor = "lightgreen";
    result.textContent += " Excellent";
  } else if (score >= 2) {
    document.body.style.backgroundColor = "lightyellow";
    result.textContent += " Not Bad!";
  } else {
    document.body.style.backgroundColor = "lightcoral";
    result.textContent += " Try Again!";
  }
  document.getElementById("tryAgain").style.display = "inline";
});

document.getElementById("tryAgain").addEventListener("click", function () {
  document.getElementById("quizForm").reset();
  document.getElementById("result").textContent = "";
  document.body.style.backgroundColor = "white";
  this.style.display = "none";
});
