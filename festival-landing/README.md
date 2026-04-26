# 🌙 Sabores de la Noche – Night Food Festival Landing Page

A visually immersive landing page for **Sabores de la Noche**, Colombia's premier nocturnal gastronomic festival. Built as part of an HTML & CSS Module performance test.

---

## 📋 Brief Description

A single-page promotional website that showcases the festival's identity, upcoming dates across Colombian cities, thematic food zones, a photo gallery, and contact information. The design uses a dark, atmospheric aesthetic that evokes the night festival experience.

---

## 🛠️ Technologies Used

| Technology     | Purpose                                      |
|----------------|----------------------------------------------|
| HTML5          | Semantic structure (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`) |
| CSS3           | Flexbox, Grid, custom properties, animations, media queries |
| Vanilla JS (ES6+) | Interactivity, DOM manipulation, Intersection Observer API |
| Google Fonts   | Playfair Display (display) + DM Sans (body)  |

---

## 📁 Project Structure

```
festival-landing/
│
├── index.html          ← Main HTML file (semantic structure)
├── css/
│   ├── styles.css      ← All styles (variables, layout, responsive)
│   └── main.js         ← All JavaScript modules
├── assets/
│   ├── images/         ← (Image assets placeholder)
│   └── icons/          ← (Icon assets placeholder)
└── README.md           ← This file
```

---

## ✨ Features Implemented

### HTML
- Semantic HTML5 structure with `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`
- Semantic list `<ul>` + `<li>` for festival experiences
- Full HTML table (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`) for event schedule

### CSS
- CSS custom properties (variables) for the color palette and spacing system
- **Flexbox**: used in header, hero actions, countdown, experience list, sponsors, footer
- **CSS Grid**: used in thematic zones (3-col), gallery (masonry-like), stats, footer layout
- Responsive design with media queries for mobile (≤600px) and tablet (≤900px)
- Hover animations, gradient text, glassmorphism effects

### JavaScript Modules
1. 🍔 **Hamburger menu** — toggles mobile navigation with smooth slide-in
2. 📜 **Scroll header** — adds glassmorphism effect after 60px scroll
3. 👁️ **Reveal on scroll** — Intersection Observer fades in sections as you scroll
4. ✨ **Hero particles** — floating animated particles for visual depth
5. ⏱️ **Countdown timer** — live countdown to the first event
6. 📊 **Animated counters** — numbers animate up when stats section enters viewport
7. 🖼️ **Gallery lightbox** — opens image preview with keyboard navigation
8. ↑ **Back to top button** — appears after scrolling 400px
9. 📧 **Newsletter validation** — client-side email validation with visual feedback
10. 🔗 **Active nav link** — highlights current section in navigation

---

## 🚀 How to Run Locally

No build tools required. Just open the file in a browser:

### Option 1 – Direct open
```bash
# Clone or download the project
cd festival-landing
# Open index.html in your browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2 – Live Server (recommended for development)
```bash
# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"

# Or using Node.js http-server
npx http-server . -p 3000
# Then visit: http://localhost:3000
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout                                      |
|------------|---------------------------------------------|
| > 900px    | Full desktop: 3-col zones, 3-col gallery, 4-col footer |
| ≤ 900px    | Tablet: 2-col zones, 2-col gallery, 2-col footer       |
| ≤ 600px    | Mobile: 1-col layout, hamburger menu, adapted table    |

---

## 🎨 Design System

- **Primary**: `#f5c242` (Gold) — main accent for CTAs, tags, highlights
- **Secondary**: `#ff8c42` (Amber) — gradient partner for gold
- **Background**: `#0b0810` — deep dark purple-black
- **Surface**: `#1a1528` — card and component backgrounds
- **Text**: `#faf5ff` / `rgba(250,245,255,0.55)` — primary / muted
- **Display font**: Playfair Display (900 weight headings)
- **Body font**: DM Sans (300–500 weights)

---

*© 2025 Sabores de la Noche. All rights reserved.*
