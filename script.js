/* ===============================
   EMAILJS CONFIG
================================ */
(function () {
  emailjs.init("fp2ihnbxtgJ9bg1at"); // Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("status");
  status.innerText = "Sending...";
  status.style.color = "#333";

  emailjs.sendForm(
    "service_1tr6gbr",
    "template_2beo738",
    this
  ).then(
    function () {
      status.innerText = "Message sent successfully!";
      status.style.color = "green";
      document.getElementById("contact-form").reset();
    },
    function (error) {
      status.innerText = "Failed to send message.";
      status.style.color = "red";
      console.error("EmailJS Error:", error);
      alert("EmailJS Error: " + error.text);
    }
  );
});


/* ===============================
   TYPING TEXT EFFECT (PERFECT LOOP)
================================ */

const words = [
  "Aspiring Data Analyst, MS Excel, MySQL, Power BI. Turning Data into Insights"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

const typingSpeed = 120;
const deletingSpeed = 60;
const holdAfterTyping = 3000;   // ✅ wait 3 sec
const holdAfterDeleting = 1000; // ✅ wait 1 sec

function typeEffect() {
  if (!typingElement) return;

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
        typeEffect(); // 🔑 resume after pause
      }, holdAfterTyping);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      setTimeout(() => {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeEffect(); // 🔑 resume after pause
      }, holdAfterDeleting);
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);


/* ===============================
   MOBILE MENU TOGGLE
================================ */

const menuToggle = document.getElementById("menu-toggle");
const navRight = document.querySelector(".nav-right");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navRight.classList.toggle("active");
  });
}
