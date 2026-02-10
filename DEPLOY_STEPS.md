# 🚀 Quick Deployment Steps

Follow these exact steps to deploy your portfolio to GitHub:

---

## Step 1: Create GitHub Repository

1. Open your browser and go to: https://github.com/new
2. Fill in:
   - **Repository name:** `portfolio`
   - **Description:** "Personal portfolio website - 3rd year CSE student"
   - **Public** (selected)
   - **DO NOT** check "Add a README file"
3. Click **"Create repository"**

---

## Step 2: Open Terminal in Your Portfolio Folder

Open Command Prompt or PowerShell in your portfolio folder.

---

## Step 3: Run These Commands One by One

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Complete portfolio website"

# Add your GitHub repository (REPLACE 'portfolio' if you used a different name)
git remote add origin https://github.com/SanjayShrish788/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** You may be asked to login to GitHub. Use your GitHub credentials.

---

## Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

Wait for the deployment to complete (1-2 minutes).

---

## Step 5: Enable GitHub Pages

1. Go to: https://github.com/SanjayShrish788/portfolio/settings/pages
2. Under **"Source"**, you should see:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. If not already selected, select them and click **Save**

---

## Step 6: Access Your Live Portfolio

Your portfolio will be live at:

```
https://SanjayShrish788.github.io/portfolio
```

**Note:** It may take 2-5 minutes for the site to go live after first deployment.

---

## 🎉 That's It!

Your portfolio is now live on the internet!

### Share Your Portfolio:
- Add to LinkedIn profile
- Include in resume
- Share in internship applications
- Use for hackathon profiles

---

## 🔄 To Update Your Portfolio Later

Whenever you make changes:

```bash
# Save changes
git add .
git commit -m "Update: describe your changes"
git push origin main

# Deploy updated version
npm run deploy
```

---

## ⚠️ Troubleshooting

### If git push asks for credentials:
- Use your GitHub username
- For password, use a **Personal Access Token** (not your GitHub password)
- Create token at: https://github.com/settings/tokens

### If deployment fails:
```bash
# Try building first
npm run build

# If build succeeds, try deploy again
npm run deploy
```

### If page shows 404:
- Wait 5 minutes and refresh
- Check GitHub Pages settings
- Make sure `gh-pages` branch exists

---

## 📞 Need Help?

If you get stuck:
1. Check the error message carefully
2. Make sure you're in the correct folder
3. Verify your GitHub repository name matches
4. Try the commands one at a time

---

**Good luck! 🚀**
