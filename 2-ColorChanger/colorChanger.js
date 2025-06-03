const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        const color = buttons.id;
        body.style.backgroundColor = color;
        
    })
})
