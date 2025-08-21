const url = 'https://www.thecolorapi.com';
const getSchemeBtn = document.querySelector('.btn');
const seedColorSelection = document.getElementById('seed-color');
const modeSelection = document.querySelector('.dropdown');

function getColorScheme(seed, mode) {
// return a generated scheme for the provided seed color and optional mode

  let endpoint = `/scheme?hex=${seed}&mode=${mode}&count=5`;

  fetch(url+endpoint)
  .then(response => response.json())
  .then(data => {
    let colors = data.colors
    console.log(colors);
    renderColors(colors);
  })
}

function renderColors(colors) {
  for (let i=0; i < colors.length; i++) {
    document.querySelector(`.box${i+1}`).style.backgroundColor = colors[i].hex.value;
    document.querySelector(`.hex${i+1}`).textContent = colors[i].hex.value;
  }
}

getSchemeBtn.addEventListener('click', function(event) {
  event.preventDefault();
  let mode = modeSelection.value;
  console.log(mode);
  let seedColor = seedColorSelection.value.slice(1);
  console.log(seedColor);

  getColorScheme(seedColor, mode);
})
