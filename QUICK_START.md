# Quick Start Guide

Get your portfolio running in 5 minutes!

## Step 1: Install Dependencies (2 minutes)

```bash
cd portfolio-site
npm install
```

## Step 2: Customize Your Content (2 minutes)

Edit `src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Your Name",              // Change this
  title: "Your Title",            // Change this
  subtitle: "Your tagline",       // Change this
  bio: "Your bio...",            // Change this
  email: "your@email.com",        // Change this
  location: "Your Location",      // Change this
  resume: "/resume.pdf"
};

export const socialLinks = {
  github: "https://github.com/yourusername",      // Change this
  linkedin: "https://linkedin.com/in/yourusername", // Change this
  twitter: "https://twitter.com/yourusername",     // Change this
  email: "mailto:your@email.com"                   // Change this
};
```

## Step 3: Test Locally (1 minute)

```bash
npm start
```

Opens at http://localhost:3000

---

## Optional: Customize Colors

Edit the CSS variables in `src/App.css` (around line 11):

```css
:root {
  --primary-color: #6366f1;      /* Main color */
  --secondary-color: #8b5cf6;    /* Secondary color */
  --accent-color: #ec4899;       /* Accent color */
  /* ... */
}
```

Popular color schemes:
- **Blue**: `#3b82f6` `#2563eb` `#1d4ed8`
- **Green**: `#10b981` `#059669` `#047857`
- **Purple**: `#8b5cf6` `#7c3aed` `#6d28d9`
- **Orange**: `#f97316` `#ea580c` `#c2410c`

---

## Deploy to GitHub Pages

### Quick Deploy (3 commands)

```bash
# 1. Initialize git
git init
git add .
git commit -m "Initial commit"

# 2. Create GitHub repo and add remote
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main

# 3. Deploy
npm run deploy
```

### Enable GitHub Pages

1. Go to your repo → Settings → Pages
2. Source: `gh-pages` branch
3. Save
4. Visit: `https://yourusername.github.io/your-repo/`

---

## Add Custom Domain

### 1. Update package.json

```json
"homepage": "https://yourdomain.com"
```

### 2. Configure DNS at Your Domain Registrar

Add these A records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Add CNAME record:
```
www → yourusername.github.io.
```

### 3. Add Custom Domain in GitHub

Settings → Pages → Custom domain → Enter `yourdomain.com` → Save

---

## Need Help?

- Full docs: See `README.md`
- Deployment: See `DEPLOYMENT_GUIDE.md`
- Issues: Check the Troubleshooting section

---

**That's it! You're ready to go! 🚀**
