let counterValue = 0;
const decrementBtnEl = document.querySelector("[data-action='decrement']")
const currentValueEl = document.querySelector('#value')
const incrementBtnEl = document.querySelector("[data-action='increment']")

decrementBtnEl.addEventListener('click', function () {
     counterValue -=1

     currentValueEl.textContent = counterValue
})


incrementBtnEl.addEventListener('click', function () {
     counterValue +=1
     
     currentValueEl.textContent = counterValue
})
