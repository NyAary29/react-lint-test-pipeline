# 🚀 React CI/CD Pipeline

## 📖 Overview
This project is a modern **React application** built with **Vite + TypeScript**, designed as a DevOps learning playground.

It integrates a complete **CI/CD pipeline using GitHub Actions**, ensuring:
- Code quality enforcement
- Automated testing
- Continuous integration
- Automated deployment to **GitHub Pages**

The goal is to simulate a production-ready frontend workflow.

---

## 🛠️ Tech Stack

- ⚛️ **React 19 + TypeScript** — UI framework with static typing
- ⚡ **Vite** — ultra-fast build tool and dev server
- 🧪 **Vitest** — unit testing framework
- 🧰 **Testing Library** — React component testing utilities
- 🧹 **ESLint** — static code analysis and best practices enforcement
- 🔁 **GitHub Actions** — CI/CD automation
- 🌐 **GitHub Pages** — static site hosting

---

## ⚙️ CI/CD Pipeline

The workflow is automatically triggered on:
- `push` to `main`
- `pull_request` targeting `main`

### 🔄 Pipeline stages

#### 1. 🧹 Lint
Ensures code quality and consistency using ESLint:
- Detects syntax issues
- Enforces coding standards
- Prevents bad practices before merging

#### 2. 🧪 Tests
Runs unit tests with Vitest:
- Validates component behavior
- Ensures regression safety
- Blocks deployment on failure

#### 3. 🏗️ Build
Builds the production-ready application using Vite:
- Optimized bundle generation
- TypeScript compilation check

#### 4. 🚀 Deploy
Automatically deploys the build to **GitHub Pages**:
- Triggered only on successful pipeline completion
- Ensures only validated code reaches production
