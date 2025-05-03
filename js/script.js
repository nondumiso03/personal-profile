const form = document.getElementById("contactForm");
const response = document.getElementById("response");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  response.textContent = `Thank you, ${name}! Your message has been received.`;
  localStorage.setItem("lastContact", JSON.stringify({ name, email, message }));
  form.reset();
});

let count = 0;
const countDisplay = document.getElementById("countDisplay");
const incrementBtn = document.getElementById("incrementBtn");

const storedCount = localStorage.getItem("countValue");
if (storedCount) {
  count = parseInt(storedCount);
  countDisplay.textContent = count;
}

incrementBtn.addEventListener("click", function () {
  count++;
  countDisplay.textContent = count;
  localStorage.setItem("countValue", count);
});
