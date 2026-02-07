const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttons = document.getElementById("buttons");
const result = document.getElementById("result");
const question = document.getElementById("question");
const card = document.querySelector(".card");


const cardRect = document.querySelector(".card");

function moveNoButton() {
  const cardBounds = cardRect.getBoundingClientRect();
  const btnBounds = noBtn.getBoundingClientRect();

  const padding = 20;

  const maxX = cardBounds.width - btnBounds.width - padding;
  const maxY = cardBounds.height - btnBounds.height - padding;

  const x = Math.random() * maxX + padding;
  const y = Math.random() * maxY + padding;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Trigger on hover AND near-miss
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("mouseover", moveNoButton);

// Optional: make it extra aggressive
document.addEventListener("mousemove", (e) => {
  const btn = noBtn.getBoundingClientRect();
  const distX = Math.abs(e.clientX - (btn.left + btn.width / 2));
  const distY = Math.abs(e.clientY - (btn.top + btn.height / 2));

  if (distX < 80 && distY < 50) {
    moveNoButton();
  }
});


yesBtn.addEventListener("click", () => {
  question.textContent = "That made me smile 💕";
  buttons.classList.add("d-none");
  result.classList.remove("d-none");

  card.style.animation = "pulseGlow 2s ease-in-out";

  heartBurst();
  startFloatingHearts();
});

function heartBurst() {
  const container = document.getElementById("hearts-container");
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  for (let i = 0; i < 26; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 140;

    heart.style.left = centerX + Math.cos(angle) * distance + "px";
    heart.style.top = centerY + Math.sin(angle) * distance + "px";
    heart.style.opacity = 1;

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
  }
}

function startFloatingHearts() {
  const container = document.getElementById("hearts-container");
  let count = 0;

  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.animation = `float ${4 + Math.random() * 3}s ease forwards`;

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);

    count++;
    if (count > 40) clearInterval(interval);
  }, 160);
}


