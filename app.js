let coins = [];
let found = 0;

function startGame() {
  const username = document.getElementById("username").value;
  if (!username) return alert("Enter username");

  document.getElementById("start").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("playerName").innerText = "Player: " + username;

  generateCoins();
  createGrid();
}

function generateCoins() {
  coins = [];
  while (coins.length < 8) {
    let rand = Math.floor(Math.random() * 25);
    if (!coins.includes(rand)) coins.push(rand);
  }
}

function createGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (let i = 0; i < 25; i++) {
    const box = document.createElement("div");
    box.classList.add("box");

    box.onclick = () => openBox(box, i);

    grid.appendChild(box);
  }
}

function openBox(box, index) {
  if (box.classList.contains("open")) return;

  box.classList.add("open");

  if (coins.includes(index)) {
    box.innerHTML = "🪙";
    found++;
    document.getElementById("score").innerText = found;

    if (found === 8) {
      setTimeout(() => alert("You win! 🎉"), 200);
    }
  } else {
    box.innerHTML = "❌";
  }
}