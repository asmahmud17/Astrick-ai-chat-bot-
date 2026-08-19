# Anas Mahmud - Portfolio Website

Professional, minimal, and modern personal portfolio website for **Anas Mahmud** — Video Editing Learner, Graphic Design Learner & Digital Marketing Learner based in Dhaka, Bangladesh.

---

## 🚀 Features & Architecture

- **Framed for Creative Learners**: Honest messaging focusing on student status at As-Sunnah Skill Development Institute (SBMC — Small Business Management Course).
- **Black-Based Dark & Clean Light Theme**: Smooth theme switcher with persistent `localStorage` memory and `prefers-color-scheme` support.
- **Purple Accent Palette**: Inspired by the profile avatar with purple glow and gradient highlights.
- **Responsive Navigation & Mobile Menu**: Accessible drawer navigation with smooth section scrolling.
- **Form Validation & Anti-Spam Protection**: Client-side form validation with honeypot spam protection ready for Firebase or email service integration.
- **Privacy Policy & Terms and Conditions Modals**: Built-in modal dialogs for legal pages.
- **SEO Ready**: Configured with meta tags, Open Graph, Twitter cards, JSON-LD Person schema, `robots.txt`, and `sitemap.xml`.
- **Dual Deployment Ready**: Fully configured for automatic GitHub Pages deployment (via GitHub Actions) and Firebase Hosting.

---

## 📁 File Structure

```text
├── .env.example                # Sample environment variables
├── .firebaserc                 # Firebase project configuration
├── firebase.json               # Firebase Hosting configuration (SPA rewrite to dist)
├── index.html                  # Main entry point with SEO metadata & JSON-LD
├── metadata.json               # Platform applet configuration
├── package.json                # Dependencies and scripts
├── package-lock.json           # Deterministic lockfile for npm ci in CI/CD
├── vite.config.ts              # Vite configuration with dynamic base path support
├── public/
│   ├── robots.txt              # Search engine crawler permissions
│   └── sitemap.xml             # Sitemap specification
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
└── src/
    ├── App.tsx                 # Main layout component
    ├── index.css               # Global Tailwind CSS & custom theme styles
    ├── main.tsx                # React root entry
    ├── types.ts                # TypeScript interfaces for data models
    ├── context/
    │   └── ThemeContext.tsx    # Light/Dark mode state provider
    ├── data/
    │   └── portfolioData.ts    # Centralized data file (Edit text/links here!)
    └── components/
        ├── Navbar.tsx          # Navigation header with mode toggle
        ├── Hero.tsx            # Hero section with profile avatar & headlines
        ├── About.tsx           # Story bio & student info card
        ├── Skills.tsx          # Skills with beginner status indicators
        ├── Services.tsx        # Service cards with learner disclaimer
        ├── Experience.tsx      # Current Learning Experience section
        ├── Contact.tsx         # Contact form with validation & honeypot
        ├── Footer.tsx          # Responsive footer with social placeholders
        └── LegalModal.tsx      # Privacy Policy & Terms and Conditions modal
```

---

## 🛠️ How to Run Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The application will run on `http://localhost:3000`.

3. **Build Production Asset**:
   ```bash
   npm run build
   ```

4. **Lint Code**:
   ```bash
   npm run lint
   ```

---

## 🌐 Deploying to GitHub Pages

1. **Repository Settings**:
   - Go to your GitHub repository: `https://github.com/asmahmud17/ANAS-MAHMUD`
   - Navigate to: **Settings → Pages**
   - Under **Build and deployment → Source**, select: **GitHub Actions**
   - *(Do not select "Deploy from a branch")*

2. **Push to `main` Branch**:
   - The workflow inside `.github/workflows/deploy.yml` triggers automatically on pushes to `main`.
   - It builds the Vite app with the base path `/ANAS-MAHMUD/` and deploys the `dist/` directory to GitHub Pages.

---

## 🔥 Deploying with Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Log into Firebase**:
   ```bash
   firebase login
   ```

3. **Build and Deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

---

## 📝 How to Update Content Later

All personal content, skills, services, and learning experience details are centralized in **`/src/data/portfolioData.ts`**:

- **Update Profile Image**: Change `avatarUrl` in `personalInfo`.
- **Update Contact Email**: Replace `emailPlaceholder` (`YOUR_EMAIL@example.com`) in `personalInfo`.
- **Update Social Media Links**: Replace `url` fields and set `isPlaceholder: false` in `personalInfo.socials`.
- **Add or Modify Skills**: Edit items in the `skillsData` array.
- **Add or Modify Services**: Edit items in the `servicesData` array.

---

## 📌 Remaining Placeholders Requiring Your Information

- **Email Address**: Currently set to `YOUR_EMAIL@example.com`.
- **Social Media Links**: Facebook, Instagram, YouTube, LinkedIn, and Twitter links are currently set as inactive placeholders (`#`). Update them in `src/data/portfolioData.ts` when ready.
- **Custom Domain**: Configured placeholder `https://anasmahmudportfolio.com` in `index.html`, `robots.txt`, and `sitemap.xml`. Replace with your active domain when connected to Firebase Hosting or custom domain.
