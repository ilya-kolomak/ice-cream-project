(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-fran-open]"),
    closeModalBtn: document.querySelector("[data-modal-fran-close]"),
    modal: document.querySelector("[data-modal-fran]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();