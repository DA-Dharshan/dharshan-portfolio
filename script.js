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
   TYPING TEXT EFFECT (LOOPING)
================================ */

const words = [
  "Aspiring Data Analyst,MS Excel,MySQL,Power BI.Turning Data into Insights",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

const typingSpeed = 120;     // typing speed
const deletingSpeed = 60;   // deleting speed
const holdAfterTyping = 3000; // 3 sec pause
const holdAfterDeleting = 1000; // 1 sec pause

function typeEffect() {
  if (!typingElement) return;

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => {
        isDeleting = true;
      }, holdAfterTyping);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;

      setTimeout(() => {}, holdAfterDeleting);
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

/* ===============================
   MOBILE MENU TOGGLE
================================ */
const menuToggle = document.getElementById("menu-toggle");

/* ===============================
   FORCE TYPING LOOP (ADD-ON)
================================ */

setInterval(() => {
  // reset typing state safely
  charIndex = 0;
  isDeleting = false;

  // clear text so typing restarts cleanly
  if (typingElement) {
    typingElement.textContent = "";
  }

}, 8000); // restart every 8 seconds

const navRight = document.querySelector(".nav-right");

menuToggle.addEventListener("click", () => {
  navRight.classList.toggle("active");
});

