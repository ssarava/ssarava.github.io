# Complete Deployment Guide

## GitHub Pages Deployment with Custom Domain

### Prerequisites
- GitHub account
- Domain name (shashankarava.io)
- Git installed on your computer
- Node.js and npm installed

---

## Part 1: Initial Setup

### 1. Prepare the Project

```bash
# Navigate to your project
cd portfolio-site

# Install dependencies
npm install

# Test locally
npm start
```

Visit http://localhost:3000 to ensure everything works.

---

## Part 2: GitHub Repository Setup

### 1. Create GitHub Repository

Option A: Use GitHub username repository (recommended)
- Repository name: `yourusername.github.io`
- This will be accessible at `https://yourusername.github.io`

Option B: Use a custom repository name
- Repository name: `portfolio` (or any name)
- This will be accessible at `https://yourusername.github.io/portfolio`

### 2. Initialize Git and Push

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/your-repo.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Part 3: Deploy to GitHub Pages

### 1. Update package.json

If using Option A (username.github.io):
```json
"homepage": "https://yourusername.github.io"
```

If using Option B (custom repo name):
```json
"homepage": "https://yourusername.github.io/repository-name"
```

### 2. Deploy

```bash
# Build and deploy
npm run deploy
```

This command will:
1. Create an optimized production build
2. Create/update the `gh-pages` branch
3. Push the build to GitHub

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

Wait a few minutes, then visit `https://yourusername.github.io/your-repo/`

---

## Part 4: Custom Domain Setup (shashankarava.io)

### 1. Configure DNS at Domain Registrar

Log in to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)

#### A Records (for apex domain)
Add these A records for `shashankarava.io`:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

#### CNAME Record (for www subdomain)
```
Type: CNAME
Name: www
Value: yourusername.github.io.
```

**Note:** Don't forget the trailing dot in the CNAME value!

### 2. Configure Custom Domain in GitHub

1. Go to repository **Settings** > **Pages**
2. Under **Custom domain**, enter: `shashankarava.io`
3. Click **Save**
4. Wait for DNS check (can take a few minutes)
5. Once verified, check **Enforce HTTPS**

### 3. Verify CNAME File

The CNAME file is already in `public/CNAME` with content:
```
shashankarava.io
```

If you need to change it:
```bash
echo "yourdomain.com" > public/CNAME
git add public/CNAME
git commit -m "Update CNAME"
git push
npm run deploy
```

### 4. DNS Propagation

DNS changes can take 24-48 hours to propagate globally. Check status:

```bash
# Check A records
dig shashankarava.io

# Check CNAME
dig www.shashankarava.io

# Or use online tools
# https://dnschecker.org
```

---

## Part 5: Testing Your Deployment

### After GitHub Pages Deployment

1. Visit `https://yourusername.github.io/your-repo/`
2. Check that all pages load correctly
3. Test navigation links
4. Check responsiveness on mobile

### After Custom Domain Setup

1. Visit `https://shashankarava.io`
2. Visit `https://www.shashankarava.io` (should redirect)
3. Verify HTTPS is working (green padlock)
4. Test on multiple devices

---

## Part 6: Making Updates

### Update Content

1. Edit files in `src/data/portfolioData.js`
2. Test locally: `npm start`
3. Commit and deploy:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
npm run deploy
```

### Update Styling

1. Edit `src/App.css`
2. Test locally
3. Deploy as above

---

## Troubleshooting

### Issue: 404 Page Not Found

**Solution:**
- Verify `homepage` in `package.json` matches your GitHub Pages URL
- Check that `gh-pages` branch exists
- Ensure GitHub Pages is enabled in Settings

### Issue: Custom Domain Not Working

**Solution:**
- Check DNS settings at registrar
- Verify A and CNAME records are correct
- Wait for DNS propagation (up to 48 hours)
- Check CNAME file in repository
- Verify custom domain in GitHub Settings

### Issue: HTTPS Certificate Error

**Solution:**
- Wait for GitHub to provision SSL certificate (can take up to 24 hours)
- Ensure DNS is properly configured
- Try unchecking and rechecking "Enforce HTTPS" in settings

### Issue: Site Loads But Images Are Broken

**Solution:**
- Use relative paths, not absolute paths
- Verify all image URLs in `portfolioData.js`
- Check browser console for errors
- Ensure images are accessible

### Issue: Styles Not Loading

**Solution:**
- Clear browser cache (Ctrl + Shift + R)
- Check `homepage` field in `package.json`
- Verify build was successful: `npm run build`
- Check browser console for CSS errors

---

## DNS Configuration Examples

### GoDaddy
1. Go to DNS Management
2. Add Records as listed above
3. Save changes
4. Wait 10-60 minutes for propagation

### Namecheap
1. Go to Advanced DNS
2. Add A Records with GitHub IPs
3. Add CNAME record for www
4. Save all changes

### Google Domains
1. Go to DNS settings
2. Select "Custom name servers" or "Use default name servers"
3. Add Custom resource records
4. Add A and CNAME records as specified

---

## Maintenance

### Regular Updates

```bash
# Keep dependencies updated
npm update

# Check for security issues
npm audit

# Fix security issues
npm audit fix
```

### Backup

Always keep your source code in GitHub:
```bash
git add .
git commit -m "Backup: [date]"
git push origin main
```

---

## Quick Reference Commands

```bash
# Local development
npm start

# Build for production
npm build

# Deploy to GitHub Pages
npm run deploy

# Update and redeploy
git add .
git commit -m "Your message"
git push origin main
npm run deploy
```

---

## Support Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS Configuration Help](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

---

**Congratulations! Your portfolio is now live! 🎉**
