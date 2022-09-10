const burgerActive = document.querySelector('.nav__button');
console.log(burgerActive);
const lockBody = document.querySelector('body');
console.log(lockBody);

burgerActive.addEventListener('click', e => {
  lockBody.classList.toggle('lock');
});
