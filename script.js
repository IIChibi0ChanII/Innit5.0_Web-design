const scrollElements = document.querySelectorAll(".scroll-effect");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.1 }
);

scrollElements.forEach((el) => observer.observe(el));

function clickPopup() {
  const popup = document.createElement("div");
  popup.className = "custom-popup";
  popup.innerHTML = `
    <div class="popup-content">
      <h2>KOROSOU-CHIKARA INDUSTRIES</h2>
      <p>Unauthorized access detected. Upgrade is restricted.</p>
      <button class="redirect">Acknowledge</button>
    </div>
  `;
  document.body.appendChild(popup);

  document.querySelector(".redirect").addEventListener("click", () => {
    exitSite();
  });
}

function exitSite() {
  const staticSound = document.getElementById("static-sfx");
  const flash = document.getElementById("screen-flash");

  staticSound.volume = 0.3;
  staticSound.play();

  flash.style.animation = "flashOut 1.3s ease";

  setTimeout(() => {
    window.location.href = "exit.html";
  }, 1300);
}
