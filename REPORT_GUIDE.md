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

## 1. DEV@Deakin Web Platform & Sign-Up Feature
I expanded the DEV@Deakin web platform by implementing the sign-up feature as specified in the task sheet:
- A responsive navigation bar with the DEV@Deakin branding, search input, and action links.
- A hero banner and featured articles section introducing the community.
- A horizontal newsletter section featuring the exact requirement: **SIGN UP FOR OUR DAILY INSIDER**, with an email input and a **Subscribe** button.
- When the user enters their email and clicks Subscribe, the frontend sends an asynchronous `POST` request to `/subscribe` using the JavaScript `fetch()` API and displays a clear success message.

*(Insert screenshot of the web page at http://localhost:3000 with the green success message)*

---

## 2. ExpressJS Backend & Email API
I built a backend service using Express.js and Node.js:
- Configured middleware `express.json()` and `express.urlencoded()` to parse request bodies.
- Set up a `POST /subscribe` route to receive the subscriber's email address.
- Integrated the Resend Email API asynchronously to send the welcome email with subject "Welcome to DEV@Deakin" and HTML welcome message.
- Securely stored API keys in a `.env` file and excluded it from version control using `.gitignore`.
- Explicitly logged the required **Status: 200 OK** message to the terminal and returned proper HTTP status codes (`200`, `400`, `500`) to the client.

*(Insert screenshot of your terminal showing:)*
```text
Server running on http://localhost:3000
New subscriber: negipranav18@gmail.com
Email API response Status: 200 OK
Email sent successfully: { id: '...' }
```

---

## 3. GitLab Repository
- **Repository URL**: `https://gitlab.com/chitkara-university3/task-p2`
- **Visibility**: Internal
- Includes `.gitignore` ignoring `node_modules/` and `.env`.

---

## 4. Video Walkthrough Link
- **Video Link**: *(Insert your 2–4 minute Panopto / YouTube walkthrough link)*
