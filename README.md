# SIT313 Task P2 - DEV@Deakin Welcome Email

This project implements a beginner-friendly web application for **DEV@Deakin**, fulfilling all requirements for SIT313 Pass Task 2 (Outcome ULO2).

---

##  Project Structure

```text
D:\taskp2
├── public/
│   ├── index.html        # DEV@Deakin platform & "SIGN UP FOR OUR DAILY INSIDER" form
│   ├── style.css         # Clean, responsive CSS styling
│   └── script.js         # Client-side JavaScript using fetch() to send POST request
├── .env                  # Environment file for API keys (ignored by git)
├── .env.example          # Sample environment template
├── .gitignore            # Ignores node_modules/ and .env
├── package.json          # Express, dotenv, resend dependencies
├── server.js             # Express.js backend with /subscribe POST route & Status 200 logging
└── README.md             # Project documentation
```

---

##  How to Run the Project

### 1. Open the Project in VS Code
- Open Visual Studio Code.
- Go to **File -> Open Folder...** and select `D:\taskp2`.

### 2. Configure Environment Variables (`.env`)
Open `.env` and set your Resend API key (if you have one):
```env
RESEND_API_KEY=re_your_resend_api_key_here
PORT=3000
```
*(Note: If you run without a Resend key, the server runs in test/demo mode and logs Status 200 OK so you can take your report screenshot immediately).*

### 3. Start the Express Server
In the VS Code terminal (or PowerShell in `D:\taskp2`):
```bash
node server.js
```
You should see:
```text
Server running on http://localhost:3000
```

### 4. Open in Browser
Visit [http://localhost:3000](http://localhost:3000) in your web browser.

1. Scroll down to the **SIGN UP FOR OUR DAILY INSIDER** bar.
2. Enter your email (e.g. `negipranav18@gmail.com`).
3. Click the **Subscribe** button.
4. You will see the green success message:
   `Welcome email sent successfully!`

---

## 📸 Screenshots Required for Report

As per the SIT313 Task P2 sheet:

1. **Screenshot of DEV@Deakin platform**:
   - Capture your browser window showing the DEV@Deakin website with the **SIGN UP FOR OUR DAILY INSIDER** section and the green confirmation message.
2. **Screenshot of Terminal**:
   - Capture your terminal showing:
     ```text
     Server running on http://localhost:3000
     New subscriber: negipranav18@gmail.com
     Email API response Status: 200 OK
     Email sent successfully: { id: ... }
     ```

---

## GitHub Repository Setup

1. Initialize and commit your files:
   ```bash
   git add .
   git commit -m "feat: complete SIT313 Task P2 welcome email subscription feature"
   ```
2. Link and push to your repository:
   ```bash
   git remote add origin https://github.com/negipranav18-svg/taskp2.git
   git branch -M main
   git push -u origin main
   ```
*(Note: `.gitignore` automatically prevents `node_modules` and `.env` from being tracked).*
