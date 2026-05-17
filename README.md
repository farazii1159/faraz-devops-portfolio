# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





--------------------------------------------------------------------------------------------------------------------------

# 🚀 Production-Grade DevOps Portfolio Architecture

Welcome to the comprehensive engineering repository of my professional DevOps Portfolio website. This platform is strategically engineered to demonstrate production-ready frontend practices, modern build bundlers, interactive component pipelines, automated vector rendering, live API matrix interfaces, and seamless GitOps-driven cloud deployment workflows.

🔗 **Live Production URL:** [faraz-devops-portfolio-rknq.vercel.app](https://faraz-devops-portfolio-rknq.vercel.app)

---

## 🛠️ Architecture & Tech Stack Core

### 1. High-Performance Build Engine
* **Framework:** React 19 (Functional component primitives utilizing hooks for optimized state tree synchronization).

* **Bundler & Dev Server:** Vite 8 (Engineered with Hot Module Replacement [HMR] for ultra-fast local feedback loops).

* **Styling & Compilation Engine:** Tailwind CSS v4.0 (Utilizing the next-gen `@tailwindcss/vite` native plug-in architecture for lightning-fast compilation directly inside the build pipeline).

* **Animation Pipeline:** Framer Motion (Leveraged for hardware-accelerated, fluid rendering of infrastructure stages).

### 2. Specialized Component Engineering
* **`Pipeline.jsx` (Interactive CI/CD Layer):** Visualizes the continuous integration, testing, and multi-environment deployment lifecycles using structured stage animation nodes.

* **`GitHubStats.jsx` (Live REST API Grid):** Intersects with the public GitHub REST API layer to dynamically poll and display real-time contribution profiles, public repository metrics, and community engagement data.

* **`Resume.jsx` (On-Demand Vector Compiler):** Integrates client-side canvas processing via `html2canvas` and `jsPDF` to compile complex DOM tree models directly into accurate, pixel-perfect A4 vector-rendered standard resumes.

* **`HireMeSection.jsx` (Form Routing Engine):** Form handling integrated with instant client-side mailto orchestration logic.

---

## 📂 Repository Directory Layout

The workspace utilizes a highly-optimized flat component structure inside the source matrix to eliminate unnecessary multi-hop import overhead, perfectly mapped to the active VS Code workspace tree:

```text
faraz-portfolio-cicd/
├── .git/                   # Local Git Repository Version Control Metadata
├── .github/                # GitHub Automation Framework
│   └── workflows/          # CI/CD Pipeline Definitions
│       └── deploy.yml      # GitHub Actions Vercel Production Deployment Runbook
├── node_modules/           # Installed Project Artifacts & Vendor Dependencies
├── public/                 # Static Global Web Assets
│   ├── favicon.svg         # High-resolution tab display brand icon
│   └── icons.svg           # Scalable core graphics matrix
├── src/                    # Source Code Matrix
│   ├── assets/             # Layout vectors and graphic badges
│   │   ├── hero.png        # Terminal workspace visual dashboard representation
│   │   ├── react.svg       # React framework branding asset
│   │   └── vite.svg        # Vite environment reference logo
│   ├── App.css             # Component layout custom style overrides
│   ├── App.jsx             # Application root layout & interactive shell core
│   ├── GitHubStats.jsx     # Live GitHub REST API interface component
│   ├── HireMeSection.jsx   # Contact logic routing engine component
│   ├── index.css           # Global typography & Tailwind configuration directives
│   ├── main.jsx            # DOM entry initialization with StrictMode
│   ├── Pipeline.jsx        # Framer-motion driven CI/CD workflow component
│   └── Resume.jsx          # Client-side PDF builder engine component
│
├── .gitignore              # Engine instructions to exclude ephemeral vendor files from Git index
├── eslint.config.js        # Strict code quality, syntactic rules, and static analysis assurance
├── index.html              # Main application single-page landing DOM gate
├── package-lock.json       # Deterministic lock-file mapping absolute dependency trees
├── package.json            # Node project dependency manifests & lifecycle target scripts
└── vite.config.js          # Unified bundler configuration integrating React and Tailwind compilers
```
###############################################################################################################

💻 Step-by-Step Local Deployment Runbook
Follow this precise execution runbook to spin up, configure, analyze, and build this architecture within your local workspace environment:

Prerequisites
* Environment must have Node.js installed (v18.0.0 or higher recommended for optimal Vite 8 stability).

* Terminal access with npm package manager capabilities.

Step 1: Provision the Local Workspace Directory
Clone the mainline repository from GitHub and move directly into the initialized project root path:

```
git clone https://github.com/farazii1159/faraz-devops-portfolio.git

cd faraz-portfolio-cicd

```
Step 2: Fetch and Install Node modules (Dependencies)
Execute the node package manager routine to pull all third-party layers mapped inside the project manifests into the local node_modules/ directory:
```
npm install

```
Step 3: Boot Up the Local Infrastructure (Dev Server)
Launch the reactive development node. This mounts an ephemeral web cluster running native Hot Module Replacement (HMR) systems for rapid live testing:
```
npm run dev
```
* Output Access: Point your web browser engine to the generated local endpoint: http://localhost:5173


Step 4: Run Static Code Analysis & Linting
Scan the codebase against configuration strictures to flag semantic runtime issues, syntax anomalies, and style compliance mismatches defined within eslint.config.js:
```

npm run lint

```
Step 5: Compile Production-Ready Assets
Execute the native build sequence to run structural tree-shaking optimizations, combine module graphs, minimize assets, and compress definitions into a clean distribution layout:
```

npm run build

```
* The built output will materialize inside an isolated, production-grade dist/ workspace folder.


Step 6: Local Production Simulation (Preview Mode)
Instantiate a local preview server wrapping the newly compiled distribution build to confirm edge-delivery simulation before firing pipeline webhooks:
```

npm run preview

```
🌐 GitOps Pipeline & Continuous Deployment Strategy

This architecture completely abandons manual provisioning or arbitrary zip file transfers in favor of an automated, webhook-driven Continuous Deployment (CD) engine integrated with global cloud edge servers via Vercel and GitHub Actions.
```

[ Code Commit ] ──> [ Git Push (main) ] ──> [ GitHub Actions Runner ] ──> [ Installs Vercel CLI ] ──> [ Production Deployment Live ]

```
Secret Key Management Configuration:

To connect GitHub secure runners with your hosted Vercel infrastructure safely without hardcoding any credentials, the connection was bridged via encrypted repository tokens:

Generated a secure Personal Access Token on the Vercel Dashboard named ```faraz-portfolio-project-token.```

Created an encrypted secret within the GitHub Repository Settings named exactly``` VERCEL_TOKEN ```and assigned the generated token value to it.

Pipeline Execution Definition (deploy.yml):
Whenever code is pushed directly to the main branch, the automated runner fires up an ubuntu-latest node virtual machine instance and securely processes these declarative stages:

```
name: DevOps CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install Dependencies
        run: npm install

      - name: Build Application
        run: npm run build

      - name: Install Vercel CLI
        run: npm install -g vercel

      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: vercel --prod --yes --token $VERCEL_TOKEN

```
How to Trigger and Push Updates:

To run the pipeline and update the live site instantly from your terminal environment, execute the following native version control sequences:

```

git init
git add .
git commit -m "feat: integrate enterprise github actions cicd workflow with vercel cli"
git branch -M main
git remote add origin [https://github.com/farazii1159/faraz-devops-portfolio.git](https://github.com/farazii1159/faraz-devops-portfolio.git)
git push -u origin main

---
```
## 🛠️ Automated Post-Push Execution Lifecycle (Behind the Scenes)

Once the terminal execution command `git push origin main` completes successfully, the architecture transitions away from manual oversight. The underlying infrastructure automatically orchestrates the live build and delivery process through four distinct runtime phases:

### 1. Webhook Intercept & Workflow Initialization

GitHub's tracking subsystem immediately detects the fresh delta push targeting the `main` operational branch. It matches the push signature against the repository's configuration framework and triggers the `.github/workflows/deploy.yml` operational blueprint. GitHub automatically provisions an isolated cloud computing runner instance (`ubuntu-latest`) to execute the pipeline lifecycle steps safely in an ephemeral container.

### 2. Live Job Execution Lifecycle

The running automated agent checks out the fresh mainline source files into its storage context, provisions a clean Node.js runtime cluster (pinned strictly to Version 22), and automatically processes the application's underlying ecosystem configurations via native system scripts:
* **Dependency Fetching:** Executes `npm install` to map the necessary package module trees inside the virtual instance.
* **Production Build Compilation:** Automatically fires `npm run build` to tree-shake, bundle, compress, and dump minified static assets inside a newly generated distribution target folder (`dist/`).

### 3. Vercel CLI Secure Token Authentication

The pipeline utilizes the encrypted repository credentials secret mapped inside your GitHub dashboard under **`VERCEL_TOKEN`**. The cloud workflow runtime agent securely calls this environment variable variable during execution, authenticating directly with the Vercel hosting system API gates without passing raw text string patterns, hardcoded parameters, or triggering interactive credential prompt hurdles.

### 4. Global Cloud Edge Production Rollout

The pipeline agent installs the universal Vercel CLI module tool globally inside the runtime execution stream and runs the absolute production flag sequence:
bash
vercel --prod --yes --token $VERCEL_TOKEN

The raw compiled distribution assets (dist/) are synchronized with Vercel's hosting cluster, bypassing old manual interface dashboards entirely. The cloud framework propagates the updated production layout over its highly available Global Edge Network (CDN), updating the live URL context instantly under 2 minutes with zero downtime.


🔍 Verifying Pipeline Logs & Deployment Health

To audit the real-time execution steps, catch potential compile defects, or confirm the structural integrity of your active deployment infrastructure:

1. GitHub Actions Matrix Monitoring: Access the Actions tab inside your remote GitHub repository dashboard interface to track step-by-step progress bars and trace command-line stdout outputs. A definitive green checkmark ($\checkmark$) marks a flawless workflow execution.
  
3. Integrated Deployment Tracker: Monitor the Deployments panel pinned directly to the right sidebar panel of the repository landing interface. This element actively signals tracking variables, mapping current states directly to live, stable releases on the edge.
```
```
🤝 Professional Inquiries & Collaboration
```
If you are looking for an engineer equipped to manage codebase velocity while maintaining stable, highly-automated deployment pipelines, let's connect:
```
* Live Portfolio Showcase: https://faraz-devops-portfolio-wqsc.vercel.app/

* LinkedIn Professional Network: https://www.linkedin.com/in/faraz-shabbir-5a9227344/

* GitHub Code Repositories: https://github.com/farazii1159
