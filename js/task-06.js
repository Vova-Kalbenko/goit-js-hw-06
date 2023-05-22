const inputEL = document.querySelector('#validation-input')

const handleInputChange = (e) => {
  if(e.target.value.length === Number(inputEL.getAttribute('data-length'))) {
    inputEL.classList.remove("invalid")
    inputEL.classList.add("valid")
    return
  }
    inputEL.classList.remove("valid")
    inputEL.classList.add("invalid")
}


inputEL.addEventListener('blur', handleInputChange)