// 検索機能
const artistNames = document.querySelectorAll('ul li p');
const namesArray = [];
const mask = document.querySelector('.mask');
const maskUl = document.querySelector('.mask ul');

artistNames.forEach((name) => {
  namesArray.push(name.textContent.toLowerCase());
});

const searchInput = document.querySelector('#search-input');
searchInput.addEventListener('input', (e) => {
  const inputText = e.target.value.trim().toLowerCase();

  if (inputText.length === 0) {
    mask.classList.remove('mask-show');
    maskUl.innerHTML = '';
    return;
  }

  mask.classList.add('mask-show');
  findArtist(inputText);
});

function findArtist(inputText) {
  const results = namesArray.filter((data) => data.includes(inputText));
  console.log(results);

  const matchingLiElements = Array.from(document.querySelectorAll('ul li')).filter((li) => results.includes(li.querySelector('p').textContent.toLowerCase()));

  maskUl.innerHTML = '';

  const displayedElements = new Set();

  matchingLiElements.forEach((li) => {
    const textContent = li.querySelector('p').textContent.toLowerCase();
    if (!displayedElements.has(textContent)) {
      maskUl.appendChild(li.cloneNode(true));
      displayedElements.add(textContent);
    }
  });
}

// 「すべて表示」機能
const button = document.querySelector('button')
const allListElements = document.querySelectorAll('ul li')
const allUlelements = document.querySelectorAll('ul')
button.addEventListener('click', () => {
  button.classList.toggle('on-click')
  allListElements.forEach((list) => {
    list.classList.toggle('is-show')
  })
  allUlelements.forEach((ul) => {
    ul.classList.toggle('is-show')
  })
})