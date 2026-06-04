# Beauty Salon Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Создать лендинг для полного салона красоты (стрижки, окрашивание, уход) в стиле чёрный + золото с анимацией появления секций при скролле.

**Architecture:** Один статический HTML-файл с инлайн-стилями (`<style>`) и инлайн-скриптом (`<script>`). Никаких сборщиков, фреймворков или зависимостей — открывается напрямую в браузере двойным кликом.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), Vanilla JS (IntersectionObserver API)

---

## Файловая структура

```
portfolio/
└── beauty-salon/
    └── index.html    ← единственный файл: весь HTML, CSS, JS внутри
```

---

### Task 1: Создать файл с базовой структурой и CSS-переменными

**Files:**
- Create: `beauty-salon/index.html`

- [ ] **Step 1: Создать папку и файл**

В терминале из папки `c:\Users\Serega\projects\portfolio`:
```powershell
mkdir beauty-salon
```

- [ ] **Step 2: Записать базовую HTML-структуру с CSS-переменными**

Создать файл `beauty-salon/index.html` с таким содержимым:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Studio Noir — Салон красоты</title>
  <style>
    :root {
      --bg: #1a1a1a;
      --bg-alt: #111111;
      --card: #2a2a2a;
      --gold: #c9a96e;
      --gold-dark: #a8823e;
      --white: #ffffff;
      --gray: #888888;
      --border: #333333;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: var(--bg);
      color: var(--white);
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 1rem;
      line-height: 1.6;
    }

    h1, h2, h3 {
      font-family: Georgia, 'Times New Roman', serif;
      font-weight: 400;
      line-height: 1.2;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      display: block;
      width: 100%;
    }

    /* Контейнер */
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    /* Золотая метка-лейбл */
    .label {
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: var(--gold);
      margin-bottom: 0.75rem;
    }
  </style>
</head>
<body>

  <!-- Секции будут добавляться сюда -->

  <script>
    // JS будет добавлен в Task 6
  </script>
</body>
</html>
```

- [ ] **Step 3: Проверить в браузере**

Открыть `beauty-salon/index.html` двойным кликом. Должна открыться пустая чёрная страница без ошибок в консоли (F12 → Console).

- [ ] **Step 4: Сделать коммит**

```powershell
git add beauty-salon/index.html
git commit -m "feat: add beauty salon landing skeleton"
```

---

### Task 2: Hero-секция

**Files:**
- Modify: `beauty-salon/index.html`

- [ ] **Step 1: Добавить CSS для Hero**

Внутри тега `<style>`, после `.label { ... }`, добавить:

```css
    /* ─── HERO ─── */
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 3rem 1.5rem;
      border-bottom: 1px solid var(--border);
    }

    .hero-logo {
      font-family: Georgia, serif;
      font-size: 0.75rem;
      font-weight: 400;
      letter-spacing: 6px;
      text-transform: uppercase;
      color: var(--gold);
      margin-bottom: 2.5rem;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 6vw, 5rem);
      color: var(--white);
      margin-bottom: 1rem;
    }

    .hero-sub {
      font-size: 0.9rem;
      color: var(--gray);
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 3rem;
    }

    .btn-gold {
      display: inline-block;
      background: var(--gold);
      color: var(--bg);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 0.9rem 2.5rem;
      border-radius: 2px;
      transition: background 0.2s;
    }

    .btn-gold:hover {
      background: var(--gold-dark);
    }
```

- [ ] **Step 2: Добавить HTML для Hero**

Внутри `<body>`, вместо `<!-- Секции будут добавляться сюда -->`:

```html
  <!-- HERO -->
  <section class="hero">
    <p class="hero-logo">Studio Noir</p>
    <h1>Искусство<br>красоты</h1>
    <p class="hero-sub">Профессиональный уход &middot; Москва</p>
    <a class="btn-gold" href="https://t.me/">Записаться</a>
  </section>
```

- [ ] **Step 3: Проверить в браузере**

Перезагрузить страницу. Должна быть чёрная страница с золотым текстом "Studio Noir" сверху, крупным заголовком "Искусство красоты" и золотой кнопкой. Проверить что кнопка меняет цвет при наведении мыши.

- [ ] **Step 4: Сделать коммит**

```powershell
git add beauty-salon/index.html
git commit -m "feat: add hero section"
```

---

### Task 3: Секция "О салоне + Услуги"

**Files:**
- Modify: `beauty-salon/index.html`

- [ ] **Step 1: Добавить CSS для секции**

В `<style>`, после стилей Hero:

```css
    /* ─── О САЛОНЕ + УСЛУГИ ─── */
    .about-services {
      padding: 6rem 0;
      border-bottom: 1px solid var(--border);
    }

    .about-services .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .about h2 {
      font-size: 2rem;
      color: var(--white);
      margin-bottom: 1.25rem;
    }

    .about p {
      color: var(--gray);
      font-size: 0.95rem;
      line-height: 1.8;
    }

    .services h2 {
      font-size: 2rem;
      color: var(--white);
      margin-bottom: 1.5rem;
    }

    .service-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      border-bottom: 1px solid var(--border);
    }

    .service-item:last-child {
      border-bottom: none;
    }

    .service-name {
      font-size: 0.95rem;
      color: var(--white);
    }

    .service-price {
      font-size: 0.85rem;
      color: var(--gold);
      font-weight: 600;
      white-space: nowrap;
      margin-left: 1rem;
    }

    @media (max-width: 700px) {
      .about-services .container {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }
```

- [ ] **Step 2: Добавить HTML после секции Hero**

После закрывающего тега `</section>` Hero:

```html
  <!-- О САЛОНЕ + УСЛУГИ -->
  <section class="about-services">
    <div class="container">

      <div class="about">
        <p class="label">О нас</p>
        <h2>Красота — наша профессия</h2>
        <p>Studio Noir — это место, где каждая деталь продумана. Работаем с профессиональной косметикой, следим за трендами и создаём образы, которые подчёркивают вашу индивидуальность. Принимаем по записи — никакой спешки.</p>
      </div>

      <div class="services">
        <p class="label">Услуги и цены</p>
        <h2>Что мы делаем</h2>
        <div class="service-item">
          <span class="service-name">Стрижка</span>
          <span class="service-price">от 2 000 ₽</span>
        </div>
        <div class="service-item">
          <span class="service-name">Окрашивание</span>
          <span class="service-price">от 4 500 ₽</span>
        </div>
        <div class="service-item">
          <span class="service-name">Укладка</span>
          <span class="service-price">от 1 500 ₽</span>
        </div>
        <div class="service-item">
          <span class="service-name">Уход за волосами</span>
          <span class="service-price">от 2 500 ₽</span>
        </div>
      </div>

    </div>
  </section>
```

- [ ] **Step 3: Проверить в браузере**

Прокрутить вниз после Hero. Должны быть два блока рядом: слева текст "О нас", справа список услуг с ценами. На узком окне (уменьши окно браузера до ~600px) блоки должны встать в колонку.

- [ ] **Step 4: Сделать коммит**

```powershell
git add beauty-salon/index.html
git commit -m "feat: add about and services section"
```

---

### Task 4: Галерея работ

**Files:**
- Modify: `beauty-salon/index.html`

- [ ] **Step 1: Добавить CSS для галереи**

В `<style>`, после стилей о салоне:

```css
    /* ─── ГАЛЕРЕЯ ─── */
    .gallery {
      padding: 6rem 0;
      border-bottom: 1px solid var(--border);
    }

    .gallery-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .gallery-header h2 {
      font-size: 2rem;
      color: var(--white);
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
    }

    .gallery-item {
      aspect-ratio: 4 / 3;
      background: var(--card);
      border-radius: 3px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
    }

    .gallery-item::after {
      content: '';
      position: absolute;
      inset: 0;
      border: 2px solid transparent;
      border-radius: 3px;
      transition: border-color 0.2s;
    }

    .gallery-item:hover::after {
      border-color: var(--gold);
    }

    .gallery-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--border);
      font-size: 0.7rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    @media (max-width: 600px) {
      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
```

- [ ] **Step 2: Добавить HTML после секции "О салоне + Услуги"**

```html
  <!-- ГАЛЕРЕЯ -->
  <section class="gallery">
    <div class="container">
      <div class="gallery-header">
        <p class="label">Портфолио</p>
        <h2>Наши работы</h2>
      </div>
      <div class="gallery-grid">
        <div class="gallery-item"><div class="gallery-placeholder">Фото 1</div></div>
        <div class="gallery-item"><div class="gallery-placeholder">Фото 2</div></div>
        <div class="gallery-item"><div class="gallery-placeholder">Фото 3</div></div>
        <div class="gallery-item"><div class="gallery-placeholder">Фото 4</div></div>
        <div class="gallery-item"><div class="gallery-placeholder">Фото 5</div></div>
        <div class="gallery-item"><div class="gallery-placeholder">Фото 6</div></div>
      </div>
    </div>
  </section>
```

- [ ] **Step 3: Проверить в браузере**

Прокрутить до галереи. Должна быть сетка 3×2 из тёмных прямоугольников с текстом "Фото N". При наведении мыши на карточку появляется золотая рамка.

- [ ] **Step 4: Сделать коммит**

```powershell
git add beauty-salon/index.html
git commit -m "feat: add gallery section"
```

---

### Task 5: Telegram CTA и футер

**Files:**
- Modify: `beauty-salon/index.html`

- [ ] **Step 1: Добавить CSS**

В `<style>`, после стилей галереи:

```css
    /* ─── TELEGRAM CTA ─── */
    .cta {
      background: var(--bg-alt);
      padding: 6rem 0;
      text-align: center;
    }

    .cta h2 {
      font-size: 2.5rem;
      color: var(--white);
      margin-bottom: 0.75rem;
    }

    .cta p {
      color: var(--gray);
      font-size: 0.9rem;
      margin-bottom: 2.5rem;
    }

    .btn-tg {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background: var(--gold);
      color: var(--bg);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 1rem 2.5rem;
      border-radius: 2px;
      transition: background 0.2s;
    }

    .btn-tg:hover {
      background: var(--gold-dark);
    }

    .btn-tg svg {
      width: 18px;
      height: 18px;
      fill: var(--bg);
    }

    /* ─── ФУТЕР ─── */
    .footer {
      padding: 1.5rem;
      text-align: center;
      color: var(--border);
      font-size: 0.75rem;
      border-top: 1px solid var(--border);
    }
```

- [ ] **Step 2: Добавить HTML после галереи**

```html
  <!-- TELEGRAM CTA -->
  <section class="cta">
    <div class="container">
      <p class="label">Запись</p>
      <h2>Запишитесь прямо сейчас</h2>
      <p>Отвечаем в течение 15 минут</p>
      <a class="btn-tg" href="https://t.me/" target="_blank">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
        </svg>
        Написать в Telegram
      </a>
    </div>
  </section>

  <!-- ФУТЕР -->
  <footer class="footer">
    © 2025 Studio Noir. Все права защищены.
  </footer>
```

- [ ] **Step 3: Проверить в браузере**

Прокрутить в самый низ. Должна быть тёмная секция с кнопкой "Написать в Telegram" (с иконкой) и футер. Кнопка меняет цвет при наведении.

- [ ] **Step 4: Сделать коммит**

```powershell
git add beauty-salon/index.html
git commit -m "feat: add telegram cta and footer"
```

---

### Task 6: JS-анимация появления при скролле

**Files:**
- Modify: `beauty-salon/index.html`

- [ ] **Step 1: Добавить CSS для анимируемых элементов**

В `<style>`, в самый конец перед закрывающим `</style>`:

```css
    /* ─── АНИМАЦИЯ ПОЯВЛЕНИЯ ─── */
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
```

- [ ] **Step 2: Добавить класс `reveal` к секциям**

Открыть файл и добавить класс `reveal` к трём секциям (не к Hero — он виден сразу):

Найти строку:
```html
  <section class="about-services">
```
Заменить на:
```html
  <section class="about-services reveal">
```

Найти строку:
```html
  <section class="gallery">
```
Заменить на:
```html
  <section class="gallery reveal">
```

Найти строку:
```html
  <section class="cta">
```
Заменить на:
```html
  <section class="cta reveal">
```

- [ ] **Step 3: Написать JS**

Найти в файле тег `<script>` и заменить его содержимое:

```html
  <script>
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  </script>
```

- [ ] **Step 4: Проверить в браузере**

Обновить страницу. При первой загрузке Hero виден сразу. При прокрутке вниз каждая следующая секция плавно появляется (fade in + сдвиг снизу). Секции выше Hero не мигают.

Открыть DevTools (F12) → Console. Ошибок быть не должно.

- [ ] **Step 5: Сделать коммит**

```powershell
git add beauty-salon/index.html
git commit -m "feat: add scroll reveal animation with IntersectionObserver"
```

---

### Task 7: Финальная проверка и пуш

**Files:**
- No changes

- [ ] **Step 1: Проверить на мобильном размере**

В браузере нажать F12 → иконка телефона (Toggle device toolbar) → выбрать ширину 375px (iPhone).

Проверить:
- Hero отображается корректно, текст не обрезан
- Блоки "О салоне" и "Услуги" стоят в колонку
- Галерея отображается в 2 колонки
- Кнопки не вылезают за края

- [ ] **Step 2: Проверить чеклист из спека**

```
[ ] Страница открывается из файла без ошибок в консоли
[ ] Все 4 секции отображаются корректно
[ ] Анимация появления работает при скролле
[ ] Страница нормально выглядит на мобильном (320px+)
[ ] Кнопка Telegram кликабельна
```

- [ ] **Step 3: Запушить на GitHub**

```powershell
git push origin main
```

После пуша лендинг будет доступен по адресу:
`https://seregakuhar-commits.github.io/portfolio/beauty-salon/`
