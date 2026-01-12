(function () {
  emailjs.init("fp2ihnbxtgJ9bg1at"); // 👈 EXACT public key
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("status");
  status.innerText = "Sending...";
  status.style.color = "#333";

  emailjs
    .sendForm(
      "service_1tr6gbr",   // 👈 service_xxxxx
      "template_2beo738",  // 👈 template_xxxxx
      this
    )
    .then(
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
/* Typing Effect */
const words = [
  "Aspiring Data Analyst with strong proficiency in MS Excel, MySQL, Power BI",
  // "Designing User Interfaces",
  // "Crafting Web Solutions"
];
