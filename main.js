let mySwiper = new Swiper ('.swiper', {
  centeredSlides: true,
  loop: true,
  slidesPerView: 1.8,
  autoHeight: true,
  autoplay: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  breakpoints: {
    769: {
      pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true,
      },
    }
  }
});

const select = document.querySelector('select')
select.addEventListener('click', () => {
  select.classList.add('changed')
})

let emailInput = document.getElementById('email')
let inputPlaceholder = document.getElementById('placeholder')


emailInput.addEventListener('input', () => {
  if (emailInput.value.length < 1) {
    inputPlaceholder.style.display = "block"
  } else {
    inputPlaceholder.style.display = "none"
  }
})