# GitHub Setup Guide - Asri Lucky Strike Garage

Complete step-by-step instructions for uploading your project to GitHub and cloning it back using the command line.

---

## Part 1: Upload Project to GitHub

### Step 1: Initialize Git Repository Locally
Open your terminal/PowerShell in the project directory and run:

```bash
git init
```

This creates a `.git` folder and initializes your local repository.

---

### Step 2: Add All Files to Git
Stage all files for commit:

```bash
git add .
```

This prepares all files to be committed to version control.

---

### Step 3: Create Your First Commit
Commit the files with a message:

```bash
git commit -m "Initial commit: Asri Lucky Strike Garage project setup"
```

This creates a snapshot of your project with a descriptive message.

---

### Step 4: Create a Repository on GitHub
1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon in the top-right corner
3. Select **New repository**
4. Enter repository name: `asriluckystrikegarage` (or your preferred name)
5. Add a description (optional): "Asri Lucky Strike Garage web application"
6. Choose **Public** or **Private**
7. **Do NOT** initialize with README, .gitignore, or license (you have these locally)
8. Click **Create repository**

---

### Step 5: Add Remote Repository
Link your local repository to GitHub (replace `YOUR_GITHUB_USERNAME` with your actual username):

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/asriluckystrikegarage.git
```

Or if using SSH (requires SSH key setup):

```bash
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/asriluckystrikegarage.git
```

---

### Step 6: Rename Branch to Main (if needed)
If your default branch is `master`, rename it to `main`:

```bash
git branch -M main
```

---

### Step 7: Push to GitHub
Upload your code to GitHub:

```bash
git push -u origin main
```

The `-u` flag sets the upstream branch and allows future pushes with just `git push`.

---

### Step 8: Verify
Visit `https://github.com/YOUR_GITHUB_USERNAME/asriluckystrikegarage` to confirm your code is on GitHub.

---

## Part 2: Clone Project from GitHub

### Step 1: Navigate to Desired Directory
Open PowerShell/Terminal and go to where you want to clone the project:

```bash
cd C:\path\to\your\projects
```

---

### Step 2: Clone the Repository
Use HTTPS (easiest):

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/asriluckystrikegarage.git
```

Or use SSH (requires SSH keys configured):

```bash
git clone git@github.com:YOUR_GITHUB_USERNAME/asriluckystrikegarage.git
```

This creates a folder named `asriluckystrikegarage` with all the project files.

---

### Step 3: Navigate to Project Folder
Move into the cloned directory:

```bash
cd asriluckystrikegarage
```

---

### Step 4: Install Dependencies
Install Node.js packages from `package.json`:

```bash
npm install
```

---

### Step 5: Start Development Server
Run the Next.js development server:

```bash
npm run dev
```

The application will typically be available at `http://localhost:3000`

---

## Common Git Commands for Future Updates

### Check Repository Status
```bash
git status
```

### Add and Commit Changes
```bash
git add .
git commit -m "Your commit message here"
```

### Push Changes to GitHub
```bash
git push
```

### Pull Latest Changes from GitHub
```bash
git pull
```

### View Commit History
```bash
git log --oneline
```

### Create a New Branch
```bash
git checkout -b feature-branch-name
```

### Switch Branches
```bash
git checkout main
```

---

## Troubleshooting

### "Permission denied (publickey)" - SSH Issue
Use HTTPS instead of SSH, or [set up SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

### "Authentication failed" - Username/Password Issue
Use a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-data-secure-backing-up-your-data/creating-a-personal-access-token) instead of your password with HTTPS.

### "Rejected: Updates rejected because the tip of your current branch is behind its remote counterpart"
You have changes on GitHub that aren't local. Pull first:
```bash
git pull
```

---

## .gitignore Note
Your project likely has a `.gitignore` file that prevents certain files (like `node_modules/`, `.next/`, environment variables) from being uploaded to GitHub. This is intentional and reduces repository size.

---

## Additional Resources
- [GitHub CLI Documentation](https://cli.github.com/)
- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
