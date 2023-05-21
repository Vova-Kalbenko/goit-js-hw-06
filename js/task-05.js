const inputEL =  document.querySelector('#name-input')

const outputEL = document.querySelector('#name-output')

const handleInputChange = (e) => {
    if(e.target.value === ''){
        outputEL.textContent = 'Anonymous'
        return
    }
    outputEL.textContent = e.target.value
}

inputEL.addEventListener('input', handleInputChange)