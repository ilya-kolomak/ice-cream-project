(() => {
  const menuBtnRef = document.querySelectorAll("[data-menu-button]");
  const mainButtonRef = menuBtnRef[0]
  const mobileMenuRef = document.querySelector("[data-menu]");
  const lockBody = document.querySelector('body');

  menuBtnRef.forEach((el) => el.addEventListener("click", () => {
    const expanded = mainButtonRef.getAttribute("aria-expanded") === "true" || false;

    mainButtonRef.classList.toggle("is-open");
    mainButtonRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    lockBody.classList.toggle('lock');
  }));
})();