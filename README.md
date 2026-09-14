# 🎨 Klyvo App Official Website

Complete Landing Page & Showcase Website for **Klyvo - Expressive Colouring & Textured Texting App**, created by **Kush Mittal**.

---

## 📁 Project Structure

```
klyvo-website/
├── index.html                  # HTML entry point
├── package.json                # Dependencies (React 19, Vite, Tailwind CSS, Lucide React)
├── vite.config.js              # Vite configuration
├── README.md                   # Project documentation
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # Main application wrapper
    ├── index.css               # Tailwind CSS & Texture Glow utilities
    ├── config/
    │   └── klyvoWebsiteConfig.js # 📝 EDITABLE CONFIG FILE (Text, Links, Textures, FAQs)
    └── components/
        └── landing/
            ├── KlyvoNavbar.jsx           # Top Header Bar with Theme Switcher
            ├── KlyvoHero.jsx             # Hero Section with Phone Preview
            ├── KlyvoColorSimulator.jsx   # Interactive Texture Studio Demo
            ├── KlyvoTextureGallery.jsx   # 100+ Texture Catalog Grid
            ├── KlyvoFeatures.jsx         # App Features Highlights
            ├── KlyvoDownloadSection.jsx  # APK Download Hub & Install Guide
            ├── KlyvoTestimonials.jsx     # User Reviews & Testimonials
            ├── KlyvoFAQ.jsx              # Accordion FAQ
            ├── KlyvoFooter.jsx           # Footer & Developer Credits
            └── LandingPage.jsx           # Master Landing Page
```

---

## ⚡ How to Run & Develop in VS Code

1. **Install Dependencies**:
   Open terminal inside `klyvo-website` folder and run:
   ```bash
   npm install
   ```

2. **Start Dev Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## ✏️ How to Edit Website Content in VS Code

Simply open `src/config/klyvoWebsiteConfig.js` in VS Code to edit:
- App Name, Creator Name ("Kush Mittal"), Taglines
- Direct APK download URL & Version numbers
- Texture presets & descriptions
- Feature lists
- User Testimonials
- FAQ questions and answers
