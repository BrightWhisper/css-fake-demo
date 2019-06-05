document.querySelector('#keyword').addEventListener('input', (e) => {
    let value = keyword.value;
    if (value) {
        suggestion.classList.add('active');
    } else {
        suggestion.classList.remove('active');
    }
})