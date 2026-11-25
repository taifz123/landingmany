(() => {
  const header = document.querySelector(".masthead");
  const toggle = header?.querySelector(".menu-toggle");
  const menu = header?.querySelector(".main-nav");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("open", open);
  };
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "false";
    setOpen(open);
    if (open) menu.querySelector("a").focus();
  });
  header.addEventListener("focusout", (event) => {
    if (!header.contains(event.relatedTarget)) setOpen(false);
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("open")) {
      setOpen(false);
      toggle.focus();
    }
  });
  window
    .matchMedia("(max-width: 640px)")
    .addEventListener("change", () => setOpen(false));
  window.addEventListener("pageshow", () => setOpen(false));
  document.documentElement.classList.add("js");
})();
