const inputEL = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

const handleTextChange = (e) =>{
    textEl.style.fontSize = e.target.value + "px"
    
}


inputEL.addEventListener('input', handleTextChange)