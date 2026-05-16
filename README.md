# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





-------------------------------------------------------------------------------------------------------------------------------

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
└── vite.config.js          # Unified bundler configuration integrating React and Tailwind
compilers


💻 Step-by-Step Local Deployment Runbook
Follow this precise execution runbook to spin up, configure, analyze, and build this architecture within your local workspace environment:

Prerequisites
* Environment must have Node.js installed (v18.0.0 or higher recommended for optimal Vite 8 stability).

* Terminal access with npm package manager capabilities.

Step 1: Provision the Local Workspace Directory
Clone the mainline repository from GitHub and move directly into the initialized project root path:

git clone [https://github.com/farazii1159/faraz-portfolio-cicd.git](https://github.com/farazii1159/faraz-portfolio-cicd.git)

cd faraz-portfolio-cicd


Step 2: Initialize Git Environment
(If setting up a fresh repository from scratch instead of cloning)
Initialize the hidden .git/ metadata tracker, stage workspace modifications, commit the baseline delta, link your upstream system, and push to production:

git init
git add .
git commit -m "feat: infrastructure baseline setup"
git branch -M main
git remote add origin [https://github.com/farazii1159/faraz-portfolio-cicd.git](https://github.com/farazii1159/faraz-portfolio-cicd.git)
git push -u origin main


Step 3: Fetch and Install Node modules (Dependencies)
Execute the node package manager routine to pull all third-party layers mapped inside the project manifests into the local node_modules/ directory:

npm install


Step 4: Boot Up the Local Infrastructure (Dev Server)
Launch the reactive development node. This mounts an ephemeral web cluster running native Hot Module Replacement (HMR) systems for rapid live testing:

npm run dev

* Output Access: Point your web browser engine to the generated local endpoint: http://localhost:5173


Step 5: Run Static Code Analysis & Linting
Scan the codebase against configuration strictures to flag semantic runtime issues, syntax anomalies, and style compliance mismatches defined within eslint.config.js:


npm run lint


Step 6: Compile Production-Ready Assets
Execute the native build sequence to run structural tree-shaking optimizations, combine module graphs, minimize assets, and compress definitions into a clean distribution layout:


npm run build


* The built output will materialize inside an isolated, production-grade dist/ workspace folder.


Step 7: Local Production Simulation (Preview Mode)
Instantiate a local preview server wrapping the newly compiled distribution build to confirm edge-delivery simulation before firing pipeline webhooks:


npm run preview


🌐 GitOps Pipeline & Continuous Deployment Strategy

This architecture completely abandons manual provisioning or arbitrary zip file transfers in favor of an automated, webhook-driven Continuous Deployment (CD) engine integrated with global cloud edge servers via Vercel.

The Automated Build-to-Deploy Pipeline Lifecycle:


 [ Developer Workspace ] --( Git Push )--> [ GitHub Repository ] --( Webhook Trigger )--> [ Vercel Cloud Build Agent ] --> [ Global Edge Networks ]


1. Local Integrity Loop: Code modifications are iteratively tested inside the local dev cluster. Running npm run lint guarantees strict quality and system syntax consistency before any code pushes.

2. Mainline Git Upstream Push: Verified incremental adjustments are pushed directly to the remote GitHub version tracking branch:

git add .
git commit -m "refactor: optimize core component maps and responsive viewports"
git push origin main

3. Automated Webhook Intercept: The instant a commit reaches the tracking engine, GitHub fires a secure webhook event to Vercel's orchestration infrastructure.

4. Cloud Agent Build Execution: Vercel automatically provisions a containerized cloud runtime agent, pulls the updated mainline commit, targets the node environment dependencies, and executes the production compiler script:

npm run build


5. Global Edge Routing Propagation: Upon build completion, Vercel maps the static production output files (dist/) directly across its highly available global CDN edge network, instantly serving live performance updates globally with zero human manual overhead.

🤝 Professional Inquiries & Collaboration

If you are looking for an engineer equipped to manage codebase velocity while maintaining stable, highly-automated deployment pipelines, let's connect:

* Live Portfolio Showcase: https://www.google.com/url?sa=E&source=gmail&q=https://faraz-devops-portfolio-rknq.vercel.app

* LinkedIn Professional Network: https://www.linkedin.com/in/faraz-shabbir-5a9227344/

* GitHub Code Repositories: https://github.com/farazii1159