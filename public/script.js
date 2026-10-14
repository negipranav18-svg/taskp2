const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");
const submitBtn = document.getElementById("subscribeBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    message.textContent = "Please enter an email address.";
    message.className = "feedback-message error";
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  message.textContent = "";

  try {
    const response = await fetch("/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email })
    });

    const data = await response.json();

    if (response.ok) {
      message.textContent = data.message || "Welcome email sent successfully!";
      message.className = "feedback-message success";
      emailInput.value = "";
    } else {
      message.textContent = data.message || "Email could not be sent.";
      message.className = "feedback-message error";
    }
  } catch (err) {
    console.error("Fetch error:", err);
    message.textContent = "Could not connect to the server. Please try again.";
    message.className = "feedback-message error";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Subscribe";
  }
});
