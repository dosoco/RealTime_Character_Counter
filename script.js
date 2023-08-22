const textareaEl = document.getElementById('textarea')
const totalCharCounterEl = document.getElementById('total-counter')
const remainingCharCounterEl = document.getElementById('remaining-counter')

textareaEl.addEventListener('keyup', () => {
    updateCounter()
})
updateCounter()

function updateCounter() {
    totalCharCounterEl.innerText = textareaEl.value.length
    remainingCharCounterEl.innerText = textareaEl.getAttribute('maxLength') - textareaEl.value.length
}