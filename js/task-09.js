function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const BtnColorEL = document.querySelector('.change-color')

const BtnColorValueEL = document.querySelector('.color')

const handleColorChange = (e) => {
  e.target.value = getRandomHexColor()

  BtnColorValueEL.textContent = e.target.value
  document.body.style.backgroundColor = e.target.value
}


BtnColorEL.addEventListener('click', handleColorChange)
