# Portfolio Deployment Guide

## 🚀 Deploy to GitHub Pages

Follow these steps to deploy your portfolio to GitHub Pages:

---

## Step 1: Create a New GitHub Repository

1. Go to [GitHub](https://github.com/SanjayShrish788)
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Name:** `portfolio` (or `sanjay-portfolio`)
   - **Description:** "Personal portfolio website - 3rd year CSE student"
   - **Visibility:** Public
   - **DO NOT** initialize with README, .gitignore, or license
4. Click **"Create repository"**

---

## Step 2: Initialize Git in Your Project

Open your terminal in the portfolio folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Complete portfolio website"

# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/SanjayShrish788/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 3: Install GitHub Pages Package

```bash
npm install --save-dev gh-pages
```

---

## Step 4: Update package.json

Add these lines to your `package.json`:

```json
{
  "homepage": "https://SanjayShrish788.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

**Note:** Replace `portfolio` with your actual repository name if different.

---

## Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build your React app
2. Create a `gh-pages` branch
3. Deploy the build folder to GitHub Pages

---

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

---

## Step 7: Access Your Live Portfolio

Your portfolio will be live at:
```
https://SanjayShrish788.github.io/portfolio
```

**Note:** It may take 2-5 minutes for the site to go live after first deployment.

---

## 🔄 Updating Your Portfolio

Whenever you make changes:

```bash
# Save your changes
git add .
git commit -m "Update: description of changes"
git push origin main

# Deploy updated version
npm run deploy
```

---

## 📝 Alternative: Deploy to Vercel (Recommended)

Vercel is easier and faster than GitHub Pages:

### Option A: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? portfolio
# - Directory? ./
# - Override settings? No
```

### Option B: Using Vercel Website

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Click **"Deploy"**

**Your portfolio will be live at:** `https://portfolio-username.vercel.app`

---

## 📝 Alternative: Deploy to Netlify

### Using Netlify Website

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click **"Deploy site"**

**Your portfolio will be live at:** `https://random-name.netlify.app`

You can customize the domain name in Netlify settings.

---

## ⚙️ Environment Setup (If Needed)

If you need to add environment variables:

Create a `.env` file in your project root:
```
REACT_APP_EMAIL=s.sanjayshrish2005@gmail.com
REACT_APP_PHONE=+91-8073834489
```

**Note:** Never commit `.env` to GitHub. Add it to `.gitignore`.

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- ✅ All certificate images are in `public/certificates/`
- ✅ Resume PDF is in `public/`
- ✅ All links work (LinkedIn, GitHub, LeetCode)
- ✅ No console errors when running `npm start`
- ✅ Build succeeds: `npm run build`
- ✅ All personal information is correct
- ✅ GitHub username is correct in data file

---

## 🐛 Troubleshooting

### Issue: Blank page after deployment
**Solution:** Make sure `homepage` in `package.json` matches your GitHub Pages URL

### Issue: Images not loading
**Solution:** Images should be in `public/` folder and referenced with `/` prefix

### Issue: 404 on refresh
**Solution:** This is normal for GitHub Pages with React Router. Use HashRouter or add a 404.html redirect.

### Issue: Build fails
**Solution:** 
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🎯 Recommended Deployment Method

**For Students:** Use **Vercel** or **Netlify**
- ✅ Easier setup
- ✅ Automatic deployments on git push
- ✅ Better performance
- ✅ Free SSL certificate
- ✅ Custom domain support

**For GitHub Portfolio:** Use **GitHub Pages**
- ✅ Shows on your GitHub profile
- ✅ Free hosting
- ✅ Good for academic portfolios

---

## 📱 Share Your Portfolio

Once deployed, share your portfolio link on:
- LinkedIn profile
- Resume
- Email signature
- Internship applications
- Hackathon profiles

---

## 🔒 Security Notes

- Never commit sensitive data (API keys, passwords)
- Use environment variables for sensitive info
- Add `.env` to `.gitignore`
- Review all personal information before deploying

---

## 📞 Need Help?

If you encounter issues:
1. Check the build logs
2. Verify all file paths are correct
3. Test locally first: `npm run build` then `serve -s build`
4. Check GitHub Pages / Vercel / Netlify documentation

---

**Good luck with your deployment! 🚀**
