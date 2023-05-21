const InputEL = document.querySelector('#validation-input')

const handleInputChange = (e) => {
  if(e.target.value.length < InputEL.getAttribute('data-length')) {
    InputEL.classList.add("invalid")
    return
  }
   InputEL.classList.add("valid")
}


InputEL.addEventListener('blur', handleInputChange)