// Simple beginner-level script to handle form submission with fetch()
const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");
const submitBtn = document.getElementById("subscribeBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    message.textContent = "Please enter an email address.";
    message.className = "message error";
    return;
  }

  // Visual feedback while sending
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  message.textContent = "";

  try {
    // Send POST request to Express backend
    const response = await fetch("/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email })
    });

    const data = await response.json();

    if (response.ok) {
      // Success (Status 200)
      message.textContent = data.message || "Welcome email sent successfully!";
      message.className = "message success";
      emailInput.value = "";
    } else {
      // Error from backend (Status 400 or 500)
      message.textContent = data.message || "Email could not be sent.";
      message.className = "message error";
    }
  } catch (err) {
    console.error("Fetch error:", err);
    message.textContent = "Could not connect to the server. Please try again.";
    message.className = "message error";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Subscribe";
  }
});
