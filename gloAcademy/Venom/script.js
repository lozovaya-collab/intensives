const burgerBtnOpen = document.querySelector('.header_burger__icon')
const burgerBtnClose = document.querySelector('.burger__close')
const burger = document.querySelector('.burger')

let isOpen = false

const openBurger = () => {
    if (!isOpen) {
        burger.style.right = '0'
        burger.style.display = 'block'
        isOpen = true
    }
}
const closeBurger = () => {
    if (isOpen) {
        burger.style.right = '-100%'
        burger.style.display = 'none'
        isOpen = false
    }
}


burgerBtnOpen.addEventListener('click', openBurger)
burgerBtnClose.addEventListener('click', closeBurger)
