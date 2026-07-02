// Runs synchronously in <head>, before the page paints, so there's no
// flash of the wrong theme on load. Kept as a plain string (not a real
// module) because it has to be inlined into a <script> tag in the
// document head, ahead of any hydration.
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;
