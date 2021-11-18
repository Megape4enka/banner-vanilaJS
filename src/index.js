import 'styles/index.scss'
import { tns } from "tiny-slider"

/* Slider */

let slider = tns({
    container: '.reviews-list',
    mouseDrag: true,
    items: 1,
    slideBy: 'page',
    autoplay: true,
    edgePadding: 20,
    speed: 800,
    swipeAngle: false,
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    autoplayButtonOutput: false,
    nav: false,
    controls: false,
    loop: true,
});

let item = document.querySelectorAll('.offer-list-item')
let checkbox = document.querySelector('.checkbox')
let body = document.querySelector('body')
let button = document.querySelector('.btn-continue')

/* Theme dark and light */

checkbox.onclick = function () {
    body.classList.toggle('dark')
}

/* Active item */

item.forEach(toggle => {

    toggle.addEventListener('click', () => {
        hideItems()
        handlerClickButton(toggle ? toggle : toggle.classList.contains('first'))

        toggle.classList.toggle('offer-active')
    })
})

function hideItems() {
    item.forEach(item => item.classList.remove('offer-active'))
}

/* Open link */

function handlerClickButton(link) {
    button.addEventListener('click', () => {
        if(link.classList.contains('first')) return window.open('https://www.google.com/search?q=1')
        if(link.classList.contains('second')) return window.open('https://www.google.com/search?q=2')
        if(link.classList.contains('third')) return window.open('https://www.google.com/search?q=3')
    })
}