const switchToggle = document.getElementById('switchToggle')
const nuts = document.getElementById('nuts')
const monthly = document.getElementsByClassName('#month')
const annually = document.getElementsByClassName('#annual')

const price = document.getElementsByName("price")


switchToggle.addEventListener('click', ()=>{
    nuts.classList.toggle("toggle")
    annually.classList.toggle("show-price")
    monthly.classList.toggle("hide-price")
    // price.classList.toggle("show-price")
})