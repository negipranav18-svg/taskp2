# SIT313 P2 – Welcome Email Report Content

You can use the text below directly for your report submission:

---

## Cover Information
- **Unit**: SIT313 Full Stack Development: Secure Frontend Applications
- **Task**: Pass Task P2 – Welcome Email
- **Outcome**: ULO2
- **Student Name**: Pranav
- **Student ID**: 2510999081
- **Tutor**: Sunil Dhawan

---

## 1. Web Platform & Sign-Up Feature
I built upon my web platform (from Task 1) and expanded it by integrating the newsletter sign-up feature as required in Task 2:
- The website keeps the complete personal portfolio layout:
  - Navigation bar (`About`, `Work`, `Newsletter`, `Contact`).
  - Banner section with interactive hover greeting (*"Hey, I'm Pranav"*).
  - **About Me** section with profile picture and student overview.
  - **My Work** section showcasing three project cards with CSS flexbox layout.
  - **Gallery** section with responsive CSS grid layout.
  - **Contact** section with university email address.
- Added the Task 2 **Sign-Up Feature**:
  - Horizontal bar featuring the exact required text: **`SIGN UP FOR OUR DAILY INSIDER`**.
  - Email input field with placeholder *"Enter your email"* and a **Subscribe** button.
  - Client-side JavaScript (`script.js`) that prevents default form submission and sends an asynchronous `POST` request to the Express backend route `/subscribe` using the `fetch()` API.
  - Interactive status message displaying a green confirmation (*"Welcome email sent successfully!"*) upon completion.

*(Insert screenshot of your webpage at http://localhost:3000 showing the page with the SIGN UP FOR OUR DAILY INSIDER bar and the green confirmation message)*

---

## 2. ExpressJS Backend & Email API
I developed an Express.js backend using Node.js to receive subscriber data and dispatch welcome emails:
- Configured `express.json()` and `express.urlencoded()` to parse incoming HTTP request bodies.
- Set up `app.use(express.static("public"))` to serve frontend assets.
- Implemented `app.post("/subscribe", ...)` to process subscriber emails.
- Integrated the Resend Email API to send welcome emails asynchronously with subject *"Welcome to DEV@Deakin"* and HTML welcome text.
- Protected sensitive credentials by storing the API key in a `.env` file, and added it along with `node_modules/` to `.gitignore` to prevent tracking.
- Explicitly logged the required **Status: 200 OK** message to the terminal and returned appropriate HTTP response status codes (`200`, `400`, `500`).

*(Insert screenshot of your terminal showing:)*
```text
Server running on http://localhost:3000
New subscriber: pranav9081.ai25@chitkara.edu.in
Email API response Status: 200 OK
Email sent successfully: { id: ... }
```

---

## 3. GitLab Repository
- **Repository URL**: `https://gitlab.com/chitkara-university3/task-p2`
- **Visibility**: Internal
- Configured `.gitignore` to exclude `node_modules/` and `.env`.

---

## 4. Video Walkthrough Link
- **Video Link**: *(Insert your 2–4 minute Panopto / YouTube walkthrough link)*
