(() => {
  const refs = {
    openModalBtnF: document.querySelector('[data-modal-open-first]'),
    openModalBtnS: document.querySelector('[data-modal-open-second]'),
    openModalBtnT: document.querySelector('[data-modal-open-third]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtnF.addEventListener('click', toggleModal);
  refs.openModalBtnS.addEventListener('click', toggleModal);
  refs.openModalBtnT.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
