
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with EmailJS Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",   // Replace
    "YOUR_TEMPLATE_ID",  // Replace
    this
  ).then(() => {
    document.getElementById("status").innerText = "Message sent successfully!";
    this.reset();
  }, () => {
    document.getElementById("status").innerText = "Failed to send message.";
  });
});

/* Typing Effect */
const words = [
  "Aspiring Data Analyst with strong proficiency in MS Excel, MySQL, Power BI",
  // "Designing User Interfaces",
  // "Crafting Web Solutions"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

const typingSpeed = 120;      // typing speed
const deletingSpeed = 50;     // deleting speed
const typingDelay = 3000;     // 3 sec after full word
const deletingDelay = 1000;   // 1 sec after delete

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      setTimeout(() => (isDeleting = true), typingDelay);
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(() => {}, deletingDelay);
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
