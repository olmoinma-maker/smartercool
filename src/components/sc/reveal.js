// Scroll-reveal entrance animations
export function setupReveal() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const SELECTOR =
    ".section-head, .section-head > div, .section-head .sub, " +
    ".about-grid, .about-copy, .about-side, .about-img, .about-pills .pill, " +
    ".cats-grid > .cat, " +
    ".catalog-grid > .product-card, " +
    ".hvls-grid > *, .hvls-row, " +
    ".inst-grid > .inst-tile, .inst-meta > span, " +
    ".apps-stack-card, .apps-side-inner > *, " +
    ".adv-grid > .adv-card, " +
    ".faq-grid > *, .faq-item, " +
    ".cta-inner, .cta-inner > *, " +
    ".hero-tag, .hero h1, .hero-sub, .hero-ctas, .hero-card, .hero-metrics .m, " +
    ".footer-grid > *";

  let io = null;
  const seen = new WeakSet();

  function tag(el, i) {
    if (seen.has(el)) return;
    seen.add(el);
    el.classList.add("reveal");
    if (i % 6 === 0) el.classList.add("reveal-up");
    else if (i % 6 === 1) el.classList.add("reveal-fade");
    else if (i % 6 === 2) el.classList.add("reveal-left");
    else if (i % 6 === 3) el.classList.add("reveal-right");
    else if (i % 6 === 4) el.classList.add("reveal-scale");
    else el.classList.add("reveal-up");
    const parent = el.parentElement;
    if (parent) {
      const sib = Array.from(parent.children).indexOf(el);
      el.style.setProperty("--reveal-delay", `${Math.min(sib, 6) * 60}ms`);
    }
    io.observe(el);
  }

  function setup() {
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(SELECTOR).forEach((el) => el.classList.add("in-view"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("in-view");
              io.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
    }
    document.querySelectorAll(SELECTOR).forEach((el, i) => tag(el, i));
  }

  const run = () => requestAnimationFrame(setup);
  run();

  let tries = 0;
  const poll = setInterval(() => {
    setup();
    if (++tries > 20) clearInterval(poll);
  }, 400);

  const onResize = () => {
    clearTimeout(onResize._t);
    onResize._t = setTimeout(setup, 200);
  };
  window.addEventListener("resize", onResize);
}
