const range = document.querySelector('.bottom__ranges-range')
const valueRange = document.querySelector('.ranges__text-right')
range.oninput = () => {
    valueRange.textContent = range.value + '%'
}

const select = document.querySelector('.form__top-select')
const selectList = document.querySelector('.top__select-list')
const selectWrapper = document.querySelector('.top__select-wrapper')
const selectImg = document.querySelector('.top__select-img')
select.addEventListener('click', e => {
    selectList.classList.toggle('active')
    selectWrapper.classList.toggle('active')
    selectImg.classList.toggle('active')
    select.classList.toggle('active')
})
