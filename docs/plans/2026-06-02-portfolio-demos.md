# Portfolio Demos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build three demo projects (landing page, JS calculator, CSS hover cards) in a new `portfolio` repo at `c:\Users\Serega\projects\portfolio\`, deployable via GitHub Pages.

**Architecture:** Monorepo with four standalone HTML/CSS/JS projects in subfolders. No build tools, no frameworks — pure HTML/CSS/JS, opens directly in browser. Root `index.html` serves as a vitrine linking to all three demos.

**Tech Stack:** HTML5, CSS3 (Grid, Flexbox, CSS transitions), vanilla JavaScript, GitHub Pages

---

## File Map

| File | Purpose |
|---|---|
| `index.html` | Vitrine — preview cards linking to all three demos |
| `landing/index.html` | Construction company landing page markup |
| `landing/style.css` | Landing page styles (dark blue/orange, responsive) |
| `calculator/index.html` | Repair cost calculator markup + inline styles |
| `calculator/script.js` | Real-time calculation logic |
| `cards/index.html` | Service cards markup |
| `cards/style.css` | Cards grid + hover animation styles |

---

### Task 1: Create repo

**Files:**
- Create: `c:\Users\Serega\projects\portfolio\` (directory)
- Create: `c:\Users\Serega\projects\portfolio\.gitignore`

- [ ] **Step 1: Create directory and init git**

```bash
mkdir "c:\Users\Serega\projects\portfolio"
cd "c:\Users\Serega\projects\portfolio"
git init
```

- [ ] **Step 2: Create .gitignore**

Create `c:\Users\Serega\projects\portfolio\.gitignore`:
```
.DS_Store
Thumbs.db
```

- [ ] **Step 3: Commit**

```bash
git add .gitignore
git commit -m "chore: init portfolio repo"
```

---

### Task 2: Landing page — HTML

**Files:**
- Create: `c:\Users\Serega\projects\portfolio\landing\index.html`

- [ ] **Step 1: Create landing/index.html**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>СтройМастер — Ремонт квартир и офисов</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <nav>
    <a class="nav-logo" href="#">СтройМастер</a>
    <ul class="nav-links">
      <li><a href="#services">Услуги</a></li>
      <li><a href="#portfolio">Портфолио</a></li>
      <li><a href="#contacts">Контакты</a></li>
    </ul>
  </nav>

  <section class="hero">
    <div class="hero-content">
      <h1>Ремонт квартир<br>и офисов <span>под ключ</span></h1>
      <p>Качественный ремонт в Москве. Работаем с 2010 года.<br>Гарантия 3 года на все виды работ.</p>
      <a href="#contacts" class="btn">Оставить заявку</a>
    </div>
  </section>

  <section class="services" id="services">
    <h2 class="section-title">Наши услуги</h2>
    <div class="services-grid">
      <div class="service-card">
        <span class="service-icon">🏠</span>
        <h3>Ремонт квартир</h3>
        <p>Косметический и капитальный ремонт любых квартир. От замены обоев до полной перепланировки.</p>
      </div>
      <div class="service-card">
        <span class="service-icon">🏢</span>
        <h3>Ремонт офисов</h3>
        <p>Быстрый и качественный ремонт офисных помещений. Минимум простоя, максимум результата.</p>
      </div>
      <div class="service-card">
        <span class="service-icon">🔑</span>
        <h3>Ремонт под ключ</h3>
        <p>Полный цикл — от проекта до сдачи объекта. Вы принимаете только готовый результат.</p>
      </div>
    </div>
  </section>

  <section class="portfolio" id="portfolio">
    <h2 class="section-title">Наши работы</h2>
    <div class="portfolio-grid">
      <div class="portfolio-item">
        <img src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800&q=80" alt="Ремонт квартиры">
        <div class="portfolio-label">Квартира, 78 м²</div>
      </div>
      <div class="portfolio-item">
        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" alt="Кухня после ремонта">
        <div class="portfolio-label">Кухня, 22 м²</div>
      </div>
      <div class="portfolio-item">
        <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80" alt="Офис после ремонта">
        <div class="portfolio-label">Офис, 120 м²</div>
      </div>
    </div>
  </section>

  <section class="contacts" id="contacts">
    <h2 class="section-title">Свяжитесь с нами</h2>
    <div class="contacts-layout">
      <div class="contacts-info">
        <p><strong>Телефон:</strong><br>+7 (495) 123-45-67</p>
        <p><strong>Email:</strong><br>info@stroymaster.ru</p>
        <p><strong>Адрес:</strong><br>Москва, ул. Строителей, 15</p>
        <p><strong>Режим работы:</strong><br>Пн–Пт: 9:00–18:00</p>
      </div>
      <form>
        <input type="text" placeholder="Ваше имя">
        <input type="tel" placeholder="Телефон">
        <textarea placeholder="Опишите задачу"></textarea>
        <button type="submit" class="btn">Отправить заявку</button>
      </form>
    </div>
  </section>

  <footer>
    <p>© 2026 СтройМастер. Все права защищены.</p>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Open in browser**

Открыть `c:\Users\Serega\projects\portfolio\landing\index.html` в браузере.
Ожидаемо: структура страницы видна, но без стилей (голый HTML).

---

### Task 3: Landing page — CSS

**Files:**
- Create: `c:\Users\Serega\projects\portfolio\landing\style.css`

- [ ] **Step 1: Create landing/style.css**

```css
:root {
  --dark: #1a2332;
  --white: #ffffff;
  --orange: #f0a500;
  --gray: #f5f7fa;
  --text: #333;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--text);
  line-height: 1.6;
}

/* NAV */
nav {
  position: sticky;
  top: 0;
  background: var(--dark);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.nav-logo {
  color: var(--orange);
  font-weight: 700;
  font-size: 1.4rem;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: var(--white);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.nav-links a:hover { color: var(--orange); }

/* HERO */
.hero {
  background: linear-gradient(135deg, var(--dark) 0%, #2d3f57 100%);
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  color: var(--white);
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.25rem;
}

.hero h1 span { color: var(--orange); }

.hero p {
  font-size: 1.15rem;
  opacity: 0.85;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  background: var(--orange);
  color: var(--dark);
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(240, 165, 0, 0.45);
}

/* SECTIONS */
section { padding: 5rem 2rem; }

.section-title {
  text-align: center;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 3rem;
}

/* SERVICES */
.services { background: var(--gray); }

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.service-card {
  background: var(--white);
  padding: 2.5rem 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  transition: transform 0.25s, box-shadow 0.25s;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 32px rgba(0,0,0,0.12);
}

.service-icon {
  font-size: 2.8rem;
  display: block;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.2rem;
  color: var(--dark);
  margin-bottom: 0.75rem;
}

.service-card p { color: #666; font-size: 0.95rem; }

/* PORTFOLIO */
.portfolio { background: var(--white); }

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.portfolio-item {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.portfolio-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  transition: transform 0.35s;
}

.portfolio-item:hover img { transform: scale(1.06); }

.portfolio-label {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 1.5rem 1rem 1rem;
  background: linear-gradient(transparent, rgba(26,35,50,0.88));
  color: var(--white);
  font-weight: 600;
  font-size: 0.95rem;
}

/* CONTACTS */
.contacts {
  background: var(--dark);
  color: var(--white);
}

.contacts .section-title { color: var(--white); }

.contacts-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
}

.contacts-info p {
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.9;
}

.contacts-info strong { color: var(--orange); }

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea {
  padding: 0.9rem 1rem;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 5px;
  color: var(--white);
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--orange);
}

input::placeholder, textarea::placeholder {
  color: rgba(255,255,255,0.4);
}

textarea { min-height: 120px; resize: vertical; }

/* FOOTER */
footer {
  background: #0f1824;
  color: rgba(255,255,255,0.45);
  text-align: center;
  padding: 1.5rem;
  font-size: 0.9rem;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .nav-links { display: none; }
  .contacts-layout { grid-template-columns: 1fr; }
  .hero { min-height: 60vh; }
}
```

- [ ] **Step 2: Check in browser**

Открыть `landing/index.html`. Ожидаемо: тёмная липкая навигация, hero с градиентом, три карточки услуг на сером фоне, фотогалерея, тёмная секция контактов с формой.

- [ ] **Step 3: Commit**

```bash
git add landing/
git commit -m "feat: add construction company landing page"
```

---

### Task 4: Calculator — HTML + стили

**Files:**
- Create: `c:\Users\Serega\projects\portfolio\calculator\index.html`

- [ ] **Step 1: Create calculator/index.html**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Калькулятор ремонта</title>
  <style>
    :root {
      --dark: #1a2332;
      --orange: #f0a500;
      --gray: #f5f7fa;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Inter', system-ui, sans-serif;
      background: var(--gray);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .card {
      background: white;
      border-radius: 16px;
      padding: 2.5rem;
      max-width: 480px;
      width: 100%;
      box-shadow: 0 8px 40px rgba(0,0,0,0.1);
    }

    .card-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .card-header h1 {
      font-size: 1.6rem;
      color: var(--dark);
      margin-bottom: 0.5rem;
    }

    .card-header p { color: #666; font-size: 0.95rem; }

    label {
      display: block;
      font-weight: 600;
      color: var(--dark);
      margin-bottom: 0.4rem;
      font-size: 0.95rem;
    }

    .field { margin-bottom: 1.5rem; }

    input[type="number"], select {
      width: 100%;
      padding: 0.9rem 1rem;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 1rem;
      font-family: inherit;
      color: var(--dark);
      background: white;
      transition: border-color 0.2s;
      -webkit-appearance: none;
    }

    input[type="number"]:focus, select:focus {
      outline: none;
      border-color: var(--orange);
    }

    .result-box {
      background: var(--dark);
      border-radius: 10px;
      padding: 1.5rem;
      text-align: center;
    }

    .result-label {
      color: rgba(255,255,255,0.6);
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .result-price {
      color: var(--orange);
      font-size: 2.2rem;
      font-weight: 800;
      letter-spacing: -0.5px;
    }

    .price-table {
      margin-top: 2rem;
      border-top: 1px solid #e5e7eb;
      padding-top: 1.5rem;
    }

    .price-table h3 {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #999;
      margin-bottom: 0.75rem;
    }

    .price-row {
      display: flex;
      justify-content: space-between;
      padding: 0.4rem 0;
      font-size: 0.9rem;
      color: #555;
    }

    .price-row span:last-child { color: var(--dark); font-weight: 600; }

    footer {
      margin-top: 1.5rem;
      color: #aaa;
      font-size: 0.85rem;
      text-align: center;
    }

    footer a { color: var(--orange); text-decoration: none; }
  </style>
</head>
<body>

  <div class="card">
    <div class="card-header">
      <h1>Калькулятор ремонта</h1>
      <p>Рассчитайте стоимость онлайн</p>
    </div>

    <div class="field">
      <label for="area">Площадь помещения (м²)</label>
      <input type="number" id="area" placeholder="Например: 50" min="1" max="9999">
    </div>

    <div class="field">
      <label for="type">Вид ремонта</label>
      <select id="type">
        <option value="cosmetic">Косметический — 3 000 ₽/м²</option>
        <option value="capital">Капитальный — 6 000 ₽/м²</option>
        <option value="turnkey">Под ключ — 10 000 ₽/м²</option>
      </select>
    </div>

    <div class="result-box">
      <div class="result-label">Примерная стоимость</div>
      <div class="result-price" id="result">—</div>
    </div>

    <div class="price-table">
      <h3>Прайс-лист</h3>
      <div class="price-row"><span>Косметический</span><span>от 3 000 ₽/м²</span></div>
      <div class="price-row"><span>Капитальный</span><span>от 6 000 ₽/м²</span></div>
      <div class="price-row"><span>Под ключ</span><span>от 10 000 ₽/м²</span></div>
    </div>
  </div>

  <footer>
    Демо-проект · <a href="../index.html">← Портфолио</a>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser**

Открыть `calculator/index.html`. Ожидаемо: белая карточка по центру, поля ввода, тёмный блок результата с «—». Изменение полей пока не считает.

---

### Task 5: Calculator — JavaScript

**Files:**
- Create: `c:\Users\Serega\projects\portfolio\calculator\script.js`

- [ ] **Step 1: Create calculator/script.js**

```js
const PRICES = {
  cosmetic: 3000,
  capital:  6000,
  turnkey:  10000
};

function formatPrice(n) {
  return n.toLocaleString('ru-RU') + ' ₽';
}

function calculate() {
  const area = parseFloat(document.getElementById('area').value);
  const type = document.getElementById('type').value;

  if (!area || area <= 0) {
    document.getElementById('result').textContent = '—';
    return;
  }

  const total = area * PRICES[type];
  document.getElementById('result').textContent = formatPrice(total);
}

document.getElementById('area').addEventListener('input', calculate);
document.getElementById('type').addEventListener('change', calculate);
```

- [ ] **Step 2: Test in browser**

Открыть `calculator/index.html`.
- Ввести `50`, выбрать «Под ключ» → результат: `500 000 ₽`
- Ввести `30`, выбрать «Косметический» → результат: `90 000 ₽`
- Очистить поле → результат: `—`

- [ ] **Step 3: Commit**

```bash
git add calculator/
git commit -m "feat: add repair cost calculator"
```

---

### Task 6: Cards with hover effects

**Files:**
- Create: `c:\Users\Serega\projects\portfolio\cards\index.html`
- Create: `c:\Users\Serega\projects\portfolio\cards\style.css`

- [ ] **Step 1: Create cards/index.html**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Услуги — карточки с hover</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <h1>Виды строительных работ</h1>
    <p>Наведите на карточку</p>
  </header>

  <main>
    <div class="cards-grid">
      <div class="card">
        <div class="card-icon">🪣</div>
        <h3>Штукатурка</h3>
        <p>Выравнивание стен и потолков. Гипсовые и цементные смеси.</p>
      </div>
      <div class="card">
        <div class="card-icon">🎨</div>
        <h3>Покраска</h3>
        <p>Водоэмульсионные и акриловые краски. Любые цвета по RAL.</p>
      </div>
      <div class="card">
        <div class="card-icon">🔲</div>
        <h3>Укладка плитки</h3>
        <p>Настенная и напольная плитка. Керамика, керамогранит, мозаика.</p>
      </div>
      <div class="card">
        <div class="card-icon">📐</div>
        <h3>Гипсокартон</h3>
        <p>Перегородки, потолки, ниши. Монтаж каркаса и обшивка.</p>
      </div>
      <div class="card">
        <div class="card-icon">⚡</div>
        <h3>Электрика</h3>
        <p>Разводка кабеля, установка розеток, щитки. Допуск СРО.</p>
      </div>
      <div class="card">
        <div class="card-icon">🔧</div>
        <h3>Сантехника</h3>
        <p>Монтаж труб, установка сантехники, подключение оборудования.</p>
      </div>
    </div>
  </main>

  <footer>
    Демо-проект · <a href="../index.html">← Портфолио</a>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Create cards/style.css**

```css
:root {
  --dark: #1a2332;
  --orange: #f0a500;
  --gray: #f5f7fa;
  --card-bg: #ffffff;
  --card-hover-bg: #fff8ec;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: var(--gray);
  min-height: 100vh;
  padding: 3rem 2rem;
  color: #333;
}

header {
  text-align: center;
  margin-bottom: 3rem;
}

header h1 {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  color: var(--dark);
  margin-bottom: 0.5rem;
}

header p { color: #888; font-size: 1rem; }

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 960px;
  margin: 0 auto;
}

.card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  cursor: default;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.14);
  background: var(--card-hover-bg);
}

.card-icon {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  display: block;
  transition: transform 0.3s ease;
}

.card:hover .card-icon { transform: scale(1.15); }

.card h3 {
  font-size: 1.15rem;
  color: var(--dark);
  margin-bottom: 0.6rem;
  transition: color 0.3s;
}

.card:hover h3 { color: var(--orange); }

.card p { font-size: 0.9rem; color: #666; line-height: 1.6; }

footer {
  text-align: center;
  margin-top: 3rem;
  color: #aaa;
  font-size: 0.85rem;
}

footer a { color: var(--orange); text-decoration: none; }

@media (max-width: 700px) {
  .cards-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .cards-grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Test hover in browser**

Открыть `cards/index.html`. Навести мышь на карточку.
Ожидаемо: карточка поднимается на 8px, тень глубже, фон светло-жёлтый (`#fff8ec`), иконка увеличивается на 15%, заголовок становится оранжевым. Анимация плавная 0.3s.

- [ ] **Step 4: Commit**

```bash
git add cards/
git commit -m "feat: add service cards with hover effects"
```

---

### Task 7: Vitrine (root index.html)

**Files:**
- Create: `c:\Users\Serega\projects\portfolio\index.html`

- [ ] **Step 1: Create index.html**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Портфолио — Сергей</title>
  <style>
    :root {
      --dark: #1a2332;
      --orange: #f0a500;
      --gray: #f5f7fa;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Inter', system-ui, sans-serif;
      background: var(--gray);
      min-height: 100vh;
      padding: 3rem 2rem;
      color: #333;
    }

    header {
      text-align: center;
      margin-bottom: 3.5rem;
    }

    header h1 {
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      color: var(--dark);
      font-weight: 800;
      margin-bottom: 0.75rem;
    }

    header p {
      color: #666;
      font-size: 1.05rem;
      max-width: 480px;
      margin: 0 auto 1.5rem;
    }

    .links {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .link-btn {
      padding: 0.55rem 1.25rem;
      border-radius: 20px;
      font-size: 0.9rem;
      text-decoration: none;
      font-weight: 600;
      transition: opacity 0.2s;
    }

    .link-btn:hover { opacity: 0.8; }
    .link-github { background: var(--dark); color: white; }
    .link-kwork  { background: var(--orange); color: var(--dark); }

    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .project-card {
      background: white;
      border-radius: 14px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      text-decoration: none;
      color: inherit;
      transition: transform 0.25s, box-shadow 0.25s;
      display: flex;
      flex-direction: column;
    }

    .project-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 36px rgba(0,0,0,0.13);
    }

    .project-preview {
      background: var(--dark);
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3.5rem;
    }

    .project-body {
      padding: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .project-tag {
      display: inline-block;
      background: #f0f0f0;
      color: #555;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 0.25rem 0.6rem;
      border-radius: 4px;
      margin-bottom: 0.75rem;
    }

    .project-body h3 {
      font-size: 1.15rem;
      color: var(--dark);
      margin-bottom: 0.5rem;
    }

    .project-body p {
      color: #666;
      font-size: 0.9rem;
      line-height: 1.6;
      flex: 1;
    }

    .project-link {
      margin-top: 1.25rem;
      color: var(--orange);
      font-size: 0.9rem;
      font-weight: 600;
    }

    footer {
      text-align: center;
      margin-top: 3rem;
      color: #aaa;
      font-size: 0.85rem;
    }
  </style>
</head>
<body>

  <header>
    <h1>Портфолио веб-разработчика</h1>
    <p>HTML, CSS, JavaScript — вёрстка и фронтенд. Быстро, чисто, адаптивно.</p>
    <div class="links">
      <a class="link-btn link-github" href="https://github.com/seregakuhar-commits" target="_blank">GitHub</a>
      <a class="link-btn link-kwork" href="#" title="Скоро">Kwork (скоро)</a>
    </div>
  </header>

  <div class="projects">

    <a class="project-card" href="landing/index.html">
      <div class="project-preview">🏗️</div>
      <div class="project-body">
        <span class="project-tag">HTML + CSS</span>
        <h3>Лендинг строительной компании</h3>
        <p>Многосекционный лендинг с навигацией, услугами, галереей портфолио и формой контакта.</p>
        <div class="project-link">Открыть демо →</div>
      </div>
    </a>

    <a class="project-card" href="calculator/index.html">
      <div class="project-preview">🧮</div>
      <div class="project-body">
        <span class="project-tag">HTML + JS</span>
        <h3>Калькулятор стоимости ремонта</h3>
        <p>Интерактивный калькулятор с расчётом в реальном времени. Выбор типа ремонта, ввод площади.</p>
        <div class="project-link">Открыть демо →</div>
      </div>
    </a>

    <a class="project-card" href="cards/index.html">
      <div class="project-preview">✨</div>
      <div class="project-body">
        <span class="project-tag">HTML + CSS</span>
        <h3>Карточки услуг с hover-эффектами</h3>
        <p>CSS-анимации: поднятие карточки, смена фона, трансформация иконки. Без JS.</p>
        <div class="project-link">Открыть демо →</div>
      </div>
    </a>

  </div>

  <footer>
    <p>Сергей · Веб-разработчик</p>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Test all links**

Открыть `index.html`. Кликнуть каждую карточку — все три демо открываются.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add vitrine index page"
```

---

### Task 8: Deploy to GitHub Pages

- [ ] **Step 1: Create GitHub repo**

Зайти на [github.com](https://github.com/new) → Name: `portfolio` → Public → Create repository (без README).

- [ ] **Step 2: Push code**

```bash
cd "c:\Users\Serega\projects\portfolio"
git remote add origin https://github.com/seregakuhar-commits/portfolio.git
git branch -M main
git push -u origin main
```

- [ ] **Step 3: Enable GitHub Pages**

GitHub → репозиторий `portfolio` → Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `/ (root)` → Save.

- [ ] **Step 4: Verify deployment**

Подождать ~1 минуту, открыть `https://seregakuhar-commits.github.io/portfolio`.
Ожидаемо: витрина с тремя проектами, все ссылки работают.
