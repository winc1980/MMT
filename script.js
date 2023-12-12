let mySwiper = new Swiper ('.swiper', {
  centeredSlides: true,
  loop: true,
  slidesPerView: 1.5,
  autoHeight: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

const select = document.querySelector('select')
select.addEventListener('click', () => {
  select.classList.add('changed')
})

let emailInput = document.getElementById('email')
let spanPlaceholder = emailInput.placeholder.slice(7)
