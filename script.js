// The hero selection box reports its own size, like Figma's W × H label.
(function () {
  const sel = document.getElementById('sel');
  const out = document.getElementById('sel-size');
  if (!sel || !out) return;
  const update = () => {
    const r = sel.getBoundingClientRect();
    out.textContent = Math.round(r.width) + ' × ' + Math.round(r.height);
  };
  update();
  window.addEventListener('resize', update);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(update);
})();
