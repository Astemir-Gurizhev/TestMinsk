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


const textType = document.querySelector('.top__select-type')
const selectListItem = document.querySelectorAll('.select__list-item')

selectListItem.forEach(item => {
    item.addEventListener('click', () => {
        textType.innerHTML = item.textContent
    })
})

// const formBtn = document.querySelector('.second__form-btn')
// formBtn.addEventListener('click', e => {
//     e.preventDefault()
// })

const inputFile = document.querySelector('.form__bottom-inputFile')
const fileText = document.querySelector('.bottom__file-text')

inputFile.addEventListener('input', () => {
    inputFile.value != '' ? fileText.innerHTML = inputFile.value : fileText.innerHTML = 'Прикрепить файл'
})


