# 🚀  Getting Started with Cypress Automation
## 📦 Prerequisites
Make sure you have the following installed:

[Node.js](https://nodejs.org/en) (version 14 or above)
[npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### ⚙️ Installation
1. Clone the repository:
```bash 
git clone https://github.com/tyohimawan/Cypress-Demo-QA/
cd your-repo-name
```

2. Install dependencies: Using npm:

```bash
npm install
```

Or using Yarn:

``` bash
yarn install
```

### 🧪 Running Tests Locally
1. Run Cypress in headless mode:
```bash
npx cypress run
```
Or:

```bash
yarn cypress run
```

2. Run Cypress in interactive mode (Cypress Test Runner):

```bash
npx cypress open
```
This will launch the Cypress GUI where you can select and run tests interactively.

### ⚡ Additional Commands
Run specific test file:

``` bash
npx cypress run --spec "cypress/e2e/your-test-file.cy.js"
```

Run tests in a specific browser:

```bash
npx cypress run --browser chrome
```