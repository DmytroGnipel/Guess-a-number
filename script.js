
let compNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1
let input = document.querySelector('input')
let para = document.querySelector('p')

input.addEventListener('blur', () => {
    if (input.value > 100 || input.value < 1) para.textContent = 'Your number must be between from 1 to 100 (both including)'
    else {
    if (input.value < compNumber) para.textContent = 'Input greater number'
    else if (input.value > compNumber) para.textContent = 'Input lesser number'
    else if (input.value == compNumber) para.textContent = `Yes! You are champion! Computer have guessed number ${compNumber}`   
}
})