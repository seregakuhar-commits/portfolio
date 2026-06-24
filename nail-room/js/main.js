/* =========================================================
   Nail Room — прогрессивное улучшение
   Принцип: сайт полностью работает без JS. Скрипт только
   улучшает поведение там, где браузер это поддерживает.
   ========================================================= */
(function () {
  "use strict";

  // Помечаем документ как "с JS" — это включает интерактивные стили
  // (скрытые ответы FAQ, начальное состояние reveal-блоков).
  var root = document.documentElement;
  root.classList.add("js");

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------- 1. Мобильное меню ---------- */
  var navToggle = document.querySelector(".nav-toggle");
  var primaryNav = document.getElementById("primary-nav");

  if (navToggle && primaryNav) {
    var mqMobile = window.matchMedia("(max-width: 759px)");

    // Синхронизация доступности меню для клавиатуры и скринридеров.
    // На мобильной ширине закрытое меню убираем из таб-порядка (inert)
    // и скрываем от вспомогательных технологий (aria-hidden).
    // На desktop меню доступно всегда, поэтому атрибуты снимаем.
    var syncNavA11y = function () {
      var open = navToggle.getAttribute("aria-expanded") === "true";
      if (mqMobile.matches && !open) {
        primaryNav.setAttribute("inert", "");
        primaryNav.setAttribute("aria-hidden", "true");
      } else {
        primaryNav.removeAttribute("inert");
        primaryNav.removeAttribute("aria-hidden");
      }
    };

    var setMenu = function (open) {
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
      primaryNav.classList.toggle("is-open", open);
      syncNavA11y();
    };

    // Начальное состояние (меню закрыто) и реакция на смену ширины экрана.
    syncNavA11y();
    if (mqMobile.addEventListener) {
      mqMobile.addEventListener("change", syncNavA11y);
    } else if (mqMobile.addListener) {
      mqMobile.addListener(syncNavA11y); // старые браузеры
    }

    navToggle.addEventListener("click", function () {
      var open = navToggle.getAttribute("aria-expanded") === "true";
      setMenu(!open);
    });

    // Закрываем меню после выбора пункта.
    primaryNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setMenu(false);
      }
    });

    // Закрываем меню по Escape и возвращаем фокус на кнопку.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        var wasOpen = navToggle.getAttribute("aria-expanded") === "true";
        setMenu(false);
        if (wasOpen) {
          navToggle.focus();
        }
      }
    });
  }

  /* ---------- 2. Плавная прокрутка к якорям ---------- */
  // Браузеры со scroll-behavior: smooth справляются сами, но мы аккуратно
  // обрабатываем переход и переносим фокус для доступности с клавиатуры.
  var anchorLinks = document.querySelectorAll('a[href^="#"]');

  Array.prototype.forEach.call(anchorLinks, function (link) {
    link.addEventListener("click", function (event) {
      var id = link.getAttribute("href");
      if (!id || id === "#") {
        return;
      }

      var target = document.querySelector(id);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
      });

      // Возвращаем фокус целевой секции, не теряя доступность.
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });

  /* ---------- 3. Аккордеон FAQ ---------- */
  var faqButtons = document.querySelectorAll(".faq__question");

  Array.prototype.forEach.call(faqButtons, function (button) {
    var answer = button.parentElement.nextElementSibling;
    if (!answer) {
      return;
    }

    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      answer.classList.toggle("is-open", !open);
    });
  });

  /* ---------- 4. Мягкое появление секций ---------- */
  // Только при поддержке IntersectionObserver и без reduced-motion.
  var revealItems = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    // Фолбэк: показываем всё сразу, ничего не анимируем.
    Array.prototype.forEach.call(revealItems, function (item) {
      item.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  Array.prototype.forEach.call(revealItems, function (item) {
    observer.observe(item);
  });
})();
