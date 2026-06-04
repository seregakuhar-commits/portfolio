# Admin Panel Demo — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `admin/index.html` — a single-file static admin panel demo (no dependencies) with topbar, icon sidebar, and 5 interactive sections.

**Architecture:** One HTML file, all CSS and JS inline. Navigation uses JS show/hide on `<section>` elements. Orders, products, and clients render from JS data arrays. No build step, no external resources.

**Tech Stack:** HTML5, CSS3 (custom properties, Grid, Flexbox), vanilla JS

---

## File Structure

```
admin/
  index.html   ← единственный файл (создать)
index.html     ← главная портфолио (добавить карточку)
```

---

### Task 1: HTML skeleton + layout CSS

**Files:**
- Create: `admin/index.html`

- [ ] **Step 1: Create the file**

Create `admin/index.html` with this exact content:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AdminPro — Панель управления</title>
  <style>
    :root {
      --navy: #1a2332;
      --orange: #f0a500;
      --bg: #f4f5f7;
      --white: #ffffff;
      --border: #e2e4e8;
      --text: #2d3748;
      --muted: #718096;
      --green: #38a169;
      --red: #e53e3e;
      --purple: #805ad5;
      --topbar-h: 40px;
      --sidebar-w: 48px;
      --radius: 6px;
      --shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); font-size: 14px; }
    a { text-decoration: none; color: inherit; }

    /* LAYOUT */
    .topbar {
      position: fixed; top: 0; left: 0; right: 0; height: var(--topbar-h);
      background: var(--white); border-bottom: 1px solid var(--border);
      display: flex; align-items: center; padding: 0 16px; gap: 12px;
      z-index: 100; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    .app { display: flex; padding-top: var(--topbar-h); min-height: 100vh; }
    .sidebar {
      position: fixed; top: var(--topbar-h); left: 0; bottom: 0; width: var(--sidebar-w);
      background: var(--white); border-right: 1px solid var(--border);
      display: flex; flex-direction: column; align-items: center; padding: 12px 0; gap: 2px;
      z-index: 90;
    }
    .main { flex: 1; margin-left: var(--sidebar-w); padding: 24px; }

    /* SECTIONS */
    .section { display: none; }
    .section.active { display: block; animation: fadeIn 0.2s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

    /* PAGE HEADER */
    .page-header { margin-bottom: 20px; }
    .page-title { font-size: 20px; font-weight: 700; color: var(--navy); }
    .page-sub { font-size: 13px; color: var(--muted); margin-top: 3px; }

    /* CARD */
    .card { background: var(--white); border-radius: var(--radius); padding: 20px; box-shadow: var(--shadow); }

    /* TABLE */
    .table-wrap { background: var(--white); border-radius: var(--radius); box-shadow: var(--shadow); overflow: hidden; }
    table { width: 100%; border-collapse: collapse; }
    th { padding: 10px 16px; text-align: left; font-size: 11px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid var(--border); background: var(--bg); }
    td { padding: 12px 16px; border-bottom: 1px solid var(--border); font-size: 13px; }
    tr:last-child td { border-bottom: none; }
    tbody tr:hover td { background: #fafbfc; }

    /* BADGES */
    .badge { display: inline-block; padding: 2px 8px; border-radius: 20px; font-size: 11px; font-weight: 600; }
    .badge-new { background: #fff8e1; color: #b7791f; }
    .badge-done { background: #f0fff4; color: #276749; }
    .badge-cancel { background: #fff5f5; color: #c53030; }
    .badge-active { background: #f0fff4; color: #276749; }
    .badge-inactive { background: var(--bg); color: var(--muted); }

    /* BUTTON */
    .btn { display: inline-flex; align-items: center; gap: 6px; padding: 7px 14px; border-radius: var(--radius); font-size: 13px; font-weight: 500; cursor: pointer; border: none; transition: opacity 0.15s, background 0.15s; }
    .btn-primary { background: var(--navy); color: var(--white); }
    .btn-primary:hover { background: #243347; }
    .btn-outline { background: var(--white); color: var(--text); border: 1px solid var(--border); }
    .btn-outline:hover { background: var(--bg); }
    .btn-outline.active { background: var(--navy); color: var(--white); border-color: var(--navy); }

    /* TOAST */
    .toast {
      position: fixed; bottom: 24px; right: 24px;
      background: var(--navy); color: var(--white);
      padding: 10px 16px; border-radius: var(--radius); font-size: 13px; font-weight: 500;
      opacity: 0; transform: translateY(8px); transition: opacity 0.2s, transform 0.2s;
      pointer-events: none; z-index: 999;
    }
    .toast.show { opacity: 1; transform: translateY(0); }
  </style>
</head>
<body>
  <header class="topbar"><!-- TOPBAR --></header>
  <div class="app">
    <nav class="sidebar"><!-- SIDEBAR --></nav>
    <main class="main">
      <section id="dashboard" class="section active"><!-- DASHBOARD --></section>
      <section id="orders" class="section"><!-- ORDERS --></section>
      <section id="products" class="section"><!-- PRODUCTS --></section>
      <section id="clients" class="section"><!-- CLIENTS --></section>
      <section id="settings" class="section"><!-- SETTINGS --></section>
    </main>
  </div>
  <div id="toast" class="toast"></div>
  <script>
    // NAV
    // FILTER
    // TOAST
    // RENDER
  </script>
</body>
</html>
```

- [ ] **Step 2: Verify**

Open `admin/index.html` in browser. Expected: blank grey page, no errors in console.

- [ ] **Step 3: Commit**

```bash
git add admin/index.html
git commit -m "feat: admin panel skeleton"
```

---

### Task 2: Topbar

**Files:**
- Modify: `admin/index.html`

- [ ] **Step 1: Add topbar CSS**

In the `<style>` block, after the `/* TOAST */` section, add:

```css
    /* TOPBAR */
    .topbar-logo { font-weight: 700; font-size: 15px; color: var(--navy); letter-spacing: -0.3px; white-space: nowrap; }
    .topbar-search {
      display: flex; align-items: center; gap: 6px;
      background: var(--bg); border: 1px solid var(--border);
      border-radius: var(--radius); padding: 5px 10px; flex: 1; max-width: 280px;
    }
    .topbar-search input { border: none; background: none; outline: none; font-size: 13px; color: var(--text); width: 100%; }
    .topbar-search svg { color: var(--muted); flex-shrink: 0; }
    .topbar-spacer { flex: 1; }
    .topbar-avatar {
      width: 28px; height: 28px; border-radius: 50%;
      background: var(--navy); color: var(--white);
      display: flex; align-items: center; justify-content: center;
      font-size: 11px; font-weight: 600; cursor: pointer; flex-shrink: 0;
    }
```

- [ ] **Step 2: Replace topbar placeholder**

Replace `<!-- TOPBAR -->` with:

```html
<span class="topbar-logo">AdminPro</span>
    <div class="topbar-search">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input type="text" placeholder="Поиск...">
    </div>
    <div class="topbar-spacer"></div>
    <div class="topbar-avatar">АД</div>
```

- [ ] **Step 3: Verify**

Refresh browser. Expected: thin topbar with "AdminPro" logo, search bar, and navy circle avatar.

- [ ] **Step 4: Commit**

```bash
git add admin/index.html
git commit -m "feat: admin panel topbar"
```

---

### Task 3: Sidebar + navigation JS

**Files:**
- Modify: `admin/index.html`

- [ ] **Step 1: Add sidebar CSS**

In `<style>`, after `/* TOPBAR */`, add:

```css
    /* SIDEBAR */
    .nav-item {
      position: relative; width: 36px; height: 36px; border-radius: var(--radius);
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; color: var(--muted); transition: color 0.15s, background 0.15s;
    }
    .nav-item:hover { background: var(--bg); color: var(--navy); }
    .nav-item.active { color: var(--navy); background: rgba(26,35,50,0.07); }
    .nav-item svg { width: 18px; height: 18px; }
    .nav-tooltip {
      position: absolute; left: calc(100% + 10px); top: 50%; transform: translateY(-50%);
      background: var(--navy); color: var(--white); font-size: 12px; padding: 4px 8px;
      border-radius: 4px; white-space: nowrap; pointer-events: none;
      opacity: 0; transition: opacity 0.15s; z-index: 200;
    }
    .nav-item:hover .nav-tooltip { opacity: 1; }
```

- [ ] **Step 2: Replace sidebar placeholder**

Replace `<!-- SIDEBAR -->` with:

```html
<div class="nav-item active" data-section="dashboard">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
      </svg>
      <span class="nav-tooltip">Дашборд</span>
    </div>
    <div class="nav-item" data-section="orders">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      <span class="nav-tooltip">Заказы</span>
    </div>
    <div class="nav-item" data-section="products">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
      <span class="nav-tooltip">Товары</span>
    </div>
    <div class="nav-item" data-section="clients">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
      <span class="nav-tooltip">Клиенты</span>
    </div>
    <div class="nav-item" data-section="settings">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
      <span class="nav-tooltip">Настройки</span>
    </div>
```

- [ ] **Step 3: Replace `// NAV` with navigation JS**

Replace `// NAV` with:

```javascript
document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        item.classList.add('active');
        document.getElementById(item.dataset.section).classList.add('active');
      });
    });
```

- [ ] **Step 4: Verify**

Refresh. Expected: 5 SVG icons in narrow left sidebar, tooltips appear on hover, clicking each icon shows an empty content area (sections are empty placeholders).

- [ ] **Step 5: Commit**

```bash
git add admin/index.html
git commit -m "feat: admin panel sidebar and navigation"
```

---

### Task 4: Dashboard — stat cards

**Files:**
- Modify: `admin/index.html`

- [ ] **Step 1: Add stat card CSS**

In `<style>`, after `/* SIDEBAR */`, add:

```css
    /* DASHBOARD — STAT CARDS */
    .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px; }
    .stat-card {
      background: var(--white); border-radius: var(--radius); padding: 20px;
      box-shadow: var(--shadow); border-top: 3px solid var(--orange);
      display: flex; justify-content: space-between; align-items: flex-start;
    }
    .stat-label { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
    .stat-value { font-size: 26px; font-weight: 700; color: var(--navy); line-height: 1; }
    .stat-change { font-size: 11px; margin-top: 6px; }
    .stat-change.up { color: var(--green); }
    .stat-change.down { color: var(--red); }
    .stat-icon { width: 40px; height: 40px; border-radius: var(--radius); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .stat-icon svg { width: 18px; height: 18px; }
    .stat-icon.c-orange { background: #fff8e1; color: var(--orange); }
    .stat-icon.c-green  { background: #f0fff4; color: var(--green); }
    .stat-icon.c-navy   { background: rgba(26,35,50,0.07); color: var(--navy); }
    .stat-icon.c-purple { background: #f5f0ff; color: var(--purple); }
```

- [ ] **Step 2: Replace `<!-- DASHBOARD -->` with stat cards**

Replace `<!-- DASHBOARD -->` with:

```html
<div class="page-header">
      <h1 class="page-title">Дашборд</h1>
      <p class="page-sub">Обзор за последние 30 дней</p>
    </div>
    <div class="stat-grid">
      <div class="stat-card">
        <div>
          <div class="stat-label">Заказы</div>
          <div class="stat-value">1 284</div>
          <div class="stat-change up">↑ 12% к прошлому месяцу</div>
        </div>
        <div class="stat-icon c-orange">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </div>
      </div>
      <div class="stat-card">
        <div>
          <div class="stat-label">Выручка</div>
          <div class="stat-value">284 500 ₽</div>
          <div class="stat-change up">↑ 8% к прошлому месяцу</div>
        </div>
        <div class="stat-icon c-green">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
            <polyline points="17 6 23 6 23 12"/>
          </svg>
        </div>
      </div>
      <div class="stat-card">
        <div>
          <div class="stat-label">Клиенты</div>
          <div class="stat-value">3 741</div>
          <div class="stat-change up">↑ 5% к прошлому месяцу</div>
        </div>
        <div class="stat-icon c-navy">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
          </svg>
        </div>
      </div>
      <div class="stat-card">
        <div>
          <div class="stat-label">Конверсия</div>
          <div class="stat-value">4.2%</div>
          <div class="stat-change down">↓ 0.3% к прошлому месяцу</div>
        </div>
        <div class="stat-icon c-purple">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="19" y1="5" x2="5" y2="19"/>
            <circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
          </svg>
        </div>
      </div>
    </div>
    <!-- DASHBOARD-BOTTOM -->
```

- [ ] **Step 3: Verify**

Refresh, Dashboard section active. Expected: 4 white cards in a row, each with orange top border, large number, label, trend arrow, and color-coded icon on the right.

- [ ] **Step 4: Commit**

```bash
git add admin/index.html
git commit -m "feat: dashboard stat cards"
```

---

### Task 5: Dashboard — chart + last orders table

**Files:**
- Modify: `admin/index.html`

- [ ] **Step 1: Add chart + last-orders CSS**

In `<style>`, after `/* DASHBOARD — STAT CARDS */`, add:

```css
    /* DASHBOARD — CHART + LAST ORDERS */
    .dash-row { display: grid; grid-template-columns: 1fr 1.6fr; gap: 16px; }
    .chart-title { font-size: 14px; font-weight: 600; color: var(--navy); margin-bottom: 16px; }
    .chart-bars { display: flex; align-items: flex-end; gap: 8px; height: 100px; }
    .bar-wrap { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 5px; height: 100%; justify-content: flex-end; }
    .bar { width: 100%; background: var(--border); border-radius: 3px 3px 0 0; transition: background 0.2s; min-height: 4px; }
    .bar:hover, .bar.hi { background: var(--orange); }
    .bar-day { font-size: 10px; color: var(--muted); }
    .section-label { font-size: 14px; font-weight: 600; color: var(--navy); padding: 16px 16px 12px; }
```

- [ ] **Step 2: Replace `<!-- DASHBOARD-BOTTOM -->` with chart and last orders**

Replace `<!-- DASHBOARD-BOTTOM -->` with:

```html
<div class="dash-row">
      <div class="card">
        <div class="chart-title">Активность за 7 дней</div>
        <div class="chart-bars">
          <div class="bar-wrap"><div class="bar" style="height:42%"></div><span class="bar-day">Пн</span></div>
          <div class="bar-wrap"><div class="bar" style="height:68%"></div><span class="bar-day">Вт</span></div>
          <div class="bar-wrap"><div class="bar" style="height:55%"></div><span class="bar-day">Ср</span></div>
          <div class="bar-wrap"><div class="bar" style="height:82%"></div><span class="bar-day">Чт</span></div>
          <div class="bar-wrap"><div class="bar" style="height:74%"></div><span class="bar-day">Пт</span></div>
          <div class="bar-wrap"><div class="bar hi" style="height:93%"></div><span class="bar-day">Сб</span></div>
          <div class="bar-wrap"><div class="bar" style="height:71%"></div><span class="bar-day">Вс</span></div>
        </div>
      </div>
      <div class="table-wrap">
        <div class="section-label">Последние заказы</div>
        <table>
          <thead><tr><th>№</th><th>Клиент</th><th>Сумма</th><th>Статус</th></tr></thead>
          <tbody>
            <tr><td>#1042</td><td>Анна Смирнова</td><td>2 490 ₽</td><td><span class="badge badge-done">Выполнен</span></td></tr>
            <tr><td>#1041</td><td>Иван Петров</td><td>1 200 ₽</td><td><span class="badge badge-new">Новый</span></td></tr>
            <tr><td>#1040</td><td>Мария Козлова</td><td>990 ₽</td><td><span class="badge badge-done">Выполнен</span></td></tr>
            <tr><td>#1039</td><td>Дмитрий Новиков</td><td>2 490 ₽</td><td><span class="badge badge-cancel">Отменён</span></td></tr>
            <tr><td>#1038</td><td>Ольга Фёдорова</td><td>490 ₽</td><td><span class="badge badge-new">Новый</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
```

- [ ] **Step 3: Verify**

Refresh. Expected: 7-bar grey chart (Сб bar is orange), and last-orders table with 5 rows and colour-coded badges — side by side below the stat cards.

- [ ] **Step 4: Commit**

```bash
git add admin/index.html
git commit -m "feat: dashboard chart and last orders"
```

---

### Task 6: Orders section

**Files:**
- Modify: `admin/index.html`

- [ ] **Step 1: Add orders CSS**

In `<style>`, add after `/* DASHBOARD — CHART + LAST ORDERS */`:

```css
    /* ORDERS */
    .filter-bar { display: flex; gap: 8px; margin-bottom: 16px; }
```

- [ ] **Step 2: Replace `<!-- ORDERS -->`**

Replace `<!-- ORDERS -->` with:

```html
<div class="page-header">
      <h1 class="page-title">Заказы</h1>
      <p class="page-sub">Все заказы за последние 60 дней</p>
    </div>
    <div class="filter-bar">
      <button class="btn btn-outline active" data-filter="all">Все</button>
      <button class="btn btn-outline" data-filter="new">Новые</button>
      <button class="btn btn-outline" data-filter="done">Выполненные</button>
      <button class="btn btn-outline" data-filter="cancel">Отменённые</button>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>№</th><th>Клиент</th><th>Товар</th><th>Сумма</th><th>Статус</th><th>Дата</th></tr>
        </thead>
        <tbody id="orders-tbody"></tbody>
      </table>
    </div>
```

- [ ] **Step 3: Add orders data and render JS**

Replace `// RENDER` with:

```javascript
const ORDERS = [
      { id:'#1042', client:'Анна Смирнова',    product:'Подписка Pro',    amount:'2 490 ₽', status:'done',   date:'03.06.2026' },
      { id:'#1041', client:'Иван Петров',       product:'Консультация',    amount:'1 200 ₽', status:'new',    date:'03.06.2026' },
      { id:'#1040', client:'Мария Козлова',     product:'Подписка Base',   amount:'990 ₽',   status:'done',   date:'02.06.2026' },
      { id:'#1039', client:'Дмитрий Новиков',   product:'Подписка Pro',    amount:'2 490 ₽', status:'cancel', date:'02.06.2026' },
      { id:'#1038', client:'Ольга Фёдорова',    product:'Разовый доступ',  amount:'490 ₽',   status:'new',    date:'01.06.2026' },
      { id:'#1037', client:'Алексей Морозов',   product:'Консультация',    amount:'1 200 ₽', status:'done',   date:'01.06.2026' },
      { id:'#1036', client:'Наталья Волкова',   product:'Подписка Base',   amount:'990 ₽',   status:'new',    date:'31.05.2026' },
      { id:'#1035', client:'Сергей Лебедев',    product:'Подписка Pro',    amount:'2 490 ₽', status:'done',   date:'31.05.2026' },
      { id:'#1034', client:'Татьяна Соколова',  product:'Разовый доступ',  amount:'490 ₽',   status:'cancel', date:'30.05.2026' },
      { id:'#1033', client:'Михаил Попов',      product:'Консультация',    amount:'1 200 ₽', status:'done',   date:'30.05.2026' },
    ];
    const STATUS_LABEL = { new: 'Новый', done: 'Выполнен', cancel: 'Отменён' };
    function renderOrders(filter) {
      const rows = ORDERS.filter(o => filter === 'all' || o.status === filter);
      document.getElementById('orders-tbody').innerHTML = rows.map(o =>
        `<tr data-status="${o.status}">
          <td>${o.id}</td><td>${o.client}</td><td>${o.product}</td>
          <td><strong>${o.amount}</strong></td>
          <td><span class="badge badge-${o.status}">${STATUS_LABEL[o.status]}</span></td>
          <td style="color:var(--muted)">${o.date}</td>
        </tr>`
      ).join('');
    }
    renderOrders('all');

    const PRODUCTS = [
      { name:'Подписка Base',  price:'990 ₽/мес',    color:'#e8f4f8', sales:145 },
      { name:'Подписка Pro',   price:'2 490 ₽/мес',  color:'#fef3e2', sales:89  },
      { name:'Подписка Team',  price:'6 490 ₽/мес',  color:'#f0f4ff', sales:34  },
      { name:'Консультация',   price:'1 200 ₽/час',  color:'#f0fff4', sales:67  },
      { name:'Разовый доступ', price:'490 ₽',         color:'#fff5f5', sales:213 },
      { name:'Корпоративный',  price:'от 15 000 ₽',   color:'#f5f0ff', sales:12  },
    ];
    document.getElementById('products-grid').innerHTML = PRODUCTS.map(p =>
      `<div class="product-card">
        <div class="product-img" style="background:${p.color}"></div>
        <div class="product-body">
          <div class="product-name">${p.name}</div>
          <div class="product-price">${p.price}</div>
          <div class="product-sales">${p.sales} продаж</div>
          <div class="product-actions">
            <button class="btn btn-outline" style="font-size:12px;padding:5px 10px">Редактировать</button>
            <button class="btn btn-outline" style="font-size:12px;padding:5px 10px;color:var(--red);border-color:var(--red)">Удалить</button>
          </div>
        </div>
      </div>`
    ).join('');

    const CLIENTS = [
      { ini:'АС', name:'Анна Смирнова',   email:'anna@example.com',   phone:'+7 905 123-45-67', date:'15.01.2025', active:true  },
      { ini:'ИП', name:'Иван Петров',      email:'ivan@example.com',   phone:'+7 916 234-56-78', date:'22.03.2025', active:true  },
      { ini:'МК', name:'Мария Козлова',    email:'maria@example.com',  phone:'+7 926 345-67-89', date:'08.04.2025', active:false },
      { ini:'ДН', name:'Дмитрий Новиков',  email:'dmitry@example.com', phone:'+7 903 456-78-90', date:'19.05.2025', active:true  },
      { ini:'ОФ', name:'Ольга Фёдорова',   email:'olga@example.com',   phone:'+7 915 567-89-01', date:'02.07.2025', active:true  },
      { ini:'АМ', name:'Алексей Морозов',  email:'alex@example.com',   phone:'+7 917 678-90-12', date:'14.08.2025', active:false },
      { ini:'НВ', name:'Наталья Волкова',  email:'natalia@example.com',phone:'+7 925 789-01-23', date:'30.09.2025', active:true  },
      { ini:'СЛ', name:'Сергей Лебедев',   email:'sergey@example.com', phone:'+7 904 890-12-34', date:'11.10.2025', active:true  },
    ];
    document.getElementById('clients-tbody').innerHTML = CLIENTS.map(c =>
      `<tr>
        <td><div style="width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--white);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600">${c.ini}</div></td>
        <td><strong>${c.name}</strong></td>
        <td style="color:var(--muted)">${c.email}</td>
        <td style="color:var(--muted)">${c.phone}</td>
        <td style="color:var(--muted)">${c.date}</td>
        <td><span class="badge ${c.active ? 'badge-active' : 'badge-inactive'}">${c.active ? 'Активен' : 'Неактивен'}</span></td>
      </tr>`
    ).join('');
```

- [ ] **Step 4: Replace `// FILTER` with filter JS**

Replace `// FILTER` with:

```javascript
document.querySelector('.filter-bar')?.addEventListener('click', e => {
      const btn = e.target.closest('[data-filter]');
      if (!btn) return;
      document.querySelectorAll('.filter-bar .btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderOrders(btn.dataset.filter);
    });
```

- [ ] **Step 5: Verify**

Click «Заказы» in sidebar. Expected: 10 rows in table. Click filter buttons — rows update. «Новые» shows 3 rows, «Выполненные» shows 5, «Отменённые» shows 2.

- [ ] **Step 6: Commit**

```bash
git add admin/index.html
git commit -m "feat: orders section with filter"
```

---

### Task 7: Products section

**Files:**
- Modify: `admin/index.html`

- [ ] **Step 1: Add products CSS**

In `<style>`, add after `/* ORDERS */`:

```css
    /* PRODUCTS */
    .products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
    .product-card { background: var(--white); border-radius: var(--radius); box-shadow: var(--shadow); overflow: hidden; }
    .product-img { height: 80px; }
    .product-body { padding: 14px; }
    .product-name { font-size: 14px; font-weight: 600; color: var(--navy); margin-bottom: 4px; }
    .product-price { font-size: 15px; font-weight: 700; color: var(--orange); margin-bottom: 2px; }
    .product-sales { font-size: 12px; color: var(--muted); margin-bottom: 12px; }
    .product-actions { display: flex; gap: 8px; }
```

- [ ] **Step 2: Replace `<!-- PRODUCTS -->`**

Replace `<!-- PRODUCTS -->` with:

```html
<div class="page-header">
      <h1 class="page-title">Товары</h1>
      <p class="page-sub">Каталог продуктов и услуг</p>
    </div>
    <div class="products-grid" id="products-grid"></div>
```

- [ ] **Step 3: Verify**

Click «Товары». Expected: 6 product cards in 3-column grid with coloured placeholder image, name, price in orange, sales count, and two action buttons.

- [ ] **Step 4: Commit**

```bash
git add admin/index.html
git commit -m "feat: products section"
```

---

### Task 8: Clients section

**Files:**
- Modify: `admin/index.html`

- [ ] **Step 1: Replace `<!-- CLIENTS -->`**

Replace `<!-- CLIENTS -->` with:

```html
<div class="page-header">
      <h1 class="page-title">Клиенты</h1>
      <p class="page-sub">База клиентов</p>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th></th><th>Имя</th><th>Email</th><th>Телефон</th><th>Дата регистрации</th><th>Статус</th></tr>
        </thead>
        <tbody id="clients-tbody"></tbody>
      </table>
    </div>
```

- [ ] **Step 2: Verify**

Click «Клиенты». Expected: 8 rows, each with navy avatar circle showing initials, name in bold, email/phone in grey, date, and active/inactive badge.

- [ ] **Step 3: Commit**

```bash
git add admin/index.html
git commit -m "feat: clients section"
```

---

### Task 9: Settings section + save toast

**Files:**
- Modify: `admin/index.html`

- [ ] **Step 1: Add settings CSS**

In `<style>`, add after `/* PRODUCTS */`:

```css
    /* SETTINGS */
    .settings-card { max-width: 520px; }
    .form-group { margin-bottom: 18px; }
    .form-label { display: block; font-size: 13px; font-weight: 500; color: var(--text); margin-bottom: 6px; }
    .form-input, .form-select {
      width: 100%; padding: 8px 12px; border: 1px solid var(--border);
      border-radius: var(--radius); font-size: 14px; color: var(--text);
      background: var(--white); outline: none; transition: border-color 0.15s;
      font-family: inherit;
    }
    .form-input:focus, .form-select:focus { border-color: var(--navy); }
    .form-check { display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 13px; }
    .form-check input { width: 16px; height: 16px; cursor: pointer; accent-color: var(--navy); }
    .settings-divider { height: 1px; background: var(--border); margin: 24px 0; }
```

- [ ] **Step 2: Replace `<!-- SETTINGS -->`**

Replace `<!-- SETTINGS -->` with:

```html
<div class="page-header">
      <h1 class="page-title">Настройки</h1>
      <p class="page-sub">Параметры системы</p>
    </div>
    <div class="card settings-card">
      <div class="form-group">
        <label class="form-label">Название магазина</label>
        <input class="form-input" type="text" value="Мой магазин">
      </div>
      <div class="form-group">
        <label class="form-label">Email для уведомлений</label>
        <input class="form-input" type="email" value="admin@example.com">
      </div>
      <div class="form-group">
        <label class="form-label">Валюта</label>
        <select class="form-select">
          <option selected>₽ — Российский рубль</option>
          <option>$ — Доллар США</option>
          <option>€ — Евро</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Язык интерфейса</label>
        <select class="form-select">
          <option selected>Русский</option>
          <option>English</option>
        </select>
      </div>
      <div class="settings-divider"></div>
      <div class="form-group">
        <label class="form-check">
          <input type="checkbox" checked>
          Уведомления о новых заказах
        </label>
      </div>
      <div class="form-group">
        <label class="form-check">
          <input type="checkbox">
          Ежедневный отчёт на email
        </label>
      </div>
      <div class="settings-divider"></div>
      <button class="btn btn-primary btn-save">Сохранить изменения</button>
    </div>
```

- [ ] **Step 3: Replace `// TOAST` with toast JS**

Replace `// TOAST` with:

```javascript
function showToast(msg) {
      const t = document.getElementById('toast');
      t.textContent = msg;
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2000);
    }
    document.querySelector('.btn-save').addEventListener('click', () => showToast('Настройки сохранены ✓'));
```

- [ ] **Step 4: Verify**

Click «Настройки». Expected: form card with 4 fields, 2 checkboxes, dividers. Click «Сохранить изменения» — navy toast appears bottom-right for 2 seconds.

- [ ] **Step 5: Commit**

```bash
git add admin/index.html
git commit -m "feat: settings section with save toast"
```

---

### Task 10: Add admin panel card to portfolio index

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Find the last `.project-card` block**

Open `index.html`. Find the last `<a class="project-card"` entry (the CV card).

- [ ] **Step 2: Insert admin panel card after it**

After the closing `</a>` of the CV card, add:

```html
<a href="admin/index.html" class="project-card" target="_blank">
          <div class="project-img">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.35">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
            </svg>
          </div>
          <div class="project-info">
            <h3 class="project-title">Админ-панель</h3>
            <p class="project-desc">Дашборд с аналитикой, таблицы заказов, товары, клиенты и настройки. Чистый HTML + CSS + JS.</p>
            <p class="project-price">от 8 000 ₽</p>
            <span class="project-link">Смотреть демо →</span>
          </div>
        </a>
```

- [ ] **Step 3: Verify**

Open `index.html` in browser. Expected: admin panel card appears as the last card in the portfolio grid.

- [ ] **Step 4: Commit**

```bash
git add index.html admin/index.html
git commit -m "feat: add admin panel demo and portfolio card"
```

---

## Self-Review Checklist

- ✅ Spec: Layout В (topbar + icon sidebar) — Tasks 1, 2, 3
- ✅ Spec: Theme Б (light, navy + orange) — Task 1 CSS variables
- ✅ Spec: Dashboard — 4 stat cards + chart + last orders — Tasks 4, 5
- ✅ Spec: Orders — table + status filter — Task 6
- ✅ Spec: Products — 3-col card grid — Task 7
- ✅ Spec: Clients — table with avatars — Task 8
- ✅ Spec: Settings — form + toast — Task 9
- ✅ Spec: Fade-in animation on section switch — Task 1 CSS (`@keyframes fadeIn`)
- ✅ Spec: Sidebar tooltips on hover — Task 3 `.nav-tooltip`
- ✅ Spec: Portfolio index card — Task 10
- ✅ No TBD or placeholders
- ✅ JS data arrays: orders (Task 6), products (Task 6), clients (Task 6) — all in RENDER block
