(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-prod-open-milk]'),
    closeModalBtn: document.querySelector('[data-prod-close]'),
    modal: document.querySelector('[data-prod-milk]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
