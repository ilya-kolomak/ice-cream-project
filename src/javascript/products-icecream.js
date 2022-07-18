(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-prod-open-icecream]'),
    closeModalBtn: document.querySelector('[data-prod-close]'),
    modal: document.querySelector('[data-prod-icecream]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
