(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-prod-open-icecoffee]'),
    closeModalBtn: document.querySelector('[data-prod-close]'),
    modal: document.querySelector('[data-prod-icecoffee]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
