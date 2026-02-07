# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, featuring a clean design with smooth animations and an elegant dark theme.

## 🌟 Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Theme**: Easy on the eyes with a sophisticated dark color scheme
- **Smooth Navigation**: Seamless scrolling between sections
- **Project Showcase**: Beautiful grid layout for displaying projects
- **Experience Timeline**: Professional timeline view of work history
- **Interactive Elements**: Hover effects and transitions throughout
- **Optimized Performance**: Fast loading and smooth interactions

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Extract the project files or clone the repository
2. Navigate to the project directory:
   ```bash
   cd portfolio-site
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 🎨 Customization

### Personal Information

Edit `src/data/portfolioData.js` to customize:

- Personal information (name, title, bio)
- Social media links
- Skills and technologies
- Projects and their details
- Work experience
- Contact information

### Styling

Modify `src/App.css` to customize:

- Color scheme (CSS variables at the top)
- Fonts and typography
- Layout and spacing
- Animations and transitions

### Components

Individual components are located in `src/components/`:

- `Navbar.js` - Navigation bar
- `Hero.js` - Landing section
- `About.js` - About section
- `Skills.js` - Skills showcase
- `Projects.js` - Project cards
- `Experience.js` - Work timeline
- `Contact.js` - Contact section
- `Footer.js` - Footer

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

The build folder will contain the optimized files ready for deployment.

## 🌐 Deploying to GitHub Pages

### Step 1: Prepare Your Repository

1. Create a new repository on GitHub (e.g., `username.github.io` or any name)
2. Initialize git in your project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. Add your GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to GitHub Pages

1. Install gh-pages (already in devDependencies):
   ```bash
   npm install --save-dev gh-pages
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

   This will:
   - Build your project
   - Create/update the `gh-pages` branch
   - Push the build files to GitHub Pages

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source", select the `gh-pages` branch
4. Click Save

Your site will be available at `https://yourusername.github.io/your-repo-name/`

### Step 4: Set Up Custom Domain (shashankarava.io)

1. **Purchase your domain** from a domain registrar (GoDaddy, Namecheap, Google Domains, etc.)

2. **Configure DNS settings** at your domain registrar:
   
   Add the following A records:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   
   Add a CNAME record:
   ```
   www  ->  yourusername.github.io
   ```

3. **Configure GitHub Pages for custom domain**:
   - Go to your repository Settings > Pages
   - Under "Custom domain", enter: `shashankarava.io`
   - Click Save
   - Check "Enforce HTTPS" (after DNS propagates, usually 24-48 hours)

4. **The CNAME file** is already included in the `public` folder with `shashankarava.io`

5. **Wait for DNS propagation** (can take up to 48 hours)

Your site will be accessible at `https://shashankarava.io`

## 📁 Project Structure

```
portfolio-site/
├── public/
│   ├── CNAME              # Custom domain configuration
│   ├── index.html         # HTML template
│   └── manifest.json      # PWA manifest
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── data/
│   │   └── portfolioData.js  # Portfolio content
│   ├── App.js             # Main App component
│   ├── App.css            # Main styles
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🛠️ Technologies Used

- **React** - UI library
- **React Icons** - Icon library
- **CSS3** - Styling with custom properties
- **GitHub Pages** - Hosting

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🎯 Tips for Customization

1. **Add Your Own Images**: Replace project images in `portfolioData.js` with your own
2. **Update Colors**: Modify CSS variables in `App.css` for a different color scheme
3. **Add More Sections**: Create new components and import them in `App.js`
4. **Animations**: Explore Framer Motion for advanced animations
5. **SEO**: Update meta tags in `public/index.html` for better SEO

## 🐛 Troubleshooting

### GitHub Pages shows 404

- Make sure the `gh-pages` branch exists
- Check that GitHub Pages is enabled in repository settings
- Verify the `homepage` field in `package.json`

### Custom domain not working

- Check DNS settings at your domain registrar
- Wait for DNS propagation (up to 48 hours)
- Verify CNAME file exists in the `public` folder
- Check that "Enforce HTTPS" is enabled in GitHub Pages settings

### Styling issues after deployment

- Clear your browser cache
- Make sure all paths are relative (no absolute paths)
- Check the browser console for errors

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

**Built with ❤️ using React**
