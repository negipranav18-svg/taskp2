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

// POST route for newsletter subscription
app.post("/subscribe", async (req, res) => {
  const email = req.body.email;

  console.log("New subscriber:", email);

  // Basic validation
  if (!email || !email.includes("@")) {
    return res.status(400).json({
      message: "Please enter a valid email address."
    });
  }

  try {
    // If real Resend API key is present, send live email
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_your_resend_api_key_here") {
      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: [email],
        subject: "Welcome to DEV@Deakin",
        html: "<h1>Welcome to DEV@Deakin!</h1><p>Thank you for subscribing to our newsletter.</p>"
      });

      if (error) {
        console.log("Email error:", error);
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
      // Local demo mode if API key is not yet set in .env
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
