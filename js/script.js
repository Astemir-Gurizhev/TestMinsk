const range = document.querySelector('.bottom__ranges-range')
const valueRange = document.querySelector('.ranges__text-right')
range.oninput = () => {
    valueRange.textContent = range.value + '%'
}
