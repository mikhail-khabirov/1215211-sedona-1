const pageHeaderButton = document.querySelector('.page-header-button');
const hotelSearchButton = document.querySelector('.hotel-search-button');
const modalCloseButton = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');

// ПОКАЗАТЬ МОДАЛЬНОЕ ОКНО ПО КЛИКУ
pageHeaderButton.addEventListener('click', function () {
  modal.classList.add('modal-open');
});

// ПРОВЕРЯЕТ ЕСТЬ ЛИ ЭЛЕМЕНТ НА СТРАНИЦЕ. ЕСЛИ ЕСТЬ, ПОКАЗАТЬ МОДАЛЬНОЕ ОКНО ПО КЛИКУ.
if (hotelSearchButton) {
  hotelSearchButton.addEventListener('click', function () {
    modal.classList.add('modal-open');
  })
}

// УБРАТЬ МОДАЛЬНОЕ ОКНО ПО КЛИКУ
modalCloseButton.addEventListener('click', function () {
  modal.classList.remove('modal-open');
})


