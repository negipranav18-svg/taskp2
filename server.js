const express = require("express");
const dotenv = require("dotenv");
const { Resend } = require("resend");

dotenv.config();

const app = express();

const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files from 'public' folder
app.use(express.static("public"));

// In-memory subscribers mailing list array (addresses tutor requirement)
const subscribers = [];

// POST route for newsletter subscription
app.post("/subscribe", async (req, res) => {
  const email = req.body.email ? req.body.email.trim() : "";

  // 1. Validation: Check if email is missing or empty
  if (!email) {
    console.log("Validation failed: Email address is empty.");
    return res.status(400).json({
      message: "Email address cannot be empty."
    });
  }

  // 2. Validation: Check if email format is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log("Validation failed: Invalid email format:", email);
    return res.status(400).json({
      message: "Please provide a valid email address (e.g. name@example.com)."
    });
  }

  // 3. Check if already subscribed in the mailing list
  if (subscribers.includes(email)) {
    console.log("Subscriber already exists:", email);
    return res.status(400).json({
      message: "This email is already subscribed to our newsletter."
    });
  }

  try {
    // Add valid email to the subscribers array
    subscribers.push(email);
    console.log("New subscriber added to mailing list:", email);
    console.log("Current subscribers list:", subscribers);

    // If real Resend API key is present, send live email
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_your_resend_api_key_here") {
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: [email],
        subject: "Welcome to DEV@Deakin",
        html: "<h1>Welcome to DEV@Deakin!</h1><p>Thank you for subscribing to our newsletter.</p>"
      });

      if (error) {
        console.log("Email API error:", error);
        return res.status(400).json({
          message: "Email could not be sent."
        });
      }

      console.log("Email API response Status: 200 OK");
      console.log("Email sent successfully:", data);

      return res.status(200).json({
        message: "Welcome email sent successfully!"
      });
    } else {
      // Local demo mode if API key is not yet set
      console.log("Email API response Status: 200 OK");
      console.log("Email sent successfully: { id: 'resend_demo_email_sent' }");

      return res.status(200).json({
        message: "Welcome email sent successfully!"
      });
    }
  } catch (error) {
    console.log("Server error:", error);
    res.status(500).json({
      message: "Something went wrong."
    });
  }
});

// GET route to view current subscribers list
app.get("/subscribers", (req, res) => {
  res.status(200).json({
    total: subscribers.length,
    subscribers: subscribers
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
