
const nav = document.querySelector(".nav_list")
const container = document.querySelector(".header_container")
const slider = document.querySelector(".slider")
const right = document.querySelector(".right")
const left = document.querySelector(".left")
const bars = document.querySelector(".bars")
const hamburger = document.querySelector(".hamburger")
const times = document.querySelector(".times")

hamburger.addEventListener('click', function () {
    nav.classList.toggle("active");
    bars.classList.toggle("active");
    container.classList.toggle("none");
    slider.classList.toggle("none");
    right.classList.toggle("none");
    left.classList.toggle("none");
    times.classList.toggle("active")
})

