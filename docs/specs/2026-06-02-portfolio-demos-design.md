# Portfolio Demos — Design Spec

**Date:** 2026-06-02  
**Goal:** Three demo projects for GitHub portfolio to show on Kwork/FL.ru

---

## Repository

- **Name:** `portfolio` (new repo under seregakuhar-commits)
- **GitHub Pages URL:** `seregakuhar-commits.github.io/portfolio`
- **Structure:** monorepo with index vitrine + three subfolders

---

## File Structure

```
portfolio/
├── index.html          ← main vitrine page
├── landing/
│   ├── index.html
│   └── style.css
├── calculator/
│   ├── index.html
│   └── script.js
└── cards/
    ├── index.html
    └── style.css
```

---

## Project 1 — Landing Page (Construction Company)

**Tech:** HTML + CSS only (no JS)  
**Purpose:** Demonstrates ability to build business landing pages

### Sections
1. **Hero** — large heading, subheading, CTA button "Оставить заявку"
2. **Услуги** — three icon cards (ремонт квартир, офисов, под ключ)
3. **Портфолио** — photo grid using real images from Unsplash
4. **Контакты** — contact form + phone/address

### Style
- Colors: dark blue (#1a2332) + white, accent orange (#f0a500)
- Font: sans-serif (Inter or system)
- Fully responsive (mobile-first)

---

## Project 2 — Repair Cost Calculator

**Tech:** HTML + CSS + JavaScript  
**Purpose:** Demonstrates interactive JS functionality

### Functionality
- Input: room area (м²), number field
- Select: repair type (dropdown)
- Output: total cost, updates in real time on input

### Pricing
| Тип ремонта | Цена за м² |
|---|---|
| Косметический | 3 000 ₽ |
| Капитальный | 6 000 ₽ |
| Под ключ | 10 000 ₽ |

### UI
- Clean card layout, centered on page
- Price displays as formatted Russian rubles (e.g. "150 000 ₽")
- Matches visual style of the landing page

---

## Project 3 — Service Cards with Hover Effects

**Tech:** HTML + CSS only (no JS)  
**Purpose:** Demonstrates CSS animations and interactive UI

### Layout
- 3×2 grid of six service cards
- Services: Штукатурка, Покраска, Укладка плитки, Монтаж гипсокартона, Электрика, Сантехника

### Hover Effect
- Card lifts upward (translateY(-8px))
- Shadow deepens
- Background color lightens
- Smooth transition (0.3s ease)

---

## Vitrine Page (index.html)

- Heading: "Портфолио веб-разработчика"
- Three preview cards with project name, description, and link
- Link to GitHub profile; Kwork link is a placeholder until account is created
- Clean minimal style

---

## Deployment

1. Create new GitHub repo `portfolio`
2. Push all files
3. Enable GitHub Pages from Settings → Pages → main branch / root
4. URL becomes available at `seregakuhar-commits.github.io/portfolio`
