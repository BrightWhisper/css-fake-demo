fButton.addEventListener('click', e => {
    document.querySelector('.circle').classList.add('active')
})
document.querySelector('.circle').addEventListener('transitionend', e => {
    document.querySelector('.circle').classList.remove('active')
})