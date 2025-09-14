// 🎉 Part 1: Event Handling
const helloBtn = document.getElementById("helloBtn");
const helloMsg = document.getElementById("helloMsg");

helloBtn.addEventListener("click", () => {
  helloMsg.textContent = "Hello there! 🎉";
});

// 🎮 Part 2: Interactive Element
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 📋✅ Part 3: Form Validation
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // Validate name
  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Name too short";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Validate email
  const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Final feedback
  document.getElementById("formMsg").textContent = valid
    ? "✅ Success!"
    : "❌ Fix errors above.";
});
