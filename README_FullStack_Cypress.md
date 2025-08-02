# Full-Stack Automated Testing Setup (React + Node.js + Cypress)

This guide provides instructions to set up and run Cypress UI automation tests for a full-stack application with:

- **Frontend**: React (`demo_react/`)
- **Backend**: Node.js  + SQLite (`demo-node-api/`)
- **Automation**: Cypress (`cypress-dotnet-login/`)

---

## Prerequisites

Make sure you have the following installed:

- [Node.js (v16+)](https://nodejs.org/)
- npm (comes with Node.js)
- Git (optional, for cloning)

---

##  1. Setup Instructions

### Backend (Node.js + SQLite)

```bash
cd demo_node_api/demo-node-api
npm install
npm start
```

Server should run at: `http://localhost:5000` or configured port

---

### Frontend (React)

```bash
cd demo_react/demo_react
npm install
npm start
```

App runs at: `http://localhost:3000`

---

### Cypress Tests

```bash
cd cypress-dotnet-login
npm install
```

---

##  Run Cypress Tests

### Headless (CI/Terminal Mode)

```bash
npx cypress run
```

### GUI (Interactive Mode)

```bash
npx cypress open
```

---

##  3. View Reports

After tests run:

- HTML Report: `cypress/reports/index.html`
- Screenshots: `cypress/screenshots/`
- Videos: `cypress/videos/`
- new reports can only b overriden by runnig following commands
```bash
npx cypress run
```
- Open report from: `cypress/reports/index.html` 
---

## Recommended Folder Structure

```
.
├── demo_node_api/
│   └── demo-node-api/       # Node backend
├── demo_react/
│   └── demo_react/          # React frontend
└── cypress-dotnet-login/    # Cypress automation
```

---

## Postman Collection

1. Open Postman
2. Import the collection:
   - Click **Import**
   - Upload the `.json` file (Postman Collection v2.1)
3. Set the base URL (e.g., `http://localhost:5000`)  directly in requests
4. Run individual or all requests via **Collection Runner**

## Notes

- Ensure backend and frontend are running before launching Cypress tests.
- Modify base URLs in `cypress.config.js` if ports are different.


