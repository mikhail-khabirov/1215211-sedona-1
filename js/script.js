const pageHeaderButton = document.querySelector('.page-header-button');
const hotelSearchButton = document.querySelector('.hotel-search-button');
const modalCloseButton = document.querySelector('.modal-close');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const buttonPlusAdult = document.getElementById('plus-adults-button');
const buttonMinusAdult = document.getElementById('minus-adults-button');
const adultsInput = document.getElementById('adults-input');

const buttonPlusKids = document.getElementById('plus-kids-button');
const buttonMinusKids = document.getElementById('minus-kids-button');
const kidsInput = document.getElementById('kids-input');

const dragButtonMin = document.querySelector('.toggle-min');
const dragButtonMax = document.querySelector('.toggle-max');
const inputPriceFrom = document.getElementById('input-price-from');
const inputPriceTo = document.getElementById('input-price-to');
const range = document.querySelector('.range');
const rangeBar = document.querySelector('.range-bar');


// ПОКАЗАТЬ МОДАЛЬНОЕ ОКНО ПО КЛИКУ
pageHeaderButton.addEventListener('click', function () {
  modal.classList.add('modal-open');
})

// ПРОВЕРЯЕТ ЕСТЬ ЛИ ЭЛЕМЕНТ НА СТРАНИЦЕ. ЕСЛИ ЕСТЬ, ПОКАЗАТЬ МОДАЛЬНОЕ ОКНО ПО КЛИКУ.
if (hotelSearchButton) {
  hotelSearchButton.addEventListener('click', function () {
    modal.classList.add('modal-open');
  })
}

// УБРАТЬ МОДАЛЬНОЕ ОКНО ПО КЛИКУ НА КНОПКУ
modalCloseButton.addEventListener('click', function () {
  modal.classList.remove('modal-open');
})

// УБРАТЬ МОДАЛЬНОЕ ОКНО ПО КЛИКУ ВНЕ ОБЛАСТИ МОДАЛЬНОГО ОКНА
overlay.addEventListener('click', function (e) {
  if (e.target === overlay) {
    modal.classList.remove('modal-open');
  }
})

// УБРАТЬ МОДАЛЬНОЕ ОКНО ПО НАЖАТИЮ
document.addEventListener('keydown', function (e) {
  if (e.code === "Escape") {
    modal.classList.remove('modal-open');
  }
})

// УВЕЛИЧИТЬ ИЛИ УМЕНЬШИТЬ КОЛИЧЕСТВО ВЗРОСЛЫХ В МОДАЛЬНОМ ОКНЕ ПО НАЖАТИЮ + И -
buttonPlusAdult.addEventListener('click', function () {
  adultsInput.value = +adultsInput.value + 1;
})

buttonMinusAdult.addEventListener('click', function () {
  adultsInput.value = +adultsInput.value - 1;
  if (adultsInput.value < 0) {
    adultsInput.value = 0;
  }
})

// УВЕЛИЧИТЬ ИЛИ УМЕНЬШИТЬ КОЛИЧЕСТВО ДЕТЕЙ В МОДАЛЬНОМ ОКНЕ ПО НАЖАТИЮ + И -
buttonPlusKids.addEventListener('click', function () {
  kidsInput.value = +kidsInput.value + 1;
})

buttonMinusKids.addEventListener('click', function () {
  kidsInput.value = +kidsInput.value - 1;
  if (kidsInput.value < 0) {
    kidsInput.value = 0;
  }
})


// ОЖИВЛЯЕТ СЛАЙДЕР НА СТРАНИЦЕ КАТАЛОГА
dragButtonMin.onmousedown = function (e) {
  e.preventDefault();
  let shiftX = e.clientX - dragButtonMin.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(e) {
    let newLeft = e.clientX - shiftX - range.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = range.offsetWidth - dragButtonMin.offsetWidth;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    dragButtonMin.style.left = newLeft + 'px';
    inputPriceFrom.value = newLeft * 200;
    rangeBar.style.width = newLeft + 'px';

  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);

  }
}

dragButtonMin.ondragstart = function () {
  return false;
}

dragButtonMax.onmousedown = function (e) {
  e.preventDefault();
  let shiftX = e.clientX - dragButtonMax.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(e) {
    let newLeft = e.clientX - shiftX - range.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = range.offsetWidth - dragButtonMax.offsetWidth;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    dragButtonMax.style.left = newLeft + 'px';
    inputPriceTo.value = newLeft * 200;
    rangeBar.style.width = newLeft + 'px';

  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);

  }
}

dragButtonMax.ondragstart = function () {
  return false;
}
