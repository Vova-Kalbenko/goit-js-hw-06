const InputEl = document.querySelector('.login-form')
const emailInputEl = document.querySelector('[name="email"]')
const passwordInputEl = document.querySelector('[name="password"]')


const handleSubmitButton = (e) =>{
    const userEmailAndPassword = {
        email: 'emailInputEl.value' ,
        password: 'passwordInputEl.value'
    }
    e.preventDefault()
    if(emailInputEl.value === '' || passwordInputEl.value === ''){
        window.alert(`all fields must be filled in.`)
        return
    }
    console.log(userEmailAndPassword)
}

InputEl.addEventListener('submit', handleSubmitButton)
