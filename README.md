# SpicaLabs.ai React Web App

This is a modern React web application converted from `SpicaLabs.ai _ AI Solutions That Work (1).html`.

## Features
- **Modern React 18 Architecture**: Clean, modular components powered by Vite.
- **Interactive Workflow Demo**: Fully functional multi-stage pipeline simulator (Customer Inquiry -> AI Analysis -> Smart Lead Qualification with customizable rule toggles -> Personalized Reply Generator -> Follow-up CRM staging).
- **Responsive Navigation**: Desktop & Mobile drawer navigation with smooth scrolling and accessible keyboard navigation (ESC close).
- **Interactive Lead Qualification Rules**: Interactive checkbox rule evaluation dynamically computing score and priority badges.
- **Live Form Validation**: Business email validation, requirement character count limits, bot protection honeypot, and configurable endpoint dispatch.
- **Dark Mode Theme**: Futuristic gradients, ambient glows, SVG animated architecture and status indicators.
- **Centralized Configuration**: Easily customize email, Cal.com / scheduling booking URL, form endpoints, and social links in `src/config.js`.

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for production
```bash
npm run build
```

## Project Structure
```
spicalabs-react/
├── index.html                  # HTML entry point with meta tags, fonts, favicon
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration
├── src/
│   ├── main.jsx                # React root mount
│   ├── App.jsx                 # Main application container
│   ├── config.js               # Centralized config (email, booking link, endpoints)
│   ├── index.css               # Design system & styles
│   └── components/
│       ├── Navbar.jsx          # Header with navigation & mobile drawer
│       ├── Hero.jsx            # Hero section with animated architecture SVG
│       ├── Solutions.jsx       # 3 Core AI solutions cards
│       ├── WorkflowDemo.jsx    # Interactive AI Workflow pipeline simulator
│       ├── Problems.jsx        # Problem matrix cards
│       ├── Process.jsx         # 4-stage operational process
│       ├── About.jsx           # Core principles and company vision
│       ├── CtaBanner.jsx       # Action callout banner
│       ├── ContactForm.jsx     # Contact form with validation & honeypot
│       └── Footer.jsx          # Footer with social & quick links
```
# spica-labs
